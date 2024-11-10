import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <h1>My Portfolio</h1>
      </div>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="#About" className={styles.navLink}>About</Link>
        <Link href="#Services" className={styles.navLink}>Services</Link>
        <Link href="#Contact" className={styles.navLink}>Contact</Link>
       <a href='/resume.pdf' className={styles.button}> <button>DOWNLOAD CV</button></a>
      </div>
    </nav>
  );
};

export default Navbar;

