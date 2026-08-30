const fs = require('fs');

const appContent = fs.readFileSync('src/App.tsx', 'utf8');
const fixedApp = appContent.replace(
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

fs.writeFileSync('src/App.tsx', fixedApp);
console.log('Reset config updated for Firebase');
