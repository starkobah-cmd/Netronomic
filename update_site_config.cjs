const fs = require('fs');
let content = fs.readFileSync('src/data/siteConfig.ts', 'utf8');

// Imports
content = content.replace(
  "import { ServiceItem, PortfolioItem, PricingPlan, Testimonial, FAQItem, ProcessStep, WhyChooseItem } from '../types';",
  "import { ServiceItem, PortfolioItem, PricingPlan, Testimonial, FAQItem, ProcessStep, WhyChooseItem, CertificateItem } from '../types';"
);

content = content.replace(
  "import { agencyInfo, servicesData, portfolioData, pricingData, testimonialsData, faqData, whyChooseData, processSteps, aboutUsData } from './agencyData';",
  "import { agencyInfo, servicesData, portfolioData, pricingData, testimonialsData, faqData, whyChooseData, processSteps, aboutUsData, certificatesData } from './agencyData';"
);

// Interface
content = content.replace(
  "  portfolio: PortfolioItem[];",
  "  portfolio: PortfolioItem[];\n  certificates: CertificateItem[];"
);

content = content.replace(
  "  { id: 'sec-portfolio', name: 'Featured Portfolio', title: 'Our Latest Digital Masterpieces', subtitle: 'Case studies across web, mobile, and video', badge: '6. Portfolio', visible: true, order: 6 },",
  "  { id: 'sec-portfolio', name: 'Featured Portfolio', title: 'Our Latest Digital Masterpieces', subtitle: 'Case studies across web, mobile, and video', badge: '6. Portfolio', visible: true, order: 6 },\n  { id: 'sec-certificates', name: 'Certificates', title: 'Our Certifications & Awards', subtitle: 'Recognized industry excellence and credentials', badge: 'Certificates', visible: true, order: 6.5 },"
);

// Implementation
content = content.replace(
  "  portfolio: portfolioData,",
  "  portfolio: portfolioData,\n  certificates: certificatesData,"
);

fs.writeFileSync('src/data/siteConfig.ts', content);
