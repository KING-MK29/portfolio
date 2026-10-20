import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Maximize2,
  TrendingUp,
  Calendar,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import Modal from './Modal';
import PageNav from './PageNav';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  return (
    <div className="page-wrapper projects-page-view">
      <section id="projects" className="section-padding projects-section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-tag">
              <FolderGit2 size={14} />
              <span>Engineering Portfolio</span>
            </div>
            <h1 className="section-title">
              Featured <span className="text-copper">Projects</span>
            </h1>
            <p className="section-subtitle">
              Engineered systems solving latency bottlenecks, industrial quality control through computer vision, and high-throughput microservices.
            </p>

            {/* Filter Navigation */}
            <div className="projects-filter-nav">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFilter(cat)}
                  className={`project-tab-btn ${selectedFilter === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="portfolio-card project-card">
                {/* Thumbnail with overlay */}
                <div className="project-thumbnail-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-thumbnail-img"
                    loading="lazy"
                  />
                  <div className="project-thumbnail-overlay" />

                  <div className="project-badges-row">
                    <span className="project-category-badge font-mono">
                      {project.category}
                    </span>
                    {project.status && (
                      <span className="project-status-badge font-mono">
                        {project.status}
                      </span>
                    )}
                    {project.featured && (
                      <span className="project-featured-badge font-mono">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="project-expand-btn"
                    onClick={() => setActiveProjectModal(project)}
                    aria-label={`View full details of ${project.title}`}
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>

                {/* Project Details */}
                <div className="project-content-body">
                  <div className="project-title-row">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-year font-mono">{project.year}</span>
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* Performance Metric Pill */}
                  {project.metrics && (
                    <div className="project-metric-pill font-mono">
                      <TrendingUp size={13} className="text-amber" />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="project-tech-tags">
                    {project.tech.map((techItem, idx) => (
                      <span key={idx} className="tech-tag">
                        {techItem}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="project-actions-row">
                    {project.demo && project.demo !== 'https://github.com' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary project-action-btn"
                        aria-label={`Open live website for ${project.title}`}
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => setActiveProjectModal(project)}
                      className="btn btn-sm btn-outline project-action-btn"
                    >
                      <span>Architecture</span>
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-secondary project-action-btn"
                      aria-label={`View source code on GitHub`}
                    >
                      <GithubIcon size={15} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Project Glassmorphic Modal */}
          <Modal
            isOpen={!!activeProjectModal}
            onClose={() => setActiveProjectModal(null)}
            title={activeProjectModal ? activeProjectModal.title : ''}
            maxWidth="750px"
          >
            {activeProjectModal && (
              <div className="project-modal-content">
                {/* Media Preview inside modal */}
                <div className="modal-media-banner">
                  <img
                    src={activeProjectModal.image}
                    alt={activeProjectModal.title}
                    className="modal-banner-img"
                  />
                  <div className="modal-banner-overlay" />
                  <div className="modal-banner-meta font-mono">
                    <span>{activeProjectModal.category}</span>
                    <span>•</span>
                    <span>{activeProjectModal.year}</span>
                    {activeProjectModal.status && (
                      <>
                        <span>•</span>
                        <span className="text-copper">{activeProjectModal.status}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Overview */}
                <div className="modal-section-group">
                  <h4 className="modal-section-heading font-mono">SYSTEM SPECIFICATION</h4>
                  <p className="modal-section-text">{activeProjectModal.description}</p>
                </div>

                {/* Performance Impact */}
                {activeProjectModal.metrics && (
                  <div className="modal-metric-box font-mono">
                    <TrendingUp size={18} className="text-copper" />
                    <div>
                      <span className="modal-metric-label">VERIFIED PERFORMANCE IMPACT</span>
                      <div className="modal-metric-value">{activeProjectModal.metrics}</div>
                    </div>
                  </div>
                )}

                {/* Key Architectural Highlights */}
                <div className="modal-section-group">
                  <h4 className="modal-section-heading font-mono">CORE IMPLEMENTATION HIGHLIGHTS</h4>
                  <ul className="modal-highlights-list">
                    {activeProjectModal.highlights.map((point, hIdx) => (
                      <li key={hIdx} className="modal-highlight-item">
                        <CheckCircle2 size={16} className="text-copper highlight-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Employed */}
                <div className="modal-section-group">
                  <h4 className="modal-section-heading font-mono">TECHNOLOGY STACK</h4>
                  <div className="modal-tech-pills">
                    {activeProjectModal.tech.map((t, idx) => (
                      <span key={idx} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Action Buttons */}
                <div className="modal-footer-actions">
                  {activeProjectModal.demo && activeProjectModal.demo !== 'https://github.com' && (
                    <a
                      href={activeProjectModal.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <ExternalLink size={16} />
                      <span>Launch Live Website</span>
                    </a>
                  )}

                  <a
                    href={activeProjectModal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <GithubIcon size={16} />
                    <span>Explore Repository on GitHub</span>
                    <ExternalLink size={14} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveProjectModal(null)}
                    className="btn btn-outline"
                  >
                    Close Specification
                  </button>
                </div>
              </div>
            )}
          </Modal>
        </div>
      </section>

      {/* Page Navigation */}
      <PageNav
        prev={{ label: 'Certificates', path: '/certificates' }}
        next={{ label: 'Resume', path: '/resume' }}
      />
    </div>
  );
}
