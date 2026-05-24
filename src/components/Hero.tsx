import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Play, CheckCircle2, TrendingUp, Users, RefreshCw, Layers, ThumbsUp, DollarSign, Award, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
}

interface ActiveMetric {
  label: string;
  value: string;
  trend: string;
  isPositive: boolean;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  // Tickers/Counter states for dynamic growth visualizer
  const [totalSpend, setTotalSpend] = useState(128450120);
  const [installs, setInstalls] = useState(412359190);
  const [activeAcquisitions, setActiveAcquisitions] = useState<string[]>([
    "🚨 Installs generated: FitPulse Fitness (+340k, CPA $1.15 in Meta Sparks)",
    "⚡️ Scaled campaign: Cultura Travel (+112% Conversion Rate, US Tier 1)",
    "🎉 Metadata Optimized: ZenExpensr (+45% ASO Visibility Boost)",
    "📈 CAC Crash: PaySafe Bank (CAC cut by 42.1%, TikTok Spark Campaign)"
  ]);
  const [currentAcqIdx, setCurrentAcqIdx] = useState(0);

  // Periodic updates to simulate active traffic & budget tracking
  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setTotalSpend(prev => prev + Math.floor(Math.random() * 12 + 4));
      setInstalls(prev => prev + Math.floor(Math.random() * 3 + 1));
    }, 1800);

    const textInterval = setInterval(() => {
      setCurrentAcqIdx(prev => (prev + 1) % activeAcquisitions.length);
    }, 4500);

    return () => {
      clearInterval(tickerInterval);
      clearInterval(textInterval);
    };
  }, []);

  const trustLogos = [
    { 
      name: "Zepto", 
      type: "Quick Commerce", 
      color: "from-rose-500 to-amber-500", 
      glow: "rgba(244, 63, 94, 0.2)",
      borderColor: "rgba(244, 63, 94, 0.35)",
      stat: "4.8x ROI campaigns",
      iconColor: "text-rose-400"
    },
    { 
      name: "Angel One", 
      type: "Fintech", 
      color: "from-blue-500 to-indigo-500", 
      glow: "rgba(59, 130, 246, 0.2)",
      borderColor: "rgba(59, 130, 246, 0.35)",
      stat: "+145% active CAC efficiency",
      iconColor: "text-blue-400"
    },
    { 
      name: "Navi", 
      type: "Fintech", 
      color: "from-emerald-400 to-teal-500", 
      glow: "rgba(16, 185, 129, 0.2)",
      borderColor: "rgba(16, 185, 129, 0.35)",
      stat: "+80% User Activation Rate",
      iconColor: "text-emerald-400"
    },
    { 
      name: "Groww", 
      type: "Investments", 
      color: "from-cyan-400 to-emerald-400", 
      glow: "rgba(34, 211, 238, 0.2)",
      borderColor: "rgba(34, 211, 238, 0.35)",
      stat: "-32% Reg Costs",
      iconColor: "text-cyan-400"
    },
    { 
      name: "Jio TV", 
      type: "Streaming", 
      color: "from-red-500 to-orange-500", 
      glow: "rgba(239, 68, 68, 0.2)",
      borderColor: "rgba(239, 68, 68, 0.35)",
      stat: "6.2M installs in 24 days",
      iconColor: "text-red-400"
    },
    { 
      name: "Dominos", 
      type: "Commerce", 
      color: "from-blue-600 to-cyan-500", 
      glow: "rgba(37, 99, 235, 0.22)",
      borderColor: "rgba(37, 99, 235, 0.35)",
      stat: "-28% hyper-local CPMs",
      iconColor: "text-blue-500"
    },
    { 
      name: "Upstox", 
      type: "Fintech", 
      color: "from-violet-500 to-purple-600", 
      glow: "rgba(139, 92, 246, 0.2)",
      borderColor: "rgba(139, 92, 246, 0.35)",
      stat: "2.1M digital signups",
      iconColor: "text-violet-400"
    }
  ];

  const handleCaseStudiesScroll = (e: React.FormEvent) => {
    e.preventDefault();
    const target = document.querySelector("#case-studies");
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative pt-12 pb-16 md:py-28 bg-[#030712] overflow-hidden leading-normal">
      {/* Immersive background decoration grunts */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] bg-cyan-500/10 blur-[120px] rounded-full" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_0.2px,transparent_0.2px),linear-gradient(to_bottom,#1f2937_0.2px,transparent_0.2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Core Pitch copy */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
            
            {/* Tag badge with animated pulse */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500" />
              <span>Next-Gen Performance Marketing</span>
            </div>

            <div className="space-y-6">
              <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
                We Scale Apps <br />
                Through <span className="text-indigo-500">AI-Driven</span> Growth
              </h1>
              
              <p className="font-sans text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
                Hyper-scale your active user base with precision targeting and algorithmic creative strategy. We turn complex data streams into your biggest competitive advantage.
              </p>
            </div>

            {/* Quick value props list */}
            <div className="grid grid-cols-2 gap-3 max-w-md pt-2 text-slate-300">
              <div className="flex items-center space-x-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="font-semibold text-slate-300">Target CPA guarantees</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="font-semibold text-slate-300">Creator production included</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="font-semibold text-slate-300">AI-Based audit diagnostics</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="font-semibold text-slate-300">No lock-in contracts</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "#5349e2", boxShadow: "0 0 35px rgba(99, 102, 241, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg transition-all cursor-pointer text-center"
              >
                Book Free Consultation
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, borderColor: "rgba(99,102,241,0.5)", backgroundColor: "rgba(30, 41, 59, 0.6)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCaseStudiesScroll}
                className="px-10 py-5 bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl font-bold text-lg transition-all text-center text-slate-300 hover:text-white cursor-pointer"
              >
                Explore Cases
              </motion.button>
            </div>

            {/* Live Counter details */}
            <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-6 max-w-lg">
              <div className="text-left">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-[#818cf8] font-bold">Managed Client Spend</span>
                <span className="block text-2xl font-mono font-bold text-white tracking-tight mt-1">
                  ${(totalSpend / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[9px] text-cyan-400 font-bold uppercase mt-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Live Optimization Counter
                </span>
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-[#818cf8] font-bold">Acquisition Installs Secure</span>
                <span className="block text-2xl font-mono font-bold text-white tracking-tight mt-1">
                  {installs.toLocaleString()}
                </span>
                <span className="block text-[9px] text-slate-500 mt-1 uppercase font-mono">Updated live</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Immersive Interactive KPI Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-10 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 shadow-2xl space-y-6">
              
              {/* Dashboard control header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-slate-700" />
                  <span className="w-3 h-3 rounded-full bg-slate-700" />
                  <span className="w-3 h-3 rounded-full bg-slate-700" />
                </div>
                <div className="px-3 py-1 bg-green-500/10 text-green-400 text-[10px] font-mono rounded">
                  SYSTEM_STABLE
                </div>
              </div>

              {/* Core Analytics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.35)", backgroundColor: "rgba(255,255,255,0.08)", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-5 bg-white/5 border border-white/5 rounded-2xl text-left transition-all duration-300"
                >
                  <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold">Average CPA</span>
                  <div className="flex items-baseline space-x-1.5 mt-1.5">
                    <span className="text-2xl font-bold font-mono text-white">$1.28</span>
                    <span className="text-[10px] text-indigo-400 font-bold font-mono">-34%</span>
                  </div>
                  <span className="block text-[9px] text-slate-600 mt-0.5">vs. $1.95 baseline</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.35)", backgroundColor: "rgba(255,255,255,0.08)", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-5 bg-white/5 border border-white/5 rounded-2xl text-left transition-all duration-300"
                >
                  <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold font-sans">Avg CPI Placement</span>
                  <div className="flex items-baseline space-x-1.5 mt-1.5">
                    <span className="text-2xl font-bold text-cyan-400 font-mono">$0.42</span>
                    <span className="text-[10px] text-emerald-400 font-bold font-mono">+88%</span>
                  </div>
                  <span className="block text-[9px] text-slate-600 mt-0.5">Global placements</span>
                </motion.div>
              </div>

              {/* Custom SVG line graph showing metrics trajectory over 30 days */}
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(167,139,250,0.35)", backgroundColor: "rgba(255,255,255,0.08)", boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-5 bg-white/5 border border-white/5 rounded-2xl space-y-3 text-left transition-all duration-300"
              >
                <div className="flex items-center justify-between text-[11px] text-slate-500 uppercase font-bold tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#818cf8]" />
                    <span>Monthly UA Growth Rate</span>
                  </span>
                  <span className="font-mono text-indigo-400">+242% Index</span>
                </div>
                
                {/* SVG Graph container */}
                <div className="h-28 w-full mt-2 relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 120" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    
                    {/* Trend fill gradient */}
                    <defs>
                      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Shimmering line trajectory */}
                    <path
                      d="M 0 105 Q 30 110 60 90 T 120 70 T 180 50 T 240 25 T 300 10 L 300 120 L 0 120 Z"
                      fill="url(#heroGradient)"
                    />
                    <path
                      d="M 0 105 Q 30 110 60 90 T 120 70 T 180 50 T 240 25 T 300 10"
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="3.5"
                    />

                    {/* Gradient for trajectory stroke */}
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="50%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#a78bfa" />
                      </linearGradient>
                    </defs>

                    {/* Dots indicator */}
                    <circle cx="240" cy="25" r="5" fill="#4f46e5" stroke="#ffffff" strokeWidth="1.5" className="animate-pulse" />
                    <circle cx="300" cy="10" r="5" fill="#a78bfa" stroke="#ffffff" strokeWidth="1.5" />
                  </svg>
                </div>

                <div className="flex justify-between text-[8px] font-mono text-slate-500 pt-1">
                  <span>WEEK 1</span>
                  <span>WEEK 2</span>
                  <span>WEEK 3</span>
                  <span>WEEK 4</span>
                </div>
              </motion.div>

              {/* Dynamic activity feed ticker */}
              <div className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center space-x-3.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                  <RefreshCw className="w-4.5 h-4.5 animate-spin text-[#818cf8]" />
                </div>
                <div className="overflow-hidden w-full">
                  <span className="block text-[8px] font-mono uppercase tracking-widest text-[#818cf8] font-bold">UA Streaming Insights Feed</span>
                  <div className="h-5 relative mt-0.5 overflow-hidden">
                    <AnimatePresence mode="popLayout">
                      <motion.div
                        key={currentAcqIdx}
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -15, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="text-[10px] font-mono text-slate-300 font-semibold truncate absolute inset-0"
                      >
                        {activeAcquisitions[currentAcqIdx]}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scoped CSS for hardware-accelerated seamless infinite marquee */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-marquee-infinite {
            display: flex;
            width: max-content;
            animation: marquee 38s linear infinite;
          }
          .animate-marquee-infinite:hover {
            animation-play-state: paused;
          }
        `}} />

        {/* Client Ribbon */}
        <div className="mt-20 md:mt-28 border-t border-white/5 pt-12 text-center relative">
          <div className="flex flex-col md:flex-row items-center justify-between pb-6 max-w-7xl mx-auto px-1 gap-2">
            <span className="block text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-extrabold">
              ✦ PROVEN AT HYPER-SCALE: OUR GROWTH PORTFOLIO WINS
            </span>
            <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-wider">
              ⓘ Hover over any brand capsule to pause scrolling and inspect actual verified metrics.
            </span>
          </div>

          {/* Marquee slider track with premium cinematic color wash mask */}
          <div className="relative w-full overflow-hidden py-3 rounded-3xl bg-slate-950/20 border border-white/[0.02]">
            {/* Fade-out masks on sides */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#030712] via-[#030712]/80 to-transparent z-20 pointer-events-none" />
            
            <div className="animate-marquee-infinite gap-5 px-4">
              {/* Duplicate the array once for flawless loop wrap around */}
              {[...trustLogos, ...trustLogos].map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    borderColor: logo.borderColor,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    boxShadow: `0 15px 35px -5px ${logo.glow}`
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  style={{
                    boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.6)"
                  }}
                  className="flex items-center space-x-3.5 bg-slate-900/40 backdrop-blur-md border border-white/5 px-5 py-3 rounded-2xl transition-all duration-300 group cursor-pointer shrink-0"
                >
                  {/* Highlight indicator icon */}
                  <div className={`w-8 h-8 rounded-lg bg-slate-950/80 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-white/10 transition-all ${logo.iconColor}`}>
                    <Award className="w-4 h-4" />
                  </div>

                  <div className="text-left">
                    <div className="flex items-center space-x-2">
                      <span className="font-sans font-black text-[13px] uppercase tracking-widest text-white group-hover:text-indigo-400 transition-colors">
                        {logo.name}
                      </span>
                      <span className="text-[8px] font-mono text-slate-500 bg-white/5 py-0.5 px-1.5 rounded uppercase font-bold border border-white/5 group-hover:border-indigo-500/20 group-hover:text-indigo-300 transition-all">
                        {logo.type}
                      </span>
                    </div>
                    {/* Key verified metric growth card insight */}
                    <span className="block text-[10px] font-mono text-emerald-400 font-bold tracking-tight mt-0.5 leading-none">
                      {logo.stat}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
