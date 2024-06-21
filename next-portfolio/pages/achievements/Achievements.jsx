import React from 'react';
import styles from './achievement.module.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const Achievements = () => {
  return (
    <section className={`${styles.achievement} container ${styles.section}`} id="achievements" style={{ padding: '5rem' }}>
        
        <div className={styles.title}>
          <h2 className={styles.section__title}>Achievements</h2>
          <span className={styles.section__subtitle}>What I'm Proudest of</span>
        </div>

        <Swiper className={styles.achievement__container} 
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination, Navigation]}
          style={{ '--swiper-navigation-color': 'var(--text-color)',
                   '--swiper-pagination-color': 'var(--text-color)',
                   '--swiper-pagination-color-active': 'var(--title-color)' }}
        >
          {Data.map(({ id, image, title, description }) => {
            return (
              <SwiperSlide className={styles.achievement__card} key={id}>
                <div className={styles.imageContainer}>
                  <Image src={image} alt="" className={styles.achievement__img} width={300} height={200} />
                </div>
                <h3 className={styles.achievement__name}>{title}</h3>
                <p className={styles.achievement__description}>{description}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
    </section>
  );
};

export default Achievements;
