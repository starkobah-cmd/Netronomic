const fs = require('fs');

function replaceInFile(filePath, regex, replacement) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(regex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
}

// ContactUs.tsx
replaceInFile('src/components/ContactUs.tsx', /return "https:\/\/wa\.me\/923020487103";/g, 'return `https://wa.me/${activeAgency.whatsappNumber}?text=${encodeURIComponent(text)}`;');
replaceInFile('src/components/ContactUs.tsx', /<a href=\{\`tel:\+92 3020487103\`\} className="text-sm font-bold text-slate-800 hover:text-sky-600 transition-colors">/g, '<a href={`tel:${activeAgency.phone}`} className="text-sm font-bold text-slate-800 hover:text-sky-600 transition-colors">');
replaceInFile('src/components/ContactUs.tsx', /\+92 3020487103/g, '{activeAgency.phone}');
replaceInFile('src/components/ContactUs.tsx', /<a href=\{\`mailto:daimali2453@gmail\.com\`\}/g, '<a href={`mailto:${activeAgency.email}`}');
replaceInFile('src/components/ContactUs.tsx', /daimali2453@gmail\.com/g, '{activeAgency.email}');

// Navbar.tsx
replaceInFile('src/components/Navbar.tsx', /href="https:\/\/wa\.me\/923020487103"/g, 'href={`https://wa.me/${agencyData.whatsappNumber}`}');

// Hero.tsx
replaceInFile('src/components/Hero.tsx', /href="https:\/\/wa\.me\/923020487103"/g, 'href={`https://wa.me/${activeAgency.whatsappNumber}?text=Hi%20${encodeURIComponent(activeAgency.name)},%20I%20am%20interested%20in%20your%20services.`}');

// Footer.tsx
replaceInFile('src/components/Footer.tsx', /href="https:\/\/wa\.me\/923020487103"/g, 'href={`https://wa.me/${activeAgency.whatsappNumber}`}');

// AdminPanel.tsx
replaceInFile('src/components/AdminPanel.tsx', /href="https:\/\/wa\.me\/923020487103"/g, 'href={`https://wa.me/${localConfig.agency?.whatsappNumber}`}');

// PortfolioModal.tsx
replaceInFile('src/components/PortfolioModal.tsx', /href="https:\/\/wa\.me\/923020487103"/g, 'href={`https://wa.me/${agencyInfo.whatsappNumber}?text=${encodeURIComponent(\'Hi, I saw your portfolio and would like to talk.\')}`}');

// ServiceModal.tsx
replaceInFile('src/components/ServiceModal.tsx', /href="https:\/\/wa\.me\/923020487103"/g, 'href={`https://wa.me/${agencyInfo.whatsappNumber}?text=${encodeURIComponent(\'Hi, I would like to inquire about this service.\')}`}');

console.log('Restored dynamic links');
