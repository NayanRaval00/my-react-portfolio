import { PORTFOLIO_DATA } from '@/constants/portfolioData';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FiAward, FiEye, FiX } from 'react-icons/fi';

export default function Certificates() {
  const certifications = PORTFOLIO_DATA.certifications;
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-black/5 dark:bg-black/20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-6xl">

        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
            Certifications
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Industry Credentials & Badges
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card p-5 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5 flex-shrink-0">
                  <FiAward className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base leading-snug tracking-wide">
                    {cert.name}
                  </h4>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 flex justify-end">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="inline-flex items-center text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 transition-colors"
                >
                  <FiEye className="h-4 w-4 mr-1.5" /> View Credential
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Lightbox Modal */}
        <AnimatePresence>
          {activeCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCert(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-sm"
              />

              {/* Lightbox content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/10 rounded-2xl p-4 max-w-3xl w-full max-h-[85vh] flex flex-col items-center justify-center z-10"
              >
                {/* Header info */}
                <div className="w-full flex justify-between items-center pb-3 border-b border-slate-200 dark:border-white/5 mb-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">{activeCert.issuer}</span>
                    <span className="text-sm font-bold text-slate-800 dark:text-white">{activeCert.name}</span>
                  </div>
                  <button
                    onClick={() => setActiveCert(null)}
                    className="p-1 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                  >
                    <FiX className="h-5 w-5" />
                  </button>
                </div>

                {/* Certificate Image Frame */}
                <div className="relative w-full h-[60vh] rounded-lg overflow-hidden flex items-center justify-center bg-slate-50 dark:bg-black/40">
                  <Image
                    src={activeCert.image}
                    alt={activeCert.name}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
