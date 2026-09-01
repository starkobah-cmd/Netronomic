const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
content = content.replace(/Admin Login/g, 'Login');
fs.writeFileSync('src/components/Navbar.tsx', content);
