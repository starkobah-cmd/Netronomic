const fs = require('fs');

// App.tsx
try {
  let appContent = fs.readFileSync('src/App.tsx', 'utf8');
  appContent = appContent.replace("import { Certificates } from './components/Certificates';\n", "");
  appContent = appContent.replace(/\{\/\* 6\.5 Certificates \*\/\}\s*\{isSectionVisible\('sec-certificates'\) && \(\s*<Certificates[\s\S]*?\/>\s*\)\}\s*/, "");
  fs.writeFileSync('src/App.tsx', appContent);
} catch (e) { console.error("App.tsx error", e); }

// Navbar.tsx
try {
  let navContent = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
  navContent = navContent.replace(/,\s*\{\s*label:\s*'Certificates',\s*href:\s*'#certificates'\s*\}/, "");
  fs.writeFileSync('src/components/Navbar.tsx', navContent);
} catch (e) { console.error("Navbar.tsx error", e); }

// siteConfig.ts
try {
  let siteConfigContent = fs.readFileSync('src/data/siteConfig.ts', 'utf8');
  siteConfigContent = siteConfigContent.replace(", CertificateItem", "");
  siteConfigContent = siteConfigContent.replace(", certificatesData", "");
  siteConfigContent = siteConfigContent.replace(/\n\s*certificates:\s*CertificateItem\[\];/, "");
  siteConfigContent = siteConfigContent.replace(/,\s*\{\s*id:\s*'sec-certificates'[\s\S]*?order:\s*6\.5\s*\}/, "");
  siteConfigContent = siteConfigContent.replace(/,\s*certificates:\s*certificatesData/, "");
  fs.writeFileSync('src/data/siteConfig.ts', siteConfigContent);
} catch (e) { console.error("siteConfig.ts error", e); }

// agencyData.ts
try {
  let agencyDataContent = fs.readFileSync('src/data/agencyData.ts', 'utf8');
  agencyDataContent = agencyDataContent.replace(/,\s*CertificateItem/, "");
  agencyDataContent = agencyDataContent.replace(/\/\/ Certificates\s*export const certificatesData: CertificateItem\[\] = \[[\s\S]*?\];\s*/, "");
  fs.writeFileSync('src/data/agencyData.ts', agencyDataContent);
} catch (e) { console.error("agencyData.ts error", e); }

// types.ts
try {
  let typesContent = fs.readFileSync('src/types.ts', 'utf8');
  typesContent = typesContent.replace(/export interface CertificateItem\s*\{[\s\S]*?\}\s*/, "");
  fs.writeFileSync('src/types.ts', typesContent);
} catch (e) { console.error("types.ts error", e); }
