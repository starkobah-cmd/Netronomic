const fs = require('fs');

let file = 'src/components/Pricing.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/web\/app dev/g, 'web dev');
fs.writeFileSync(file, content);

file = 'src/data/agencyData.ts';
content = fs.readFileSync(file, 'utf8');
content = content.replace(/web\/app dev/g, 'web dev');
fs.writeFileSync(file, content);

file = 'src/data/siteConfig.ts';
content = fs.readFileSync(file, 'utf8');
content = content.replace(/App development, /g, '');
fs.writeFileSync(file, content);

console.log("Fixed web/app dev refs");
