import { PORTFOLIO_DATA } from '@/constants/portfolioData';
import { FiServer, FiShield, FiCloud, FiCpu, FiMapPin, FiBriefcase } from 'react-icons/fi';

export default function About() {
  const { name, shortBio, location, experienceYears } = PORTFOLIO_DATA.personal;
  const pillars = PORTFOLIO_DATA.pillars;

  // Map icons to backend pillars
  const icons = [
    <FiServer key="0" className="h-6 w-6 text-sky-600 dark:text-sky-400" />,
    <FiShield key="1" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    <FiCloud key="2" className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
    <FiCpu key="3" className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
            About Me
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Engineering High-Performance Backend Ecosystems
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Bio Description (Left) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">My Philosophy</h4>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed text-justify">
              I believe backend engineering is more than just writing code; it is about translating complex business constraints into highly efficient, secure, and robust systems. 
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed text-justify">
              For over five years, I have worked across the lifecycle of software systems—from database normalization and query profiling to Docker orchestration and AWS cloud hosting. I focus on reducing response latencies, securing critical transaction flows, and ensuring services stay online.
            </p>

            {/* Quick stats list */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-100/70 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 p-4 rounded-xl flex items-center space-x-3">
                <FiBriefcase className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 dark:text-slate-500 font-medium">Experience</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white">{experienceYears} Years</span>
                </div>
              </div>
              <div className="bg-slate-100/70 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 p-4 rounded-xl flex items-center space-x-3">
                <FiMapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 dark:text-slate-500 font-medium">Location</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white">Ahmedabad, IN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars & Technical Strengths (Right) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card p-6 flex flex-col space-y-4 hover:scale-[1.01] transition-transform duration-200"
              >
                <div className="p-3 bg-slate-100 dark:bg-white/5 w-fit rounded-xl border border-slate-200/60 dark:border-white/5">
                  {icons[idx]}
                </div>
                <h5 className="text-lg font-bold text-slate-800 dark:text-white">{pillar.title}</h5>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-justify">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
