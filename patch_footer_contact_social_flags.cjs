const fs = require('fs');

// Patch Footer.tsx
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(
  /\{renderSocialIcon\('([a-z]+)', ([^)]+)\)\}/g,
  `{!(activeAgency.social as any).$1_hidden && renderSocialIcon('$1', $2)}`
);
fs.writeFileSync('src/components/Footer.tsx', footer);

// Patch ContactUs.tsx
let contact = fs.readFileSync('src/components/ContactUs.tsx', 'utf8');
const contactRegex = /\[\s*\{\s*network:\s*'facebook'[\s\S]*?\]\.filter\(soc => soc\.href\)/;
const contactReplacement = `[
                    { network: 'facebook', label: 'Facebook', href: activeAgency.social.facebook, hidden: (activeAgency.social as any).facebook_hidden },
                    { network: 'instagram', label: 'Instagram', href: activeAgency.social.instagram, hidden: (activeAgency.social as any).instagram_hidden },
                    { network: 'twitter', label: 'Twitter', href: activeAgency.social.twitter, hidden: (activeAgency.social as any).twitter_hidden },
                    { network: 'linkedin', label: 'LinkedIn', href: activeAgency.social.linkedin, hidden: (activeAgency.social as any).linkedin_hidden },
                    { network: 'youtube', label: 'YouTube', href: activeAgency.social.youtube, hidden: (activeAgency.social as any).youtube_hidden },
                    { network: 'github', label: 'GitHub', href: activeAgency.social.github, hidden: (activeAgency.social as any).github_hidden },
                    { network: 'tiktok', label: 'TikTok', href: (activeAgency.social as any).tiktok, hidden: (activeAgency.social as any).tiktok_hidden },
                    { network: 'pinterest', label: 'Pinterest', href: (activeAgency.social as any).pinterest, hidden: (activeAgency.social as any).pinterest_hidden },
                  ].filter(soc => soc.href && !soc.hidden)`;

contact = contact.replace(contactRegex, contactReplacement);
fs.writeFileSync('src/components/ContactUs.tsx', contact);
