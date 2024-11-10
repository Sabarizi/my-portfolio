import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import styles from '../styles/Services.module.css';

export default function Services() {
    return (
        <section id="Services" className={styles.servicesContainer}>
            <h2 className={styles.sectionTitle}>My Services</h2>
            <div className={styles.servicesGrid}>
                
                {/* Service 1 */}
                <div className={styles.serviceCard}>
                    <div className={styles.iconContainer}>
                        <FaCode />
                    </div>
                    <h3 className={styles.serviceTitle}>Web Development</h3>
                    <p className={styles.serviceDescription}>
                        Building responsive and dynamic websites using modern frameworks like React, Next.js, and more.
                    </p>
                </div>

                {/* Service 2 */}
                <div className={styles.serviceCard}>
                    <div className={styles.iconContainer}>
                        <FaLaptopCode />
                    </div>
                    <h3 className={styles.serviceTitle}>UI/UX Design</h3>
                    <p className={styles.serviceDescription}>
                        Creating user-centered designs that are both functional and visually appealing.
                    </p>
                </div>

                {/* Service 3 */}
                <div className={styles.serviceCard}>
                    <div className={styles.iconContainer}>
                        <FaMobileAlt />
                    </div>
                    <h3 className={styles.serviceTitle}>Mobile App Development</h3>
                    <p className={styles.serviceDescription}>
                        Developing cross-platform mobile applications that deliver a smooth and engaging user experience.
                    </p>
                </div>
                
            </div>
        </section>
    );
}
