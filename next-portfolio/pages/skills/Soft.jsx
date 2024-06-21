import React from 'react';
import styles from './skills.module.css';

const Soft = () => {
  return (
    <div className={styles.skills__content}>
      <h3 className={styles.skills__title}>Soft Skills</h3>

      <div className={styles.skills__box}>
        <div className={styles.skills__group}>
          <div className={styles.skills__data}>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className={styles.skills__name}>Communication</h3>
              <span className={styles.skills__level}>Intermediate</span>
            </div>
          </div>

          <div className={styles.skills__data}>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className={styles.skills__name}>Teamwork</h3>
              <span className={styles.skills__level}>Intermediate</span>
            </div>
          </div>

          <div className={styles.skills__data}>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className={styles.skills__name}>Adaptability</h3>
              <span className={styles.skills__level}>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Soft;
