import React, { useState } from 'react';
import { Mail, Sparkles, Send, Twitter, Linkedin, Github, Compass, ShieldAlert, Heart, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setIsLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setNewsletterEmail('');
    }, 1000);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const offices = [
    { city: "Noida (HQ)", street: "B-128, First Floor, Sector-2, Noida, UP 201301" }
  ];

  return (
    <footer className="bg-[#030712] border-t border-white/5 text-slate-400 py-16 px-4 md:px-8 relative overflow-hidden text-left font-sans">
      
      {/* Background soft light */}
      <div className="absolute bottom-0 right-[10%] w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/5">
          
          {/* Logo Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-indigo-600 flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5 text-slate-950 stroke-[2.5]" />
              </div>
              <span className="font-sans font-bold text-lg text-white tracking-tight uppercase">
                Ads<span className="text-indigo-400">Radiant</span>
              </span>
            </div>
            
            <p className="text-xs text-[#94a3b8] leading-relaxed max-w-sm">
              An algorithmic app growth and performance user acquisition agency. We scale sub-scale mobile apps into high-earning worldwide category benchmarks.
            </p>

            <div className="flex space-x-3.5 pt-2">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-indigo-500/30 transition-all" aria-label="Privacy Twitter">
                <Twitter className="w-4 h-4 text-slate-300" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-indigo-500/30 transition-all" aria-label="Privacy LinkedIn">
                <Linkedin className="w-4 h-4 text-slate-300" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-indigo-500/30 transition-all" aria-label="Privacy Github">
                <Github className="w-4 h-4 text-slate-300" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2 space-y-3 text-left">
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#818cf8] font-bold">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-white transition-colors">
                  Core Services
                </a>
              </li>
              <li>
                <a href="#case-studies" onClick={(e) => handleScroll(e, "#case-studies")} className="hover:text-white transition-colors">
                  Case Files
                </a>
              </li>
              <li>
                <a href="#ai-auditor" onClick={(e) => handleScroll(e, "#ai-auditor")} className="hover:text-white transition-colors">
                  AI Strategic Suite
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-white transition-colors">
                  Methodology
                </a>
              </li>
            </ul>
          </div>

          {/* Offices List */}
          <div className="md:col-span-2 space-y-3 text-left">
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#818cf8] font-bold">
              offices
            </span>
            <div className="space-y-4 text-xs font-sans">
              {offices.map((off, index) => (
                <div key={index} className="space-y-0.5">
                  <p className="text-white font-bold">{off.city}</p>
                  <p className="text-slate-500">{off.street}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter / Contact form column */}
          <div className="md:col-span-4 space-y-3 text-left">
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#818cf8] font-bold">
              GET SPEND BRIEFINGS
            </span>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              We send out bi-weekly breakdowns of competitor CPA benchmarks, viral hooks metrics, and ASO changes. No fluff.
            </p>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-indigo-950/20 border border-indigo-500/30 p-3 rounded-2xl text-xs text-indigo-400 font-semibold"
                >
                  🎉 Subscribed! Welcome to the briefing.
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubscribe} 
                  className="flex space-x-1.5"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter work email..."
                    className="w-full bg-white/5 border border-white/5 focus:border-indigo-500/50 rounded-full py-2.5 px-4 text-white text-xs placeholder:text-slate-600 focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="p-3.5 rounded-full bg-white hover:scale-105 active:scale-95 disabled:opacity-50 text-slate-950 transition-all flex items-center justify-center shrink-0 cursor-pointer"
                    aria-label="Submit newsletter subscribe"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Copyright and regulatory */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 font-mono">
          <div className="flex items-center space-x-1">
            <span>&copy; {new Date().getFullYear()} AdsRadiant Corporation. All rights secured.</span>
          </div>
          
          <div className="flex space-x-4 mt-4 sm:mt-0 font-sans font-semibold">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Retention</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors flex items-center space-x-1 animate-pulse">
              <Compass className="w-3.5 h-3.5" />
              <span>Sitemap</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
