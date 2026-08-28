import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Services', 'About Us', 'Why Us', 'Process', 'Portfolio', 'Pricing', 'Testimonials', 'FAQ', 'Blog', 'Contact'];

  const handleNavigation = (link: string) => {
    setIsOpen(false);
    
    if (link.toLowerCase() === 'blog') {
      navigate('/blog');
      return;
    }

    // Map 'About Us' to 'about', 'Why Us' to 'why-us', etc.
    let id = link.toLowerCase().replace(' us', '').replace(' ', '-');
    if (link === 'About Us') id = 'about';
    if (link === 'Why Us') id = 'why-choose-us'; // Ensure this maps correctly if needed, or just 'why-us'

    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback for tricky IDs like why-choose-us vs why-us
        const fallbackElement = document.getElementById(id.replace('-us', '-choose-us'));
        if (fallbackElement) {
           fallbackElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 cursor-pointer group" onClick={() => handleNavigation('home')}>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter leading-none group-hover:text-sky-500 transition-colors">
                NETRONOMIC<span className="text-sky-500">.</span>
              </span>
              <span className="text-[0.65rem] md:text-xs font-bold text-slate-400 tracking-[0.25em] uppercase mt-1">
                Digital Agency
              </span>
            </div>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden xl:flex items-center space-x-6">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleNavigation(link)}
                className={`text-[13px] font-bold uppercase tracking-wider transition-colors ${location.pathname === '/blog' && link === 'Blog' ? 'text-sky-500' : 'text-slate-500 hover:text-sky-500'}`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden xl:flex items-center space-x-4">
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-sm"
              title="WhatsApp Us"
            >
              <WhatsAppIcon />
            </a>
            <button 
              onClick={() => handleNavigation('contact')}
              className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-bold tracking-wide hover:bg-sky-500 transition-colors shadow-lg hover:shadow-sky-500/30"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 max-h-[85vh] overflow-y-auto"
          >
            <div className="px-6 pt-4 pb-8 space-y-1">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNavigation(link)}
                  className="block w-full text-left px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-slate-700 hover:text-sky-500 hover:bg-sky-50 rounded-xl transition-colors"
                >
                  {link}
                </button>
              ))}
              
              <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col space-y-3">
                <a 
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-full py-3.5 rounded-xl bg-emerald-50 text-emerald-600 font-bold uppercase tracking-wide hover:bg-emerald-100 transition-colors"
                >
                  <span className="mr-2"><WhatsAppIcon /></span> WhatsApp Us
                </a>
                <button 
                  onClick={() => handleNavigation('contact')}
                  className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold uppercase tracking-wide hover:bg-sky-500 transition-colors shadow-md"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
