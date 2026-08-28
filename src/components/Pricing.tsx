import { motion } from 'motion/react';
import { Check, Zap, Crown, Star, ArrowRight, X, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'BASIC',
    icon: <Star className="w-6 h-6 text-[#38BDF8]" />,
    target: 'For individuals and small projects.',
    price: '$49',
    features: ['Basic Website Design', 'Simple Logo Design', '1 Poster Design', 'Basic SEO Setup'],
    isPopular: false,
    badge: ''
  },
  {
    name: 'STANDARD',
    icon: <Zap className="w-6 h-6 text-white" />,
    target: 'For growing businesses.',
    price: '$149',
    features: ['Custom Website Design', 'Pro Logo Design', '3 Poster Designs', 'Blog Writing (2/mo)', 'Advanced SEO', 'Social & Profile Backlinks'],
    isPopular: true,
    badge: 'Most Popular'
  },
  {
    name: 'PREMIUM',
    icon: <Crown className="w-6 h-6 text-amber-400" />,
    target: 'Complete digital solutions.',
    price: '$299',
    features: ['Custom App Development', 'Full Brand Identity', 'Info Reel Editing', 'Weekly Blog Writing', 'Enterprise SEO', 'Premium Backlinks'],
    isPopular: false,
    badge: 'Luxury'
  }
];

const compareFeatures = [
  { name: 'Website Design & Dev', basic: 'Template', standard: 'Custom Design', premium: 'Advanced Web App' },
  { name: 'Logo Design', basic: '1 Concept', standard: '3 Concepts', premium: 'Full Brand Identity' },
  { name: 'Poster Design', basic: '1 Poster', standard: '3 Posters', premium: 'Unlimited (Monthly)' },
  { name: 'Information Reel Editing', basic: false, standard: false, premium: '4 Reels / mo' },
  { name: 'App Development', basic: false, standard: false, premium: 'Custom Mobile/Web App' },
  { name: 'Blog Writing', basic: false, standard: '2 Articles / mo', premium: 'Weekly Articles' },
  { name: 'SEO Services', basic: 'Basic Setup', standard: 'Advanced SEO', premium: 'Enterprise Strategy' },
  { name: 'Profile Backlinks', basic: false, standard: '50 High-Quality', premium: '200+ Premium' },
  { name: 'Social Backlinks', basic: false, standard: '100 Links', premium: '500+ Links' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-[#050816] relative overflow-hidden font-sans text-white">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2563EB] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#38BDF8] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob animation-delay-2000 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-[#0B1120] border border-[#2563EB]/30 rounded-full px-4 py-2 mb-6 shadow-[0_0_15px_rgba(37,99,235,0.2)]"
          >
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-sm font-semibold text-[#38BDF8] uppercase tracking-wider">Pricing Plans</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            Simple & Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#2563EB]">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Transparent packages designed to scale with your business. Select a plan or request a custom quote.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl bg-[#0B1120]/80 backdrop-blur-xl border transition-all duration-500 group ${
                plan.isPopular 
                  ? 'border-[#2563EB] shadow-[0_0_40px_rgba(37,99,235,0.2)] lg:scale-105 z-10' 
                  : 'border-slate-800 hover:border-[#38BDF8]/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={`text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full flex items-center space-x-1 ${
                    plan.isPopular ? 'bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white shadow-lg shadow-blue-500/25' : 'bg-amber-400 text-amber-950 shadow-lg shadow-amber-500/25'
                  }`}>
                    {plan.isPopular ? <Star className="w-3 h-3 fill-current" /> : <Crown className="w-3 h-3 fill-current" />}
                    <span>{plan.badge}</span>
                  </div>
                </div>
              )}
              
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${plan.isPopular ? 'bg-[#2563EB] shadow-[#2563EB]/40' : 'bg-slate-800/50 group-hover:bg-slate-800 transition-colors'}`}>
                  {plan.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide">{plan.name}</h3>
                  <p className="text-slate-400 text-sm">{plan.target}</p>
                </div>
              </div>

              <div className="mb-8 pb-8 border-b border-slate-800">
                <p className="text-sm text-slate-400 mb-1">Starting From</p>
                <div className="flex items-baseline">
                  <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                  >
                    <div className="bg-[#2563EB]/20 p-1 rounded-full mr-3 flex-shrink-0 group-hover:bg-[#2563EB]/40 transition-colors">
                      <Check className="w-4 h-4 text-[#38BDF8]" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  plan.isPopular 
                    ? 'bg-[#2563EB] text-white hover:bg-[#3B82F6] shadow-lg shadow-[#2563EB]/25 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transform hover:-translate-y-1' 
                    : 'bg-slate-800 text-white hover:bg-slate-700 hover:text-[#38BDF8] transform hover:-translate-y-1'
                }`}
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Compare Features</h3>
            <p className="text-slate-400">A detailed breakdown of our service offerings.</p>
          </div>
          
          <div className="overflow-x-auto bg-[#0B1120]/80 backdrop-blur-xl rounded-2xl border border-slate-800 shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="p-6 border-b border-slate-800 font-semibold text-slate-300 bg-[#050816]/80 text-left">Services</th>
                  <th className="p-6 border-b border-slate-800 font-semibold text-white bg-[#050816]/80 text-center w-48">Basic</th>
                  <th className="p-6 border-b border-slate-800 font-semibold text-[#38BDF8] bg-[#2563EB]/10 text-center relative w-48">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8]"></div>
                    Standard
                  </th>
                  <th className="p-6 border-b border-slate-800 font-semibold text-amber-400 bg-[#050816]/80 text-center w-48">Premium</th>
                </tr>
              </thead>
              <tbody>
                {compareFeatures.map((feature, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors group">
                    <td className="p-6 border-b border-slate-800/50 text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      {feature.name}
                    </td>
                    <td className="p-6 border-b border-slate-800/50 text-sm text-center text-slate-400">
                      {feature.basic ? feature.basic : <X className="w-5 h-5 mx-auto text-slate-600" />}
                    </td>
                    <td className="p-6 border-b border-slate-800/50 text-sm text-center font-medium text-white bg-[#2563EB]/5">
                      {feature.standard ? feature.standard : <X className="w-5 h-5 mx-auto text-slate-600" />}
                    </td>
                    <td className="p-6 border-b border-slate-800/50 text-sm text-center text-slate-400">
                      {feature.premium ? feature.premium : <X className="w-5 h-5 mx-auto text-slate-600" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center bg-gradient-to-br from-[#0B1120] to-[#050816] border border-slate-800 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden group hover:border-[#2563EB]/50 transition-colors duration-500 shadow-2xl"
        >
          <div className="absolute inset-0 bg-[#2563EB] opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a Custom Solution?</h3>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every business is unique. Contact us for a personalized package tailored specifically to your goals, requirements, and budget.
          </p>
          <button className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-[#050816] font-bold hover:bg-[#38BDF8] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all duration-300 transform hover:-translate-y-1">
            Request a Custom Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
