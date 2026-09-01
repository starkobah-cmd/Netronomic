const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Fix mobile drawer wrap
content = content.replace(
  /className="text-sm font-medium text-slate-700 hover:text-sky-600 p-2 rounded-md hover:bg-sky-50 transition-colors"/g,
  'className="text-sm font-medium text-slate-700 hover:text-sky-600 p-2 rounded-md hover:bg-sky-50 transition-colors whitespace-nowrap"'
);

fs.writeFileSync('src/components/Navbar.tsx', content);
