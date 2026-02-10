import { useState } from 'react';
import styles from '../styles/Hero.module.css';
import linkedinIcon from '../assets/social_icon/LinkedIn.png';
import githubIcon from '../assets/social_icon/github.png';
import gmailIcon from '../assets/social_icon/gmail.png';
import resumeIcon from '../assets/social_icon/resume.png';
import profileImage from '../assets/edu_icon/profile.png';

// Programming Language Icons
import javascriptIcon from '../assets/prog_icon/javascript.png';
import typescriptIcon from '../assets/prog_icon/typescript.png';
import pythonIcon from '../assets/prog_icon/python.png';
import javaIcon from '../assets/prog_icon/java.png';
import cplusplusIcon from '../assets/prog_icon/cplusplus.png';
import csharpIcon from '../assets/prog_icon/csharp.png';
import sqlIcon from '../assets/prog_icon/sql.png';

// Framework Icons
import reactIcon from '../assets/prog_icon/react.png';
import nextjsIcon from '../assets/prog_icon/nextjs.png';
import expressIcon from '../assets/prog_icon/express.png';

// Tools & Deployment Icons
import dockerIcon from '../assets/prog_icon/docker.png';
import githubProgIcon from '../assets/prog_icon/github.png';
import gcpIcon from '../assets/prog_icon/gcp.png';
import awsIcon from '../assets/prog_icon/aws.png';
import azureIcon from '../assets/prog_icon/azure.png';
import graphqlIcon from '../assets/prog_icon/graphql.png';
import figmaIcon from '../assets/prog_icon/figma.png';
import webpackIcon from '../assets/prog_icon/webpack.png';

const Hero = () => {
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const email = 'nsopheanith3@gmail.com';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        {/* Name, Subtitle and Profile Image Container */}
        <div className={styles.headerRow}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>Sopheanith Ny</h1>
            <h2 className={styles.subtitle}>
              Portfolio of a Computer Science student and Software engineer
            </h2>
          </div>
          <div className={styles.profileImageSmall}>
            <img 
              src={profileImage} 
              alt="Profile" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
              }}
            />
          </div>
        </div>

        {/* Bio Section */}
        <div className={styles.bioSection}>
          <p className={styles.bio}>
            Graduated from the <a href="https://www.washington.edu/" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>University of Washington</a> with my bachelor's degree in Computer Science in 2025, and I'm currently pursuing my master's, set to finish in 2026. Right now, I'm working as a Software Engineer Intern at <a href="https://www.gradientcollects.com/" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>Gradient Collects - Olympic Collectible AI Solutions</a>, where I build web applications and backend systems using technologies like React, TypeScript, Python, and Node.js. I enjoy solving real problems through code—whether that's designing APIs, improving user interfaces, or making sure everything runs smoothly in production. I'm passionate about writing clean, maintainable code and collaborating with teams to ship features that actually work well for users.
          </p>
            
          <div className={styles.socialIcons}>
            <a 
              href="https://www.linkedin.com/in/sopheanith-ny3/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIconLink}
            >
              <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
            </a>
            
            <a 
              href="https://github.com/Sopheanith3" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIconLink}
            >
              <img src={githubIcon} alt="GitHub" className={`${styles.socialIcon} ${styles.githubIcon}`} />
            </a>
            
            <div 
              className={styles.emailIconWrapper}
              onMouseEnter={() => setShowEmailTooltip(true)}
              onMouseLeave={() => setShowEmailTooltip(false)}
            >
              <button 
                onClick={copyEmailToClipboard}
                className={styles.socialIconLink}
                aria-label="Copy email to clipboard"
              >
                <img src={gmailIcon} alt="Gmail" className={styles.socialIcon} />
              </button>
              {showEmailTooltip && (
                <div className={styles.emailTooltip}>
                  <span className={styles.tooltipText}>{emailCopied ? 'Copied!' : 'Copy email'}</span>
                  <span className={styles.tooltipEmail}>{email}</span>
                </div>
              )}
            </div>
            
            <a 
              href="#" 
              className={styles.socialIconLink}
            >
              <img src={resumeIcon} alt="Resume" className={styles.socialIcon} />
            </a>
          </div>

          {/* Tech Stack - Icons Only */}
          <div className={styles.techStack}>
            <h3 className={styles.techStackTitle}>Technologies & Tools</h3>
            <div className={styles.techIcons}>
              <img src={javascriptIcon} alt="JavaScript" className={styles.techIcon} title="JavaScript" />
              <img src={typescriptIcon} alt="TypeScript" className={styles.techIcon} title="TypeScript" />
              <img src={pythonIcon} alt="Python" className={styles.techIcon} title="Python" />
              <img src={javaIcon} alt="Java" className={styles.techIcon} title="Java" />
              <img src={cplusplusIcon} alt="C++" className={styles.techIcon} title="C++" />
              <img src={csharpIcon} alt="C#" className={styles.techIcon} title="C#" />
              <img src={sqlIcon} alt="SQL" className={styles.techIcon} title="SQL" />
              <img src={reactIcon} alt="React" className={styles.techIcon} title="React" />
              <img src={nextjsIcon} alt="Next.js" className={`${styles.techIcon} ${styles.nextjsIcon}`} title="Next.js" />
              <img src={expressIcon} alt="Express" className={styles.techIcon} title="Express" />
              <img src={dockerIcon} alt="Docker" className={styles.techIcon} title="Docker" />
              <img src={githubProgIcon} alt="GitHub" className={`${styles.techIcon} ${styles.githubTechIcon}`} title="GitHub" />
              <img src={gcpIcon} alt="Google Cloud Platform" className={styles.techIcon} title="GCP" />
              <img src={awsIcon} alt="AWS" className={styles.techIcon} title="AWS" />
              <img src={azureIcon} alt="Azure" className={styles.techIcon} title="Azure" />
              <img src={graphqlIcon} alt="GraphQL" className={styles.techIcon} title="GraphQL" />
              <img src={webpackIcon} alt="Webpack" className={styles.techIcon} title="Webpack" />
              <img src={figmaIcon} alt="Figma" className={styles.techIcon} title="Figma" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
