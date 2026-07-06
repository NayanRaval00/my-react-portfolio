import { ThemeToggler } from '@/theme/Themetoggler';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function NavBar() {
  const navigation = [
    { id: 1, name: 'Home', href: '#home' },
    { id: 2, name: 'About', href: '#about' },
    { id: 3, name: 'Services', href: '#services' },
    { id: 4, name: 'Skills', href: '#skills' },
    { id: 5, name: 'Projects', href: '#projects' },
    { id: 6, name: 'Blog', href: '#blog' },
    { id: 7, name: 'Resume', href: '#home' },
    { id: 8, name: 'Contact', href: '#contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/80 dark:bg-zinc-950/80 border-b border-slate-200 dark:border-zinc-800/50 backdrop-blur-md py-3 shadow-lg'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-1 group">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Nayan
              </span>
              <span className="text-xl font-extrabold text-sky-500 transition-transform duration-300 group-hover:translate-x-0.5">
                .
              </span>
              <span className="text-xl font-semibold text-slate-500 dark:text-slate-400">
                Raval
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((navlink) => (
              <a
                key={navlink.id}
                href={navlink.href}
                className="text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-100 dark:hover:bg-white/5"
              >
                {navlink.name}
              </a>
            ))}
            <div className="pl-4 ml-4 border-l border-slate-200 dark:border-zinc-800 flex items-center">
              <ThemeToggler />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggler />
            <button
              onClick={toggleNavbar}
              aria-label="toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 focus:outline-none transition-colors"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border-b border-slate-200 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg shadow-xl transition-all duration-300 ease-in-out">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
            {navigation.map((navlink) => (
              <a
                key={navlink.id}
                onClick={() => setIsOpen(false)}
                href={navlink.href}
                className="block text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 px-4 py-3 rounded-lg text-base font-medium transition-colors"
              >
                {navlink.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}