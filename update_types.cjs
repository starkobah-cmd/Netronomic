const fs = require('fs');
let content = fs.readFileSync('src/types.ts', 'utf8');

content = content.replace(
  "  stats?: string;\n  link?: string;\n}",
  "  stats?: string;\n  link?: string;\n  videoUrl?: string;\n}"
);

fs.writeFileSync('src/types.ts', content, 'utf8');
console.log('types updated');
