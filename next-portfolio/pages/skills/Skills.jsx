import React from 'react';
import styles from './skills.module.css';
import Backend from './Backend';
import Frontend from './Frontend';
import Soft from './Soft';

const Skills = () => {
  return (
    <section className={`${styles.skills} ${styles.section}`} id="skills">
      <div className={styles.centeredContent}>
        <h2 className={styles.section__title}>Skills</h2>
        <span className={styles.section__subtitle}>My Technical Level</span>
    </div>

      

      <div className={`${styles.skills__container} container grid`}>
        <Frontend />
        <Backend />
        <Soft />
      </div>
    </section>
  );
}

export default Skills;
