import { useEffect, useRef, useState } from 'react';
import { PORTFOLIO_DATA } from '@/constants/portfolioData';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail, FiMapPin, FiSend, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactMe() {
  const form = useRef();
  const [isMessageSent, setMessageSent] = useState(false);
  const [isNotEmpty, setIsNotEmpty] = useState(false);
  const [error, setError] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const { email, location, linkedin, github } = PORTFOLIO_DATA.personal;

  const sendEmail = async (e) => {
    e.preventDefault();
    setError(null);

    const userName = form.current.user_name.value.trim();
    const userEmail = form.current.from_name.value.trim();
    const message = form.current.message.value.trim();

    if (!userName || !userEmail || !message) {
      setIsNotEmpty(true);
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_name: userName,
          from_name: userEmail,
          message: message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        e.target.reset();
        setMessageSent(true);
      } else {
        setError(data.message || 'Failed to send email. Please try again later.');
      }
    } catch (err) {
      setError('Failed to send email. Please check your connection and try again.');
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    if (isMessageSent || isNotEmpty || error) {
      const timer = setTimeout(() => {
        setMessageSent(false);
        setIsNotEmpty(false);
        setError(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isMessageSent, isNotEmpty, error]);

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-5xl">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-sky-400 uppercase">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Let&apos;s Build Something Scalable
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch max-w-4xl mx-auto">
          
          {/* Direct channels (Left) */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white">Let&apos;s Connect</h4>
              <p className="text-slate-400 text-sm leading-relaxed text-justify">
                Whether you need a system architect to design high-concurrency APIs, optimize AWS infrastructure, or lead software projects, feel free to reach out. I will respond to your inquiry within 24 business hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-sky-400">
                    <FiMail className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Email Direct</span>
                    <a href={`mailto:${email}`} className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-indigo-400">
                    <FiMapPin className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Location</span>
                    <span className="text-sm font-semibold text-white">
                      {location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Link widgets */}
            <div className="flex space-x-4 pt-6 border-t border-white/5">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Form (Right) */}
          <div className="md:col-span-7 bg-white/5 border border-white/5 rounded-2xl p-6 sm:p-8 backdrop-blur-xl">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="user_name" className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  Your Name
                </label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white outline-none transition-colors duration-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/25"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="from_name" className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  Your Email
                </label>
                <input
                  id="from_name"
                  type="email"
                  name="from_name"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white outline-none transition-colors duration-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/25"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  Message Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi Nayan, I am looking to consult with you on..."
                  rows="4"
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white outline-none transition-colors duration-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/25 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center space-x-2 bg-white hover:bg-slate-100 text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-lg transition duration-200 disabled:opacity-50"
              >
                {isSending ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <FiSend className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Floating Status Alerts */}
      <AnimatePresence>
        {isMessageSent && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-3 rounded-xl backdrop-blur-md shadow-lg flex items-center space-x-2.5 font-semibold text-sm"
          >
            <FiCheckCircle className="h-5 w-5 text-emerald-400" />
            <span>Message sent successfully! ✅</span>
          </motion.div>
        )}
        
        {isNotEmpty && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-5 py-3 rounded-xl backdrop-blur-md shadow-lg flex items-center space-x-2.5 font-semibold text-sm"
          >
            <FiAlertCircle className="h-5 w-5 text-amber-400" />
            <span>Please fill out all fields ❌</span>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-3 rounded-xl backdrop-blur-md shadow-lg flex items-center space-x-2.5 font-semibold text-sm"
          >
            <FiAlertCircle className="h-5 w-5 text-red-400" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
