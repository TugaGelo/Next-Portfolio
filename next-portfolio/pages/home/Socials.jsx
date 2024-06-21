import React from 'react';
import styles from './home.module.css';

export const Socials = () => {
  return (
    <div className={styles.home__social}>
        <a href="https://www.instagram.com/tututututuga/" className={styles.home__socialIcon} target="_blank">
            <i className="uil uil-instagram"></i>
        </a>

        <a href="https://www.facebook.com/rolandtugaoen2016/" className={styles.home__socialIcon} target="_blank">
            <i className="uil uil-facebook"></i>
        </a>

        <a href="https://github.com/TugaGelo" className={styles.home__socialIcon} target="_blank">
            <i className="uil uil-github-alt"></i>
        </a>
    </div>
  );
};
