const fs = require('fs');

const appContent = fs.readFileSync('src/App.tsx', 'utf8');

let finalApp = appContent.replace(
  /import \{ doc, getDoc, setDoc, onSnapshot, collection, getDocs \} from 'firebase\/firestore';\nimport \{ db \} from '\.\/lib\/firebase';\n/,
  ''
);

finalApp = finalApp.replace(
  /  const \[isFirebaseLoading, setIsFirebaseLoading\] = useState\(true\);\n\n  useEffect\(\(\) => \{\n    \/\/ Sync Site Config[\s\S]*?    \};\n  \}, \[\]\);\n/,
  ''
);

finalApp = finalApp.replace(
  /  const handleSaveSiteConfig = async \(newConfig: SiteConfig\) => \{\n    setSiteConfig\(newConfig\);\n    saveSiteConfigToStorage\(newConfig\);\n    try \{\n      await setDoc\(doc\(db, 'settings', 'main'\), newConfig\);\n    \} catch \(err\) \{\n      console\.error\('Error saving config to Firebase', err\);\n    \}\n  \};\n/,
  `  const handleSaveSiteConfig = (newConfig: SiteConfig) => {
    setSiteConfig(newConfig);
    saveSiteConfigToStorage(newConfig);
  };
`
);

finalApp = finalApp.replace(
  /  const syncPostsToFirebase = async \(newPosts: any\[\]\) => \{\n    try \{\n      await setDoc\(doc\(db, 'settings', 'posts'\), \{ posts: newPosts \}\);\n    \} catch \(err\) \{\n      console\.error\('Error saving posts to Firebase', err\);\n    \}\n  \};\n/,
  ''
);

finalApp = finalApp.replace(
  /  \/\/ Overridden by above handleSaveSiteConfig\n/g,
  ''
);

finalApp = finalApp.replace(
  /  const handleSavePost = \(post: BlogPost\) => \{\n    let updatedPosts;\n    const exists = posts\.find\(p => p\.id === post\.id\);\n    if \(exists\) \{\n      updatedPosts = posts\.map\(p => p\.id === post\.id \? post : p\);\n    \} else \{\n      updatedPosts = \[post, \.\.\.posts\];\n    \}\n    setPosts\(updatedPosts\);\n    saveBlogPostsToStorage\(updatedPosts\);\n    syncPostsToFirebase\(updatedPosts\);\n  \};\n/g,
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
  };\n`
);

finalApp = finalApp.replace(
  /  const handleDeletePost = \(id: string\) => \{\n    const updated = posts\.filter\(p => p\.id !== id\);\n    setPosts\(updated\);\n    saveBlogPostsToStorage\(updated\);\n    syncPostsToFirebase\(updated\);\n  \};\n/g,
  `  const handleDeletePost = (id: string) => {
    const updated = posts.filter(p => p.id !== id);
    setPosts(updated);
    saveBlogPostsToStorage(updated);
  };\n`
);

finalApp = finalApp.replace(
  /  const handleToggleStatus = \(id: string, status: PostStatus\) => \{\n    const updated = posts\.map\(p => p\.id === id \? \{ \.\.\.p, status \} : p\);\n    setPosts\(updated\);\n    saveBlogPostsToStorage\(updated\);\n    syncPostsToFirebase\(updated\);\n  \};\n/g,
  `  const handleToggleStatus = (id: string, status: PostStatus) => {
    const updated = posts.map(p => p.id === id ? { ...p, status } : p);
    setPosts(updated);
    saveBlogPostsToStorage(updated);
  };\n`
);

finalApp = finalApp.replace(
  /  const handleAddComment = \(postId: string, comment: BlogComment\) => \{\n    const updated = posts\.map\(p => \{\n      if \(p\.id === postId\) \{\n        return \{ \.\.\.p, comments: \[\.\.\.\(p\.comments \|\| \[\]\), comment\] \};\n      \}\n      return p;\n    \}\);\n    setPosts\(updated\);\n    saveBlogPostsToStorage\(updated\);\n    syncPostsToFirebase\(updated\);\n  \};\n/g,
  `  const handleAddComment = (postId: string, comment: BlogComment) => {
    const updated = posts.map(p => {
      if (p.id === postId) {
        return { ...p, comments: [...(p.comments || []), comment] };
      }
      return p;
    });
    setPosts(updated);
    saveBlogPostsToStorage(updated);
  };\n`
);

finalApp = finalApp.replace(
  /  const handleResetSiteConfig = async \(\) => \{\n    setSiteConfig\(DEFAULT_SITE_CONFIG\);\n    saveSiteConfigToStorage\(DEFAULT_SITE_CONFIG\);\n    try \{\n      await setDoc\(doc\(db, 'settings', 'main'\), DEFAULT_SITE_CONFIG\);\n    \} catch \(err\) \{\n      console\.error\('Error resetting config to Firebase', err\);\n    \}\n  \};\n/g,
  `  const handleResetSiteConfig = () => {
    setSiteConfig(DEFAULT_SITE_CONFIG);
    saveSiteConfigToStorage(DEFAULT_SITE_CONFIG);
  };\n`
);

fs.writeFileSync('src/App.tsx', finalApp);
console.log('Firebase removed from App.tsx');
