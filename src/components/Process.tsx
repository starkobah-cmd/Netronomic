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
