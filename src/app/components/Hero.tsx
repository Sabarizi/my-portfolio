import React from 'react';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Hi, I'm
          </h1>
          <h1 className={styles.title2}>Nuzhat Saba</h1>
        <p className={styles.description}>
          "As a passionate web designer and developer, I specialize in creating innovative and responsive websites that deliver a seamless user experience. My expertise lies in front-end technologies such as HTML, CSS, and JavaScript, along with frameworks like React and Next.js."
        </p>
        <a href="#Contact" className={styles.button}>
          Contact Me
        </a>
      
      </div>
      <div className={styles.heroImage}>
        <Image src="/profile.jpg" alt="Profile Picture" width={400} height={400} />
      </div>
    </section>
  );
};

export default Hero;
