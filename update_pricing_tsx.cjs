const fs = require('fs');

const file = 'src/components/Pricing.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace Mobile App Development
content = content.replace(/      'Mobile App Development',\n/, '');
content = content.replace(/'Cross-Platform App Development \(iOS\/Android\)',/, '');
// Also replace it if it's there
content = content.replace(/      'Cross-Platform App Development \(iOS\/Android\)',\n/, '');

fs.writeFileSync(file, content);
console.log("Updated Pricing.tsx successfully!");
