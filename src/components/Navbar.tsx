import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

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

  const links = ['Home', 'Services', 'About', 'Why Us', 'Process', 'Portfolio', 'Pricing', 'Blog', 'Testimonials', 'FAQ', 'Contact'];

  const handleNavigation = (link: string) => {
    setIsOpen(false);
    
    if (link.toLowerCase() === 'blog') {
      navigate('/blog');
      return;
    }

    const id = link.toLowerCase().replace(' ', '-');
    
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigation('home')}>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">NETRONOMIC <span className="text-sky-500">WEB</span></span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleNavigation(link)}
                className={`text-sm font-medium transition-colors ${location.pathname === '/blog' && link === 'Blog' ? 'text-sky-500' : 'text-slate-600 hover:text-sky-500'}`}
              >
                {link}
              </button>
            ))}
            <button 
              onClick={() => handleNavigation('contact')}
              className="px-6 py-2.5 rounded-full bg-sky-500 text-white font-medium hover:bg-sky-600 transition-colors shadow-sm hover:shadow-md"
            >
              Contact Us
            </button>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNavigation(link)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-slate-600 hover:text-sky-500 hover:bg-slate-50 rounded-lg"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
