const fs = require('fs');
let content = fs.readFileSync('src/components/AdminPanel.tsx', 'utf8');

const oldSave = `    setLocalConfig({ ...localConfig, portfolio: newList });
    setIsPortfolioModalOpen(false);
    setEditingPortfolio(null);`;

const newSave = `    const updatedConfig = { ...localConfig, portfolio: newList };
    setLocalConfig(updatedConfig);
    onSaveSiteConfig(updatedConfig);
    setSavedSuccessMsg('Portfolio project saved!');
    setTimeout(() => setSavedSuccessMsg(''), 3000);
    setIsPortfolioModalOpen(false);
    setEditingPortfolio(null);`;

const oldDelete = `    if (confirm('Are you sure you want to delete this portfolio project?')) {
      setLocalConfig({
        ...localConfig,
        portfolio: (localConfig.portfolio || []).filter(p => p.id !== id)
      });
    }`;
    
const newDelete = `    if (confirm('Are you sure you want to delete this portfolio project?')) {
      const updatedConfig = {
        ...localConfig,
        portfolio: (localConfig.portfolio || []).filter(p => p.id !== id)
      };
      setLocalConfig(updatedConfig);
      onSaveSiteConfig(updatedConfig);
      setSavedSuccessMsg('Portfolio project deleted!');
      setTimeout(() => setSavedSuccessMsg(''), 3000);
    }`;

content = content.replace(oldSave, newSave).replace(oldDelete, newDelete);
fs.writeFileSync('src/components/AdminPanel.tsx', content, 'utf8');
console.log('Portfolio save/delete persistence fixed.');
