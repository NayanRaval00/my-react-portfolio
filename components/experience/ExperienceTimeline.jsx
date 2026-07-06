import { PORTFOLIO_DATA } from '@/constants/portfolioData';
import { FiCalendar, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

export default function ExperienceTimeline() {
  const experiences = PORTFOLIO_DATA.experience;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/5 dark:bg-black/20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-5xl">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
            Career Timeline
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Professional Experience & Accomplishments
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Tab-like Sidebar and Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Navigation (Left) */}
          <div className="md:col-span-4 flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-2 border-b md:border-b-0 md:border-l border-slate-200 dark:border-white/10 pb-4 md:pb-0 scrollbar-none">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex-shrink-0 text-left px-5 py-3.5 rounded-lg text-sm font-medium transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 -mb-0.5 md:-ml-0.5 ${
                  activeTab === idx
                    ? 'border-sky-600 dark:border-sky-500 text-sky-600 dark:text-sky-400 bg-sky-500/5 font-semibold'
                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                <div className="font-bold text-base">{exp.company}</div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">{exp.period}</div>
              </button>
            ))}
          </div>

          {/* Details Panel (Right) */}
          <div className="md:col-span-8 glass-card p-6 sm:p-8 relative">
            <div className="absolute top-6 right-6 flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/5 font-mono">
              <FiCalendar className="h-3.5 w-3.5 mr-1 text-sky-600 dark:text-sky-400" />
              {experiences[activeTab].period}
            </div>

            {/* Role Header */}
            <div className="flex flex-col space-y-1 mb-6">
              <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {experiences[activeTab].role}
              </h4>
              <span className="text-sky-600 dark:text-sky-400 font-semibold text-sm">
                {experiences[activeTab].company} — {experiences[activeTab].location}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium text-justify">
              {experiences[activeTab].description}
            </p>

            {/* Key Deliverables & Achievements */}
            <div className="space-y-4 mb-8">
              <h5 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">
                Key Accomplishments & Impact:
              </h5>
              <ul className="space-y-3.5">
                {experiences[activeTab].responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                    <FiChevronRight className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack Chips */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200 dark:border-white/5">
              {experiences[activeTab].technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
