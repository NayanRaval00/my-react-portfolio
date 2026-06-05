import '@/styles/globals.css';
import { Outfit, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headings',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});
import { ThemeProvider } from '@/context/ContextProvider';
import { useEffect } from 'react';
import Head from 'next/head';
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log(
              'Service Worker registered with scope:',
              registration.scope
            );
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  }, []);
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/imgs/logo.png" />
        <meta name="theme-color" content="#f0f0ff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        <meta
          name="description"
          content="I'm a Backend Developer specializing in Laravel, Node.js, PHP, and API development. I build secure, scalable, and high-performance backend systems."
        />
        <meta name="copyright" content="Nayan Raval" />
        <meta
          name="keywords"
          content="Laravel, Node.js, PHP, backend developer, API developer, fullstack, web developer, scalable systems, secure backend, RESTful API, backend engineer, MySQL, JavaScript, server-side development, Nayan Raval"
        />
        <meta name="author" content="Nayan Raval" />

        <meta property="og:title" content="Nayan Raval | Laravel & Node.js Backend Developer" />
        <meta
          property="og:description"
          content="Hi, I'm a backend developer specializing in Laravel, Node.js, and scalable API development. I bring ideas to life with clean, efficient server-side code."
        />
        <meta property="og:url" content="https://nayanraval.vercel.app/" />
        <meta name="robots" content="all" />
      </Head>

      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily}, sans-serif;
        }
        h1, h2, h3, h4, h5, h6, .font-heading {
          font-family: ${outfit.style.fontFamily}, sans-serif;
        }
      `}</style>
      <ThemeProvider>
        <Component {...pageProps} />
        <Analytics mode="production" />
      </ThemeProvider>
    </>
  );
}
