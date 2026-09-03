const fs = require('fs');
let contact = fs.readFileSync('src/components/ContactUs.tsx', 'utf8');

const contactRegex = /\[\s*\{\s*network:\s*'facebook'[\s\S]*?\]\.filter\(soc => soc\.href && !soc\.hidden\)/;
const contactReplacement = `[
                    { network: 'facebook', label: 'Facebook', href: activeAgency.social.facebook, hidden: (activeAgency.social as any).facebook_hidden, Icon: Facebook },
                    { network: 'instagram', label: 'Instagram', href: activeAgency.social.instagram, hidden: (activeAgency.social as any).instagram_hidden, Icon: Instagram },
                    { network: 'twitter', label: 'Twitter', href: activeAgency.social.twitter, hidden: (activeAgency.social as any).twitter_hidden, Icon: Twitter },
                    { network: 'linkedin', label: 'LinkedIn', href: activeAgency.social.linkedin, hidden: (activeAgency.social as any).linkedin_hidden, Icon: Linkedin },
                    { network: 'youtube', label: 'YouTube', href: activeAgency.social.youtube, hidden: (activeAgency.social as any).youtube_hidden, Icon: Youtube },
                    { network: 'github', label: 'GitHub', href: activeAgency.social.github, hidden: (activeAgency.social as any).github_hidden, Icon: Github },
                    { network: 'tiktok', label: 'TikTok', href: (activeAgency.social as any).tiktok, hidden: (activeAgency.social as any).tiktok_hidden, Icon: Music2 },
                    { network: 'pinterest', label: 'Pinterest', href: (activeAgency.social as any).pinterest, hidden: (activeAgency.social as any).pinterest_hidden, Icon: Pin },
                  ].filter(soc => soc.href && !soc.hidden)`;

contact = contact.replace(contactRegex, contactReplacement);
fs.writeFileSync('src/components/ContactUs.tsx', contact);
