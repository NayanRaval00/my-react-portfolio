import { PORTFOLIO_DATA } from '@/constants/portfolioData';

export default function Footer() {
  const { name } = PORTFOLIO_DATA.personal;

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/5 bg-black/5 dark:bg-black/10 relative z-10 w-full mt-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center space-x-1 font-mono text-xs text-slate-500">
            <span>api.nayanraval.dev</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* Copyrights */}
          <div className="text-center sm:text-right text-xs text-slate-500">
            <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
