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
