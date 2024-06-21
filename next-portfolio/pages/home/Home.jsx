import React from 'react';
import styles from './home.module.css';
import { Socials } from './Socials';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className={`${styles.home} ${styles.section}`} id="home">
      <div className={`${styles.home__container} container grid`}>
        <div className={`${styles.home__content} grid`}>
          <Socials />

          <div className={styles.home__img}></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home;
