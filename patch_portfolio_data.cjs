const fs = require('fs');

const categories = [
  'Website Design & Development',
  'Logo Design',
  'Poster & Graphic Design',
  'Information Reel Editing',
  'App Development',
  'Blog & Content Writing',
  'SEO Services',
  'Profile Backlinks',
  'Social Backlinks'
];

let content = fs.readFileSync('src/data/agencyData.ts', 'utf8');

// Replace the portfolioData array
const regex = /export const portfolioData: PortfolioItem\[\] = \[[\s\S]*?\];/;
const newPortfolioData = `export const PORTFOLIO_CATEGORIES = [
  'Website Design & Development',
  'Logo Design',
  'Poster & Graphic Design',
  'Information Reel Editing',
  'App Development',
  'Blog & Content Writing',
  'SEO Services',
  'Profile Backlinks',
  'Social Backlinks'
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Horizon SaaS Platform',
    category: 'Website Design & Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'Modern sky blue analytics dashboard featuring real-time data visualization and lightning fast React interface.',
    detailedDescription: 'We built a complete analytics suite from the ground up, focusing on a robust frontend architecture and optimized real-time data flow.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Dashboard'],
    technologies: ['React', 'Tailwind', 'Node.js', 'PostgreSQL'],
    client: 'Horizon Tech Inc.',
    stats: '240% Conversion Increase',
    featured: true,
  },
  {
    id: 'port-2',
    title: 'Aura Minimalist Branding',
    category: 'Logo Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    description: 'Geometric emblem and brand identity suite for a high-end eco-lifestyle brand.',
    detailedDescription: 'Created a unique geometric logo prioritizing scalability across print and digital mediums while conveying an eco-conscious philosophy.',
    tags: ['Logo Design', 'Vector', 'Branding Guide'],
    client: 'Aura Studio',
    stats: 'Brand Identity Award 2024',
    featured: true,
  },
  {
    id: 'port-3',
    title: 'Apex Mobility App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    description: 'Cross-platform mobile application with live GPS tracking, wallet payments, and sky blue user interface.',
    tags: ['React Native', 'Firebase', 'Maps API'],
    client: 'Apex Mobility',
    stats: '50,000+ Downloads',
    featured: true,
  },
  {
    id: 'port-4',
    title: 'Tech Summit Event Poster',
    category: 'Poster & Graphic Design',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
    description: 'High-contrast promotional poster series designed for an international developer conference.',
    tags: ['Print & Digital', '300 DPI', 'Photoshop'],
    client: 'Global Tech Con',
    featured: true,
  },
  {
    id: 'port-5',
    title: 'Viral AI Tech Reel Series',
    category: 'Information Reel Editing',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    description: 'High-retention short-form video series explaining AI concepts with custom motion graphics.',
    tags: ['Premiere Pro', 'After Effects', 'Captioning'],
    client: 'TechTok Media',
    stats: '1.2M+ Views',
    featured: true,
  },
  {
    id: 'port-6',
    title: 'E-Commerce SEO Overhaul',
    category: 'SEO Services',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
    description: 'Complete technical and on-page SEO optimization for a major online retailer.',
    tags: ['Technical SEO', 'Keyword Strategy', 'Content Optimization'],
    client: 'StyleStore Online',
    stats: '315% Organic Traffic Growth',
    featured: true,
  },
  {
    id: 'port-7',
    title: 'B2B Authority Content Strategy',
    category: 'Blog & Content Writing',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive blog writing and content strategy establishing thought leadership in the FinTech space.',
    tags: ['Content Strategy', 'Copywriting', 'B2B'],
    client: 'FinServe Solutions',
    featured: false,
  },
  {
    id: 'port-8',
    title: 'High-DA Profile Building',
    category: 'Profile Backlinks',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80',
    description: 'Strategic placement of authoritative profile backlinks to build domain authority and trust.',
    tags: ['Off-Page SEO', 'Link Building', 'Authority Profiles'],
    client: 'Startup Hub',
    featured: false,
  },
  {
    id: 'port-9',
    title: 'Social Signal Amplification',
    category: 'Social Backlinks',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    description: 'Generated authentic social signals across platforms to accelerate content indexing and visibility.',
    tags: ['Social Signals', 'Link Building', 'Brand Awareness'],
    client: 'Local Services Inc',
    featured: false,
  }
];`;

content = content.replace(regex, newPortfolioData);
fs.writeFileSync('src/data/agencyData.ts', content);

