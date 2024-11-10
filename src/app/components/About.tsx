import Image from "next/image";
import styles from '../styles/About.module.css';


export default function About() {
    return (
        <div id="About" className={styles.aboutContainer}>
            <div className={styles.waveAnimation}></div>

            <div className={styles.aboutContent}>
                {/* Profile Picture */}
                <div className={styles.profileImageContainer}>
                <Image src="/profile.jpg" alt="Profile Picture" width={100} height={100} />
                </div>

                {/* Text Section */}
                <div className={styles.aboutText}>
                    <h1 className={styles.aboutHeading}>About Me</h1>
                    <p className={styles.aboutParagraph}>
                        "As a dedicated and aspiring web developer, I am passionate about building functional, visually appealing, 
                        and user-friendly websites. With a strong foundation in HTML, CSS, JavaScript, and frameworks like React and Next.js, 
                        I bring both creativity and technical skills to my projects. I love tackling complex problems, constantly improving my skills, 
                        and staying updated with the latest trends in web development. My journey is driven by a love for learning, curiosity, 
                        and a desire to craft intuitive, dynamic solutions that resonate with users."
                    </p>
                </div>
            </div>
        </div>
    );
}
