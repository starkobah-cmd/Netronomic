const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(/items=\{siteConfig.portfolio\}/g, 'items={siteConfig.portfolio || []}');
fs.writeFileSync('src/App.tsx', content);
