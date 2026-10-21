import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, FolderGit2, ShieldCheck, Terminal, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import PageNav from './PageNav';

export default function Hero() {
  const { personal } = portfolioData;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  // Dynamic typing animation
  useEffect(() => {
    const currentFullText = personal.typingRoles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullText.length) {
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(80);
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % personal.typingRoles.length);
          setTypingSpeed(400);
        } else {
          setTypingSpeed(40);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, personal.typingRoles, typingSpeed]);

  const renderProfileMedia = (extraClass = '') => (
    <div className={`hero-media-wrapper ${extraClass}`}>
      <div className="profile-frame-container">
        <div className="profile-frame-glow" />

        <div className="profile-frame">
          <img
            src={personal.photoUrl}
            alt={personal.name}
            className="profile-img"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = personal.photoFallback;
            }}
          />
        </div>

        {/* Floating Verified Badge */}
        <div className="profile-floating-badge glass-panel">
          <div className="floating-badge-icon">
            <ShieldCheck size={20} className="text-copper" />
          </div>
          <div className="floating-badge-text">
            <div className="floating-badge-title">AI & Data Science</div>
            <div className="floating-badge-sub">Ramco Institute • 2025-2029</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-wrapper home-page-view">
      <section id="home" className="hero-section">
        {/* Background ambient lighting */}
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />

        <div className="container hero-container">
          <div className="hero-grid">
            {/* Left Column: Hero Content */}
            <div className="hero-content">
              {/* Current Status Card */}
              <div className="hero-status-card">
                <div className="channel-icon-box">
                  <Clock size={20} className="text-copper" />
                </div>
                <div className="channel-info">
                  <span className="channel-label font-mono">CURRENT STATUS</span>
                  <span className="channel-value">{personal.statusBadge}</span>
                </div>
              </div>

              {/* Main Title */}
              <h1 className="hero-title">
                <span className="hero-greeting">Hi, I'm</span>
                <span className="hero-name-highlight">{personal.heroName || personal.name}</span>
              </h1>

              {/* Subheading / Dynamic Typing */}
              <div className="hero-typing-box">
                <span className="typing-prefix">{personal.subheadingPrefix || "Role:"}</span>
                <div className="typing-terminal">
                  <Terminal size={16} className="terminal-icon" />
                  <span className="typing-text">{displayedText}</span>
                  <span className="typing-cursor" />
                </div>
              </div>

              {/* Mobile UI Only: Person Profile Image placed directly after Role */}
              {renderProfileMedia('hero-media-mobile-only')}

              {/* Tagline Narrative */}
              <p className="hero-tagline">
                {personal.tagline}
              </p>

              {/* CTAs */}
              <div className="hero-ctas">
                <Link
                  to="/projects"
                  className="btn btn-primary hero-btn"
                >
                  <FolderGit2 size={18} />
                  <span>View Projects</span>
                </Link>

                <Link
                  to="/contact"
                  className="btn btn-outline hero-btn"
                >
                  <Mail size={18} />
                  <span>Contact Me</span>
                </Link>
              </div>

              {/* Quick Metrics Bar */}
              <div className="hero-metrics-strip">
                {personal.stats.map((stat) => (
                  <div key={stat.id} className="hero-metric-item">
                    <span className={`metric-val font-mono ${stat.value.length > 5 ? 'metric-val-compact' : ''}`}>
                      {stat.value}
                    </span>
                    <span className="metric-lbl">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop UI: Profile Portrait Photo in Right Column */}
            {renderProfileMedia('hero-media-desktop-only')}
          </div>
        </div>
      </section>

      {/* Page Navigation to About */}
      <PageNav
        prev={null}
        next={{ label: 'About Me', path: '/about' }}
      />
    </div>
  );
}
