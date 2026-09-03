const fs = require('fs');
let content = fs.readFileSync('src/components/AdminPanel.tsx', 'utf8');

const regex = /onChange=\{\(url\) =>\s*setLocalConfig\(\{\s*\.\.\.localConfig,\s*logo:\s*\{\s*\.\.\.localConfig\.logo,\s*customLogoUrl:\s*url\s*\},/;
const replacement = `onChange={(url) =>
                  setLocalConfig({
                    ...localConfig,
                    logo: { ...localConfig.logo, customLogoUrl: url, iconVariant: url ? 'custom-image' : localConfig.logo?.iconVariant || 'network-orb' },`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/components/AdminPanel.tsx', content);
