import React, { useState } from 'react';
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
import { motion } from 'motion/react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefilledBudget, setPrefilledBudget] = useState<string | undefined>(undefined);

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
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-indigo-500 selection:text-slate-950 overflow-x-hidden antialiased">
      {/* Dynamic Glow Flare in background */}
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
    </div>
  );
}
