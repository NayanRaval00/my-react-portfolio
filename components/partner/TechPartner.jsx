import { FiUsers, FiCpu, FiShield, FiTrendingUp } from 'react-icons/fi';

export default function TechPartner() {
  const capabilities = [
    { title: ' Vetted Engineers', desc: 'Collaborating with experienced senior frontend developers, QA engineers, and mobile specialists.', icon: <FiUsers className="text-sky-500 h-5 w-5" /> },
    { title: 'End-to-End Delivery', desc: 'Managing the entire project lifecycle—from design concepts to production deployment and cloud monitoring.', icon: <FiCpu className="text-indigo-500 h-5 w-5" /> },
    { title: 'Strict Quality Control', desc: 'Acting as the Lead API Architect and code reviewer to maintain clean architecture standards.', icon: <FiShield className="text-emerald-500 h-5 w-5" /> }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-black/5 dark:bg-black/10">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-5xl">
        <div className="glass-card p-8 sm:p-12 backdrop-blur-2xl border border-slate-200 dark:border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Context (Left) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                <FiTrendingUp className="h-3.5 w-3.5 mr-1" />
                Scalable Project Delivery
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Scale Your Project Seamlessly
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed text-justify">
                For larger software projects that require comprehensive frontend, design, or QA resources, I collaborate with a trusted network of senior engineering partners. This allows us to deliver complete, high-quality solutions while I act as your Technical Consultant and Lead Backend Architect, ensuring strict standards are met.
              </p>
            </div>

            {/* Vetted team details (Right) */}
            <div className="lg:col-span-6 space-y-4">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl p-4 flex items-start space-x-4"
                >
                  <div className="p-2.5 bg-white dark:bg-zinc-900 border border-slate-200/50 dark:border-white/10 rounded-lg">
                    {cap.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{cap.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed text-justify">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
