import { Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white tracking-tight mb-4">
              NETRONOMIC <span className="text-sky-500">WEB</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Building better digital identities through design, development and digital growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-sky-400 transition-colors text-sm">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-sky-400 transition-colors text-sm">Services</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-sky-400 transition-colors text-sm">About Us</button></li>
              <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-sky-400 transition-colors text-sm">Portfolio</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-sky-400 transition-colors text-sm">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-sm">
                <Phone size={16} className="mr-3 text-sky-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail size={16} className="mr-3 text-sky-500 flex-shrink-0" />
                <span>hello@netronomicweb.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 Netronomic Web. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
