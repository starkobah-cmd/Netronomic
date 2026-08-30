const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldPort = `          {isSectionVisible('sec-portfolio') && (
            <Portfolio
              onSelectPortfolio={(item) => setSelectedPortfolio(item)}
            />
          )}`;
          
const newPort = `          {isSectionVisible('sec-portfolio') && (
            <Portfolio
              siteConfig={siteConfig}
              onSelectPortfolio={(item) => setSelectedPortfolio(item)}
            />
          )}`;

content = content.replace(oldPort, newPort);
fs.writeFileSync('src/App.tsx', content, 'utf8');
console.log('App.tsx updated to pass siteConfig to Portfolio');
