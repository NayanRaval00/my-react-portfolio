import { PORTFOLIO_DATA } from '@/constants/portfolioData';
import { FiServer, FiShield, FiCloud, FiCpu, FiMapPin, FiBriefcase, FiCheck } from 'react-icons/fi';

export default function About() {
  const { name, shortBio, location, experienceYears } = PORTFOLIO_DATA.personal;
  const pillars = PORTFOLIO_DATA.pillars;

  // Map icons to backend pillars
  const icons = [
    <FiBriefcase key="0" className="h-6 w-6 text-sky-600 dark:text-sky-400" />,
    <FiServer key="1" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    <FiShield key="2" className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
    <FiCpu key="3" className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
  ];

  const industries = [
    'Logistics & Warehousing',
    'Event Ticketing & Entertainment',
    'Hospitality & Booking SaaS',
    'Travel Portals & Aggregators',
    'Enterprise Corporate LMS',
    'Social Discovery Networks'
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
            Executive Summary
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Technical Leadership & Solution Architecture
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Bio Description (Left) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Engineering for Business Outcomes</h4>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed text-justify">
              I specialize in designing and deploying enterprise-grade backend architectures, resilient APIs, and automated cloud systems. With 5+ years of experience in Laravel, Node.js, and AWS, I help startups and enterprises optimize performance, secure payment infrastructures, and integrate intelligent AI solutions.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed text-justify">
              My approach connects technical execution directly with product viability and resource optimization. Whether resolving critical database synchronization lag or implementing multi-party payouts, I focus on lowering risk, improving developer productivity, and supporting scale.
            </p>

            {/* Industries Worked In */}
            <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/5">
              <h5 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">
                Industry Experience:
              </h5>
              <div className="grid grid-cols-2 gap-2">
                {industries.map((ind, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300">
                    <FiCheck className="h-3.5 w-3.5 text-sky-500 flex-shrink-0" />
                    <span>{ind}</span>
                  </div>
                ))}
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
