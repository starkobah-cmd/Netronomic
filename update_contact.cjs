const fs = require('fs');
let content = fs.readFileSync('src/components/ContactUs.tsx', 'utf8');

// 1. Add User and Lock to lucide-react imports
content = content.replace(
  "  Share2,\n} from 'lucide-react';",
  "  Share2,\n  User,\n  Lock,\n} from 'lucide-react';"
);

// 2. Add Developer block and remove Office Headquarters span
const emailBlock = `                {/* Email */}`;
const developerEmailBlock = `                {/* Developer */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-sky-200 text-sky-600 flex items-center justify-center shadow-xs shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">Developer</span>
                    <span className="text-sm font-bold text-slate-800">Daim Ali</span>
                  </div>
                </div>

                {/* Email */}`;
content = content.replace(emailBlock, developerEmailBlock);

const officeHQ = `<span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">Office Headquarters</span>`;
content = content.replace(officeHQ, ``);

// 3. Lock social media buttons
const socialOld = `<a
                      key={soc.label}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white border border-sky-200 text-xs font-bold text-slate-700 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all"
                    >
                      {soc.label}
                    </a>`;
const socialNew = `<button
                      key={soc.label}
                      disabled
                      onClick={(e) => e.preventDefault()}
                      className="px-3 py-1.5 rounded-lg bg-white border border-sky-200 text-xs font-bold text-slate-400 cursor-not-allowed opacity-60 flex items-center gap-1"
                    >
                      <Lock className="w-3 h-3" />
                      {soc.label}
                    </button>`;
content = content.replace(socialOld, socialNew);

// 4. Comment out Interactive Tool box
const estimatorStart = `{/* Interactive Quick Package Estimator Box */}`;
const estimatorEnd = `Apply Bundle to Inquiry Form
            </button>
          </div>
        </div>`;
const estimatorBlock = content.substring(content.indexOf(estimatorStart), content.indexOf(estimatorEnd) + estimatorEnd.length);
content = content.replace(estimatorBlock, `{/* Interactive Quick Package Estimator Box (Removed per user request) */}`);

fs.writeFileSync('src/components/ContactUs.tsx', content, 'utf8');
console.log('ContactUs updated');
