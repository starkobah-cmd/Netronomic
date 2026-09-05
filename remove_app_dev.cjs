const fs = require('fs');

const file = 'src/data/agencyData.ts';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove App Development from servicesData
const servicesRegex = /\{\s*id:\s*'app-development'[\s\S]*?badge:\s*'Enterprise',\s*\},/;
content = content.replace(servicesRegex, '');

// 2. Remove from PORTFOLIO_CATEGORIES
const portCategoryRegex = /\s*'App Development',/;
content = content.replace(portCategoryRegex, '');

// 3. Remove 'Custom App Development' from notIncluded in pricing
content = content.replace(/'Custom App Development',\s*/g, '');

// 4. Update Premium tier pricing text if it has Mobile App Prototype
content = content.replace(/'Full Custom Web App \/ Mobile App Prototype',/g, "'Full Custom Web App Development',");

fs.writeFileSync(file, content);
console.log("App Development removed successfully!");
