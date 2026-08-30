const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

const waOld = `<a
                href={\`https://wa.me/\${activeAgency.whatsappNumber}?text=Hi%20\${encodeURIComponent(activeAgency.name)}\`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold hover:bg-emerald-500/20 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Live Chat</span>
              </a>`;
const waNew = `<a
                href="https://wa.me/923020487103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500 text-white border border-emerald-600 shadow-sm text-xs font-semibold hover:bg-emerald-600 transition-colors flex-col items-start"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Message Netronomic web on WhatsApp</span>
                </div>
                <span className="text-[10px] font-mono opacity-80">+92 302 048 7103</span>
              </a>`;

content = content.replace(waOld, waNew);

fs.writeFileSync('src/components/Footer.tsx', content, 'utf8');
console.log('Footer updated');
