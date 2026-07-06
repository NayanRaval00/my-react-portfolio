import { PORTFOLIO_DATA } from '@/constants/portfolioData';
import { FiCalendar, FiClock, FiArrowUpRight } from 'react-icons/fi';

export default function Blog() {
  const posts = PORTFOLIO_DATA.blog;

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-6xl">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
            Technical Blog
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Articles on Architecture & System Design
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="glass-card p-6 flex flex-col justify-between h-full hover:scale-[1.01] transition-transform duration-200"
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/10">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 font-mono text-slate-500">
                    <FiClock className="h-3.5 w-3.5" />
                    <span>{post.time}</span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide leading-snug">
                  {post.title}
                </h4>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-justify line-clamp-4">
                  {post.description}
                </p>
              </div>

              {/* Read button */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center">
                  <FiCalendar className="h-3.5 w-3.5 mr-1" />
                  {post.date}
                </span>
                
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 transition-colors group"
                >
                  Read Article{' '}
                  <FiArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
