const fs = require('fs');
let content = fs.readFileSync('src/components/ContactUs.tsx', 'utf8');

// Add TikTok and Pinterest to icons import if not there
content = content.replace(
  /import \{([^}]+)\} from 'lucide-react';/,
  (match, p1) => {
    let newImports = p1;
    if (!newImports.includes('Music2')) newImports += ', Music2'; 
    if (!newImports.includes('Pin')) newImports += ', Pin'; 
    return `import { ${newImports} } from 'lucide-react';`;
  }
);

content = content.replace(
  /\{activeAgency\.social && \(/,
  `{activeAgency.social && !(activeAgency.social as any).hideAll && (`
);

content = content.replace(
  /\{ network: 'github', label: 'GitHub', href: activeAgency\.social\.github, Icon: Github \},/,
  `{ network: 'github', label: 'GitHub', href: activeAgency.social.github, Icon: Github },
                    { network: 'tiktok', label: 'TikTok', href: (activeAgency.social as any).tiktok, Icon: Music2 },
                    { network: 'pinterest', label: 'Pinterest', href: (activeAgency.social as any).pinterest, Icon: Pin },`
);

fs.writeFileSync('src/components/ContactUs.tsx', content);
