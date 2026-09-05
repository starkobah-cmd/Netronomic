const fs = require('fs');
const file = 'src/data/agencyData.ts';
let content = fs.readFileSync(file, 'utf8');

// Remove portfolio item with App Development
const portRegex = /\s*\{\s*id:\s*'port-3'[\s\S]*?featured:\s*true,\s*\},/;
content = content.replace(portRegex, '');

fs.writeFileSync(file, content);
console.log("App portfolio item removed!");
