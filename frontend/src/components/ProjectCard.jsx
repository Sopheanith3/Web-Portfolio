import styles from '../styles/Projects.module.css';

const ProjectCard = ({ title, description, image, link, objectFit = 'cover' }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <img 
          src={image} 
          alt={title}
          className={styles.projectImage}
          style={{ objectFit: objectFit }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            e.target.parentElement.style.minHeight = '200px';
          }}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <a href={link} className={styles.learnMore}>
          Learn more →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
