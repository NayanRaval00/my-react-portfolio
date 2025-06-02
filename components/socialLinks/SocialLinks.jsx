import React from 'react';
import {
  AiOutlineCodepen,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import { TbBrandLeetcode } from "react-icons/tb";
import { SiDailydotdev } from "react-icons/si";
import styles from './social.module.css';
import Anchor from '../link/Anchor';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      ariaLabel: 'linkedin',
      href: 'https://www.linkedin.com/in/nayan-raval-224969170/',
      icon: AiFillLinkedin,
    },
    {
      id: 2,
      ariaLabel: 'github',
      href: 'https://github.com/NayanRaval00',
      icon: AiFillGithub,
    },
    {
      id: 3,
      ariaLabel: 'dailydev',
      href: 'https://app.daily.dev/nayanraval',
      icon: SiDailydotdev,
    },
    {
      id: 4,
      ariaLabel: 'codepen',
      href: 'https://codepen.io/nayan029',
      icon: AiOutlineCodepen,
    }
  ];

  return (
    <div className={`absolute bottom-1 right-0 lg:flex flex flex-col justify-between ${styles.mobile}`}>
      <div className={`social ${styles.wrapper}`}>
        {links.map((link) => {
          const Icon = link.icon;
          if (!Icon) {
            console.error(`Icon not found for ${link.ariaLabel}`);
            return null;
          }
          return (
            <div key={link.id}>
              <Anchor ariaLabel={link.ariaLabel} href={link.href}>
                <Icon size={40} />
              </Anchor>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;