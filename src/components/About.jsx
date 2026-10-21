import React from 'react';
import { Link } from 'react-router-dom';
import { User, Award, CheckCircle2, GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import PageNav from './PageNav';

export default function About() {
  const { personal, education } = portfolioData;

  return (
    <div className="page-wrapper about-page-view">
      <section id="about" className="section-padding about-section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-tag">
              <User size={14} />
              <span>Biography & Background</span>
            </div>
            <h1 className="section-title">
              About <span className="text-copper">Me</span>
            </h1>
            <p className="section-subtitle">
              An engineering perspective focused on deterministic logic, resilient architecture, and real-world system optimization.
            </p>
          </div>

          <div className="about-grid">
            {/* Main Editorial Card */}
            <div className="portfolio-card about-main-card">
              <div className="card-header-badge">
                <span className="font-mono text-copper">ENGINEERING MINDSET</span>
              </div>

              <div className="about-bio-paragraphs">
                {personal.bio.map((paragraph, index) => (
                  <p key={index} className="about-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Core Values & Principles */}
              <div className="about-values-block">
                <h4 className="values-heading font-mono">CORE ENGINEERING PRINCIPLES</h4>
                <div className="values-chips">
                  {personal.coreValues.map((value, idx) => (
                    <div key={idx} className="value-chip">
                      <CheckCircle2 size={14} className="value-chip-icon text-copper" />
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Highlights & Academic Overview */}
            <div className="about-side-column">
              {/* Highlights Grid */}
              <div className="highlights-grid">
                {personal.stats.map((stat) => {
                  const CardElement = stat.link ? Link : 'div';
                  return (
                    <CardElement
                      key={stat.id}
                      to={stat.link}
                      className={`portfolio-card highlight-stat-card ${stat.link ? 'highlight-stat-card-clickable' : ''}`}
                      aria-label={`Navigate to ${stat.label}`}
                    >
                      <div className={`stat-number font-mono ${stat.value.length > 5 ? 'stat-text-compact' : ''}`}>
                        {stat.value}
                      </div>
                      <div className="stat-label">{stat.label}</div>
                    </CardElement>
                  );
                })}
              </div>

              {/* Academic Credential Card */}
              {education.map((edu, idx) => (
                <div key={idx} className="portfolio-card education-card">
                  <div className="edu-header">
                    <div className="edu-icon-box">
                      <GraduationCap size={22} className="text-copper" />
                    </div>
                    <div>
                      <h4 className="edu-degree">{edu.degree}</h4>
                      <div className="edu-institution">{edu.institution}</div>
                    </div>
                  </div>

                  <div className="edu-meta-list font-mono">
                    <div className="edu-meta-item">
                      <Calendar size={13} className="text-amber" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="edu-meta-item">
                      <MapPin size={13} className="text-amber" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.cgpa && (
                      <div className="edu-meta-item edu-meta-cgpa">
                        <Award size={13} className="text-copper" />
                        <span>CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                  </div>

                  <div className="edu-status-pill">
                    <span className="status-dot" />
                    <span>{edu.status}</span>
                  </div>

                  <div className="edu-details">
                    {edu.details.map((detail, dIdx) => (
                      <p key={dIdx} className="edu-detail-text">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Page Navigation */}
      <PageNav
        prev={{ label: 'Home', path: '/' }}
        next={{ label: 'Skills & Tech', path: '/skills' }}
      />
    </div>
  );
}
