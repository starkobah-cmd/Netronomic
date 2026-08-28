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
