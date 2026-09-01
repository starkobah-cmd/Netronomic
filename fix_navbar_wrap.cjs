const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
content = content.replace(
  'className="text-[13px] font-semibold text-slate-700 hover:text-sky-600 px-3 py-1.5 rounded-xl hover:bg-white hover:shadow-xs transition-all duration-200"',
  'className="text-[13px] font-semibold text-slate-700 hover:text-sky-600 px-3 py-1.5 rounded-xl hover:bg-white hover:shadow-xs transition-all duration-200 whitespace-nowrap"'
);
fs.writeFileSync('src/components/Navbar.tsx', content);
