const fs = require('fs');
let content = fs.readFileSync('src/components/PortfolioModal.tsx', 'utf8');

const oldImage = `<img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />`;

const newMedia = `{item.videoUrl ? (
              <video
                src={item.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            )}`;

content = content.replace(oldImage, newMedia);
fs.writeFileSync('src/components/PortfolioModal.tsx', content, 'utf8');
console.log('PortfolioModal updated for videos.');
