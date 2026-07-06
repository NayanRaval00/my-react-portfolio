import { PORTFOLIO_DATA } from '@/constants/portfolioData';
import { FiServer, FiCode, FiLayers, FiCpu, FiCloud, FiActivity, FiDatabase, FiShuffle, FiHelpCircle, FiCheck } from 'react-icons/fi';

export default function Services() {
  const services = PORTFOLIO_DATA.services;

  // Icon mapper
  const icons = [
    <FiServer key="0" className="h-6 w-6 text-sky-600 dark:text-sky-400" />,
    <FiCode key="1" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    <FiLayers key="2" className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
    <FiCpu key="3" className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
    <FiCloud key="4" className="h-6 w-6 text-pink-600 dark:text-pink-400" />,
    <FiActivity key="5" className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
    <FiDatabase key="6" className="h-6 w-6 text-sky-600 dark:text-sky-400" />,
    <FiShuffle key="7" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    <FiHelpCircle key="8" className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black/5 dark:bg-black/10">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-6xl">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
            Services & Consulting
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Technical Consulting & Core Capabilities
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass-card p-6 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-200"
            >
              <div className="space-y-4">
                <div className="p-3 bg-slate-100 dark:bg-white/5 w-fit rounded-xl border border-slate-200 dark:border-white/5">
                  {icons[idx] || <FiServer className="h-6 w-6 text-sky-400" />}
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
                  {service.title}
                </h4>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-justify">
                  {service.description}
                </p>
              </div>

              {/* Bullet Features */}
              <ul className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 space-y-2">
                {service.features.map((feat, fidx) => (
                  <li key={fidx} className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                    <FiCheck className="h-3.5 w-3.5 mr-2 text-sky-500 dark:text-sky-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
