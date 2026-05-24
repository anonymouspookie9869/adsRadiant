import React, { useState } from 'react';
import { AreaChart, TrendingUp, Check, Play, BookOpen, Clock, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

export default function CaseStudies({ onOpenBooking }: CaseStudiesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'fintech' | 'health'>('all');

  const cases = [
    {
      id: "zenspend",
      category: "fintech",
      clientName: "ZenSpend",
      niche: "Fintech Expense Tracker",
      challenge: "Aggressive competitor CPC bid wars for search placements. CAC raised to a prohibitive $4.85.",
      strategy: "Redirected 75% budget to short, witty creator-led TikTok native Spark Ads. Set up rigid Meta Advantage+ retargeting funnels with A/B payment screens.",
      metrics: [
        { label: "Acquisition CAC Drop", value: "-38.4%" },
        { label: "App Store Conversion", value: "+148%" },
        { label: "L30 Day Active Cohorts", value: "3.2x" }
      ],
      chartData: [20, 34, 45, 68, 92, 110], // Deposit volume index
      chartColor: "#22d3ee",
      roiMetric: "4.8x ROI"
    },
    {
      id: "fitpulse",
      category: "health",
      clientName: "FitPulse Fitness",
      niche: "Calisthenics Conditioning App",
      challenge: "High install volume but critical onboarding drop-offs immediately at the premium paywall (92% bounce rate).",
      strategy: "Teardown of onboarding. Implemented Custom store product screens, restructured the trial modal, and targeted localized fitness audiences on Meta.",
      metrics: [
        { label: "Trial Activation Uplift", value: "2.1x" },
        { label: "Onboarding Friction", value: "-45.0%" },
        { label: "Total UA Scale Lift", value: "+210%" }
      ],
      chartData: [40, 52, 60, 85, 120, 154], // Activation volumes
      chartColor: "#a78bfa",
      roiMetric: "5.2x ROAS"
    },
    {
      id: "mobivault",
      category: "fintech",
      clientName: "MobiVault Core",
      niche: "Privacy & Password Locker",
      challenge: "Saturated localized markets leading to high CPM and slow expansion cycles.",
      strategy: "Secured native micro-influencer creative endorsement videos. Deployed localized ad sets across Europe and Japan with multi-tier CPI bid limits.",
      metrics: [
        { label: "Global Installs Captured", value: "+340,000" },
        { label: "Direct Install CPA", value: "$0.92" },
        { label: "Average Ad CTR Rate", value: "5.41%" }
      ],
      chartData: [15, 30, 62, 90, 134, 185], // Install volume tracker
      chartColor: "#34d399",
      roiMetric: "12x Scale Boost"
    }
  ];

  const filteredCases = activeTab === 'all' ? cases : cases.filter(c => c.category === activeTab);

  return (
    <div className="py-20 px-4 md:px-8 border-t border-white/5 bg-[#030712] text-slate-100 uppercase-none" id="case-studies">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3">
            <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-bold">
              validated app scaling records
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Our Success Chronicles
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              We focus entirely on the bottom-line. Explore our case files to see how we tackle real-world budget challenges, optimize onboarding, and execute strategic scale.
            </p>
          </div>

          {/* Filter Toggles */}
          <div className="flex bg-white/5 border border-white/5 p-1 rounded-full self-start">
            <button
              onClick={() => setActiveTab('all')}
              className={`py-2 px-5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all' 
                ? 'bg-white text-slate-950 font-extrabold shadow-lg' 
                : 'text-slate-400 hover:text-white'
              }`}
            >
              All Verticals
            </button>
            <button
              onClick={() => setActiveTab('fintech')}
              className={`py-2 px-5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'fintech' 
                ? 'bg-white text-slate-950 font-extrabold shadow-lg' 
                : 'text-slate-400 hover:text-white'
              }`}
            >
              Fintech
            </button>
            <button
              onClick={() => setActiveTab('health')}
              className={`py-2 px-5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'health' 
                ? 'bg-white text-slate-950 font-extrabold shadow-lg' 
                : 'text-slate-400 hover:text-white'
              }`}
            >
              Lifestyle
            </button>
          </div>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCases.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              whileHover={{ 
                y: -6, 
                scale: 1.015,
                borderColor: "rgba(99, 102, 241, 0.4)", 
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                boxShadow: "0 25px 45px rgba(0, 0, 0, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group relative rounded-[32px] bg-white/5 border border-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-300 flex flex-col justify-between text-left cursor-default"
            >
              {/* Highlight badge overlay */}
              <div className="absolute top-4 right-4 z-10 px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-[9px] uppercase tracking-wider font-extrabold rounded-md">
                {caseItem.roiMetric}
              </div>

              <div className="space-y-4">
                {/* Visual Label */}
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#818cf8] font-bold">
                    {caseItem.niche}
                  </span>
                  <h3 className="font-sans text-xl font-extrabold text-white mt-1 group-hover:text-indigo-400 transition-colors">
                    {caseItem.clientName}
                  </h3>
                </div>

                {/* Challenges and Strategies block */}
                <div className="space-y-3.5 pt-1.5 text-xs">
                  <div className="space-y-1.5">
                    <span className="block text-[8px] font-mono uppercase tracking-widest font-bold text-red-450">
                      THE SPECIFIC CHALLENGE
                    </span>
                    <p className="text-slate-400 leading-relaxed text-[11px]">{caseItem.challenge}</p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="block text-[8px] font-mono uppercase tracking-widest font-bold text-emerald-400">
                      ADSRADIANT strategy
                    </span>
                    <p className="text-slate-300 leading-relaxed text-[11px]">{caseItem.strategy}</p>
                  </div>
                </div>

                {/* Metrics Highlight Card Block */}
                <div className="grid grid-cols-3 gap-2 bg-[#030712]/60 p-3 rounded-2xl border border-white/5 font-mono text-center">
                  {caseItem.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="block text:[14px] md:text-[16px] font-bold text-white tracking-tighter">
                        {m.value}
                      </span>
                      <span className="block text-[8px] text-slate-500 leading-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Performance Graph Chart representation */}
                <div className="bg-[#030712]/60 p-4 rounded-2xl border border-white/5">
                  <span className="block text-[8px] text-slate-500 font-mono uppercase tracking-widest mb-2.5">
                    Acquisition Efficiency Multiplier (L30 Trend)
                  </span>
                  
                  {/* Custom SVG sparkline graph */}
                  <div className="h-14 w-full relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                      <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                      <path
                        d={`M 0 ${40 - (caseItem.chartData[0] / 5)} 
                            L 20 ${40 - (caseItem.chartData[1] / 5)} 
                            L 40 ${40 - (caseItem.chartData[2] / 5)} 
                            L 60 ${40 - (caseItem.chartData[3] / 5)} 
                            L 80 ${40 - (caseItem.chartData[4] / 5)} 
                            L 100 ${40 - (caseItem.chartData[5] / 5)}`}
                        fill="none"
                        stroke={caseItem.id === "zenspend" ? "#818cf8" : (caseItem.id === "fitpulse" ? "#a78bfa" : "#34d399")}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Interactive dotted pointers */}
                      <circle cx="80" cy={40 - (caseItem.chartData[4] / 5)} r="1.5" fill="#ffffff" />
                      <circle cx="100" cy={40 - (caseItem.chartData[5] / 5)} r="2" fill="#ffffff" className="animate-pulse" />
                    </svg>
                  </div>
                  <div className="flex justify-between text-[7px] font-mono text-slate-600 mt-1 uppercase">
                    <span>Baseline</span>
                    <span>Optimized Scale</span>
                  </div>
                </div>

              </div>

              {/* Action and social proof checklist */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-bold flex items-center space-x-1">
                  <Star className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400" />
                  <span>Verified Growth Record</span>
                </span>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#4f46e5", borderColor: "rgba(99,102,241,0.5)", color: "#ffffff" }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpenBooking}
                  className="px-4 py-2 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 font-sans text-xs font-bold rounded-xl transition-all cursor-pointer font-mono"
                >
                  Inquire Strategy
                </motion.button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Global summary card block */}
        <div className="relative rounded-[40px] bg-slate-900/40 border border-white/10 p-6 md:p-8 overflow-hidden backdrop-blur-xl max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2">
            <h4 className="text-white font-bold text-lg">Looking to scale beyond single-market boundaries?</h4>
            <p className="text-slate-400 text-xs max-w-xl">
              We leverage proprietary creator networks spanning 24+ countries and coordinate multi-currency ad allocations. Unlock automated target bid boundaries on your account inside 48 hours.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-2.5 bg-white text-slate-950 rounded-full text-[10px] font-extrabold uppercase tracking-widest hover:scale-105 shadow-xl shadow-white/5 cursor-pointer block shrink-0"
          >
            Review Custom Pilot Program
          </button>
        </div>
      </div>
    </div>
  );
}
