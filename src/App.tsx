import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import AboutUs from './components/AboutUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';
import SupportChat from './components/SupportChat';
import { Sparkles, ArrowRight, Zap, Target, Star, HelpCircle, PhoneCall, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefilledBudget, setPrefilledBudget] = useState<string | undefined>(undefined);

  const loadingSteps = [
    "ADS_RADIANT // SECURE INGRESS PROTOCOL INITIALIZED...",
    "ESTABLISHING CRYPTO CONVERGENCE CHANNELS...",
    "POLLING AGGREGATED CPI INDEX FROM TIER-1 PLACEMENTS...",
    "ALIGNING DAMPENER SCRIPTS TO METICULOUS FRACTION LIMITS...",
    "ELIMINATING COUNTERFEIT PLACEMENTS // CORE READY."
  ];

  useEffect(() => {
    // Fast increment progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 18);

    // Synchronize programmatic steps
    const stepInterval = setInterval(() => {
      setLoadingStep(prev => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 450);

    // Fade out load screen once finished
    const finishTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2300);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearTimeout(finishTimeout);
    };
  }, []);

  const handleOpenBooking = (budgetPrefill?: string) => {
    setPrefilledBudget(budgetPrefill);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
    setPrefilledBudget(undefined);
  };

  const handleScrollToContact = (e: React.FormEvent) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(12px)" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center p-6 text-center select-none"
        >
          {/* Subtle cosmic background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_0.2px,transparent_0.2px),linear-gradient(to_bottom,#1f2937_0.2px,transparent_0.2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
          
          <div className="relative max-w-md w-full space-y-8 z-10">
            {/* Spinning Indicator circle */}
            <div className="relative flex justify-center pb-2">
              <div className="absolute w-24 h-24 rounded-full bg-indigo-500/10 blur-[35px] animate-pulse" />
              <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center relative">
                <svg className="w-16 h-16 absolute animate-spin text-indigo-500" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeDasharray="210 150"
                    fill="none"
                    strokeLinecap="round"
                    className="opacity-75"
                  />
                </svg>
                <span className="font-mono text-xs font-black text-white">{loadingProgress}%</span>
              </div>
            </div>

            {/* Glowing Studio title brand */}
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <div className="w-3 h-3 bg-white/35 rounded-sm transform rotate-45" />
                </div>
                <span className="font-sans font-black text-xl text-white tracking-tighter">
                  Ads<span className="text-indigo-400">Radiant</span>
                </span>
              </div>
              <p className="text-[9px] font-mono tracking-widest text-slate-500 uppercase font-bold">App Scale Studio Core Systems</p>
            </div>

            {/* Simulated Live Diagnostic logger */}
            <div className="p-4 bg-slate-950/60 rounded-2xl border border-white/5 space-y-1 text-left font-mono min-h-[58px]">
              <div className="text-[9px] text-[#818cf8] font-bold uppercase tracking-widest block">System Diagnostics Logging</div>
              <p className="text-[10px] text-slate-405 font-bold leading-normal truncate mt-1">
                ❯ {loadingSteps[loadingStep]}
              </p>
            </div>

            {/* Micro progress bar track */}
            <div className="h-0.5 bg-white/5 rounded-full overflow-hidden w-full relative">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-400 rounded-full transition-all duration-75"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="main-web"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-indigo-500 selection:text-slate-950 overflow-x-hidden antialiased"
        >
          {/* Dynamic Cosmic Glow in background */}
          <div className="absolute top-0 right-0 w-full max-w-5xl h-screen pointer-events-none z-0">
            <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px] animate-pulse" />
          </div>

          {/* Header element */}
          <Navbar onOpenBooking={() => handleOpenBooking()} />

          {/* Hero Block */}
          <Hero onOpenBooking={() => handleOpenBooking()} />

          {/* Promotional Lead bar banner */}
          <div className="bg-gradient-to-r from-indigo-950/30 via-[#030712] to-indigo-950/30 border-y border-white/5 py-4 px-4 text-center">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 text-xs">
              <span className="font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center space-x-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Q3 Global Scale-up Initiative:</span>
              </span>
              <span className="text-slate-350 font-medium">
                Deploying a new application this month? Claim an auxiliary $10,000 Ads Sandbox allowance inside our strategic pilot.
              </span>
              <button 
                type="button"
                onClick={handleScrollToContact}
                className="text-[#818cf8] hover:text-white font-bold inline-flex items-center space-x-1 underline underline-offset-4 cursor-pointer transition-colors"
              >
                <span>Get Secure Consultation</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Services Grid Section & ROI modeler widget */}
          <Services onOpenBooking={handleOpenBooking} />

          {/* Case Studies Timeline and performance charts */}
          <CaseStudies onOpenBooking={() => handleOpenBooking()} />

          {/* Manifesto, value structures & milestones */}
          <AboutUs />

          {/* Interactive Headquarters & NDA Contact Form */}
          <ContactSection />

          {/* BOTTOM IMMERSIVE CTA BLOCK & BOOKING MAGNET */}
          <div className="relative py-20 px-4 md:px-8 bg-[#030712] border-t border-white/5 overflow-hidden text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-4xl mx-auto z-10 relative space-y-8">
              <div className="inline-flex items-center space-x-1 px-3.5 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready to Scale Your App?</span>
              </div>
              
              <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-none">
                Let's Construct Your Custom UA Growth Strategy
              </h2>
              
              <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Stop letting ad budgets fade on stagnant campaigns. Let's schedule a 30-min pilot review call with our senior architects to model target CPAs on your accounts.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 max-w-md mx-auto pt-4">
                <button
                  onClick={() => handleOpenBooking()}
                  className="px-6 py-3.5 bg-white text-slate-950 rounded-full text-xs font-black tracking-widest uppercase hover:scale-105 shadow-xl shadow-white/5 cursor-pointer block text-center"
                >
                  Book Discovery advisory Call
                </button>
                
                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="px-6 py-3.5 bg-white/5 border border-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Secure NDA Consultation Instead
                </a>
              </div>

              <div className="pt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[11px] text-slate-500">
                <div className="flex items-center space-x-1.5">
                  <Star className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Free 30-Min High Impact Audit</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1.5">
                  <Target className="w-3.5 h-3.5 text-[#818cf8]" />
                  <span>Full account structural layout NDA</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-violet-400" />
                  <span>No continuous contract required</span>
                </div>
              </div>
            </div>
          </div>

          {/* Global footer elements */}
          <Footer />

          {/* Lead capture scheduling appointment modal */}
          <LeadModal 
            isOpen={isModalOpen} 
            onClose={handleCloseBooking} 
            prefillBudget={prefilledBudget} 
          />

          {/* Floating minimalist support chat bubble */}
          <SupportChat onOpenBooking={handleOpenBooking} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
