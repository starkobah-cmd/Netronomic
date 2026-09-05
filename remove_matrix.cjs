const fs = require('fs');

const file = 'src/components/Pricing.tsx';
let content = fs.readFileSync(file, 'utf8');

const startMarker = '{/* COMPARISON TABLE SECTION */}';
const endMarker = '{/* BELOW CARDS: NEED A CUSTOM SOLUTION CTA */}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + content.substring(endIndex);
  fs.writeFileSync(file, content);
  console.log("Removed comparison matrix successfully!");
} else {
  console.log("Could not find markers.");
}
