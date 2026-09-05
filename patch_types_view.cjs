const fs = require('fs');
let content = fs.readFileSync('src/types.ts', 'utf8');
content = content.replace(
  /export type BlogViewMode = 'main' \| 'blog-list' \| 'single-blog' \| 'blog-admin' \| 'site-admin';/,
  "export type BlogViewMode = 'main' | 'blog-list' | 'single-blog' | 'blog-admin' | 'site-admin' | 'portfolio-list' | 'portfolio-detail';"
);
fs.writeFileSync('src/types.ts', content);
