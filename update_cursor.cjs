const fs = require('fs');

let content = fs.readFileSync('src/components/CustomCursor.tsx', 'utf8');

// Update lerp factors and refs if needed. Let's replace aura and trail with a single dot.
content = content.replace(
  /const auraRef = useRef<HTMLDivElement>\(null\);\n  const trailRef = useRef<HTMLDivElement>\(null\);/,
  'const dotRef = useRef<HTMLDivElement>(null);'
);

content = content.replace(
  /const auraPos = useRef\(\{ x: -100, y: -100 \}\);\n  const trailPos = useRef\(\{ x: -100, y: -100 \}\);/,
  'const dotPos = useRef({ x: -100, y: -100 });'
);

content = content.replace(
  /auraPos\.current\.x \+= \(mousePos\.current\.x - auraPos\.current\.x\) \* 0\.12;\n      auraPos\.current\.y \+= \(mousePos\.current\.y - auraPos\.current\.y\) \* 0\.12;\n      trailPos\.current\.x \+= \(mousePos\.current\.x - trailPos\.current\.x\) \* 0\.07;\n      trailPos\.current\.y \+= \(mousePos\.current\.y - trailPos\.current\.y\) \* 0\.07;/,
  'dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.8;\n      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.8;'
);

content = content.replace(
  /if \(auraRef\.current\) \{[\s\S]*?if \(trailRef\.current\) \{[\s\S]*?\}/,
  `if (dotRef.current) {
        dotRef.current.style.transform = \`translate3d(\${dotPos.current.x}px, \${dotPos.current.y}px, 0px) translate(-50%, -50%)\`;
      }`
);

// Replace the return JSX part
content = content.replace(
  /\{\/\* 1\. Deep 3D Ambient Glow Aura \*\/\}[\s\S]*?\{\/\* 3\. Futuristic 3D Ring with Reticle Notches \*\/\}/,
  `{/* 1. Center Point (Fast moving) */}
      <div
        ref={dotRef}
        className={\`pointer-events-none fixed top-0 left-0 rounded-full transition-opacity duration-300 \${
          isVisible && !isInput ? 'opacity-100' : 'opacity-0'
        }\`}
        style={{
          width: isHovered ? '4px' : '6px',
          height: isHovered ? '4px' : '6px',
          backgroundColor: primaryColor,
          willChange: 'transform',
        }}
      />
      {/* 2. Futuristic 3D Ring (Smaller) */}`
);

content = content.replace(
  /width: isHovered \? '56px' : isClicking \? '28px' : '40px',\n          height: isHovered \? '56px' : isClicking \? '28px' : '40px',/,
  `width: isHovered ? '40px' : isClicking ? '20px' : '28px',
          height: isHovered ? '40px' : isClicking ? '20px' : '28px',`
);

content = content.replace(
  /boxShadow: isHovered\s*\? `0 0 25px \$\{primaryColor\}60, inset 0 0 15px \$\{primaryColor\}30`\s*: `0 0 12px \$\{primaryColor\}30`,/,
  `boxShadow: isHovered
            ? \`0 0 15px \${primaryColor}40, inset 0 0 10px \${primaryColor}20\`
            : 'none',`
);

fs.writeFileSync('src/components/CustomCursor.tsx', content);
