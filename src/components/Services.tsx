import React, { useState } from 'react';
import { Target, Users, BarChart3, Settings, ShieldAlert, Video, Sparkles, TrendingUp, DollarSign, Calculator, Layers, HelpCircle, ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  onOpenBooking: (budget?: string) => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  // Calculator States
  const [calcBudget, setCalcBudget] = useState(15000);
  const [calcCPA, setCalcCPA] = useState(1.80);
  const [calcRetention, setCalcRetention] = useState(30); // D1 Retention %

  // Calculation formulas
  const estimatedInstalls = Math.floor(calcBudget / calcCPA);
  const retainedUsers = Math.floor(estimatedInstalls * (calcRetention / 100));
  // AdsRadiant average savings simulation: 25% lower CAC than standard agency average
  const typicalCompetitorCPA = calcCPA * 1.33;
  const standardAgencyBudgetNeeded = estimatedInstalls * typicalCompetitorCPA;
  const netEstimatedSavings = Math.floor(standardAgencyBudgetNeeded - calcBudget);

  const servicesData = [
    {
      id: "programmatic",
      title: "Programmatic Advertisement",
      description: "We leverage in-app, DSPs, SDK & Self developed apps to deliver precise, targeted ads across multiple platforms, ensuring your app reaches the right audience at the right time for maximum impact.",
      metric: "Targeted Placement",
      channels: "Direct SDK, DSPs & In-App SSPs",
      illustration: (
        <div className="relative w-full h-44 rounded-2xl bg-slate-950/60 border border-white/5 overflow-hidden flex items-center justify-center p-4 group-hover:border-indigo-500/20 transition-colors">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Schematic radar grid lines */}
            <div className="absolute w-24 h-24 rounded-full border border-dashed border-indigo-500/15 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-16 h-16 rounded-full border border-dashed border-cyan-500/25 animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-8 h-8 rounded-full border border-white/5" />
            
            <div className="absolute h-full w-[1px] bg-white/5 left-1/2 transform -translate-x-1/2" />
            <div className="absolute w-full h-[1px] bg-white/5 top-1/2 transform -translate-y-1/2" />
            
            {/* Glowing nodes in orbit */}
            <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
            <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            
            <div className="flex gap-2 z-10">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-lg">
                <Target className="w-4 h-4 animate-pulse" />
              </div>
              <div className="w-9 h-9 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-lg">
                <Users className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "ai-tracking",
      title: "AI-Based Data Tracking",
      description: "Our advanced AI-powered tracking tools analyze user behavior and campaign performance, providing actionable insights to refine strategies and ensure every marketing effort is data-driven and optimized for success.",
      metric: "Data-Driven Decisions",
      channels: "Predictive Engines & MMP Systems",
      illustration: (
        <div className="relative w-full h-44 rounded-2xl bg-slate-950/60 border border-white/5 overflow-hidden flex items-center justify-center p-4 group-hover:border-indigo-500/20 transition-colors">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="relative w-full h-full flex flex-col justify-center font-sans">
            {/* Dynamic graph nodes representation */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-indigo-600/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
              <Layers className="w-4 h-4" />
            </div>
            <div className="absolute right-10 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-cyan-600/15 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
              <BarChart3 className="w-4 h-4" />
            </div>
            
            {/* Connection beam line */}
            <div className="absolute inset-x-16 top-1/2 h-0.5 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
            </div>
            
            <div className="mt-14 text-center">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Active Data Stream</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "roi-optimization",
      title: "Optimization for Higher ROI",
      description: "We focus on fine-tuning campaigns through continuous analysis and adjustments, maximizing the return on investment by improving ad targeting, performance, and overall efficiency across all marketing channels.",
      metric: "Compounded Yield",
      channels: "Continuous AI Scaling Logic",
      illustration: (
        <div className="relative w-full h-44 rounded-2xl bg-slate-950/60 border border-white/5 overflow-hidden flex items-center justify-center p-4 group-hover:border-indigo-500/20 transition-colors">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="relative w-full h-full flex flex-col justify-center items-center">
            {/* ROI compounding line */}
            <div className="w-32 h-14 relative flex items-end">
              <svg className="w-full h-full text-indigo-400 drop-shadow-[0_0_12px_rgba(129,140,248,0.5)]" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
                <path d="M0,35 Q20,38 40,25 T80,10 T100,3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <div className="absolute right-0 top-0.5 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <div className="absolute right-0 top-0.5 w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
            <div className="mt-3 py-1 px-2.5 bg-emerald-950/40 border border-emerald-500/20 rounded-full text-[9px] font-mono text-emerald-400 font-bold tracking-wider uppercase animate-pulse">
              Maximizing ROAS Limit
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="py-20 px-4 md:px-8 border-t border-white/5 bg-[#030712] text-slate-100 uppercase-none" id="services">
      {/* Scoped CSS for hardware-accelerated periodic subtle glimmer shine swipe */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes glimmer-swipe {
          0% {
            left: -120%;
          }
          15% {
            left: 150%;
          }
          100% {
            left: 150%;
          }
        }
        .animate-glimmer-shine {
          position: absolute;
          top: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.02) 25%,
            rgba(255, 255, 255, 0.12) 50%,
            rgba(255, 255, 255, 0.02) 75%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
          animation: glimmer-swipe 8s cubic-bezier(0.25, 1, 0.5, 1) infinite;
          pointer-events: none;
        }
      `}} />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Core Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="font-mono text-xs text-indigo-450 uppercase tracking-widest font-bold block">
            CORE CAPABILITIES & SOLUTIONS
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Comprehensive Growth Pipeline
          </h2>
          <p className="text-slate-450 text-sm max-w-2xl mx-auto leading-relaxed">
            We don't just 'manage campaigns.' We construct modular, full-funnel acquisition, creative, and analytics systems designed to compound metrics and lower customer acquisition cost.
          </p>
        </motion.div>

        {/* Dynamic Service Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                y: -6, 
                scale: 1.015,
                borderColor: "rgba(99, 102, 241, 0.4)", 
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
              }}
              className="group relative rounded-3xl bg-white/5 border border-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-300 flex flex-col justify-between text-left cursor-default space-y-6 overflow-hidden"
            >
              {/* Card top flare */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent group-hover:via-indigo-400/80 transition-all duration-300" />
              
              {/* Subtle Periodic Glimmer Shine layer */}
              <div 
                className="animate-glimmer-shine" 
                style={{ animationDelay: `${index * 1.8}s` }} 
              />
              
              <div className="space-y-4">
                <h3 className="font-sans text-xl font-bold text-white tracking-tight leading-tight">{service.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed min-h-[64px]">{service.description}</p>
                
                {/* Visual mockup illustration block exactly matching the sketch's image container */}
                {service.illustration}
              </div>

              {/* Card footer CTA with Learn More exactly like sketch */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.06)", borderColor: "rgba(99, 102, 241, 0.4)" }}
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  onClick={() => onOpenBooking(`Learn more about ${service.title}`)}
                  className="px-6 py-2.5 bg-black/85 border border-white/10 hover:text-white text-slate-200 rounded-xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 text-indigo-400" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic ROI Estimator Tool Widget (Conversion Magnet) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[40px] bg-slate-900/40 border border-white/10 p-6 md:p-8 overflow-hidden backdrop-blur-xl max-w-5xl mx-auto"
        >
          {/* Inner ambient glow */}
          <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left relative z-10">
            {/* Left side info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-mono tracking-wider uppercase rounded-full">
                <Calculator className="w-3.5 h-3.5" />
                <span>ROI Simulation Tool</span>
              </div>
              <h3 className="font-sans text-2xl font-black text-white tracking-tight">
                Model Your Performance Scale Projections
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Adjust the monthly budget limits, target install CPA benchmarks, and anticipated activation rate to map net volume projections. Experience how AdsRadiant's CAC-reduction models enhance budget efficiency.
              </p>
              
              <div className="p-4 bg-[#030712]/60 border border-white/5 rounded-2xl space-y-1.5">
                <span className="block text-[8px] font-mono text-indigo-450 uppercase tracking-widest font-bold">AdsRadiant efficiency factor</span>
                <p className="text-[10px] text-slate-500 leading-normal">
                  Our customized algorithmic scripts and native content partnerships lower CPC and CTR fatigue, which typically drives up installs by 25-35% on the exact same budget levels.
                </p>
              </div>
            </div>

            {/* Middle: Interactive Sliders */}
            <div className="lg:col-span-4 space-y-5 bg-[#030712]/60 p-5 rounded-2xl border border-white/5">
              
              {/* Budget Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-450 font-mono text-[10px] uppercase tracking-wider">Monthly Ad Budget</span>
                  <span className="text-white font-mono font-bold">${calcBudget.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="100000" 
                  step="5000"
                  value={calcBudget}
                  onChange={(e) => setCalcBudget(Number(e.target.value))}
                  className="w-full accent-indigo-500 h-1 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[8px] font-mono text-slate-600">
                  <span>$5,000</span>
                  <span>$100,000</span>
                </div>
              </div>

              {/* Target CPA Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-455 font-mono text-[10px] uppercase tracking-wider">Ad Target CPA/CPI</span>
                  <span className="text-indigo-400 font-mono font-bold">${calcCPA.toFixed(2)}</span>
                </div>
                <input 
                  type="range" 
                  min="0.50" 
                  max="5.00" 
                  step="0.10"
                  value={calcCPA}
                  onChange={(e) => setCalcCPA(Number(e.target.value))}
                  className="w-full accent-indigo-500 h-1 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[8px] font-mono text-slate-600">
                  <span>$0.50</span>
                  <span>$5.00</span>
                </div>
              </div>

              {/* Cohort retention Select input */}
              <div className="space-y-1 text-left">
                <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-450">Estimated App Day-1 Retention</label>
                <select 
                  value={calcRetention}
                  onChange={(e) => setCalcRetention(Number(e.target.value))}
                  className="w-full bg-[#030712] border border-white/5 rounded-xl py-2 px-3 text-white text-xs mt-1 focus:outline-none focus:border-indigo-500"
                >
                  <option value={15}>15% Retention (Low Cohort)</option>
                  <option value={25}>25% Retention (Standard Cohort)</option>
                  <option value={35}>35% Retention (Optimal Cohort)</option>
                  <option value={45}>45% Retention (High Loyalty Product)</option>
                </select>
              </div>

            </div>

            {/* Right side outputs */}
            <div className="lg:col-span-3 space-y-4">
              <div className="p-4 bg-slate-950/90 border border-white/5 rounded-3xl space-y-4">
                <div className="text-left">
                  <span className="block text-[8px] font-mono uppercase tracking-widest text-[#818cf8] font-bold">Expected Net Installs</span>
                  <span className="block text-2xl font-mono font-black text-white mt-1">{estimatedInstalls.toLocaleString()}</span>
                  <span className="block text-[8px] text-slate-600">Monthly scale projections</span>
                </div>

                <div className="text-left pt-3 border-t border-white/5">
                  <span className="block text-[8px] font-mono uppercase tracking-widest text-[#818cf8] font-bold">Day-1 Active Cohorts</span>
                  <span className="block text-lg font-mono font-bold text-indigo-400 mt-1">{retainedUsers.toLocaleString()} users</span>
                  <span className="block text-[8px] text-slate-600 font-mono">Actively returning next day</span>
                </div>

                <div className="text-left pt-3 border-t border-white/5 bg-indigo-950/10 p-2.5 rounded-xl border border-indigo-900/30">
                  <span className="block text-[8px] font-mono uppercase tracking-widest text-indigo-400 font-bold">Spend Benefit Offset</span>
                  <span className="block text-base font-mono font-bold text-emerald-400 mt-1">+${netEstimatedSavings.toLocaleString()}</span>
                  <span className="block text-[8px] text-slate-500 font-sans leading-tight mt-1">Extra value saved compared to typical agency CAC metrics.</span>
                </div>
              </div>

              {/* Book consultation click trigger */}
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "#5349e2", boxShadow: "0 10px 25px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => onOpenBooking(`Model parameters: Budget $${calcBudget}, CPA $${calcCPA}`)}
                className="w-full py-4 bg-indigo-600 text-white font-sans text-xs font-black uppercase tracking-widest rounded-2xl transition-all text-center cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <span>Scale This Formula</span>
                <Sparkles className="w-3.5 h-3.5" />
              </motion.button>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
