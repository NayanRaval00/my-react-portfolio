import Head from 'next/head';
import { useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from '@/constants/portfolioData';

// Component Imports
import { Animation } from '@/components/Hero/Animation';
import NavBar from '@/components/nav/NavBar';
import HeroSection from '@/components/Hero/HeroSection';
import About from '@/components/about/About';
import ExperienceTimeline from '@/components/experience/ExperienceTimeline';
import Services from '@/components/services/Services';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/projects/Projects';
import WhyWorkWithMe from '@/components/why/WhyWorkWithMe';
import Certificates from '@/components/certificates/Certificates';
import Blog from '@/components/blog/Blog';
import ContactMe from '@/components/contact/ContactMe';
import Footer from '@/components/footer/Footer';

export default function Home() {
  const { name, title, tagline } = PORTFOLIO_DATA.personal;
  const [showScroller, setShowScroller] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 800) {
        setShowScroller(true);
      } else {
        setShowScroller(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>{`${name} | ${title}`}</title>
      </Head>

      {/* Particles Backdrop */}
      <Animation />

      {/* Navigation */}
      <NavBar />

      {/* Page Sections Content Wrapper */}
      <main className="relative min-h-screen w-full flex flex-col">
        {/* Hero */}
        <HeroSection />

        {/* Content sections aligned with unified margins */}
        <div className="w-full flex flex-col space-y-12">
          <About />
          <ExperienceTimeline />
          <Services />
          <Skills />
          <Projects />
          <WhyWorkWithMe />
          <Certificates />
          <Blog />
          <ContactMe />
        </div>

        {/* Minimal Footer */}
        <Footer />
      </main>

      {/* Floating Scroll to Top button */}
      {showScroller && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full shadow-lg hover:shadow-sky-500/20 transform hover:-translate-y-1 transition duration-200"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}
