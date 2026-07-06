import { FiAward, FiBriefcase, FiServer, FiCloud, FiCreditCard, FiCode, FiLayers, FiActivity } from 'react-icons/fi';

export default function StatsGrid() {
  const stats = [
    { label: '5+ Years Experience', icon: <FiAward className="h-5 w-5 text-sky-500" />, desc: 'Of professional software development.' },
    { label: '20+ Business Applications', icon: <FiBriefcase className="h-5 w-5 text-indigo-500" />, desc: 'Successfully deployed for global clients.' },
    { label: 'Enterprise Backend', icon: <FiServer className="h-5 w-5 text-emerald-500" />, desc: 'Robust Laravel and Node.js solutions.' },
    { label: 'AWS Cloud Experience', icon: <FiCloud className="h-5 w-5 text-amber-500" />, desc: 'ECS, EC2, RDS clustering, and VPCs.' },
    { label: 'Payment Integrations', icon: <FiCreditCard className="h-5 w-5 text-pink-500" />, desc: 'Stripe, PayPal, and local Razorpay gateways.' },
    { label: 'REST API Development', icon: <FiCode className="h-5 w-5 text-teal-500" />, desc: 'Versioned, self-documenting architectures.' },
    { label: 'Scalable Architecture', icon: <FiLayers className="h-5 w-5 text-sky-500" />, desc: 'Queues (RabbitMQ), cache lock layers.' },
    { label: 'High Performance', icon: <FiActivity className="h-5 w-5 text-indigo-500" />, desc: 'Sub-second API response optimization.' }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-black/5 dark:bg-black/10">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 flex flex-col space-y-3 hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="p-2.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 w-fit rounded-xl">
                {stat.icon}
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {stat.label}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
