const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');
content = content.replace(/Admin Portal/g, 'Login Portal');
content = content.replace(/Admin CMS Login/g, 'Login');
fs.writeFileSync('src/components/Footer.tsx', content);
