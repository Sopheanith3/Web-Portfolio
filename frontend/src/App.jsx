import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  useEffect(() => {
    // Add fade-in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero />
      <Education />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
