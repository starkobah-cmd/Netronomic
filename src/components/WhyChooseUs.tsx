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
            Why Choose Netronomic Web?
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
