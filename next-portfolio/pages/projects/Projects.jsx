import React, { useState } from 'react'
import styles from './projects.module.css';

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState (index);
    };
    
  return (
    <section className={`${styles.services} ${styles.section}`} id="projects">
        <div className={styles.title}>
            <h2 className={styles.section__title}>Projects</h2>
            <span className={styles.section__subtitle}>What I've Made</span>
        </div>
        
        <div className={`${styles.services__container} container grid`}>
            <div className={styles.services__content}>
                <div>
                    <i className={`uil uil-estate ${styles.services__icon}`}></i>
                    <h3 className={styles.services__title}>Concessionaire<br /> Ope Mon System</h3>
                </div>

                <span className={styles.services__button} onClick={() => toggleTab(1)}>View More
                    <i className={`uil uil-arrow-right ${styles.services__buttonIcon}`}></i>
                </span>

                <div className={toggleState === 1 ? `${styles.services__modal} ${styles.activeModal}` : styles.services__modal}>
                    <div className={styles.services__modalContent}>
                        <i onClick={() => toggleTab(0)} className={`uil uil-times ${styles.services__modalClose}`}></i>

                        <h3 className={styles.services__modalTitle}>Concessionaire Operations Monitoring System</h3>
                        <p className={styles.services__modalDescription}>Web-based operations management</p>

                        <ul className={`${styles.services__modalServices} grid`}>
                            <li className={styles.services__modalService}>
                            <i className={`uil uil-check-circle ${styles.services__modalIcon}`}></i>
                                <p className={styles.services__modalInfo}>Front-end development with HTML/CSS/JS.</p>
                            </li>

                            <li className={styles.services__modalService}>
                                <i className={`uil uil-check-circle ${styles.services__modalIcon}`}></i>
                                <p className={styles.services__modalInfo}>Backend development with PHP</p>
                            </li>

                            <li className={styles.services__modalService}>
                            <i className={`uil uil-check-circle ${styles.services__modalIcon}`}></i>
                                <p className={styles.services__modalInfo}>Database management using MySQL</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.services__content}>
                <div>
                    <i className={`uil uil-smile ${styles.services__icon}`}></i>
                    <h3 className={styles.services__title}>Face  <br />Detection</h3>
                </div>

                <span className={`services__button ${styles.services__button}`} onClick={() => toggleTab(2)}>View More
                    <i className={`uil uil-arrow-right ${styles.services__buttonIcon}`}></i>
                </span>

                <div className={toggleState === 2 ? `${styles.services__modal} ${styles.activeModal}` : styles.services__modal}>
                    <div className={styles.services__modalContent}>
                        <i onClick={() => toggleTab(0)} className={`uil uil-times ${styles.services__modalClose}`}></i>

                        <h3 className={styles.services__modalTitle}>Face Detection</h3>
                        <p className={styles.services__modalDescription}>Python-based face detection system</p>   

                        <ul className={`${styles.services__modalServices} grid`}>
                            <li className={styles.services__modalService}>
                                <i className={`uil uil-check-circle ${styles.services__modalIcon}`}></i>
                                <p className={styles.services__modalInfo}>Python programming</p>
                            </li>

                            <li className={styles.services__modalService}>
                                <i className={`uil uil-check-circle ${styles.services__modalIcon}`}></i>
                                <p className={styles.services__modalInfo}>OpenCV and computer vision techniques</p>
                            </li>

                            <li className={styles.services__modalService}>
                                <i className={`uil uil-check-circle ${styles.services__modalIcon}`}></i>
                                <p className={styles.services__modalInfo}>Image processing and manipulation</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className={styles.services__content}>
                <div>
                    <i className={`uil uil-youtube ${styles.services__icon}`}></i>
                    <h3 className={styles.services__title}>Youtube <br />Clone</h3>
                </div>

                <span className={`services__button ${styles.services__button}`} onClick={() => toggleTab(3)}>View More
                    <i className={`uil uil-arrow-right ${styles.services__buttonIcon}`}></i>
                </span>

                <div className={toggleState === 3 ? `${styles.services__modal} ${styles.activeModal}` : styles.services__modal}>
                    <div className={styles.services__modalContent}>
                        <i onClick={() => toggleTab(0)} className={`uil uil-times ${styles.services__modalClose}`}></i>

                        <h3 className={styles.services__modalTitle}>Youtube Clone</h3>
                        <p className={styles.services__modalDescription}>Replicated video-sharing platform</p>   

                        <ul className={`${styles.services__modalServices} grid`}>
                            <li className={styles.services__modalService}>
                                <i className={`uil uil-check-circle ${styles.services__modalIcon}`}></i>
                                <p className={styles.services__modalInfo}>Front-end design with HTML/CSS/JS</p>
                            </li>

                            <li className={styles.services__modalService}>
                                <i className={`uil uil-check-circle ${styles.services__modalIcon}`}></i>
                                <p className={styles.services__modalInfo}>Understanding of responsive web design</p>
                            </li>

                            <li className={styles.services__modalService}>
                                <i className={`uil uil-check-circle ${styles.services__modalIcon}`}></i>
                                <p className={styles.services__modalInfo}>Practice in UI/UX principles</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects