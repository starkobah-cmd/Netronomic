const fs = require('fs');
const file = 'src/components/Pricing.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace Mobile App Development from Basic
content = content.replace(/'Mobile App Development',\s*/g, '');

// Replace App Dev from Premium
content = content.replace(/'Cross-Platform App Development \(iOS\/Android\)',\s*/g, '');

// Save
fs.writeFileSync(file, content);
console.log("Pricing updated!");
