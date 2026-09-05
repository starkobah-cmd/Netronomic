const fs = require('fs');

function fixItems(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\{ items,/g, '{ items = [],');
  content = content.replace(/\{ items \= \[\],/g, '{ items = [],');
  content = content.replace(/\{ items, /g, '{ items = [], ');
  content = content.replace(/\{ item, allItems, /g, '{ item, allItems = [], ');
  fs.writeFileSync(file, content);
}

fixItems('src/components/Portfolio.tsx');
fixItems('src/components/PortfolioPage.tsx');
fixItems('src/components/PortfolioDetail.tsx');

