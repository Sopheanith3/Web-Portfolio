import styles from '../styles/Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Gradient Colletcts - Olympic Collectible AI Solutions (OCAIS)',
      position: 'Software Engineer Intern',
      period: 'August 2025 - January 2026',
      logo: new URL('../assets/edu_icon/gradient.png', import.meta.url).href,
      description: ''
    },
    {
      id: 2,
      company: 'Franklin Pierce High School',
      position: 'Teacher Assistance and Front Office Support',
      period: 'April 2019 - May 2019',
      logo: '/company_fp.png',
      description: ''
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Experiences</h2>
        
        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={styles.experienceItem}>
              <div className={styles.logoContainer}>
                <div className={styles.logo}>
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.textContent = exp.company.charAt(0);
                      e.target.parentElement.style.display = 'flex';
                      e.target.parentElement.style.alignItems = 'center';
                      e.target.parentElement.style.justifyContent = 'center';
                      e.target.parentElement.style.fontSize = '24px';
                      e.target.parentElement.style.fontWeight = 'bold';
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    }}
                  />
                </div>
              </div>
              
              <div className={styles.content}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.company}>{exp.company}</h3>
                    <p className={styles.position}>{exp.position}</p>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <p className={styles.description}>{exp.description}</p>
              </div>
              
              {index < experiences.length - 1 && <div className={styles.divider}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
