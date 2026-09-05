const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Imports
content = content.replace(
  "import { Portfolio } from './components/Portfolio';",
  "import { Portfolio } from './components/Portfolio';\nimport { PortfolioPage } from './components/PortfolioPage';\nimport { PortfolioDetail } from './components/PortfolioDetail';"
);

// View rendering
const mainViewRegex = /\{blogView === 'main' && \([\s\S]*?\{blogView === 'site-admin'/;
const mainViewContent = content.match(mainViewRegex)[0];

const newMainView = mainViewContent.replace(
  /<Portfolio[\s\S]*?\/>/,
  `<Portfolio 
              items={siteConfig.portfolio}
              siteConfig={siteConfig}
              onSelectPortfolio={(item) => {
                setSelectedPortfolio(item);
                setBlogView('portfolio-detail');
              }}
              onViewAll={() => setBlogView('portfolio-list')}
            />`
);

content = content.replace(mainViewRegex, newMainView);

const portfolioViews = `
      {blogView === 'portfolio-list' && (
        <PortfolioPage 
          items={siteConfig.portfolio} 
          onSelectPortfolio={(item) => {
            setSelectedPortfolio(item);
            setBlogView('portfolio-detail');
          }}
        />
      )}

      {blogView === 'portfolio-detail' && selectedPortfolio && (
        <PortfolioDetail 
          item={selectedPortfolio}
          allItems={siteConfig.portfolio}
          onBack={() => setBlogView('portfolio-list')}
          onSelectPortfolio={(item) => {
            setSelectedPortfolio(item);
            window.scrollTo(0, 0);
          }}
        />
      )}

      {blogView === 'site-admin'`;

content = content.replace("{blogView === 'site-admin'", portfolioViews);

fs.writeFileSync('src/App.tsx', content);
