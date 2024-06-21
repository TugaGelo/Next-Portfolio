import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__principle}>
            <h3>Vision</h3>
            <p>To cultivate a world where continuous learning is cherished, empowering individuals to adapt, innovate, and thrive in an ever-changing landscape.</p>
            <p>I am a committed to fostering a culture of lifelong learning by providing accessible resources, cultivating curiosity, and promoting collaboration to inspire personal and collective growth.</p>
            
        </div>
        <ul className={`${styles.footer__list} ${styles.grid}`}>
            <li>
                <a href="#about" className={styles.footer__link}>About</a>
            </li>
            <li>
                <a href="#skills" className={styles.footer__link}>Skills</a>
            </li>
            <li>
                <a href="#projects" className={styles.footer__link}>Projects</a>
            </li>
        </ul>
        <div className={`${styles.footer__socials} ${styles.grid}`}>
        <a href="https://www.instagram.com/tututututuga/" className={styles.footer__socialLink} target="_blank">
            <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://www.facebook.com/rolandtugaoen2016/" className={styles.footer__socialLink} target="_blank">
            <i className="bx bxl-facebook"></i>
        </a>

        <a href="https://github.com/TugaGelo" className={styles.footer__socialLink} target="_blank">
            <i className="bx bxl-github"></i>
        </a>
        </div>
      </div>
      <div className={styles.footer__copy}>
        &#169; Gelo All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
