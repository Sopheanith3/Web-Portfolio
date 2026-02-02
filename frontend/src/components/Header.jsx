import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => scrollToSection('home')}>
          <span className={styles.logoText}>rph</span>
        </div>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
          <a onClick={() => scrollToSection('home')} className={styles.navLink}>home</a>
          <a onClick={() => scrollToSection('projects')} className={styles.navLink}>projects</a>
          <a onClick={() => scrollToSection('experience')} className={styles.navLink}>experience</a>
          <a onClick={() => scrollToSection('about')} className={styles.navLink}>about</a>
        </nav>

        <button 
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
