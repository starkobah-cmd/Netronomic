const fs = require('fs');

function ensureImports(file) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('Music2')) {
    content = content.replace(/import \{([^}]+)\} from 'lucide-react';/, "import { $1, Music2 } from 'lucide-react';");
  }
  if (!content.includes('Pin')) {
    content = content.replace(/import \{([^}]+)\} from 'lucide-react';/, "import { $1, Pin } from 'lucide-react';");
  }
  fs.writeFileSync(file, content);
}

ensureImports('src/components/Footer.tsx');
ensureImports('src/components/ContactUs.tsx');
