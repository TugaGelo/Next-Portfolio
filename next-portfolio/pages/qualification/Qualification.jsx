import React, { useState } from 'react';
import styles from './qualification.module.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className={`${styles.qualification} ${styles.section}`} id='qualification'>
      <div className={styles.title}>
                <h2 className={styles.section__title}>Qualification</h2>
                <span className={styles.section__subtitle}>My Personal Journey</span>
            </div>

      <div className={`${styles.qualification__container} container`}>
        <div className={styles.qualification__tabs}>
          <div 
            className={
              toggleState === 1 
              ? `${styles.qualification__button} ${styles.qualification__active} ${styles.buttonFlex}` 
              : `${styles.qualification__button} ${styles.buttonFlex}`
            }
            onClick={() => toggleTab(1)}
          >
            <i className={`uil uil-graduation-cap ${styles.qualification__icon}`}></i>
            Education
          </div>


          <div 
            className={
              toggleState === 2 
              ? `${styles.qualification__button} ${styles.qualification__active} ${styles.buttonFlex}` 
              : `${styles.qualification__button} ${styles.buttonFlex}`
            }
            onClick={() => toggleTab(2)}
          >
            <i className={`uil uil-briefcase-alt ${styles.qualification__icon}`}></i>
            Education
          </div>


        </div>

        <div className={styles.qualification__sections}>
          <div
            className={
              toggleState === 1
                ? `${styles.qualification__content} ${styles.qualification__contentActive}`
                : styles.qualification__content
            }
          >
            <div className={styles.qualification__data}>
              <div>
                <h3 className={styles.qualification__title}>Junior/Senior Highschool</h3>
                <span className={styles.qualification__subtitle}>PUP - Sta. Mesa</span>
                <div className={styles.qualification__calendar}>
                  <i className="uil uil-calendar-alt"></i> 2014 - 2020
                </div>
              </div>
              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles.qualification__line}></span>
              </div>
            </div>
            <div className={styles.qualification__data}>
              <div></div>
              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles.qualification__line}></span>
              </div>
              <div>
                <h3 className={styles.qualification__title}>BS in Information Technology</h3>
                <span className={styles.qualification__subtitle}>PUP - Sta. Mesa</span>
                <div className={styles.qualification__calendar}>
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? `${styles.qualification__content} ${styles.qualification__contentActive}`
                : styles.qualification__content
            }
          >
            <div className={styles.qualification__data}>
              <div>
                <h3 className={styles.qualification__title}>Service Crew</h3>
                <span className={styles.qualification__subtitle}>Golden Arches Dev Corp</span>
                <div className={styles.qualification__calendar}>
                  <i className="uil uil-calendar-alt"></i> 2019 - 2021
                </div>
              </div>
              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles.qualification__line}></span>
              </div>
            </div>
            <div className={styles.qualification__data}>
              <div></div>
              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles.qualification__line}></span>
              </div>
              <div>
                <h3 className={styles.qualification__title}>Student Assistant</h3>
                <span className={styles.qualification__subtitle}>PUP - Sta. Mesa</span>
                <div className={styles.qualification__calendar}>
                  <i className="uil uil-calendar-alt"></i> 2022 - 2024
                </div>
              </div>
            </div>
            <div className={styles.qualification__data}>
              <div>
                <h3 className={styles.qualification__title}>Internship</h3>
                <span className={styles.qualification__subtitle}>Zynappse Corp</span>
                <div className={styles.qualification__calendar}>
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
                </div>
              </div>
              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles.qualification__line}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
