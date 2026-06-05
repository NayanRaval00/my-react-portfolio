import Image from 'next/image';
import styles from './service.module.css';
import VanillaTilt from 'vanilla-tilt';
import { Suspense, useEffect } from 'react';
import Fallback from '../image/Fallback';

const ServicesCard = ({ src, alt, title, description, className }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.parent}`);
    VanillaTilt.init(elements, {
      max: 15,
      speed: 300,
      glare: false,
    });
  }, []);

  return (
    <div
      className={`${styles.parent} flex justify-center items-center flex-col p-6 pt-16 text-center`}
    >
      <div className={`${styles.logo} ${styles[className]}`}>
        <Suspense fallback={<Fallback />}>
          <Image width={55} height={55} alt={alt} src={src} loading="lazy" />
        </Suspense>
      </div>
      <h3 className="text-xl font-bold p-2 text-slate-900 dark:text-white mt-2 leading-snug">{title}</h3>
      <p className="text-slate-600 dark:text-gray-300 text-sm p-2 leading-relaxed text-justify">{description}</p>
    </div>
  );
};

export default ServicesCard;
