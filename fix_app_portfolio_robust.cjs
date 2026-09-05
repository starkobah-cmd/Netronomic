const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const viewsToAdd = `
      {/* Portfolio List View */}
      {blogView === 'portfolio-list' && (
        <PortfolioPage 
          items={siteConfig.portfolio || []} 
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
          allItems={siteConfig.portfolio || []}
          onBack={() => {
            setBlogView('portfolio-list');
            window.scrollTo(0, 0);
          }}
          onSelectPortfolio={(item) => {
            setSelectedPortfolio(item);
            window.scrollTo(0, 0);
          }}
        />
      )}
`;

if (!content.includes('blogView === \'portfolio-list\'')) {
  content = content.replace(
    "{/* Protected Admin Portal / Login Wall */}",
    viewsToAdd + "\n      {/* Protected Admin Portal / Login Wall */}"
  );
  fs.writeFileSync('src/App.tsx', content);
}
