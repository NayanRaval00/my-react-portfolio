import { FiCompass, FiList, FiTrendingUp, FiCpu, FiShield, FiSend, FiSettings } from 'react-icons/fi';

export default function DevelopmentProcess() {
  const steps = [
    { number: '01', title: 'Discovery', icon: <FiCompass className="h-5 w-5 text-sky-500" />, desc: 'Understanding your business model, target objectives, and scaling parameters.' },
    { number: '02', title: 'Requirement Analysis', icon: <FiList className="h-5 w-5 text-indigo-500" />, desc: 'Defining clear API routes, data fields, traffic limits, and security constraints.' },
    { number: '03', title: 'Architecture Design', icon: <FiTrendingUp className="h-5 w-5 text-emerald-500" />, desc: 'Authoring schemas, database partitions, caching, and server deployment strategies.' },
    { number: '04', title: 'Agile Development', icon: <FiCpu className="h-5 w-5 text-amber-500" />, desc: 'Writing clean, testable Laravel and Node.js code matching SOLID principles.' },
    { number: '05', title: 'Rigorous Testing', icon: <FiShield className="h-5 w-5 text-pink-500" />, desc: 'Running unit tests, database stress loads, integration checks, and API validation.' },
    { number: '06', title: 'AWS Cloud Deployment', icon: <FiSend className="h-5 w-5 text-teal-500" />, desc: 'Automating pipelines (CI/CD) and releasing code into secure, load-balanced servers.' },
    { number: '07', title: 'Continuous Maintenance', icon: <FiSettings className="h-5 w-5 text-sky-500" />, desc: 'Monitoring metrics (req/sec, CPU, memory), auditing logs, and tuning database statement plans.' }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-black/5 dark:bg-black/10">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-6xl">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
            Workflow & Process
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            The Consulting & Delivery Lifecycle
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card p-6 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-200 relative group"
            >
              {/* Step indicator */}
              <span className="absolute top-4 right-4 text-xs font-mono font-bold text-slate-300 dark:text-zinc-800 group-hover:text-sky-500/20 transition-colors">
                {step.number}
              </span>

              <div className="space-y-4">
                <div className="p-3 bg-slate-100 dark:bg-white/5 w-fit rounded-xl border border-slate-200 dark:border-white/5">
                  {step.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">
                  {step.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed text-justify">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
