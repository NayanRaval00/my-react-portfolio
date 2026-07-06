import { useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from '@/constants/portfolioData';
import { FaGithub, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';
import { FiFileText, FiServer, FiCpu, FiDatabase, FiActivity, FiTerminal } from 'react-icons/fi';

export default function HeroSection() {
  const { tagline, shortBio, linkedin, github, dailydev, codepen } = PORTFOLIO_DATA.personal;

  // State for simulated live stats
  const [requests, setRequests] = useState(128452);
  const [cpu, setCpu] = useState(14);
  const [latency, setLatency] = useState(18);
  const [logs, setLogs] = useState([
    'SYSTEM: API gateway initialized on port 8080.',
    'JOB: Queue worker processing batch #49102...',
    'SYNC: Postgres master database synced with replica.',
    'CACHE: Redis cache hit ratio: 94.2%',
  ]);

  // Effect to simulate dynamic live stats
  useEffect(() => {
    const interval = setInterval(() => {
      // Ticking requests
      setRequests((prev) => prev + Math.floor(Math.random() * 3) + 1);
      // Fluctuating CPU
      setCpu((prev) => {
        const diff = Math.floor(Math.random() * 5) - 2;
        const next = prev + diff;
        return next > 30 ? 25 : next < 5 ? 8 : next;
      });
      // Fluctuating Latency
      setLatency((prev) => {
        const diff = Math.floor(Math.random() * 3) - 1;
        const next = prev + diff;
        return next > 30 ? 22 : next < 10 ? 12 : next;
      });

      // Add random logs
      const logTemplates = [
        'GET /v2/products/search - 200 OK (12ms)',
        'POST /v2/payments/charge - 201 Created (184ms)',
        'REDIS: Expired temp-lock for event-seat-B12.',
        'AWS: Auto-scaling checked. Cluster status healthy.',
        'QUEUE: Processed mail-notifications-job (44ms)',
        'INFO: Health check passed for replica RDS-01.',
      ];
      setLogs((prev) => {
        const randomLog = logTemplates[Math.floor(Math.random() * logTemplates.length)];
        const timestamp = new Date().toTimeString().split(' ')[0];
        return [`[${timestamp}] ${randomLog}`, ...prev.slice(0, 3)];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative min-h-screen w-full flex items-center justify-center pt-24 overflow-hidden grid-bg">
      {/* Decorative Glow Bulbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 radial-glow opacity-60 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 radial-glow-purple opacity-40 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 px-3 py-1.5 rounded-full text-xs font-semibold w-fit tracking-wider uppercase">
              <FiServer className="h-3.5 w-3.5 mr-1" />
              Senior Backend Engineer
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {tagline}
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl text-justify">
              {shortBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition duration-200 group"
              >
                View Case Studies
                <FaArrowRight className="ml-2 h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="/resume/resume.pdf"
                download
                className="inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 border border-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:border-zinc-800 text-slate-900 dark:text-white font-semibold px-6 py-3.5 rounded-xl transition duration-200"
              >
                <FiFileText className="mr-2 h-4 w-4 text-slate-500 dark:text-slate-400" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-transparent hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-medium px-6 py-3.5 rounded-xl transition duration-200"
              >
                Schedule a Consultation
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-5 pt-6 border-t border-slate-200/20 dark:border-slate-200/5 max-w-md">
              <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Connect:</span>
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" aria-label="GitHub">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a href={dailydev} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors font-bold text-xs uppercase" aria-label="Daily Dev">
                daily.dev
              </a>
              <a href={codepen} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors font-bold text-xs uppercase" aria-label="CodePen">
                CodePen
              </a>
            </div>
          </div>

          {/* Hero Right Visual: Interactive Backend Dashboard */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-md border border-slate-200 dark:border-white/15 bg-white dark:bg-black/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 to-indigo-500/5 opacity-50 pointer-events-none" />
              
              {/* Window Header */}
              <div className="flex justify-between items-center mb-6 border-b border-slate-200 dark:border-white/10 pb-4">
                <div className="flex items-center space-x-2">
                  <FiTerminal className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 font-mono">api-orchestrator.json</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 font-mono">LIVE</span>
                </div>
              </div>

              {/* Grid of Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl p-3.5 flex flex-col space-y-1">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-wider flex items-center">
                    <FiActivity className="h-3 w-3 mr-1 text-sky-500 dark:text-sky-400" />
                    Req / Sec
                  </span>
                  <span className="text-lg font-bold text-slate-800 dark:text-white font-mono">{requests.toLocaleString()}</span>
                </div>
                <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl p-3.5 flex flex-col space-y-1">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-wider flex items-center">
                    <FiCpu className="h-3 w-3 mr-1 text-indigo-500 dark:text-indigo-400" />
                    CPU Load
                  </span>
                  <span className="text-lg font-bold text-slate-800 dark:text-white font-mono">{cpu}%</span>
                </div>
                <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl p-3.5 flex flex-col space-y-1">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-wider flex items-center">
                    <FiActivity className="h-3 w-3 mr-1 text-teal-500 dark:text-teal-400" />
                    Avg Latency
                  </span>
                  <span className="text-lg font-bold text-slate-800 dark:text-white font-mono">{latency}ms</span>
                </div>
                <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl p-3.5 flex flex-col space-y-1">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-wider flex items-center">
                    <FiDatabase className="h-3 w-3 mr-1 text-pink-500 dark:text-pink-400" />
                    RDS Cluster
                  </span>
                  <span className="text-lg font-bold text-slate-800 dark:text-white font-mono">99.99%</span>
                </div>
              </div>

              {/* Scrolling Terminal Logs */}
              <div className="bg-slate-950 dark:bg-black/60 rounded-xl p-4 border border-slate-800 dark:border-white/5 font-mono text-[10px] text-slate-300 min-h-[120px] flex flex-col space-y-2.5 overflow-hidden">
                <span className="text-[10px] text-slate-500 font-bold border-b border-white/5 pb-1">CONSOLE LOGS:</span>
                {logs.map((log, index) => (
                  <div key={index} className="flex items-start space-x-1.5 transition-all duration-300">
                    <span className="text-sky-500 font-bold select-none">&gt;</span>
                    <span className="break-all">{log}</span>
                  </div>
                ))}
              </div>

              {/* Glowing decorative details */}
              <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span>Docker Container: running</span>
                <span>Region: aws-ap-south-1</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
