const fs = require('fs');
let content = fs.readFileSync('src/components/AdminPanel.tsx', 'utf8');

content = content.replace(
  /                            <div className="pt-4 border-t border-slate-800 flex justify-end">/,
  `              </div>\n                            <div className="pt-4 border-t border-slate-800 flex justify-end">`
);

fs.writeFileSync('src/components/AdminPanel.tsx', content);
