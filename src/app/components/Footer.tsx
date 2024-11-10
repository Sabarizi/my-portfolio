import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerTop}>
                <Link href="/" className={styles.footerLink}>Home</Link>
                <Link href="#About" className={styles.footerLink}>About</Link>
                <Link href="/services" className={styles.footerLink}>Services</Link>
                <Link href="#Contact" className={styles.footerLink}>Contact</Link>
            </div>

            <div className={styles.socialIcons}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <FaLinkedin />
                </a>
            </div>

            <div className={styles.footerBottom}>
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
}