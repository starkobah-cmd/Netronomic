const fs = require('fs');
let content = fs.readFileSync('src/components/AdminPanel.tsx', 'utf8');

const badBlockRegex = /<div className="pt-6 border-t border-slate-800">\s*<\/div>\s*\)\}/;

const goodBlock = `
              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => triggerSaveNotification('Branding updated!')}
                  className="px-6 py-2.5 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs"
                >
                  Save Branding Settings
                </button>
              </div>
            </div>
          )}`;

content = content.replace(badBlockRegex, goodBlock);

fs.writeFileSync('src/components/AdminPanel.tsx', content);
