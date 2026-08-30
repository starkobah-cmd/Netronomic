const fs = require('fs');

let content = fs.readFileSync('src/components/AdminLogin.tsx', 'utf8');

// Remove the Auto-fill block
content = content.replace(
  /\{\/\* Default Admin Credentials Banner \*\/\}[\s\S]*?\{\/\* Back to Public Site Link \*\/\}/m,
  `{/* Back to Public Site Link */}`
);

// Also remove the fillDefaultCredentials function to keep code clean
content = content.replace(
  /const fillDefaultCredentials = \(\) => \{[\s\S]*?\};\n/m,
  ''
);

fs.writeFileSync('src/components/AdminLogin.tsx', content);
console.log('Login hint removed');
