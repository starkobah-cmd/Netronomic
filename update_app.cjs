const fs = require('fs');
const appContent = fs.readFileSync('src/App.tsx', 'utf8');

let finalApp = appContent.replace(
  "export default function App() {",
  `import { doc, setDoc, onSnapshot } from 'firebase/firestore';\nimport { db } from './lib/firebase';\n\nexport default function App() {`
);

finalApp = finalApp.replace(
  `  const handleSaveSiteConfig = (newConfig: SiteConfig) => {
    setSiteConfig(newConfig);
    saveSiteConfigToStorage(newConfig);
  };`,
  `  useEffect(() => {
    // Sync Site Config
    const configRef = doc(db, 'settings', 'main');
    const unsubConfig = onSnapshot(configRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setSiteConfig(data as any);
        saveSiteConfigToStorage(data as any);
      } else {
        setDoc(configRef, getStoredSiteConfig());
      }
    });

    // Sync Blog Posts
    const postsRef = doc(db, 'settings', 'posts');
    const unsubPosts = onSnapshot(postsRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data().posts || [];
        setPosts(data as any);
        saveBlogPostsToStorage(data as any);
      } else {
        setDoc(postsRef, { posts: getStoredBlogPosts() });
      }
    });

    return () => {
      unsubConfig();
      unsubPosts();
    };
  }, []);

  const handleSaveSiteConfig = async (newConfig: SiteConfig) => {
    setSiteConfig(newConfig);
    saveSiteConfigToStorage(newConfig);
    try {
      await setDoc(doc(db, 'settings', 'main'), newConfig);
    } catch (err) {
      console.error('Error saving config to Firebase', err);
    }
  };

  const syncPostsToFirebase = async (newPosts: any[]) => {
    try {
      await setDoc(doc(db, 'settings', 'posts'), { posts: newPosts });
    } catch (err) {
      console.error('Error saving posts to Firebase', err);
    }
  };`
);

finalApp = finalApp.replace(
  `  const handleSavePost = (updatedPost: BlogPost) => {
    const existingIndex = posts.findIndex(p => p.id === updatedPost.id);
    let newPosts: BlogPost[];
    if (existingIndex >= 0) {
      newPosts = [...posts];
      newPosts[existingIndex] = updatedPost;
    } else {
      newPosts = [updatedPost, ...posts];
    }
    setPosts(newPosts);
    saveBlogPostsToStorage(newPosts);
  };`,
  `  const handleSavePost = (updatedPost: BlogPost) => {
    const existingIndex = posts.findIndex(p => p.id === updatedPost.id);
    let newPosts: BlogPost[];
    if (existingIndex >= 0) {
      newPosts = [...posts];
      newPosts[existingIndex] = updatedPost;
    } else {
      newPosts = [updatedPost, ...posts];
    }
    setPosts(newPosts);
    saveBlogPostsToStorage(newPosts);
    syncPostsToFirebase(newPosts);
  };`
);

finalApp = finalApp.replace(
  `  const handleDeletePost = (id: string) => {
    const updated = posts.filter(p => p.id !== id);
    setPosts(updated);
    saveBlogPostsToStorage(updated);
  };`,
  `  const handleDeletePost = (id: string) => {
    const updated = posts.filter(p => p.id !== id);
    setPosts(updated);
    saveBlogPostsToStorage(updated);
    syncPostsToFirebase(updated);
  };`
);

finalApp = finalApp.replace(
  `  const handleToggleStatus = (id: string, status: PostStatus) => {
    const updated = posts.map(p => p.id === id ? { ...p, status } : p);
    setPosts(updated);
    saveBlogPostsToStorage(updated);
  };`,
  `  const handleToggleStatus = (id: string, status: PostStatus) => {
    const updated = posts.map(p => p.id === id ? { ...p, status } : p);
    setPosts(updated);
    saveBlogPostsToStorage(updated);
    syncPostsToFirebase(updated);
  };`
);

finalApp = finalApp.replace(
  `  const handleAddComment = (postId: string, comment: BlogComment) => {
    const updated = posts.map(p => {
      if (p.id === postId) {
        return { ...p, comments: [...(p.comments || []), comment] };
      }
      return p;
    });
    setPosts(updated);
    saveBlogPostsToStorage(updated);
  };`,
  `  const handleAddComment = (postId: string, comment: BlogComment) => {
    const updated = posts.map(p => {
      if (p.id === postId) {
        return { ...p, comments: [...(p.comments || []), comment] };
      }
      return p;
    });
    setPosts(updated);
    saveBlogPostsToStorage(updated);
    syncPostsToFirebase(updated);
  };`
);

finalApp = finalApp.replace(
  `  const handleResetSiteConfig = () => {
    setSiteConfig(DEFAULT_SITE_CONFIG);
    saveSiteConfigToStorage(DEFAULT_SITE_CONFIG);
  };`,
  `  const handleResetSiteConfig = async () => {
    setSiteConfig(DEFAULT_SITE_CONFIG);
    saveSiteConfigToStorage(DEFAULT_SITE_CONFIG);
    try {
      await setDoc(doc(db, 'settings', 'main'), DEFAULT_SITE_CONFIG);
    } catch (err) {
      console.error('Error resetting config to Firebase', err);
    }
  };`
);

fs.writeFileSync('src/App.tsx', finalApp);
console.log('Firebase synced cleanly');
