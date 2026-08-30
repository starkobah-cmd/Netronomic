const fs = require('fs');
let content = fs.readFileSync('src/components/AdminPanel.tsx', 'utf8');

const oldCode = `{port.image ? (
                        <img src={port.image} alt={port.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-500"><ImageIcon className="w-8 h-8 opacity-50" /></div>
                      )}`;

const newCode = `{port.videoUrl ? (
                        <video src={port.videoUrl} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      ) : port.image ? (
                        <img src={port.image} alt={port.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-500"><ImageIcon className="w-8 h-8 opacity-50" /></div>
                      )}`;

content = content.replace(oldCode, newCode);
fs.writeFileSync('src/components/AdminPanel.tsx', content, 'utf8');
console.log('AdminPanel mini preview updated for videos.');
