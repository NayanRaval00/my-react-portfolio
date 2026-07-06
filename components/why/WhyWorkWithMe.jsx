import { PORTFOLIO_DATA } from '@/constants/portfolioData';
import { FiAward, FiAlertTriangle, FiZap, FiCreditCard, FiTrendingUp, FiCode } from 'react-icons/fi';

export default function WhyWorkWithMe() {
  const points = PORTFOLIO_DATA.whyWorkWithMe;

  // Icons mapper
  const icons = [
    <FiAward key="0" className="h-6 w-6 text-sky-600 dark:text-sky-400" />,
    <FiAlertTriangle key="1" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    <FiZap key="2" className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
    <FiCreditCard key="3" className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
    <FiTrendingUp key="4" className="h-6 w-6 text-pink-600 dark:text-pink-400" />,
    <FiCode key="5" className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-black/5 dark:bg-black/10">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-6xl">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
            Value Proposition
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Why Work With Me?
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="glass-card p-6 flex flex-col space-y-4 hover:scale-[1.01] transition-transform duration-200"
            >
              <div className="p-3 bg-slate-100 dark:bg-white/5 w-fit rounded-xl border border-slate-200 dark:border-white/5">
                {icons[idx]}
              </div>
              
              <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">
                {point.title}
              </h4>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-justify">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
