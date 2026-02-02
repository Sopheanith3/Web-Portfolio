import ProjectCard from './ProjectCard';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
      image: '/project1.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates using WebSocket. Built with TypeScript, React, and Express.',
      image: '/project2.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard that displays real-time weather data from multiple APIs. Features data visualization with Chart.js.',
      image: '/project3.jpg',
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics platform for social media insights using Python, AWS Lambda, and React. Processes large datasets for trend analysis.',
      image: '/project4.jpg',
      link: '#'
    },
    {
      id: 5,
      title: 'Portfolio CMS',
      description: 'Content management system for portfolio websites with drag-and-drop interface. Built with Next.js and Strapi.',
      image: '/project5.jpg',
      link: '#'
    },
    {
      id: 6,
      title: 'AI Chatbot',
      description: 'Intelligent chatbot using natural language processing and machine learning. Integrates OpenAI API for conversational AI.',
      image: '/project6.jpg',
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
