const fs = require('fs');

// 1. Update Navbar.tsx
const navbarPath = 'src/components/Navbar.tsx';
let navbarContent = fs.readFileSync(navbarPath, 'utf8');

const oldNavLinks = `  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];`;

const newNavLinks = `  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];`;

navbarContent = navbarContent.replace(oldNavLinks, newNavLinks);
fs.writeFileSync(navbarPath, navbarContent, 'utf8');
console.log('Navbar updated');

// 2. Update App.tsx
const appPath = 'src/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');

const whyUsBlock = `          {/* 4. Why Choose Us */}
          {isSectionVisible('sec-why') && <WhyChooseUs />}`;
appContent = appContent.replace(whyUsBlock, `          {/* 4. Why Choose Us (Hidden by user request) */}`);

const faqBlock = `          {/* 9. FAQ */}
          {isSectionVisible('sec-faq') && <FAQ />}`;
appContent = appContent.replace(faqBlock, `          {/* 9. FAQ (Hidden by user request) */}`);

fs.writeFileSync(appPath, appContent, 'utf8');
console.log('App updated');
