const fs = require('fs');
let content = fs.readFileSync('src/components/ContactUs.tsx', 'utf8');

// Update Email
content = content.replace(
  /\`mailto:\$\{activeAgency\.email\}\`/g,
  "\`mailto:daimali2453@gmail.com\`"
).replace(
  /\{activeAgency\.email\}/g,
  "daimali2453@gmail.com"
);

// Update Phone
content = content.replace(
  /\`tel:\$\{activeAgency\.phone\}\`/g,
  "\`tel:+92 03020487103\`"
).replace(
  /\{activeAgency\.phone\}/g,
  "+92 03020487103"
);

fs.writeFileSync('src/components/ContactUs.tsx', content, 'utf8');
console.log('ContactUs updated');
