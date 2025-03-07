'use client';

import styles from './Footer.module.css';
import { FC } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '@/context/ThemeContext';

interface FooterProps {
  // Add any props here if needed in the future
}

export const Footer: FC<FooterProps> = () => {
  const { isDemonMode } = useTheme();

  return (
    <footer className={styles.footer}>
      {/* Brand Column */}
      <div className={`${styles.col} ${styles.col1}`}>
        <h3>Beekay.exe</h3>
        <div className={styles.description}>
          <TypeAnimation
            sequence={[
              'Crafting digital experiences with code and creativity',
              1000,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="text-sm leading-relaxed"
          />
        </div>
        <div className={styles.social}>
          <a 
            href="https://github.com/Beekay-exe" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/bharath-kumar-velpandian/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          
        </div>
        <p className={styles.copyright}>
          Made with <span className={styles.heart}>❤</span> by BK
        </p>
        <p className={styles.copyright}>2024 © All Rights Reserved</p>
      </div>

      {/* Navigation Column */}
      <div className={`${styles.col} ${styles.col2}`}>
        <h4>Nav</h4>
        <nav className={styles.nav}>
          <Link href="#home" className={styles.navLink}>Home</Link>
          <Link href="#about" className={styles.navLink}>About</Link>
          <Link href="#projects" className={styles.navLink}>Projects</Link>
          <Link href="#contact" className={styles.navLink}>Contact</Link>
        </nav>
      </div>

      {/* Resume Column */}
      <div className={`${styles.col} ${styles.col3}`}>
        <h4>Get in Touch</h4>
        <p className={styles.resumeText}>
          Want to work together? Download my resume to learn more about my experience.
        </p>
        <a 
          href="/Bharath Kumar CV.pdf" 
          download="Bharath Kumar CV.pdf"
          className={`${styles.resumeButton} ${styles.glitchButton}`}
          data-mode={isDemonMode ? "demon" : "normal"}
          onClick={(e) => {
            e.preventDefault();
            const link = document.createElement('a');
            link.href = '/Bharath_Kumar_resume.pdf';
            link.download = 'Bharath_Kumar_resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download Resume
        </a>
      </div>

      <div className={styles.backdrop}></div>
    </footer>
  );
};
