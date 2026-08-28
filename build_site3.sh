#!/bin/bash

cat << 'INNER_EOF' > src/components/Pricing.tsx
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'BASIC',
    target: 'For individuals and small projects.',
    price: 'Starting From $49',
    features: ['Custom Design', 'Mobile Responsive', 'Basic SEO', '1 Revision'],
    isPopular: false
  },
  {
    name: 'STANDARD',
    target: 'For growing businesses.',
    price: 'Starting From $149',
    features: ['Everything in Basic', 'CMS Integration', 'Advanced SEO', '3 Revisions', 'Performance Optimized'],
    isPopular: true
  },
  {
    name: 'PREMIUM',
    target: 'Complete digital solutions.',
    price: 'Starting From $299',
    features: ['Everything in Standard', 'Custom Web App', 'Full Branding', 'Unlimited Revisions', '24/7 Priority Support'],
    isPopular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Simple & Flexible Pricing
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl bg-white border ${
                plan.isPopular ? 'border-sky-500 shadow-2xl shadow-sky-200' : 'border-slate-100 shadow-md'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-sky-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">{plan.target}</p>
              <div className="mb-8">
                <span className="text-2xl font-bold text-slate-900">{plan.price}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 rounded-full font-medium transition-colors ${
                  plan.isPopular 
                    ? 'bg-sky-500 text-white hover:bg-sky-600 shadow-lg shadow-sky-500/25' 
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
INNER_EOF

cat << 'INNER_EOF' > src/components/Testimonials.tsx
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Startup Founder',
    text: 'Skyline Digital transformed our idea into a professional website. The process was smooth and the final result exceeded our expectations.',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    text: 'Their design team created a stunning visual identity for our brand. Highly recommend their logo and branding services.',
  },
  {
    name: 'Emma Williams',
    role: 'E-commerce Owner',
    text: 'The app development process was seamless. Our users love the new interface and performance has significantly improved.',
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-sky-100/50 transition-all"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 italic text-lg leading-relaxed">"{testimonial.text}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                <span className="text-sm text-sky-600 font-medium">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
INNER_EOF

cat << 'INNER_EOF' > src/components/FAQ.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'What services does Skyline Digital provide?', a: 'We provide web design, logo design, poster design, video editing, app development, blog writing, SEO, and backlink services.' },
  { q: 'How long does website development take?', a: 'Depending on the complexity, a standard website takes 2-4 weeks, while complex applications may take longer.' },
  { q: 'Do you create custom websites?', a: 'Yes, all our websites are custom-designed and built to match your specific brand and requirements.' },
  { q: 'Do you provide logo and poster design?', a: 'Absolutely. We have a dedicated team for visual branding, including logos, posters, and social media assets.' },
  { q: 'Do you provide SEO services?', a: 'Yes, we offer comprehensive SEO services to help your website rank higher on search engines and gain organic traffic.' },
  { q: 'Do you provide backlink services?', a: 'Yes, we build high-quality profile and social backlinks to strengthen your domain authority.' },
  { q: 'Can I request a custom package?', a: 'Of course! We can tailor a custom package combining any of our services to perfectly fit your needs and budget.' },
  { q: 'How can I contact Skyline Digital?', a: 'You can reach out via the contact form below, or directly through WhatsApp and Email.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-sky-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-slate-600 border-t border-slate-50 pt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
INNER_EOF

cat << 'INNER_EOF' > src/components/Contact.tsx
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Let's Build Something Great Together.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Have an idea, project or business that needs a digital solution? Let's talk.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-sky-500 rounded-3xl p-8 text-white h-full flex flex-col relative overflow-hidden shadow-xl shadow-sky-500/20">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl" />
              
              <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>
              
              <div className="space-y-6 relative z-10 flex-grow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sky-100 text-sm">WhatsApp</p>
                    <p className="font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sky-100 text-sm">Email</p>
                    <p className="font-semibold">hello@skylinedigital.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative z-10">
                <p className="text-sky-100 text-sm mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-white" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-white" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Select Service</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-white appearance-none text-slate-700">
                      <option>Website Design</option>
                      <option>Logo Design</option>
                      <option>SEO Services</option>
                      <option>App Development</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-white resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-slate-900 hover:bg-sky-600 text-white font-medium py-4 px-8 rounded-xl transition-colors flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
INNER_EOF

cat << 'INNER_EOF' > src/components/Footer.tsx
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
              SKYLINE <span className="text-sky-500">DIGITAL</span>
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
                <span>hello@skylinedigital.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 Skyline Digital. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
INNER_EOF

