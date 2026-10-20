import React, { useState } from 'react';
import {
  Award,
  CheckCircle,
  ExternalLink,
  Calendar,
  FileText,
  ShieldCheck,
  Eye,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Modal from './Modal';
import PageNav from './PageNav';

export default function Certificates() {
  const { certificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  const openCertModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeCertModal = () => {
    setSelectedCert(null);
  };

  return (
    <div className="page-wrapper certificates-page-view">
      <section id="certificates" className="section-padding certificates-section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-tag">
              <Award size={14} />
              <span>Credentials & Proof</span>
            </div>
            <h1 className="section-title">
              Certifications & <span className="text-copper">Achievements</span>
            </h1>
            <p className="section-subtitle">
              Chronological milestone timeline tracking verified credentials, national hackathon accomplishments, and machine learning specializations.
            </p>
          </div>

          {/* Central Vertical Timeline with Months Spine & Alternating Left/Right Boxes */}
          <div className="certificates-timeline-container">
            {/* Glowing Vertical Center Line Spine */}
            <div className="timeline-center-spine" />

            {/* Timeline Entries: Alternating Left and Right with Center Month Nodes */}
            <div className="timeline-entries-list">
              {certificates.map((cert, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={cert.id}
                    className={`timeline-entry-row ${isLeft ? 'entry-left' : 'entry-right'}`}
                  >
                    {/* CENTER MONTH NODE ON THE LINE */}
                    <div className="timeline-center-node">
                      <div className="node-glow-halo" />
                      <div className="node-center-dot" />
                      <div className="node-month-pill font-mono">
                        <Calendar size={11} className="text-copper" />
                        <span>{cert.month}</span>
                      </div>
                    </div>

                    {/* HORIZONTAL CONNECTOR ARM */}
                    <div className="timeline-connector-arm" />

                    {/* CERTIFICATE CARD BOX (ALTERNATING LEFT OR RIGHT) */}
                    <div
                      className="timeline-card-box portfolio-card cert-card interactive-hover"
                      onClick={() => openCertModal(cert)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          openCertModal(cert);
                        }
                      }}
                    >
                      {/* Top Bar with Icon, Status Badge & Month */}
                      <div className="cert-top-bar">
                        <div className="cert-icon-container">
                          <Award size={22} className="text-copper" />
                        </div>
                        <div className="cert-top-badges">
                          <div className="cert-status-badge">
                            <ShieldCheck size={12} className="text-amber" />
                            <span className="font-mono">{cert.status}</span>
                          </div>
                          {(cert.verificationCode || cert.serialNumber) && (
                            <div className="cert-verified-pill font-mono">
                              <CheckCircle size={10} className="text-copper" />
                              <span>Verified</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Title & Issuer */}
                      <h3 className="cert-card-title">{cert.title}</h3>
                      <p className="cert-card-issuer font-mono">{cert.issuer}</p>

                      {/* Brief Description */}
                      <p className="cert-card-snippet">{cert.description}</p>

                      {/* Skills Chips */}
                      <div className="cert-skills-chips">
                        {cert.skills.slice(0, 3).map((skill, sIdx) => (
                          <span key={sIdx} className="tech-tag font-mono">
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Meta & View CTA */}
                      <div className="cert-meta-row font-mono">
                        <div className="cert-meta-date">
                          <Calendar size={12} className="text-secondary" />
                          <span>{cert.date}</span>
                        </div>
                        <div className="cert-view-cta">
                          <span>View Credential</span>
                          <ArrowUpRight size={14} className="text-copper" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Timeline Bottom Endpoint */}
            <div className="timeline-end-cap font-mono">
              <span className="end-pulse-dot" />
              <span>OFFICIAL VERIFIED TIMELINE • 2024 — 2026</span>
            </div>
          </div>

          {/* Glassmorphism Modal for Certificate Details */}
          <Modal
            isOpen={!!selectedCert}
            onClose={closeCertModal}
            title={selectedCert ? selectedCert.title : ''}
            maxWidth="680px"
          >
            {selectedCert && (
              <div className="cert-modal-content">
                <div className="cert-modal-header-meta">
                  <div className="cert-modal-issuer-box">
                    <span className="cert-modal-label font-mono">ISSUING BODY</span>
                    <div className="cert-modal-issuer-name">{selectedCert.issuer}</div>
                  </div>

                  <div className="cert-modal-status-box font-mono">
                    <span className="cert-modal-label">STATUS</span>
                    <div className="cert-modal-status-val">
                      <CheckCircle size={14} className="text-amber" />
                      <span>{selectedCert.status}</span>
                    </div>
                  </div>

                  <div className="cert-modal-date-box font-mono">
                    <span className="cert-modal-label">MILESTONE</span>
                    <div className="cert-modal-date-val">{selectedCert.month} ({selectedCert.date})</div>
                  </div>

                  {(selectedCert.verificationCode || selectedCert.serialNumber) && (
                    <div className="cert-modal-verify-box font-mono">
                      <span className="cert-modal-label">CREDENTIAL AUTH ID</span>
                      <div className="cert-modal-verify-val">
                        <ShieldCheck size={13} className="text-copper" />
                        <span className="cert-verify-code-text">{selectedCert.verificationCode ? `Code: ${selectedCert.verificationCode}` : `Serial: ${selectedCert.serialNumber}`}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Visual Certificate Preview if image exists */}
                {selectedCert.imageUrl && (
                  <div className="cert-modal-preview-wrapper">
                    <img
                      src={selectedCert.imageUrl}
                      alt={selectedCert.title}
                      className="cert-modal-preview-img"
                    />
                  </div>
                )}

                <div className="cert-modal-body-section">
                  <h4 className="cert-modal-section-title font-mono">CREDENTIAL SYLLABUS & OVERVIEW</h4>
                  <p className="cert-modal-description">{selectedCert.description}</p>
                </div>

                <div className="cert-modal-skills-section">
                  <h4 className="cert-modal-section-title font-mono">COMPETENCIES VERIFIED</h4>
                  <div className="cert-skills-chips">
                    {selectedCert.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="cert-modal-actions">
                  <div className="cert-modal-action-buttons">
                    {selectedCert.pdfUrl && (
                      <a
                        href={selectedCert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <FileText size={16} />
                        <span>Open Verified Document (PDF)</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {selectedCert.imageUrl && (
                      <a
                        href={selectedCert.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <Eye size={16} />
                        <span>View High-Res Image</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  {!selectedCert.pdfUrl && !selectedCert.imageUrl && (
                    <div className="cert-modal-record-notice font-mono">
                      <ShieldCheck size={16} className="text-copper" />
                      <span>Authentic Academic & Competition Record verified by Department</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Modal>
        </div>
      </section>

      {/* Page Navigation to Projects */}
      <PageNav
        prev={{ label: 'Skills & Expertise', path: '/skills' }}
        next={{ label: 'Projects', path: '/projects' }}
      />
    </div>
  );
}
