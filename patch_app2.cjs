const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  "import { Portfolio } from './components/Portfolio';",
  "import { Portfolio } from './components/Portfolio';\nimport { PortfolioPage } from './components/PortfolioPage';\nimport { PortfolioDetail } from './components/PortfolioDetail';"
);

// Replace Portfolio rendering
const portfolioMatch = content.match(/\{\/\* 6\. Portfolio \*\/\}([\s\S]*?)<\/Portfolio>\s*\)/);
if (portfolioMatch) {
  content = content.replace(portfolioMatch[0], `{/* 6. Portfolio */}
          {isSectionVisible('sec-portfolio') && (
            <Portfolio
              items={siteConfig.portfolio}
              siteConfig={siteConfig}
              onSelectPortfolio={(item) => {
                setSelectedPortfolio(item);
                setBlogView('portfolio-detail');
                window.scrollTo(0, 0);
              }}
              onViewAll={() => {
                setBlogView('portfolio-list');
                window.scrollTo(0, 0);
              }}
            />
          )}`);
}

// Add portfolio views before Admin Login block
const singleBlogMatch = content.match(/\{\/\* Single Blog Article View \*\/\}([\s\S]*?)<\/SingleBlog>\s*\)/);
if (singleBlogMatch) {
  content = content.replace(singleBlogMatch[0], singleBlogMatch[0] + `

      {/* Portfolio List View */}
      {blogView === 'portfolio-list' && (
        <PortfolioPage 
          items={siteConfig.portfolio} 
          onSelectPortfolio={(item) => {
            setSelectedPortfolio(item);
            setBlogView('portfolio-detail');
            window.scrollTo(0, 0);
          }}
        />
      )}

      {/* Portfolio Detail View */}
      {blogView === 'portfolio-detail' && selectedPortfolio && (
        <PortfolioDetail 
          item={selectedPortfolio}
          allItems={siteConfig.portfolio}
          onBack={() => {
            setBlogView('portfolio-list');
            window.scrollTo(0, 0);
          }}
          onSelectPortfolio={(item) => {
            setSelectedPortfolio(item);
            window.scrollTo(0, 0);
          }}
        />
      )}`);
}

// Remove PortfolioModal
content = content.replace(/<PortfolioModal[\s\S]*?\/>/, '');
content = content.replace("import { PortfolioModal } from './components/PortfolioModal';", '');

fs.writeFileSync('src/App.tsx', content);
