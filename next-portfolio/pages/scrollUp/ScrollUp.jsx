import React, { useState, useEffect } from 'react';
import styles from "./scrollup.module.css";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 560) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <a href="#home" style={{ 
        position: 'fixed',
        right: '2.5rem',
        bottom: showScroll ? '3rem' : '-20%',
        backgroundColor: showScroll ? 'var(--title-color)' : 'transparent',
        opacity: showScroll ? 0.8 : 0,
        padding: '0.3rem 0.5rem',
        borderRadius: '0.4rem',
        zIndex: 'var(--z-tooltip)',
        transition: 'bottom 0.4s, background-color 0.4s, opacity 0.4s'
      }} onClick={scrollToTop}>
        <i className={`uil uil-arrow-up ${styles.scrollup__icon}`}></i>
      </a>
    </div>
  );
}

export default ScrollUp;
