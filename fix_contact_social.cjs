const fs = require('fs');

let content = fs.readFileSync('src/components/ContactUs.tsx', 'utf8');

// Replace the Social Media Links section
const oldSocial = `                <div className="flex items-center gap-2">
                  {[
                    { label: 'Facebook', href: activeAgency.social.facebook },
                    { label: 'Instagram', href: activeAgency.social.instagram },
                    { label: 'Twitter', href: activeAgency.social.twitter },
                    { label: 'LinkedIn', href: activeAgency.social.linkedin },
                    { label: 'YouTube', href: activeAgency.social.youtube },
                  ].map((soc) => (
                    <button
                      key={soc.label}
                      disabled
                      onClick={(e) => e.preventDefault()}
                      className="px-3 py-1.5 rounded-lg bg-white border border-sky-200 text-xs font-bold text-slate-400 cursor-not-allowed opacity-60 flex items-center gap-1"
                    >
                      <Lock className="w-3 h-3" />
                      {soc.label}
                    </button>
                  ))}
                </div>`;

const newSocial = `                <div className="flex items-center flex-wrap gap-2">
                  {[
                    { label: 'Facebook', href: activeAgency.social.facebook },
                    { label: 'Instagram', href: activeAgency.social.instagram },
                    { label: 'Twitter', href: activeAgency.social.twitter },
                    { label: 'LinkedIn', href: activeAgency.social.linkedin },
                    { label: 'YouTube', href: activeAgency.social.youtube },
                  ].filter(soc => soc.href && soc.href.trim() !== '').map((soc) => (
                    <a
                      key={soc.label}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white border border-sky-200 hover:border-sky-400 text-xs font-bold text-sky-700 hover:text-sky-800 transition-colors flex items-center gap-1 shadow-sm hover:shadow-md"
                    >
                      {soc.label}
                    </a>
                  ))}
                </div>`;

if (content.includes(oldSocial)) {
  content = content.replace(oldSocial, newSocial);
} else {
  // Try a more generic regex if exact match fails
  content = content.replace(/<div className="flex items-center gap-2">\\s*\{\[\\s*\{\s*label:\s*'Facebook'[\s\S]*?<\/div>/, newSocial);
}

fs.writeFileSync('src/components/ContactUs.tsx', content);
console.log('Fixed ContactUs.tsx');
