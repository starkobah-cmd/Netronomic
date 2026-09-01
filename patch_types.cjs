const fs = require('fs');

let typesContent = fs.readFileSync('src/types.ts', 'utf8');

typesContent = typesContent.replace(
  /export type PortfolioCategory = 'all' \| 'websites' \| 'logos' \| 'posters' \| 'apps' \| 'video';/,
  `export type PortfolioCategory = string;`
);

fs.writeFileSync('src/types.ts', typesContent);
