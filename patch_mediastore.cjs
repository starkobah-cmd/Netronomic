const fs = require('fs');
let content = fs.readFileSync('src/utils/mediaStore.ts', 'utf8');

content = content.replace(
  /export function processFileToMediaItem\(file: File, category: MediaItem\['type'\] = 'image'\): Promise<MediaItem> \{[\s\S]*?reader\.readAsDataURL\(file\);\n  \}\);\n\}/,
  `export function processFileToMediaItem(file: File, category: MediaItem['type'] = 'image'): Promise<MediaItem> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      const img = new Image();
      img.onload = () => {
        // Compress image to avoid QuotaExceeded
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = category === 'logo' || category === 'icon' || category === 'avatar' ? 400 : 1200;
        const MAX_HEIGHT = category === 'logo' || category === 'icon' || category === 'avatar' ? 400 : 1200;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/webp', 0.8);
          
          const newItem: MediaItem = {
            id: \`media-\${Date.now()}-\${Math.random().toString(36).substr(2, 5)}\`,
            title: file.name.replace(/\\.[^/.]+$/, ''),
            url: compressedDataUrl,
            type: category,
            sizeFormatted: formatFileSize(Math.round(compressedDataUrl.length * 0.75)),
            fileSize: Math.round(compressedDataUrl.length * 0.75),
            dimensions: \`\${Math.round(width)} x \${Math.round(height)} px\`,
            uploadedAt: new Date().toISOString().split('T')[0],
            altText: file.name.replace(/\\.[^/.]+$/, '')
          };
          resolve(newItem);
        } else {
          resolve({
            id: \`media-\${Date.now()}-\${Math.random().toString(36).substr(2, 5)}\`,
            title: file.name,
            url: dataUrl,
            type: category,
            sizeFormatted: formatFileSize(file.size),
            fileSize: file.size,
            dimensions: 'Unknown',
            uploadedAt: new Date().toISOString().split('T')[0]
          });
        }
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = dataUrl;
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}`
);

fs.writeFileSync('src/utils/mediaStore.ts', content);
