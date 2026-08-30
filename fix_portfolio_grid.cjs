const fs = require('fs');
let content = fs.readFileSync('src/components/Portfolio.tsx', 'utf8');

const oldImage = `<img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />`;

const newMedia = `{item.videoUrl ? (
                      <video
                        src={item.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}`;

content = content.replace(oldImage, newMedia);

// Make sure to add Play icon import if not present
if (!content.includes('Play,')) {
  content = content.replace("import { ExternalLink, Tag, Eye } from 'lucide-react';", "import { ExternalLink, Tag, Eye, Play } from 'lucide-react';");
}

fs.writeFileSync('src/components/Portfolio.tsx', content, 'utf8');
console.log('PortfolioGrid updated for videos.');
