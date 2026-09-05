const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldPort = /<Portfolio\s*siteConfig=\{siteConfig\}\s*onSelectPortfolio=\{\(item\) => setSelectedPortfolio\(item\)\}\s*\/>/;
content = content.replace(oldPort, `<Portfolio
              items={siteConfig.portfolio || []}
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
            />`);

fs.writeFileSync('src/App.tsx', content);
