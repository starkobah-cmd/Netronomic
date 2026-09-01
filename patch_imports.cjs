const fs = require('fs');

let content = fs.readFileSync('src/components/ContactUs.tsx', 'utf8');

// The import might be multiline, so we can just add a new import statement for the icons
if (!content.includes('import { Facebook')) {
  content = content.replace(
    /import \{[^}]+\}\s+from\s+'lucide-react';/, 
    "$&\\nimport { Facebook, Instagram, Twitter, Linkedin, Youtube, Github } from 'lucide-react';"
  );
}

fs.writeFileSync('src/components/ContactUs.tsx', content);
