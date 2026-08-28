#!/bin/bash

mkdir -p src/components

cat << 'INNER_EOF' > src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'Services', 'About', 'Why Us', 'Process', 'Portfolio', 'Pricing', 'Testimonials', 'FAQ', 'Contact'];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id.toLowerCase().replace(' ', '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">SKYLINE <span className="text-sky-500">DIGITAL</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors"
              >
                {link}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 rounded-full bg-sky-500 text-white font-medium hover:bg-sky-600 transition-colors shadow-sm hover:shadow-md"
            >
              Contact Us
            </button>
          </div>

          <div className="md:hidden">
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
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
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
INNER_EOF

cat << 'INNER_EOF' > src/components/Hero.tsx
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-white -z-10" />
      
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 bg-sky-100/50 rounded-full px-4 py-2 mb-6 border border-sky-100">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span className="text-sm font-semibold text-sky-700 uppercase tracking-wider">Premium Digital Agency</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Expert Solutions for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Digital Identity.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              We transform your ideas into professional digital experiences, powerful visual identities, and growth-focused digital solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-sky-500 text-white font-medium hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white text-slate-700 font-medium hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm"
              >
                View Portfolio
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 p-8 flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-tr from-sky-50 to-white" />
               <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full">
                  <div className="bg-sky-100 rounded-2xl p-6 flex flex-col justify-end transform transition-transform hover:-translate-y-2">
                    <div className="w-10 h-10 bg-white rounded-full mb-4 flex items-center justify-center shadow-sm">
                      <div className="w-4 h-4 bg-sky-500 rounded-full" />
                    </div>
                    <div className="h-2 w-20 bg-sky-200 rounded-full mb-2" />
                    <div className="h-2 w-12 bg-sky-200 rounded-full" />
                  </div>
                  <div className="bg-slate-800 rounded-2xl p-6 flex flex-col justify-end transform transition-transform hover:-translate-y-2 translate-y-8">
                     <div className="h-2 w-full bg-slate-700 rounded-full mb-2" />
                     <div className="h-2 w-3/4 bg-slate-700 rounded-full mb-2" />
                     <div className="h-2 w-1/2 bg-slate-700 rounded-full" />
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-6 transform transition-transform hover:-translate-y-2 -translate-y-8">
                    <div className="w-full h-1/2 bg-white rounded-xl shadow-sm mb-4" />
                    <div className="h-2 w-full bg-blue-200 rounded-full mb-2" />
                    <div className="h-2 w-2/3 bg-blue-200 rounded-full" />
                  </div>
                  <div className="bg-sky-500 rounded-2xl p-6 flex items-center justify-center transform transition-transform hover:-translate-y-2">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
INNER_EOF

cat << 'INNER_EOF' > src/components/Services.tsx
import { motion } from 'motion/react';
import { Monitor, PenTool, Image, Video, Smartphone, FileText, Search, Link, Share2 } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: 'Website Design & Development',
    description: 'Professional responsive websites for businesses, brands and organizations.',
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: 'Logo Design',
    description: 'Modern and memorable logos that represent your brand identity.',
  },
  {
    icon: <Image className="w-6 h-6" />,
    title: 'Poster Design',
    description: 'Creative promotional posters for businesses, products, events and social media.',
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: 'Information Reel Editing',
    description: 'Professional short-form information reels and video editing for social platforms.',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'App Development',
    description: 'Modern and user-friendly mobile/web application development.',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Blog Writing',
    description: 'Human-friendly, engaging and SEO-focused blog content.',
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'SEO Services',
    description: 'Search engine optimization to improve visibility and organic growth.',
  },
  {
    icon: <Link className="w-6 h-6" />,
    title: 'Profile Backlinks',
    description: 'High-quality profile backlink building for stronger online presence.',
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: 'Social Backlinks',
    description: 'Social media and social-profile backlinks to support website authority.',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Everything you need to build, grow and strengthen your digital presence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-sky-100 hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-sky-100 text-sky-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
INNER_EOF
