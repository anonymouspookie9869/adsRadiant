import React, { useState } from 'react';
import { X, Calendar, Clock, Sparkles, CheckCircle2, Shield, Mail, User, Radio, Percent, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LeadBookingRequest, BookingResponse } from '../types';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillBudget?: string;
}

export default function LeadModal({ isOpen, onClose, prefillBudget }: LeadModalProps) {
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [appName, setAppName] = useState('');
  const [appCategory, setAppCategory] = useState('');
  const [monthlyBudget, setMonthlyBudget] = useState(prefillBudget || '$5,000 - $10,000');
  const [targetAudience, setTargetAudience] = useState('');
  
  // Date and Time slot booking states
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [bookingResult, setBookingResult] = useState<BookingResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !email.trim()) {
      setErrorMsg('Please provide your full name and primary email.');
      return;
    }
    
    setIsLoading(true);
    setErrorMsg('');
    
    try {
      const payload: LeadBookingRequest = {
        appName,
        appCategory,
        monthlyBudget,
        targetAudience,
        email,
        clientName,
        meetingDate: meetingDate || undefined,
        meetingTime: meetingTime || undefined
      };

      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Server error occurred during booking.');
      }

      setBookingResult(data);
    } catch (err: any) {
      setErrorMsg(err.message || 'Unable to complete your scheduling request.');
    } finally {
      setIsLoading(false);
    }
  };

  const currentSlots = [
    "09:00 AM (EST)", "11:00 AM (EST)", "02:00 PM (EST)", "04:00 PM (EST)"
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        {/* Backdrop close */}
        <div className="absolute inset-0 cursor-pointer" onClick={onClose} />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-[32px] bg-[#030712]/95 border border-white/10 shadow-2xl z-10 p-1"
        >
          {/* Subtle gradient light flare */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#818cf8]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="px-6 py-6 md:px-8 md:py-8 bg-[#030712]/90 backdrop-blur-xl rounded-[30px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-sans font-bold text-lg text-white tracking-tight">Ads<span className="text-indigo-400">Radiant</span></span>
              </div>
              <button 
                onClick={onClose}
                className="p-1.5 rounded-full border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {bookingResult ? (
              // SUCCESS SCREEN
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8 px-4"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-sans text-2xl font-bold text-white tracking-tight mb-2">
                  Growth Call Confirmed!
                </h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you for booking with AdsRadiant. Our principal consultants will review your app structure details and meet you as scheduled.
                </p>

                <div className="bg-[#030712]/60 border border-white/5 rounded-2xl p-5 mb-8 text-left max-w-md mx-auto font-mono text-xs text-slate-300">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-500">Lead Reference ID:</span>
                    <span className="text-indigo-400 font-bold">{bookingResult.lead.id}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-500">Client Name:</span>
                    <span className="text-white">{bookingResult.lead.clientName}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-500">Target App:</span>
                    <span className="text-white">{bookingResult.lead.appName}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-500">Scheduled Date:</span>
                    <span className="text-[#818cf8]">{bookingResult.lead.meetingDate || 'Awaiting Calendar Sync'}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">Scheduled Time:</span>
                    <span className="text-[#818cf8]">{bookingResult.lead.meetingTime || 'Awaiting Slot Selection'}</span>
                  </div>
                </div>

                <div className="flex justify-center space-x-3">
                  <button 
                    onClick={onClose}
                    className="px-6 py-2.5 bg-white text-slate-950 rounded-full text-[10px] font-extrabold uppercase tracking-widest hover:scale-105 shadow-xl shadow-white/5 cursor-pointer block"
                  >
                    Return to Portal
                  </button>
                </div>
              </motion.div>
            ) : (
              // FORM SCREEN
              <div>
                <div className="mb-6 text-left">
                  <h3 className="font-sans text-xl font-bold text-white tracking-tight">
                    Schedule Your Free 30-Min App Growth Consultation
                  </h3>
                  <p className="text-[#94a3b8] text-xs mt-1">
                    Get an exhaustive audit of your current channels, performance KPIs, and a customized $10k trial playbook.
                  </p>
                </div>

                {errorMsg && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center space-x-2 text-red-400 text-xs text-left">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Grid 1: Basic Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <div>
                      <label className="block text-slate-400 text-[9px] font-mono uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                        <input 
                          type="text" 
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="e.g. Alex Rivera"
                          className="w-full bg-[#030712] border border-white/10 focus:border-indigo-500 rounded-full py-2.5 pl-10 pr-4 text-white text-xs placeholder:text-slate-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-slate-400 text-[9px] font-mono uppercase tracking-wider mb-1.5">
                        Work Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. alex@company.com"
                          className="w-full bg-[#030712] border border-white/10 focus:border-indigo-500 rounded-full py-2.5 pl-10 pr-4 text-white text-xs placeholder:text-slate-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Grid 2: App details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <div>
                      <label className="block text-slate-400 text-[9px] font-mono uppercase tracking-wider mb-1.5">
                        App Name / Company URL
                      </label>
                      <input 
                        type="text" 
                        value={appName}
                        onChange={(e) => setAppName(e.target.value)}
                        placeholder="e.g. Serene Meditation App"
                        className="w-full bg-[#030712] border border-white/10 focus:border-indigo-500 rounded-full py-2.5 px-4 text-white text-xs placeholder:text-slate-600 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-[9px] font-mono uppercase tracking-wider mb-1.5">
                        App Category / Niche
                      </label>
                      <input 
                        type="text" 
                        value={appCategory}
                        onChange={(e) => setAppCategory(e.target.value)}
                        placeholder="e.g. Health & Fitness / Subscription"
                        className="w-full bg-[#030712] border border-white/10 focus:border-indigo-500 rounded-full py-2.5 px-4 text-white text-xs placeholder:text-slate-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Audience and Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <div>
                      <label className="block text-slate-400 text-[9px] font-mono uppercase tracking-wider mb-1.5">
                        Active Target Audience Profile
                      </label>
                      <input 
                        type="text" 
                        value={targetAudience}
                        onChange={(e) => setTargetAudience(e.target.value)}
                        placeholder="e.g. US, Age 24-45, Interested in Wellness"
                        className="w-full bg-[#030712] border border-white/10 focus:border-indigo-500 rounded-full py-2.5 px-4 text-white text-xs placeholder:text-slate-600 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-[9px] font-mono uppercase tracking-wider mb-1.5">
                        Estimated Monthly User Acquisition Budget
                      </label>
                      <select 
                        value={monthlyBudget} 
                        onChange={(e) => setMonthlyBudget(e.target.value)}
                        className="w-full bg-[#030712] border border-white/10 focus:border-indigo-500 rounded-full py-2.5 px-4 text-white text-xs focus:outline-none transition-colors"
                      >
                        <option value="<$5,000">&lt; $5,000 / mo</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000 / mo</option>
                        <option value="$15,000 - $50,050">$15,000 - $50,000 / mo</option>
                        <option value="$50,000+">$50,000+ / mo</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Pick Session Dates */}
                  <div className="border-t border-white/5 pt-4 text-left">
                    <span className="block text-slate-400 text-[10px] font-mono uppercase tracking-wider mb-3">
                      Select Consultation Slot
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <div className="relative">
                          <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                          <input 
                            type="date"
                            required
                            min={new Date().toISOString().split('T')[0]}
                            value={meetingDate}
                            onChange={(e) => setMeetingDate(e.target.value)}
                            className="w-full bg-[#030712] border border-white/10 focus:border-indigo-500 rounded-full py-2.5 pl-10 pr-4 text-white text-xs focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="grid grid-cols-2 gap-1.5">
                          {currentSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setMeetingTime(slot)}
                              className={`py-2 px-1 text-center rounded-full border text-[9px] uppercase font-bold transition-all cursor-pointer ${
                                meetingTime === slot 
                                ? 'bg-white text-slate-950 border-white font-extrabold' 
                                : 'bg-transparent border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                              }`}
                            >
                              {slot.replace(" (EST)", "")}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                    <div className="flex items-center space-x-1.5 text-slate-500 text-[9px]">
                      <Shield className="w-3.5 h-3.5 text-indigo-400" />
                      <span>GDPR Compliant. Under legal NDA automatically.</span>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.04, boxShadow: "0 10px 25px rgba(255, 255, 255, 0.12)" }}
                      whileTap={{ scale: 0.96 }}
                      type="submit"
                      disabled={isLoading}
                      className="px-6 py-2.5 bg-white text-slate-950 rounded-full text-[10px] font-extrabold uppercase tracking-widest cursor-pointer block sm:w-auto"
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-1.5">
                          <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Securing Slot...</span>
                        </div>
                      ) : (
                        <span>Confirm Advisory Booking</span>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
