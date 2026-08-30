const fs = require('fs');

const appContent = fs.readFileSync('src/App.tsx', 'utf8');
const appReplacement = `
import { doc, getDoc, setDoc, onSnapshot, collection, getDocs } from 'firebase/firestore';
import { db } from './lib/firebase';

` + appContent.replace(
  "export default function App() {",
  `export default function App() {
  const [isFirebaseLoading, setIsFirebaseLoading] = useState(true);

  useEffect(() => {
    // Sync Site Config
    const configRef = doc(db, 'settings', 'main');
    const unsubConfig = onSnapshot(configRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setSiteConfig(data as any);
        // also save to local storage as fallback
        saveSiteConfigToStorage(data as any);
      } else {
        // Init if doesn't exist
        setDoc(configRef, getStoredSiteConfig());
      }
      setIsFirebaseLoading(false);
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
  };
`
);

let finalApp = appReplacement.replace(
  `  const handleSaveSiteConfig = (newConfig: SiteConfig) => {
    setSiteConfig(newConfig);
    saveSiteConfigToStorage(newConfig);
  };`,
  `  // Overridden by above handleSaveSiteConfig`
);

// We need to override save post and delete post logic
finalApp = finalApp.replace(
  `  const handleSavePost = (post: BlogPost) => {
    let updatedPosts;
    const exists = posts.find(p => p.id === post.id);
    if (exists) {
      updatedPosts = posts.map(p => p.id === post.id ? post : p);
    } else {
      updatedPosts = [post, ...posts];
    }
    setPosts(updatedPosts);
    saveBlogPostsToStorage(updatedPosts);
  };`,
  `  const handleSavePost = (post: BlogPost) => {
    let updatedPosts;
    const exists = posts.find(p => p.id === post.id);
    if (exists) {
      updatedPosts = posts.map(p => p.id === post.id ? post : p);
    } else {
      updatedPosts = [post, ...posts];
    }
    setPosts(updatedPosts);
    saveBlogPostsToStorage(updatedPosts);
    syncPostsToFirebase(updatedPosts);
  };`
).replace(
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
).replace(
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
).replace(
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

// We should also replace the original handleSaveSiteConfig exactly
fs.writeFileSync('src/App.tsx', finalApp);
