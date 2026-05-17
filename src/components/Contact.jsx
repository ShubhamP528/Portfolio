import { useState } from "react";
import { FiMail, FiPhone, FiCopy, FiCheck, FiGithub, FiTwitter, FiLinkedin, FiSend } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [copiedStates, setCopiedStates] = useState({
    email: false,
    phone: false
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [type]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [type]: false }));
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");
    
    try {
      const response = await fetch("https://rent-management-backend-three.vercel.app/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: "", // Optional phone field
          subject: `Portfolio Inquiry from ${formState.name}`, // Required subject
          message: formState.message
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        setIsSubmitting(false);
        setSubmitError(data.message || "Failed to deliver message. Check format specs.");
      }
    } catch (error) {
      console.error("API submission error:", error);
      setIsSubmitting(false);
      setSubmitError("Connection failed. Please check your internet connection and try again.");
    }

    // Auto-clear notification states after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setSubmitError("");
    }, 5000);
  };

  return (
    <section className="w-full py-16" id="contact">
      <div className="flex flex-col items-center gap-16 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 px-6 py-2 backdrop-blur-md"
          >
            <span className="text-sm font-semibold tracking-wider uppercase">Contact Portal</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading text-text"
          >
            Let's Architect Together
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-text-muted mt-2 max-w-xl mx-auto"
          >
            Submit an encrypted message to my inbox, or copy direct communication lines below.
          </motion.p>
        </div>

        {/* Dynamic Split Layout Contact Board */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-4">
          
          {/* Left Panel: Direct Channels (40% width) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="flex flex-col gap-6">
              {/* Direct Mail Card */}
              <div className="glass-card p-6 flex items-center justify-between border border-black/5 dark:border-white/5 relative group hover:border-cyan-500/20 transition-all duration-300 shadow-md hover:shadow-cyan-500/5">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#0b0f19] border border-black/5 dark:border-white/5 text-cyan-600 dark:text-cyan-400">
                    <FiMail size={22} />
                  </div>
                  <div className="flex flex-col truncate max-w-[200px] sm:max-w-[280px] lg:max-w-[180px]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">Direct Email</span>
                    <span className="text-sm font-bold text-text truncate">shubham528prajapati@gmail.com</span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleCopy("shubham528prajapati@gmail.com", "email")}
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-[#0b0f19] border border-black/5 dark:border-white/5 text-text-muted hover:text-text transition-all duration-300 relative"
                  aria-label="Copy Email"
                >
                  {copiedStates.email ? <FiCheck size={16} className="text-emerald-500" /> : <FiCopy size={16} />}
                  <AnimatePresence>
                    {copiedStates.email && (
                      <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute -top-10 right-0 rounded-md bg-emerald-500 text-white px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap shadow-lg"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              {/* Direct Phone Card */}
              <div className="glass-card p-6 flex items-center justify-between border border-black/5 dark:border-white/5 relative group hover:border-indigo-500/20 transition-all duration-300 shadow-md hover:shadow-indigo-500/5">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#0b0f19] border border-black/5 dark:border-white/5 text-indigo-600 dark:text-indigo-400">
                    <FiPhone size={22} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">Telephone</span>
                    <span className="text-sm font-bold text-text">+91 9027640571</span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleCopy("+919027640571", "phone")}
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-[#0b0f19] border border-black/5 dark:border-white/5 text-text-muted hover:text-text transition-all duration-300 relative"
                  aria-label="Copy Telephone"
                >
                  {copiedStates.phone ? <FiCheck size={16} className="text-emerald-500" /> : <FiCopy size={16} />}
                  <AnimatePresence>
                    {copiedStates.phone && (
                      <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute -top-10 right-0 rounded-md bg-emerald-500 text-white px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap shadow-lg"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>

            {/* Social Grid Deck */}
            <div className="glass-card p-6 border border-black/5 dark:border-white/5 flex flex-col gap-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted">Interactive Channels</span>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "GitHub", icon: FiGithub, href: "https://github.com/ShubhamP528", accent: "hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/20" },
                  { label: "Twitter", icon: FiTwitter, href: "https://twitter.com/shubham14481056", accent: "hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-400/20" },
                  { label: "LinkedIn", icon: FiLinkedin, href: "https://www.linkedin.com/in/shubham-prajapati-a3b635228", accent: "hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/20" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex flex-col items-center justify-center p-4 rounded-xl bg-slate-100 dark:bg-[#0b0f19] border border-black/5 dark:border-white/5 transition-all duration-300 group hover:shadow-md ${social.accent}`}
                  >
                    <social.icon size={20} className="text-text-muted group-hover:scale-115 transition-transform" />
                    <span className="text-[10px] font-mono font-semibold text-text-muted mt-2">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Holographic Message Console Form (60% width) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <form 
              onSubmit={handleFormSubmit}
              className="glass-card p-6 md:p-8 flex flex-col gap-5 border border-black/5 dark:border-white/5 relative overflow-hidden glow-shadow-purple h-full"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none rounded-bl-full"></div>

              {/* Form title */}
              <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-3">
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">⚡ SECURE COMMUNICATION PORTAL</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-text-muted pl-1">Ident / Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-[#0b0f19] border border-black/5 dark:border-white/5 focus:border-cyan-500/30 text-text outline-none text-sm transition-all focus:shadow-lg focus:shadow-cyan-500/5"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-text-muted pl-1">Route / Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-[#0b0f19] border border-black/5 dark:border-white/5 focus:border-cyan-500/30 text-text outline-none text-sm transition-all focus:shadow-lg focus:shadow-cyan-500/5"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-text-muted pl-1">Payload / Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type your message..."
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-[#0b0f19] border border-black/5 dark:border-white/5 focus:border-cyan-500/30 text-text outline-none text-sm resize-none transition-all focus:shadow-lg focus:shadow-cyan-500/5"
                  />
                </div>
              </div>

              {/* Submit Trigger */}
              <div className="mt-4 relative">
                <button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm tracking-wide uppercase transition-all duration-300 disabled:opacity-50 transform hover:scale-[1.01] shadow-lg shadow-cyan-500/10"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                      Encrypting...
                    </span>
                  ) : submitSuccess ? (
                    "Payload Routed Successfully 📡"
                  ) : (
                    <>
                      Route Message
                      <FiSend size={15} />
                    </>
                  )}
                </button>

                {/* Submissions alert success modal */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -top-12 left-0 right-0 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold py-2 rounded-lg text-center"
                    >
                      ✓ Thank you! Your message has been sent successfully. I will get back to you soon!
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submissions alert error modal */}
                <AnimatePresence>
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -top-12 left-0 right-0 bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-mono font-bold py-2 rounded-lg text-center"
                    >
                      ✗ {submitError}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
