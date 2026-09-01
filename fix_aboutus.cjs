const fs = require('fs');
let content = fs.readFileSync('src/components/AboutUs.tsx', 'utf8');

// Fix badge wrap
content = content.replace(
  /className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider"/g,
  'className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider whitespace-nowrap"'
);

fs.writeFileSync('src/components/AboutUs.tsx', content);
