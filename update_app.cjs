const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  "import { Portfolio } from './components/Portfolio';",
  "import { Portfolio } from './components/Portfolio';\nimport { Certificates } from './components/Certificates';"
);

content = content.replace(
  "{/* 7. Pricing */}",
  `{/* 6.5 Certificates */}
          {isSectionVisible('sec-certificates') && (
            <Certificates
              items={siteConfig.certificates || []}
              siteConfig={siteConfig}
            />
          )}

          {/* 7. Pricing */}`
);

fs.writeFileSync('src/App.tsx', content);
