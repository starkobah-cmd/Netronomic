const fs = require('fs');

const path = 'src/components/Navbar.tsx';
let content = fs.readFileSync(path, 'utf8');

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
                  href={currentView === 'main' ? link.href : (link.href === '#' ? '/' : \`/#\${link.href}\`)}
                  onClick={(e) => {
                    if (link.href === '#') {
                      e.preventDefault();
                      if (currentView !== 'main' && onNavigate) {
                        onNavigate('main');
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      if (currentView !== 'main' && onNavigate) {
                        e.preventDefault();
                        onNavigate('main');
                        setTimeout(() => {
                          const el = document.querySelector(link.href);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }
                    }
                  }}
                  className="text-[13px] font-semibold text-slate-700 hover:text-sky-600 px-3 py-1.5 rounded-xl hover:bg-white hover:shadow-xs transition-all duration-200"
                >
                  {link.label}
                </a>
              );
            })}`;

content = content.replace(oldDesktopMap, newDesktopMap);
fs.writeFileSync(path, content, 'utf8');
console.log('Fixed Desktop navbar mapping');
