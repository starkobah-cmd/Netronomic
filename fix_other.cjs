const fs = require('fs');

// Fix Services.tsx
let f = 'src/components/Services.tsx';
let c = fs.readFileSync(f, 'utf8');
c = c.replace(/'Web & App Dev'/g, "'Web Development'");
fs.writeFileSync(f, c);

// Fix Hero.tsx
f = 'src/components/Hero.tsx';
c = fs.readFileSync(f, 'utf8');
c = c.replace(/'Website & App Dev'/g, "'Website Development'");
fs.writeFileSync(f, c);

console.log("Services and Hero updated!");
