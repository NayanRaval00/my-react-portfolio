import Image from 'next/image';
import style from './skillsCard.module.css';
import { Suspense } from 'react';
import Fallback from '@/components/image/Fallback';

const SkillCard = ({ name, imageSrc }) => {
  return (
    <div className={style.card}>
      <div className={style.iconWrapper}>
        <Suspense fallback={<Fallback />}>
          <Image
            width={40}
            height={40}
            alt={name}
            src={imageSrc}
            loading="lazy"
            className="object-contain"
          />
        </Suspense>
      </div>
      <span className={style.name}>{name}</span>
    </div>
  );
};

export default SkillCard;
