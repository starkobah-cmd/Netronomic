const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

content = content.replace(
  '<div className="flex items-center gap-2">\n                  {renderSocialIcon(\'facebook\', activeAgency.social.facebook)}',
  '<div className="flex items-center gap-2 flex-wrap">\n                  {renderSocialIcon(\'facebook\', activeAgency.social.facebook)}'
);

fs.writeFileSync('src/components/Footer.tsx', content);
