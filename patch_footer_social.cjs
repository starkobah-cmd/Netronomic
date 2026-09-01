const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Add TikTok and Pinterest to icons import if not there
content = content.replace(
  /import \{([^}]+)\} from 'lucide-react';/,
  (match, p1) => {
    let newImports = p1;
    if (!newImports.includes('Music2')) newImports += ', Music2'; // using Music2 for TikTok
    if (!newImports.includes('Pin')) newImports += ', Pin'; // using Pin for Pinterest
    return `import { ${newImports} } from 'lucide-react';`;
  }
);

content = content.replace(
  /case 'github': Icon = Github; break;/,
  `case 'github': Icon = Github; break;
      case 'tiktok': Icon = Music2; break;
      case 'pinterest': Icon = Pin; break;`
);

content = content.replace(
  /\{activeAgency\.social && \(/,
  `{activeAgency.social && !(activeAgency.social as any).hideAll && (`
);

content = content.replace(
  /\{renderSocialIcon\('github', activeAgency\.social\.github\)\}/,
  `{renderSocialIcon('github', activeAgency.social.github)}
                  {renderSocialIcon('tiktok', (activeAgency.social as any).tiktok)}
                  {renderSocialIcon('pinterest', (activeAgency.social as any).pinterest)}`
);

fs.writeFileSync('src/components/Footer.tsx', content);
