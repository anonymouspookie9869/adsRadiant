import React from 'react';
import { Shield, Sparkles, Zap, Award, Users, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutUs() {
  const values = [
    {
      icon: <Shield className="w-5 h-5 text-[#818cf8]" />,
      title: "Integrity",
      desc: "We believe in honesty, transparency, and doing what's right for our clients and employees."
    },
    {
      icon: <Zap className="w-5 h-5 text-[#a78bfa]" />,
      title: "Innovation",
      desc: "We constantly seek new and better ways to solve problems and create value for our clients."
    },
    {
      icon: <Award className="w-5 h-5 text-[#2dd4bf]" />,
      title: "Excellence",
      desc: "We strive for excellence in everything we do, from client service to technical implementation."
    }
  ];

  const teamMembers = [
    {
      name: "Rachel Rivera",
      role: "Principal Growth Architect",
      initials: "RR",
      grad: "from-[#818cf8]/15 via-[#a78bfa]/5 to-transparent border-[#818cf8]/20",
      desc: "Ex-Meta app campaign design principal. Focuses on system-level bid optimizations."
    },
    {
      name: "Karan Johar",
      role: "Lead Performance Engineer",
      initials: "KJ",
      grad: "from-[#2dd4bf]/15 via-[#a78bfa]/5 to-transparent border-[#2dd4bf]/20",
      desc: "Ex-Google mobile app network architect. Directs regional scaling operations."
    },
    {
      name: "Esha Sharma",
      role: "Creative Strategy Director",
      initials: "ES",
      grad: "from-[#f472b6]/15 via-pink-500/5 to-transparent border-[#f472b6]/20",
      desc: "Supervises high-concept user acquisition creators and high-velocity asset testing."
    }
  ];

  return (
    <div className="py-24 px-4 md:px-8 bg-[#030712] border-t border-white/5 relative overflow-hidden" id="about">
      {/* Immersive Background Flares */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* SECTION 1: Our Story */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          
          <div className="lg:col-span-4 text-left space-y-4">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono font-bold uppercase text-slate-350 tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>About Us</span>
            </span>
            <h2 className="font-sans text-4xl md:text-5.5xl font-black text-white tracking-tight leading-none uppercase">
              Our Story
            </h2>
          </div>

          <div className="lg:col-span-8 text-left space-y-6">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              Adsradiant Media has transformed from a small startup into a leading provider of business solutions, driven by our commitment to high ROI, quality traffic, and user acquisition. Our journey is rooted in innovation, dedication, and a relentless pursuit of excellence.
            </p>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-sans border-l-2 border-indigo-500/30 pl-4 py-1">
              We started with a clear mission: to help businesses leverage technology for achieving their goals. Over time, we've expanded our services and expertise, but our core mission and focus on delivering high-impact results remain unchanged.
            </p>
          </div>

        </motion.div>

        {/* SECTION 2: Our Values */}
        <div className="space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none uppercase">
              Our Values
            </h3>
            <p className="text-xs md:text-sm text-slate-450 font-mono uppercase tracking-widest">
              These core principles guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.015,
                  borderColor: "rgba(99, 102, 241, 0.4)", 
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
                }}
                className="bg-white/5 border border-white/5 p-6 md:p-8 rounded-2xl md:rounded-[24px] text-left space-y-4 transition-all duration-300 group relative overflow-hidden cursor-default"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center shadow-inner">
                  {v.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="font-sans text-lg font-bold text-white tracking-tight">
                    {v.title}
                  </h4>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* SECTION 3: Our Team */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 text-left space-y-4"
          >
            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-[#818cf8]/10 border border-[#818cf8]/25 text-[#818cf8] text-[9px] font-mono uppercase tracking-widest rounded-md font-bold">
              <Users className="w-3.5 h-3.5 mr-1" />
              <span>Operational Brains</span>
            </span>
            <h3 className="font-sans text-3xl md:text-4.5xl font-black text-white tracking-tight uppercase leading-none">
              Our Team
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Our team consists of experienced professionals with diverse backgrounds and expertise. We're united by a passion for helping businesses succeed and a commitment to delivering exceptional results.
            </p>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {teamMembers.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.015,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                  borderColor: "rgba(99, 102, 241, 0.3)"
                }}
                className={`bg-gradient-to-br ${member.grad} border p-5 rounded-2xl text-left space-y-3.5 transition-all duration-300 cursor-default`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-slate-950/80 border border-white/10 flex items-center justify-center font-mono font-black text-xs text-white">
                    {member.initials}
                  </div>
                  <span className="text-[8px] font-mono uppercase tracking-widest text-slate-500 bg-white/5 px-2 py-0.5 rounded font-bold">
                    HQ Noida
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{member.name}</h4>
                  <p className="text-[10px] font-mono text-indigo-400 font-bold uppercase mt-0.5">{member.role}</p>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed pt-1.5 border-t border-white/[0.04]">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
