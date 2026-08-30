const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

content = content.replace(
  /<div className="flex flex-col gap-3 pt-2">[\s\S]*?<\/div>\n          <\/div>\n\n          \{\/\* Col 2/m,
  `<div className="flex flex-col gap-4 pt-2">
              <a
                href={(activeAgency.whatsappNumber?.startsWith('http') ? activeAgency.whatsappNumber : \`https://wa.me/\${activeAgency.whatsappNumber}\`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500 text-white border border-emerald-600 shadow-sm text-xs font-semibold hover:bg-emerald-600 transition-colors flex-col items-start w-fit"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Message Netronomic web on WhatsApp</span>
                </div>
                <span className="text-[10px] font-mono opacity-80">{activeAgency.whatsappNumber?.startsWith('http') ? 'Click to open WhatsApp link' : \`+\${activeAgency.whatsappNumber}\`}</span>
              </a>
              
              {/* Social Links */}
              {activeAgency.social && (
                <div className="flex items-center gap-2">
                  {renderSocialIcon('facebook', activeAgency.social.facebook)}
                  {renderSocialIcon('instagram', activeAgency.social.instagram)}
                  {renderSocialIcon('twitter', activeAgency.social.twitter)}
                  {renderSocialIcon('linkedin', activeAgency.social.linkedin)}
                  {renderSocialIcon('youtube', activeAgency.social.youtube)}
                  {renderSocialIcon('github', activeAgency.social.github)}
                </div>
              )}
            </div>
          </div>

          {/* Col 2`
);

fs.writeFileSync('src/components/Footer.tsx', content);
console.log('Footer reverted');
