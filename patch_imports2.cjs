const fs = require('fs');

let content = fs.readFileSync('src/components/ContactUs.tsx', 'utf8');

content = content.replace(/\\nimport \{ Facebook/g, '\nimport { Facebook');
fs.writeFileSync('src/components/ContactUs.tsx', content);
