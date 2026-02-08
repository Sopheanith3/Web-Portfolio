import styles from '../styles/Education.module.css';
import uwLogo from '../assets/edu_icon/uw.png';
import tccLogo from '../assets/edu_icon/tcc.png';

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Education</h2>
        
        <div className={styles.educationGrid}>
          {/* University of Washington Tacoma - Master's */}
          <div className={styles.educationItem}>
            <div className={styles.logoContainer}>
              <img src={uwLogo} alt="University of Washington Tacoma" className={styles.logo} />
            </div>
            <div className={styles.content}>
              <p className={styles.years}>2025 – 2026</p>
              <h3 className={styles.degree}>Master of Computer Science</h3>
              <p className={styles.institution}>University of Washington</p>
            </div>
          </div>

          {/* University of Washington Tacoma - Bachelor's */}
          <div className={styles.educationItem}>
            <div className={styles.logoContainer}>
              <img src={uwLogo} alt="University of Washington Tacoma" className={styles.logo} />
            </div>
            <div className={styles.content}>
              <p className={styles.years}>2022 – 2025</p>
              <h3 className={styles.degree}>Bachelor of Computer Science and Systems</h3>
              <p className={styles.institution}>University of Washington</p>
            </div>
          </div>

          {/* Tacoma Community College */}
          <div className={styles.educationItem}>
            <div className={styles.logoContainer}>
              <img src={tccLogo} alt="Tacoma Community College" className={styles.logo} />
            </div>
            <div className={styles.content}>
              <p className={styles.years}>2020 – 2022</p>
              <h3 className={styles.degree}>Associate of Arts - <span className={styles.italic}>Running Start</span></h3>
              <p className={styles.institution}>Tacoma Community College</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
