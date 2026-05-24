import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Phone, Target, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Success Stories", href: "#case-studies" },
    { name: "Our Methodology", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-40 bg-[#030712]/85 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <a href="#" className="flex items-center space-x-3 group">
                <div className="w-9 h-9 bg-gradient-to-tr from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                  <div className="w-3.5 h-3.5 bg-white/35 rounded-sm transform rotate-45"></div>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-xl text-white tracking-tighter leading-tight">
                    Ads<span className="text-indigo-400">Radiant</span>
                  </span>
                  <span className="text-[8px] font-mono tracking-widest text-slate-500 uppercase font-bold">App Scale Studio</span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-10 text-xs font-semibold uppercase tracking-widest text-slate-400">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="hover:text-indigo-400 text-xs font-semibold tracking-widest transition-colors uppercase font-sans relative py-2 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 transform origin-left" />
                </a>
              ))}
            </div>

            {/* CTA action trigger buttons */}
            <div className="hidden md:flex items-center space-x-1">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.15)" }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenBooking}
                className="bg-white text-slate-950 px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest transition-transform cursor-pointer"
              >
                Work With Us
              </motion.button>
            </div>

            {/* Responsive Menu Icon */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 rounded-lg border border-white/5 text-slate-450 hover:text-white focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#030712] border-b border-white/5 px-4 py-6 text-left"
            >
              <div className="flex flex-col space-y-4">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-slate-300 hover:text-indigo-400 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="pt-4 border-t border-white/5 flex flex-col space-y-3">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full py-3 bg-white text-slate-950 rounded-full font-sans text-xs font-extrabold uppercase tracking-widest text-center"
                  >
                    Work With Us
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacing element to account for sticky navbar height */}
      <div className="h-20" />
    </>
  );
}
