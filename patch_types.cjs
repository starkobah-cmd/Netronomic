const fs = require('fs');
let content = fs.readFileSync('src/types.ts', 'utf8');
content = content.replace(
  /export interface PortfolioItem \{[\s\S]*?\}/,
  `export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel?: string;
  image: string;
  description: string;
  detailedDescription?: string;
  images?: string[];
  tags: string[];
  technologies?: string[];
  client?: string;
  stats?: string;
  link?: string;
  videoUrl?: string;
  date?: string;
  featured?: boolean;
}`
);
fs.writeFileSync('src/types.ts', content);
