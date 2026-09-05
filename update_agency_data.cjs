const fs = require('fs');

const file = 'src/data/agencyData.ts';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove from servicesData
content = content.replace(/  \{\s*id: 'app-development',[\s\S]*?badge: 'Enterprise',\s*\},/, '');
content = content.replace(/  \{\s*id: 'app-development',[\s\S]*?deliveryTime: '2-4 Weeks',\s*\},/, '');

// 2. Remove from PORTFOLIO_CATEGORIES
content = content.replace(/  'App Development',\n/, '');

// 3. Remove from portfolioData
content = content.replace(/  \{\s*id: 'port-3',[\s\S]*?client: 'Apex Mobility',[\s\S]*?featured: true,\s*\},/, '');

// 4. Remove from pricingData in agencyData.ts
content = content.replace(/'Custom App Development', /g, '');

fs.writeFileSync(file, content);
console.log("Updated agencyData.ts successfully!");
