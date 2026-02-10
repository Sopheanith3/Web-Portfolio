import ProjectCard from './ProjectCard';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'P.A.K.S Project',
      description: 'A comprehensive parks management and discovery platform.',
      image: new URL('../assets/proj_icon/paks_project1.png', import.meta.url).href,
      link: '#'
    },
    {
      id: 2,
      title: 'ReciFEED',
      description: 'A recipe sharing and meal planning application.',
      image: new URL('../assets/proj_icon/ReciFEED-logo.png', import.meta.url).href,
      link: '#',
      objectFit: 'contain'
    },
    {
      id: 3,
      title: 'Book Web API',
      description: 'RESTful API for book catalog management and search.',
      image: new URL('../assets/proj_icon/book_webapi.png', import.meta.url).href,
      link: '#',
      objectFit: 'contain'
    },
    {
      id: 4,
      title: 'COVID Data',
      description: 'Interactive dashboard for COVID-19 statistics and trends.',
      image: new URL('../assets/proj_icon/covid_data.gif', import.meta.url).href,
      link: '#'
    },
    {
      id: 5,
      title: 'Course Map',
      description: 'Database-driven course mapping and planning system.',
      image: new URL('../assets/proj_icon/course_map_project.png', import.meta.url).href,
      link: '#'
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.sectionSubtitle}>
          A selection of projects I worked on in the past few years
        </p>
        
        <div className={styles.projectsGrid}>
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              objectFit={project.objectFit}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
