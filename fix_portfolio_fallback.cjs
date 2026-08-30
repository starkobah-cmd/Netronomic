const fs = require('fs');
let content = fs.readFileSync('src/components/Portfolio.tsx', 'utf8');

const oldFilter = `  const sourceData = (siteConfig?.portfolio && siteConfig.portfolio.length > 0) ? siteConfig.portfolio : portfolioData;`;
const newFilter = `  const sourceData = siteConfig?.portfolio || portfolioData;`;

content = content.replace(oldFilter, newFilter);
fs.writeFileSync('src/components/Portfolio.tsx', content, 'utf8');
console.log('Portfolio fallback logic fixed.');
