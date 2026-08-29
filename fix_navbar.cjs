const fs = require('fs');

const path = 'src/components/Navbar.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Update the navLinks array
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
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '#', isBlog: true },
    { label: 'Contact', href: '#contact' },
  ];`;

content = content.replace(oldNavLinks, newNavLinks);

// 2. Update the Desktop map
const oldDesktopMap = `{navLinks.map((link) => (
              <a
                key={link.label}
                href={currentView === 'main' ? link.href : \`#\${link.href}\`}
                onClick={(e) => {
                  if (currentView !== 'main' && onNavigate) {
                    onNavigate('main');
                    setTimeout(() => {
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className="text-[13px] font-semibold text-slate-700 hover:text-sky-600 px-3 py-1.5 rounded-xl hover:bg-white hover:shadow-xs transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            {/* Dedicated Blog Link */}
            <button
              onClick={handleBlogClick}
              className={\`text-[13px] font-bold flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer \${
                currentView === 'blog-list' || currentView === 'single-blog'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'text-sky-700 bg-sky-100/80 hover:bg-sky-500 hover:text-white border border-sky-200/80'
              }\`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Blog</span>
            </button>`;

const newDesktopMap = `{navLinks.map((link) => {
              if (link.isBlog) {
                return (
                  <button
                    key={link.label}
                    onClick={handleBlogClick}
                    className={\`text-[13px] font-bold flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer \${
                      currentView === 'blog-list' || currentView === 'single-blog'
                        ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                        : 'text-sky-700 bg-sky-100/80 hover:bg-sky-500 hover:text-white border border-sky-200/80'
                    }\`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{link.label}</span>
                  </button>
                );
              }
              return (
                <a
                  key={link.label}
                  href={currentView === 'main' ? link.href : \`/\`}
                  onClick={(e) => {
                    if (link.href === '#') {
                      e.preventDefault();
                      if (currentView !== 'main' && onNavigate) {
                        onNavigate('main');
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (currentView !== 'main' && onNavigate) {
                      e.preventDefault();
                      onNavigate('main');
                      setTimeout(() => {
                        const el = document.querySelector(link.href);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="text-[13px] font-semibold text-slate-700 hover:text-sky-600 px-3 py-1.5 rounded-xl hover:bg-white hover:shadow-xs transition-all duration-200"
                >
                  {link.label}
                </a>
              );
            })}`;

content = content.replace(oldDesktopMap, newDesktopMap);

// 3. Update the Mobile map
const oldMobileMap = `{navLinks.map((link) => (
              <a
                key={link.label}
                href={currentView === 'main' ? link.href : \`#\${link.href}\`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (currentView !== 'main' && onNavigate) {
                    onNavigate('main');
                  }
                }}
                className="text-sm font-medium text-slate-700 hover:text-sky-600 p-2 rounded-md hover:bg-sky-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleBlogClick(e);
              }}
              className="text-sm font-bold text-sky-600 bg-sky-50 p-2 rounded-md flex items-center gap-2 col-span-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Blog & Insights</span>
            </button>`;

const newMobileMap = `{navLinks.map((link) => {
              if (link.isBlog) {
                return (
                  <button
                    key={link.label}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleBlogClick(e);
                    }}
                    className="text-sm font-bold text-sky-600 bg-sky-50 p-2 rounded-md flex items-center gap-2 col-span-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{link.label}</span>
                  </button>
                );
              }
              return (
                <a
                  key={link.label}
                  href={currentView === 'main' ? link.href : \`/\`}
                  onClick={(e) => {
                    if (link.href === '#') {
                      e.preventDefault();
                    }
                    setMobileMenuOpen(false);
                    if (currentView !== 'main' && onNavigate) {
                      e.preventDefault();
                      onNavigate('main');
                      if (link.href !== '#') {
                        setTimeout(() => {
                          const el = document.querySelector(link.href);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    } else if (link.href === '#') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-sm font-medium text-slate-700 hover:text-sky-600 p-2 rounded-md hover:bg-sky-50 transition-colors"
                >
                  {link.label}
                </a>
              );
            })}`;

content = content.replace(oldMobileMap, newMobileMap);

fs.writeFileSync(path, content, 'utf8');
console.log('Navbar updated');
