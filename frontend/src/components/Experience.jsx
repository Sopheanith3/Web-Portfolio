import styles from '../styles/Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'OCAIS',
      position: 'Software Engineer Intern',
      period: '2025 - Present',
      logo: '/company1.png',
      description: 'Developing scalable web applications using React, Node.js, and AWS.'
    },
    {
      id: 2,
      company: 'Tech Startup Inc.',
      position: 'Frontend Developer',
      period: '2024 - 2025',
      logo: '/company2.png',
      description: 'Built responsive user interfaces and improved application performance.'
    },
    {
      id: 3,
      company: 'University of Washington',
      position: 'Research Assistant',
      period: '2023 - 2024',
      logo: '/company3.png',
      description: 'Conducted research on machine learning algorithms and data analysis.'
    },
    {
      id: 4,
      company: 'Freelance',
      position: 'Web Developer',
      period: '2022 - 2023',
      logo: '/company4.png',
      description: 'Developed custom websites and web applications for various clients.'
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
