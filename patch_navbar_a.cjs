const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Replace the <a ...> <Logo /> </a> wrapper with a <div ...> <Logo /> </div> wrapper.
content = content.replace(
  /<a\s+href="#"\s+onClick=\{handleHomeClick\}\s+className="flex items-center shrink-0 focus:outline-none rounded-xl transition-opacity hover:opacity-95"\s+aria-label="Homepage"\s*>\s*<Logo variant="light" size="md" showTagline=\{true\} config=\{siteConfig\?.logo\} \/>\s*<\/a>/,
  `<div
            onClick={handleHomeClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleHomeClick(e as any); } }}
            className="flex items-center shrink-0 focus:outline-none rounded-xl transition-opacity hover:opacity-95 cursor-pointer"
            aria-label="Homepage"
          >
            <Logo variant="light" size="md" showTagline={true} config={siteConfig?.logo} />
          </div>`
);

fs.writeFileSync('src/components/Navbar.tsx', content);
