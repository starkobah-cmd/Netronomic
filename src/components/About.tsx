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
                Netronomic Web is a professional digital agency focused on helping businesses create strong online identities through development, design, content and digital growth services.
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
