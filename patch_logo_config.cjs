const fs = require('fs');

let siteConfig = fs.readFileSync('src/data/siteConfig.ts', 'utf8');

if (!siteConfig.includes('logoSize')) {
  siteConfig = siteConfig.replace(
    /iconVariant: 'network-orb' \| 'custom-image';/,
    `iconVariant: 'network-orb' | 'custom-image' | 'none';
  logoSize?: number;
  gap?: number;
  showCustomButton?: boolean;
  customButtonText?: string;
  customButtonUrl?: string;
  customButtonColor?: string;
  customButtonShine?: boolean;
  customButtonBorder?: boolean;`
  );
}

fs.writeFileSync('src/data/siteConfig.ts', siteConfig);
