const fs = require('fs');
let content = fs.readFileSync('src/components/ServiceModal.tsx', 'utf8');
content = content.replace(/\\n/g, '\n');
fs.writeFileSync('src/components/ServiceModal.tsx', content);
