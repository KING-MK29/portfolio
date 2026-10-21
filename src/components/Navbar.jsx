import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Projects', path: '/projects' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-content">
        {/* Brand / Logo */}
        <Link to="/" className="navbar-logo" aria-label="Mukesh Kumaran M Homepage">
          <div className="logo-badge">
            <span className="logo-text">MK</span>
          </div>
          <span className="logo-name">Mukesh Kumaran</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="navbar-nav-desktop" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-item ${isActive ? 'nav-item-active' : ''}`}
              >
                {link.label}
                {isActive && <span className="nav-active-indicator" />}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="navbar-actions">
          <Link
            to="/resume"
            className="btn btn-sm btn-outline navbar-cta"
          >
            <FileText size={15} />
            <span>Resume</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="mobile-nav-inner">
          <div className="mobile-nav-list">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={18} className="mobile-link-arrow" />
                </Link>
              );
            })}
          </div>

          <div className="mobile-nav-footer">
            <Link
              to="/resume"
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <FileText size={16} />
              <span>Download Resume (PDF)</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
