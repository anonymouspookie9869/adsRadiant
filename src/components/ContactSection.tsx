import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [successMessage, setSuccessMessage] = useState('');

  const validateField = (name: string, value: string) => {
    let errorMsg = '';
    
    if (name === 'name') {
      if (!value.trim()) {
        errorMsg = 'Name is required.';
      } else if (value.trim().length < 2) {
        errorMsg = 'Name must be at least 2 characters.';
      }
    }
    
    if (name === 'email') {
      if (!value.trim()) {
        errorMsg = 'Email is required.';
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) {
          errorMsg = 'Please enter a valid email address.';
        }
      }
    }
    
    if (name === 'phone') {
      if (value.trim()) {
        const phoneRegex = /^\+?[0-9\s\-()]{8,20}$/;
        if (!phoneRegex.test(value.trim())) {
          errorMsg = 'Please enter a valid phone number (min 8 digits).';
        }
      }
    }

    if (name === 'subject') {
      if (value.trim() && value.trim().length < 3) {
        errorMsg = 'Subject must be at least 3 characters if provided.';
      }
    }
    
    if (name === 'message') {
      if (!value.trim()) {
        errorMsg = 'Message is required.';
      } else if (value.trim().length < 10) {
        errorMsg = 'Message must be at least 10 characters.';
      }
    }
    
    setErrors(prev => ({
      ...prev,
      [name]: errorMsg
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    validateField(name, value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const currentErrors = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
    
    let hasError = false;
    
    if (!formData.name.trim()) {
      currentErrors.name = 'Name is required.';
      hasError = true;
    } else if (formData.name.trim().length < 2) {
      currentErrors.name = 'Name must be at least 2 characters.';
      hasError = true;
    }
    
    if (!formData.email.trim()) {
      currentErrors.email = 'Email is required.';
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        currentErrors.email = 'Please enter a valid email address.';
        hasError = true;
      }
    }
    
    if (formData.phone.trim()) {
      const phoneRegex = /^\+?[0-9\s\-()]{8,20}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        currentErrors.phone = 'Please enter a valid phone number (min 8 digits).';
        hasError = true;
      }
    }

    if (formData.subject.trim() && formData.subject.trim().length < 3) {
      currentErrors.subject = 'Subject must be at least 3 characters if provided.';
      hasError = true;
    }
    
    if (!formData.message.trim()) {
      currentErrors.message = 'Message is required.';
      hasError = true;
    } else if (formData.message.trim().length < 10) {
      currentErrors.message = 'Message must be at least 10 characters.';
      hasError = true;
    }
    
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true
    });
    
    setErrors(currentErrors);

    if (hasError) {
      setFormState('error');
      return;
    }

    setFormState('submitting');

    // Simulate sending progress
    setTimeout(() => {
      setFormState('success');
      setSuccessMessage(`Thank you, ${formData.name}. Your campaign alignment request has been submitted securely.`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTouched({
        name: false,
        email: false,
        phone: false,
        subject: false,
        message: false
      });
      setErrors({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 bg-[#030712] border-t border-white/5 overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute top-1/4 left-5 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-15">
        
        {/* Module Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left mb-16 space-y-4 max-w-3xl"
        >
          <div className="inline-flex items-center space-x-1 px-3.5 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contact Headquarters</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none uppercase">
            Let's Start Scaling
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl">
            Want to talk numbers, explore localized user acquisition opportunities, or secure an NDA? Reach out directly.
          </p>
        </motion.div>

        {/* Info Grid Split: Left details, Right message box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct coordinates */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-10 text-left"
          >
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Contact Information
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reach out to us using the information below or fill out our direct secure form. Our team responds within 2 business hours.
              </p>
            </div>

            {/* Structured Card Items */}
            <div className="space-y-4">
              
              {/* Address Card */}
              <motion.div 
                id="contact-addr-card"
                whileHover={{ x: 6, borderColor: "rgba(99, 102, 241, 0.4)", backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="p-5 bg-white/5 border border-white/5 rounded-2xl flex items-start space-x-4 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                    Corporate Address
                  </span>
                  <p className="text-sm font-bold text-white">Address</p>
                  <p className="text-xs text-slate-350 leading-relaxed">
                    B-128, First Floor, Sector-2, Noida, UP 201301
                  </p>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div 
                id="contact-phone-card"
                whileHover={{ x: 6, borderColor: "rgba(99, 102, 241, 0.4)", backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="p-5 bg-white/5 border border-white/5 rounded-2xl flex items-start space-x-4 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                    Direct Hotline
                  </span>
                  <p className="text-sm font-bold text-white">Phone</p>
                  <a 
                    href="tel:+918448243469" 
                    className="text-xs text-[#818cf8] hover:text-white font-mono font-bold transition-colors"
                  >
                    +91 8448243469
                  </a>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div 
                id="contact-email-card"
                whileHover={{ x: 6, borderColor: "rgba(99, 102, 241, 0.4)", backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="p-5 bg-white/5 border border-white/5 rounded-2xl flex items-start space-x-4 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                    General Inquiries
                  </span>
                  <p className="text-sm font-bold text-white">Email</p>
                  <a 
                    href="mailto:contact@adsradiant.com" 
                    className="text-xs text-[#818cf8] hover:text-white font-mono font-bold transition-colors"
                  >
                    contact@adsradiant.com
                  </a>
                </div>
              </motion.div>

            </div>

            {/* Business Hours Section */}
            <div className="pt-4 border-t border-white/5 space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-widest text-[#818cf8] font-bold flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Business Hours</span>
              </h4>
              <div className="space-y-2 text-xs font-mono text-slate-400">
                <div className="flex justify-between items-center py-1 border-b border-white/[0.03]">
                  <span>Monday - Friday</span>
                  <span className="text-white font-bold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span>Saturday & Sunday</span>
                  <span className="text-slate-500 font-bold">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interaction Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-white/5 border border-white/5 rounded-[24px] p-6 md:p-8 relative overflow-hidden">
              <div className="space-y-2 text-left mb-8">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Send Us a Message
                </h3>
                <p className="text-xs text-slate-405 leading-relaxed">
                  Fill out the form below and we'll get back to you with structural projections as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your name"
                      className={`w-full bg-[#030712] border rounded-xl py-3 px-4 text-white text-xs placeholder:text-slate-600 focus:outline-none transition-all ${
                        touched.name && errors.name 
                          ? 'border-red-500/50 bg-red-950/10 focus:border-red-500' 
                          : 'border-white/5 focus:border-indigo-500/50'
                      }`}
                    />
                    <AnimatePresence>
                      {touched.name && errors.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -4 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="overflow-hidden"
                        >
                          <p className="text-[10px] text-red-400 font-mono font-medium flex items-center space-x-1 mt-1 pl-1">
                            <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
                            <span>{errors.name}</span>
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your email"
                      className={`w-full bg-[#030712] border rounded-xl py-3 px-4 text-white text-xs placeholder:text-slate-600 focus:outline-none transition-all ${
                        touched.email && errors.email 
                          ? 'border-red-500/50 bg-red-950/10 focus:border-red-500' 
                          : 'border-white/5 focus:border-indigo-500/50'
                      }`}
                    />
                    <AnimatePresence>
                      {touched.email && errors.email && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -4 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="overflow-hidden"
                        >
                          <p className="text-[10px] text-red-400 font-mono font-medium flex items-center space-x-1 mt-1 pl-1">
                            <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your phone number"
                      className={`w-full bg-[#030712] border rounded-xl py-3 px-4 text-white text-xs placeholder:text-slate-600 focus:outline-none transition-all ${
                        touched.phone && errors.phone 
                          ? 'border-red-500/50 bg-red-950/10 focus:border-red-500' 
                          : 'border-white/5 focus:border-indigo-500/50'
                      }`}
                    />
                    <AnimatePresence>
                      {touched.phone && errors.phone && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -4 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="overflow-hidden"
                        >
                          <p className="text-[10px] text-red-400 font-mono font-medium flex items-center space-x-1 mt-1 pl-1">
                            <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Subject field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter the subject"
                      className={`w-full bg-[#030712] border rounded-xl py-3 px-4 text-white text-xs placeholder:text-slate-600 focus:outline-none transition-all ${
                        touched.subject && errors.subject 
                          ? 'border-red-500/50 bg-red-950/10 focus:border-red-500' 
                          : 'border-white/5 focus:border-indigo-500/50'
                      }`}
                    />
                    <AnimatePresence>
                      {touched.subject && errors.subject && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -4 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="overflow-hidden"
                        >
                          <p className="text-[10px] text-red-400 font-mono font-medium flex items-center space-x-1 mt-1 pl-1">
                            <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
                            <span>{errors.subject}</span>
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your message"
                    className={`w-full bg-[#030712] border rounded-xl py-3 px-4 text-white text-xs placeholder:text-slate-600 focus:outline-none transition-all resize-none ${
                      touched.message && errors.message 
                        ? 'border-red-500/50 bg-red-950/10 focus:border-red-500' 
                        : 'border-white/5 focus:border-indigo-500/50'
                    }`}
                  />
                  <AnimatePresence>
                    {touched.message && errors.message && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -4 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[10px] text-red-400 font-mono font-medium flex items-center space-x-1 mt-1 pl-1">
                          <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submissions Alerts panel */}
                <AnimatePresence mode="wait">
                  {formState === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-emerald-950/30 border border-emerald-500/20 p-4 rounded-xl text-xs text-emerald-400 flex items-start space-x-2.5 font-sans"
                    >
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{successMessage}</span>
                    </motion.div>
                  )}

                  {formState === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-red-950/30 border border-red-500/20 p-4 rounded-xl text-xs text-red-400 flex items-start space-x-2.5 font-sans"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>Please complete all required fields (Name, Email, Message) with valid credentials.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.025, backgroundColor: "#5349e2", boxShadow: "0 10px 25px rgba(99, 102, 241, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full py-3.5 bg-indigo-600 disabled:opacity-50 text-white rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-2.5 shadow-xl shadow-indigo-600/10"
                >
                  {formState === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Establishing Safe Socket...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </motion.button>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
