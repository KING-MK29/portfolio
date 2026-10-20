import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="footer-top-row">
          {/* Logo & Description */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-text">MK</span>
              <span className="logo-dot" />
            </Link>
            <p className="footer-brand-desc">
              Mukesh Kumaran M — Data Science Engineer & Backend Developer. Architecting reliable, mathematically grounded software systems.
            </p>
          </div>

          {/* Quick Section Links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading font-mono">PAGES</h4>
            <div className="footer-links-grid">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/skills" className="footer-link">Skills</Link>
              <Link to="/certificates" className="footer-link">Certificates</Link>
              <Link to="/projects" className="footer-link">Projects</Link>
              <Link to="/resume" className="footer-link">Resume</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="footer-social-col">
            <h4 className="footer-heading font-mono">CONNECT</h4>
            <div className="footer-social-links">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="footer-social-btn"
                aria-label="Send direct email"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="footer-bottom-row">
          <p className="footer-copyright font-mono">
            &copy; {new Date().getFullYear()} Mukesh Kumaran M. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top font-mono"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <div className="top-arrow-box">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
