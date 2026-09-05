const fs = require('fs');

function replaceInFile(file, replacements) {
  let content = fs.readFileSync(file, 'utf8');
  for (const r of replacements) {
    content = content.replace(r.search, r.replace);
  }
  fs.writeFileSync(file, content);
}

replaceInFile('src/components/Hero.tsx', [
  { search: /Web & App Build/g, replace: 'Web Build' },
  { search: /Website & Mobile App Suite/g, replace: 'Website Suite' },
]);

replaceInFile('src/components/ContactUs.tsx', [
  { search: /\(Full Web\/App Suite\)/g, replace: '(Full Web Suite)' },
]);

replaceInFile('src/data/siteConfig.ts', [
  { search: /Web, App & SEO/g, replace: 'Web & SEO' },
  { search: /Web & App Build/g, replace: 'Web Build' },
]);

replaceInFile('src/components/AdminPanel.tsx', [
  { search: /e.g. App Development, SEO/g, replace: 'e.g. Web Development, SEO' },
]);

replaceInFile('src/utils/mediaStore.ts', [
  { search: /Mobile App UX Engineering/g, replace: 'Web UX Engineering' },
]);

console.log("Cleaned all app references");
