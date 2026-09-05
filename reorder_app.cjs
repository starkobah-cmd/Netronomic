const fs = require('fs');
const file = 'src/App.tsx';

let content = fs.readFileSync(file, 'utf8');

const regex = /<main>([\s\S]*?)<\/main>/;
const match = content.match(regex);

if (match) {
  const replacement = `<main>
          {/* 1. Hero Section (Home) */}
          {isSectionVisible('sec-hero') && (
            <Hero
              siteConfig={siteConfig}
              onGetStarted={() => handleOpenQuote('Website Design & Development')}
              onExploreServices={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          )}

          {/* 2. About Us */}
          {isSectionVisible('sec-about') && <AboutUs />}

          {/* 3. Our Services */}
          {isSectionVisible('sec-services') && (
            <Services
              onSelectService={(service) => setSelectedService(service)}
              onRequestQuoteForService={(title) => handleScrollToContactWithService(title)}
            />
          )}

          {/* 4. Our Process */}
          {isSectionVisible('sec-process') && <Process />}

          {/* 5. Portfolio */}
          {isSectionVisible('sec-portfolio') && (
            <Portfolio
              items={siteConfig.portfolio || []}
              siteConfig={siteConfig}
              onSelectPortfolio={(item) => {
                setSelectedPortfolio(item);
                setBlogView('portfolio-detail');
                window.scrollTo(0, 0);
              }}
              onViewAll={() => {
                setBlogView('portfolio-list');
                window.scrollTo(0, 0);
              }}
            />
          )}

          {/* 6. Pricing */}
          {isSectionVisible('sec-pricing') && (
            <Pricing
              onSelectPlan={(planName) => handleScrollToContactWithService(planName)}
            />
          )}

          {/* 7. Testimonials */}
          {isSectionVisible('sec-testimonials') && <Testimonials />}

          {/* 8. Contact Us */}
          {isSectionVisible('sec-contact') && (
            <ContactUs
              preselectedService={preselectedServiceTitle}
              siteConfig={siteConfig}
              onAddInquiry={handleAddInquiry}
            />
          )}
        </main>`;

  content = content.replace(regex, replacement);
  fs.writeFileSync(file, content);
  console.log("Sections reordered.");
} else {
  console.log("Could not find <main> block.");
}
