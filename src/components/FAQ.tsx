import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'What services does Netronomic Web provide?', a: 'We provide web design, logo design, poster design, video editing, app development, blog writing, SEO, and backlink services.' },
  { q: 'How long does website development take?', a: 'Depending on the complexity, a standard website takes 2-4 weeks, while complex applications may take longer.' },
  { q: 'Do you create custom websites?', a: 'Yes, all our websites are custom-designed and built to match your specific brand and requirements.' },
  { q: 'Do you provide logo and poster design?', a: 'Absolutely. We have a dedicated team for visual branding, including logos, posters, and social media assets.' },
  { q: 'Do you provide SEO services?', a: 'Yes, we offer comprehensive SEO services to help your website rank higher on search engines and gain organic traffic.' },
  { q: 'Do you provide backlink services?', a: 'Yes, we build high-quality profile and social backlinks to strengthen your domain authority.' },
  { q: 'Can I request a custom package?', a: 'Of course! We can tailor a custom package combining any of our services to perfectly fit your needs and budget.' },
  { q: 'How can I contact Netronomic Web?', a: 'You can reach out via the contact form below, or directly through WhatsApp and Email.' },
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
