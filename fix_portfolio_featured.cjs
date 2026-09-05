const fs = require('fs');
let content = fs.readFileSync('src/components/Portfolio.tsx', 'utf8');

content = content.replace(
  "const featuredItems = items.filter(item => item.featured).slice(0, 6);",
  "let featuredItems = items.filter(item => item.featured).slice(0, 6);\n  if (featuredItems.length === 0) {\n    featuredItems = items.slice(0, 6);\n  }"
);

fs.writeFileSync('src/components/Portfolio.tsx', content);
