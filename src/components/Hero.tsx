import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const words = ["Digital Identity.", "Business Growth.", "Online Presence.", "Brand Strategy."];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end of word
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before starting new word
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

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
            
            <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 min-h-[80px] lg:min-h-[110px]">
              Expert Solutions for Your <br className="hidden lg:block" />
              <span className="relative inline-block pr-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                  {text}
                </span>
                <motion.span 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="absolute right-0 top-[10%] w-[4px] h-[80%] bg-sky-500 rounded-full"
                />
              </span>
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
