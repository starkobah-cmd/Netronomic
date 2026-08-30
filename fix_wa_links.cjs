const fs = require('fs');

function replaceWaLink(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace simple wa.me/number logic with a conditional check
  content = content.replace(
    /\`https:\/\/wa\.me\/\$\{([a-zA-Z0-9_?.]+whatsappNumber)\}\`/g,
    `($1?.startsWith('http') ? $1 : \`https://wa.me/\${$1}\`)`
  );
  
  // Replace complex ones with text encoding (like in Hero, ContactUs, PortfolioModal, ServiceModal)
  content = content.replace(
    /\`https:\/\/wa\.me\/\$\{([a-zA-Z0-9_?.]+whatsappNumber)\}\?text=\$\{encodeURIComponent\(([^)]+)\)\}\`/g,
    `($1?.startsWith('http') ? $1 : \`https://wa.me/\${$1}?text=\${encodeURIComponent($2)}\`)`
  );
  
  // Hero is a bit different
  content = content.replace(
    /\`https:\/\/wa\.me\/\$\{activeAgency\.whatsappNumber\}\?text=Hi\%20\$\{encodeURIComponent\(activeAgency\.name\)\},\%20I\%20am\%20interested\%20in\%20your\%20services\.\`/g,
    `(activeAgency.whatsappNumber?.startsWith('http') ? activeAgency.whatsappNumber : \`https://wa.me/\${activeAgency.whatsappNumber}?text=Hi%20\${encodeURIComponent(activeAgency.name)},%20I%20am%20interested%20in%20your%20services.\`)`
  );

  fs.writeFileSync(filePath, content);
}

replaceWaLink('src/components/Navbar.tsx');
replaceWaLink('src/components/Hero.tsx');
replaceWaLink('src/components/Footer.tsx');
replaceWaLink('src/components/ContactUs.tsx');
replaceWaLink('src/components/PortfolioModal.tsx');
replaceWaLink('src/components/ServiceModal.tsx');
replaceWaLink('src/components/AdminPanel.tsx');

console.log('WhatsApp links updated to handle full URLs');
