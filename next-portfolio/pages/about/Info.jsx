import React from 'react';
import styles from './about.module.css';

const Info = () => {
  return (
    <div className={`${styles.about__info} grid`}> 
        <div className={styles.about__box}> 
            <i className={`bx bx-award ${styles.about__icon}`}></i> 
            <h3 className={styles.about__title}>Experience</h3> 
            <span className={styles.about__subtitle}>5+ Years</span> 
        </div>

        <div className={styles.about__box}>
            <i className={`bx bx-briefcase-alt ${styles.about__icon}`}></i>
            <h3 className={styles.about__title}>Completed</h3>
            <span className={styles.about__subtitle}>10+ Projects</span>
        </div>

        <div className={styles.about__box}>
            <i className={`bx bxs-hot ${styles.about__icon}`}></i>
            <h3 className={styles.about__title}>Dedication</h3>
            <span className={styles.about__subtitle}>To the Moon</span>
        </div>
    </div>
  );
}

export default Info;
