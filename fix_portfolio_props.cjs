const fs = require('fs');
let content = fs.readFileSync('src/components/Portfolio.tsx', 'utf8');

// Add SiteConfig import
content = content.replace("import { PortfolioItem, PortfolioCategory } from '../types';", "import { PortfolioItem, PortfolioCategory } from '../types';\nimport { SiteConfig } from '../data/siteConfig';");

// Add siteConfig to props
content = content.replace("interface PortfolioProps {\n  onSelectPortfolio: (item: PortfolioItem) => void;\n}", "interface PortfolioProps {\n  onSelectPortfolio: (item: PortfolioItem) => void;\n  siteConfig?: SiteConfig;\n}");

// Update functional component signature
content = content.replace("export const Portfolio: React.FC<PortfolioProps> = ({ onSelectPortfolio }) => {", "export const Portfolio: React.FC<PortfolioProps> = ({ onSelectPortfolio, siteConfig }) => {");

// Use siteConfig data
const oldFilter = `  const filteredItems = activeCategory === 'all'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeCategory);`;

const newFilter = `  const sourceData = (siteConfig?.portfolio && siteConfig.portfolio.length > 0) ? siteConfig.portfolio : portfolioData;
  const filteredItems = activeCategory === 'all'
    ? sourceData
    : sourceData.filter((item) => item.category === activeCategory);`;

content = content.replace(oldFilter, newFilter);

fs.writeFileSync('src/components/Portfolio.tsx', content, 'utf8');
console.log('Portfolio updated to use siteConfig');
