import React, { useState } from "react";
import styles from "./header.module.scss";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    
    const handleToggle = () => {
      setToggle(!toggle);
    };
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a href="/" className={styles.nav__logo}>Gelo</a>
        
        <div className={`${toggle ? styles.showMenu : ''} ${styles.nav__menu}`}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a href="#home" className={styles.nav__link}>
                <i className={`${styles.nav__icon} uil uil-estate`}></i> Home
              </a>
            </li>

            <li className={styles.nav__item}>
              <a href="#about" className={styles.nav__link}>
                <i className={`${styles.nav__icon} uil uil-user`}></i> About
              </a>
            </li>

            <li className={styles.nav__item}>
              <a href="#skills" className={styles.nav__link}>
                <i className={`${styles.nav__icon} uil uil-file-alt`}></i> Skills
              </a>
            </li>

            <li className={styles.nav__item}>
              <a href="#projects" className={styles.nav__link}>
                <i className={`${styles.nav__icon} uil uil-briefcase`}></i> Projects
              </a>
            </li>

            <li className={styles.nav__item}>
              <a href="#qualification" className={styles.nav__link}>
                <i className={`${styles.nav__icon} uil uil-briefcase`}></i> Qualification
              </a>
            </li>

            <li className={styles.nav__item}>
              <a href="#achievements" className={styles.nav__link}>
                <i className={`${styles.nav__icon} uil uil-briefcase`}></i> Achievements
              </a>
            </li>
          </ul>

          <i className={`uil uil-times ${styles.nav__close}`} onClick={handleToggle}></i>
        </div>

        <div className={styles.nav__toggle} onClick={handleToggle}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header;
