import { useState } from 'react';
import { PORTFOLIO_DATA } from '@/constants/portfolioData';
import { FiServer, FiLayout, FiCloud, FiDatabase, FiTerminal, FiCreditCard, FiSettings } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Skills() {
  const skillCategories = PORTFOLIO_DATA.skills;
  const [activeCategory, setActiveCategory] = useState(0);

  // Category Icon Mapper
  const categoryIcons = {
    'Backend': <FiServer className="h-4 w-4" />,
    'Frontend': <FiLayout className="h-4 w-4" />,
    'Cloud': <FiCloud className="h-4 w-4" />,
    'Database': <FiDatabase className="h-4 w-4" />,
    'DevOps': <FiTerminal className="h-4 w-4" />,
    'Payments': <FiCreditCard className="h-4 w-4" />,
    'Tools': <FiSettings className="h-4 w-4" />,
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/5 dark:bg-black/10">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-6xl">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
            Technical Proficiency
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Skillsets & Engineering Capabilities
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${
                activeCategory === idx
                  ? 'bg-sky-500/10 border-sky-500/30 text-sky-600 dark:text-sky-400 shadow-md'
                  : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/10'
              }`}
            >
              {categoryIcons[cat.category] || <FiServer className="h-4 w-4" />}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {skillCategories[activeCategory]?.items.map((skill, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                key={skill.name}
                className="glass-card p-5 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white tracking-wide">{skill.name}</h4>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${
                    skill.level === 'Expert' 
                      ? 'bg-sky-500/10 border-sky-500/25 text-sky-600 dark:text-sky-400' 
                      : skill.level === 'Advanced'
                      ? 'bg-indigo-500/10 border-indigo-500/25 text-indigo-600 dark:text-indigo-400'
                      : 'bg-emerald-500/10 border-emerald-500/25 text-emerald-600 dark:text-emerald-400'
                  }`}>
                    {skill.level}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-justify">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
