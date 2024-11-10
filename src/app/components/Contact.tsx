import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div id='Contact'>
    <div className={styles.contactContainer}>
      <h2 className={styles.heading}>Contact Us</h2>
      <form className={styles.contactForm}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" className={styles.input} />

        <label htmlFor="email" className={styles.label}>Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" className={styles.input} />

        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea id="message" name="message" placeholder="Your Message" className={styles.textarea}></textarea>

        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
