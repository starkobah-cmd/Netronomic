#!/bin/bash

cat << 'INNER_EOF' > src/components/About.tsx
import { motion } from 'motion/react';
import { Target, Lightbulb, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-sky-200/50 rounded-3xl transform -rotate-3 scale-105" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Our Team" 
              className="relative rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Skyline Digital is a professional digital agency focused on helping businesses create strong online identities through development, design, content and digital growth services.
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  title: 'Who We Are',
                  desc: 'A professional digital team providing creative and technical solutions.'
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: 'Our Mission',
                  desc: 'To turn ideas into high-quality digital experiences that help businesses grow.'
                },
                {
                  icon: <Lightbulb className="w-6 h-6" />,
                  title: 'Our Vision',
                  desc: 'To become a trusted digital partner for businesses looking to build a powerful online presence.'
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-sky-500 border border-slate-100">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
INNER_EOF

cat << 'INNER_EOF' > src/components/WhyChooseUs.tsx
import { motion } from 'motion/react';
import { Users, Zap, DollarSign, Award, Headset } from 'lucide-react';

const reasons = [
  { icon: <Users className="w-6 h-6" />, title: 'Professional Team', desc: 'Expert developers and designers.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Fast Delivery', desc: 'On-time project completion.' },
  { icon: <DollarSign className="w-6 h-6" />, title: 'Affordable Pricing', desc: 'High quality at reasonable rates.' },
  { icon: <Award className="w-6 h-6" />, title: 'Quality Work', desc: 'Premium and bug-free deliverables.' },
  { icon: <Headset className="w-6 h-6" />, title: 'Customer Support', desc: 'Dedicated help whenever you need.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Why Choose Skyline Digital?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100 text-center hover:bg-sky-50 transition-colors"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-white text-sky-500 flex items-center justify-center mb-4 shadow-sm">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-sm text-slate-600">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
INNER_EOF

cat << 'INNER_EOF' > src/components/Process.tsx
import { motion } from 'motion/react';
import { MessageSquare, Calendar, Layout, Code2, CheckCircle2, Rocket } from 'lucide-react';

const steps = [
  { icon: <MessageSquare />, title: '01 — Discuss', desc: 'Understand your idea, goals and requirements.' },
  { icon: <Calendar />, title: '02 — Plan', desc: 'Create a clear strategy and project plan.' },
  { icon: <Layout />, title: '03 — Design', desc: 'Create the visual structure and user experience.' },
  { icon: <Code2 />, title: '04 — Develop', desc: 'Turn the design into a functional digital product.' },
  { icon: <CheckCircle2 />, title: '05 — Review', desc: 'Test everything and make improvements based on feedback.' },
  { icon: <Rocket />, title: '06 — Deliver', desc: 'Deliver the final polished project.' }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            How We Work
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative z-10"
            >
              <div className="text-sky-500 w-12 h-12 mb-6 bg-sky-50 rounded-xl flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
INNER_EOF

cat << 'INNER_EOF' > src/components/Portfolio.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Websites', 'Logos', 'Posters', 'Apps', 'Video Editing'];

const projects = [
  { id: 1, title: 'E-commerce Platform', category: 'Websites', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600', desc: 'Modern shopping experience' },
  { id: 2, title: 'Brand Identity', category: 'Logos', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600', desc: 'Minimalist logo design' },
  { id: 3, title: 'Fitness App', category: 'Apps', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600', desc: 'Workout tracking application' },
  { id: 4, title: 'Event Poster', category: 'Posters', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=600', desc: 'Music festival promotion' },
  { id: 5, title: 'Corporate Reel', category: 'Video Editing', image: 'https://images.unsplash.com/photo-1535016120720-40c746ffa9c5?auto=format&fit=crop&q=80&w=600', desc: 'Company introduction video' },
  { id: 6, title: 'Real Estate Portal', category: 'Websites', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600', desc: 'Property listing platform' }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Recent Work</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-sky-500 text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-sky-50 hover:text-sky-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-sky-100 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-sky-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                     <button className="bg-white text-sky-600 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                       <ExternalLink size={20} />
                     </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold text-sky-500 mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.desc}</p>
                  <button className="text-sky-600 font-medium inline-flex items-center hover:text-sky-700">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
INNER_EOF
