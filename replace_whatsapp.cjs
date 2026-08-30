const fs = require('fs');
const glob = require('fs').readdirSync;

function replaceInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace backtick links like href={`https://wa.me/${...}`}
  content = content.replace(/href=\{\`https:\/\/wa\.me\/[^`]+\`\}/g, 'href="https://wa.me/923020487103"');
  
  // Replace direct string return in ContactUs.tsx
  content = content.replace(/return \`https:\/\/wa\.me\/\$\{activeAgency\.whatsappNumber\}\?text=\$\{encodeURIComponent\(text\)\}\`;/g, 'return "https://wa.me/923020487103";');
  
  // Replace double quotes if any were missed
  content = content.replace(/href="https:\/\/wa\.me\/[^"]+"/g, 'href="https://wa.me/923020487103"');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

const filesToUpdate = [
  'src/components/AdminPanel.tsx',
  'src/components/ContactUs.tsx',
  'src/components/Navbar.tsx',
  'src/components/PortfolioModal.tsx',
  'src/components/Hero.tsx',
  'src/components/ServiceModal.tsx'
];

filesToUpdate.forEach(replaceInFile);
console.log('WhatsApp links replaced.');
