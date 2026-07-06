import Head from 'next/head';
import { useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from '@/constants/portfolioData';

// Component Imports
import { Animation } from '@/components/Hero/Animation';
import NavBar from '@/components/nav/NavBar';
import HeroSection from '@/components/Hero/HeroSection';
import StatsGrid from '@/components/stats/StatsGrid';
import About from '@/components/about/About';
import ExperienceTimeline from '@/components/experience/ExperienceTimeline';
import Services from '@/components/services/Services';
import DevelopmentProcess from '@/components/process/DevelopmentProcess';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/projects/Projects';
import WhyWorkWithMe from '@/components/why/WhyWorkWithMe';
import TechPartner from '@/components/partner/TechPartner';
import Certificates from '@/components/certificates/Certificates';
import Blog from '@/components/blog/Blog';
import ContactMe from '@/components/contact/ContactMe';
import Footer from '@/components/footer/Footer';

export default function Home() {
  const { name, title, tagline, shortBio } = PORTFOLIO_DATA.personal;
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

  // Structured Data (JSON-LD) for Search Engines
  const schemaOrgJSONLD = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': name,
    'jobTitle': title,
    'description': shortBio,
    'url': 'https://nayanraval.vercel.app',
    'image': 'https://nayanraval.vercel.app/imgs/profile_meta.png',
    'sameAs': [
      'https://github.com/NayanRaval00',
      'https://www.linkedin.com/in/nayan-raval-224969170/'
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Ahmedabad',
      'addressRegion': 'Gujarat',
      'addressCountry': 'India'
    },
    'knowsAbout': [
      'Laravel',
      'Node.js',
      'AWS',
      'API Architecture',
      'PostgreSQL',
      'Redis',
      'Docker',
      'SaaS Development',
      'Database Optimization'
    ]
  };

  return (
    <>
      <Head>
        <title>{`${name} | ${title}`}</title>
        <meta name="description" content={`${name} - ${title}. ${shortBio}`} />
        <meta name="keywords" content="Nayan Raval, Laravel Specialist, Node.js Expert, AWS Engineer, API Architect, Backend Developer, Ahmedabad, India" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://nayanraval.vercel.app" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nayanraval.vercel.app" />
        <meta property="og:title" content={`${name} | ${title}`} />
        <meta property="og:description" content={shortBio} />
        <meta property="og:image" content="https://nayanraval.vercel.app/imgs/profile_meta.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nayanraval.vercel.app" />
        <meta property="twitter:title" content={`${name} | ${title}`} />
        <meta property="twitter:description" content={shortBio} />
        <meta property="twitter:image" content="https://nayanraval.vercel.app/imgs/profile_meta.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
        />
      </Head>

      {/* Particles Backdrop */}
      <Animation />

      {/* Navigation */}
      <NavBar />

      {/* Page Sections Content Wrapper */}
      <main className="relative min-h-screen w-full flex flex-col">
        {/* Hero */}
        <HeroSection />

        {/* Business Metrics Stats */}
        <StatsGrid />

        {/* Content sections aligned with unified margins */}
        <div className="w-full flex flex-col space-y-12">
          <About />
          <ExperienceTimeline />
          <Services />
          <DevelopmentProcess />
          <Skills />
          <Projects />
          <WhyWorkWithMe />
          <TechPartner />
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
