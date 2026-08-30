const fs = require('fs');
let appContent = fs.readFileSync('src/App.tsx', 'utf8');

appContent = appContent.replace(
  /<PortfolioModal\n        item=\{selectedPortfolio\}/,
  `<PortfolioModal\n        siteConfig={siteConfig}\n        item={selectedPortfolio}`
);

appContent = appContent.replace(
  /<ServiceModal\n        item=\{selectedService\}/,
  `<ServiceModal\n        siteConfig={siteConfig}\n        item={selectedService}`
);

appContent = appContent.replace(
  /<QuickQuoteModal\n        isOpen=\{quoteModalOpen\}/,
  `<QuickQuoteModal\n        siteConfig={siteConfig}\n        isOpen={quoteModalOpen}`
);

fs.writeFileSync('src/App.tsx', appContent);
