const fs = require('fs');
let content = fs.readFileSync('src/types.ts', 'utf8');

const certInterface = `
export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  frontImage: string;
  backImage: string;
  description: string;
}
`;

content = content.replace(
  "export interface PortfolioItem {",
  certInterface + "\nexport interface PortfolioItem {"
);

fs.writeFileSync('src/types.ts', content);
