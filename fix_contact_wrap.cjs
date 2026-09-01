const fs = require('fs');
let content = fs.readFileSync('src/components/ContactUs.tsx', 'utf8');
content = content.replace(
  /<div className="flex items-center gap-2">\s*\{\[/,
  '<div className="flex flex-wrap items-center gap-2">\n                  {['
);
fs.writeFileSync('src/components/ContactUs.tsx', content);
