const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

content = content.replace(
  "{ label: 'Portfolio', href: '#portfolio' },",
  "{ label: 'Portfolio', href: '#portfolio' },\n    { label: 'Certificates', href: '#certificates' },"
);

fs.writeFileSync('src/components/Navbar.tsx', content);
