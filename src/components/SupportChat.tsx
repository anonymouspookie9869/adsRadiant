import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, ChevronUp, Sparkles, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SupportChatProps {
  onOpenBooking: (budgetPrefill?: string) => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

export default function SupportChat({ onOpenBooking }: SupportChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with greeting logic after a short delay
  useEffect(() => {
    // Show high-priority growth invite alert notification toast after 4 seconds
    const timerNotify = setTimeout(() => {
      if (!isOpen) {
        setHasNewMessage(true);
        setShowNotification(true);
      }
    }, 4000);

    return () => clearTimeout(timerNotify);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isOpen) {
          setIsOpen(false);
        } else if (showNotification) {
          setShowNotification(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, showNotification]);

  useEffect(() => {
    // Scroll to the bottom of the message container whenever messages update
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleOpenChat = () => {
    setIsOpen(true);
    setHasNewMessage(false);
    setShowNotification(false);

    // If chat is empty, populate the first greetings with artificial thinking timers
    if (messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        const welcomeMsgs: Message[] = [
          {
            id: 'welcome-1',
            sender: 'bot',
            text: "Hi there! I'm Rachel, Principal App Growth Architect at AdsRadiant. 👋",
            timestamp: new Date()
          }
        ];
        setMessages(welcomeMsgs);
        setIsTyping(false);

        // Queue second descriptive message shortly after
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setMessages(prev => [
              ...prev,
              {
                id: 'welcome-2',
                sender: 'bot',
                text: "I noticed you checking out our scale-up structures. We are currently offering a limited number of complimentary $10k UA strategy audits.",
                timestamp: new Date()
              },
              {
                id: 'welcome-3',
                sender: 'bot',
                text: "Would you like me to connect you directly with one of our senior growth campaign architects for a 1-on-1 strategy alignment?",
                timestamp: new Date()
              }
            ]);
            setIsTyping(false);
          }, 1200);
        }, 1500);

      }, 800);
    }
  };

  const handleSendMessage = (text: string, isQuickReply = false) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    if (!isQuickReply) {
      setInputValue('');
    }

    // Trigger typing behavior for simulated assistant response
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let replyText = '';
      let isActionReply = false;

      const lowerText = text.toLowerCase();

      if (lowerText.includes('schedule') || lowerText.includes('yes') || lowerText.includes('connect') || lowerText.includes('book')) {
        replyText = "Fantastic! I am opening our strategy coordinator scheduling flow right now so you can select a 30-min slot with one of our architects. Stand by...";
        isActionReply = true;
        
        // Open the booking modal after a tiny delay
        setTimeout(() => {
          onOpenBooking();
        }, 1500);
      } else if (lowerText.includes('hour') || lowerText.includes('time') || lowerText.includes('open')) {
        replyText = "Our scale-up and optimization squads operate Monday to Friday between 9:00 AM and 6:00 PM. Outside these hours, we actively monitor live budget scripts. Shall I connect you with our advisor to book a meeting during our active hours?";
      } else if (lowerText.includes('how') || lowerText.includes('scale') || lowerText.includes('method')) {
        replyText = "We replace traditional speculative media buying with real-time algorithmic bidding scripts and high-velocity custom creatives (UGC, playables). It typically drops CPAs by 30-40% of standard baselines. I highly recommend scheduling a complimentary strategy alignment call with our principal advisor. Shall I book you in?";
      } else if (lowerText.includes('audit') || lowerText.includes('scan') || lowerText.includes('contact')) {
        replyText = "Superb choice! You can secure a formal NDA-backed user acquisition strategy audit directly. I would be glad to book a quick 1-on-1 presentation for you with our growth architects. Shall we lock in a slot?";
      } else {
        replyText = "Thank you for sharing that! Your product objectives sound highly suitable for our scale-up sandbox program. To get proper performance maps and ensure database NDA safety, scheduling an alignment session with our Growth Architect is the absolute best next step. Shall I pull up our scheduler?";
      }

      setMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: replyText,
          timestamp: new Date()
        }
      ]);
    }, 1500);
  };

  return (
    <>
      {/* Dynamic Pop-up Notification/Toast Banner */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            id="chat-notification"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 max-w-sm w-80 bg-[#070b19] border border-indigo-500/20 rounded-2xl shadow-2xl p-4 cursor-pointer hover:border-indigo-500/40 transition-all font-sans text-left"
            onClick={handleOpenChat}
          >
            <div className="flex items-start space-x-3.5">
              <div className="relative w-9 h-9 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold font-mono text-sm shrink-0">
                R
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#070b19] rounded-full animate-bounce" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Rachel (Growth Architect)</span>
                  <span className="text-[9px] font-mono text-indigo-400 font-extrabold uppercase bg-indigo-500/10 px-1.5 py-0.5 rounded">NEW</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  "Hi there! Would you like a complimentary $10K user acquisition strategy audit for your application?"
                </p>
                <div className="pt-1 flex items-center space-x-1 text-[10px] font-bold text-indigo-400">
                  <span>Click to chat</span>
                  <ArrowRight className="w-3 h-3 animate-pulse" />
                </div>
              </div>
               <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNotification(false);
                }}
                className="text-slate-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                aria-label="Dismiss message"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Bubble Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <motion.button
          id="floating-chat-trigger"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (isOpen ? setIsOpen(false) : handleOpenChat())}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#030712] ${
            isOpen 
              ? 'bg-[#1e1b4b] text-white border border-white/10' 
              : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/25 shadow-xl'
          }`}
          aria-label="Toggle live concierge chat"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <>
              <MessageSquare className="w-5 h-5" />
              {hasNewMessage && (
                <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 text-white font-mono text-[9px] font-extrabold flex items-center justify-center animate-pulse shadow-md">
                  1
                </div>
              )}
            </>
          )}
        </motion.button>
      </div>

      {/* Main Beautiful Chat Window Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chat-drawer-container"
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-sm h-[500px] bg-[#070b19]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col font-sans text-left"
          >
            {/* Header section with expert profiling */}
            <div className="px-5 py-4 bg-indigo-950/40 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-black font-mono text-sm shrink-0">
                  R
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#070b19] rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h4 className="text-xs font-bold text-white tracking-wide">Rachel Rivera</h4>
                    <span className="text-[8px] bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 font-mono font-extrabold uppercase px-1 py-0.25 rounded-md flex items-center">
                      <Sparkles className="w-2 h-2 mr-0.5" /> Architect
                    </span>
                  </div>
                  <p className="text-[10px] text-emerald-400 font-semibold flex items-center">
                    <span>Online & active now</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 px-1.5 rounded-full border border-white/5 hover:border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Minimize consultation portal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat message streams area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-end space-x-2`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono text-[9px] font-black shrink-0">
                      R
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-indigo-600 text-white rounded-br-none shadow-lg'
                        : 'bg-white/5 text-slate-200 border border-white/5 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator state */}
              {isTyping && (
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono text-[9px] font-black shrink-0">
                    R
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-bl-none px-4 py-3 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick action buttons block */}
            {messages.length > 0 && !isTyping && (
              <div className="p-3 bg-slate-950/40 border-t border-white/5 space-y-1.5">
                <span className="block text-[8px] font-mono uppercase tracking-widest text-slate-500 mb-1">
                  Tap Suggested Action
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSendMessage("Connect with a Senior growth architect! 🚀", true)}
                    className="py-1 px-2.5 bg-indigo-600 hover:bg-indigo-550 text-white text-[10px] font-bold rounded-lg transition-colors flex items-center space-x-1 cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  >
                    <span>Schedule 1-on-1 Discovery Call</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSendMessage("How do your UA models lower CPM benchmarks?", true)}
                    className="py-1 px-2.5 bg-white/5 border border-white/5 text-slate-300 text-[10px] font-medium rounded-lg transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  >
                    How do campaigns scale?
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSendMessage("What are your business operating hours?", true)}
                    className="py-1 px-2.5 bg-white/5 border border-white/5 text-slate-300 text-[10px] font-medium rounded-lg transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  >
                    🕒 Business Hours
                  </motion.button>
                </div>
              </div>
            )}

            {/* Direct write text input field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 bg-[#030712] border-t border-white/5 flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your growth puzzle..."
                className="flex-1 bg-white/5 border border-white/5 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-full py-2 px-4 text-white text-xs placeholder:text-slate-600 focus:outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2 rounded-full bg-indigo-600 hover:bg-indigo-505 disabled:bg-white/5 disabled:text-slate-600 text-white transition-all cursor-pointer flex items-center justify-center shrink-0 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Send user chat text"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
