const fs = require('fs');

let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Update navLinks array to include Home at the beginning and reorder About Us
content = content.replace(
  /const navLinks = \[\s*\{ label: 'Services', href: '#services' \},\s*\{ label: 'About Us', href: '#about' \},\s*\{ label: 'Process', href: '#process' \},\s*\{ label: 'Portfolio', href: '#portfolio' \},\s*\{ label: 'Pricing', href: '#pricing' \},\s*\{ label: 'Testimonials', href: '#testimonials' \},\s*\{ label: 'Contact', href: '#contact' \},\s*\];/m,
  `const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];`
);

fs.writeFileSync('src/components/Navbar.tsx', content);
console.log('Navbar updated');
