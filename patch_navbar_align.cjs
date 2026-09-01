const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

content = content.replace(
  /<div className="flex items-center justify-between gap-4">/,
  `<div className={\`flex items-center \${
          siteConfig?.logo?.headerLogoAlign === 'center' ? 'justify-center flex-col sm:flex-row' : 
          siteConfig?.logo?.headerLogoAlign === 'right' ? 'justify-end flex-row-reverse' : 
          'justify-between'
        } gap-4\`}>`
);
fs.writeFileSync('src/components/Navbar.tsx', content);

let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(
  /<div className="lg:col-span-2 space-y-4">/g,
  `<div className={\`lg:col-span-2 space-y-4 \${
            siteConfig?.logo?.footerLogoAlign === 'center' ? 'flex flex-col items-center text-center' :
            siteConfig?.logo?.footerLogoAlign === 'right' ? 'flex flex-col items-end text-right' :
            'flex flex-col items-start text-left'
          }\`}>`
);

fs.writeFileSync('src/components/Footer.tsx', footer);
