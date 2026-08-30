const fs = require('fs');

const p = 'src/components/PortfolioModal.tsx';
let pc = fs.readFileSync(p, 'utf8');
pc = pc.replace(/href=\{\`https:\/\/wa\.me\/[^`]+\`\}/g, 'href="https://wa.me/923020487103"');
fs.writeFileSync(p, pc, 'utf8');

const s = 'src/components/ServiceModal.tsx';
let sc = fs.readFileSync(s, 'utf8');
sc = sc.replace(/href=\{\`https:\/\/wa\.me\/[^`]+\`\}/g, 'href="https://wa.me/923020487103"');
fs.writeFileSync(s, sc, 'utf8');

console.log('Modals fixed.');
