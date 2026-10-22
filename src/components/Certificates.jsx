import React, { useState, useMemo } from 'react';
import {
  Award,
  CheckCircle,
  ExternalLink,
  Calendar,
  FileText,
  ShieldCheck,
  Eye,
  Sparkles,
  ArrowUpRight,
  Check,
  ArrowUpDown,
  Download
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Modal from './Modal';
import PageNav from './PageNav';

const MONTH_MAP = {
  JAN: 1,
  FEB: 2,
  MAR: 3,
  APR: 4,
  MAY: 5,
  JUN: 6,
  JUL: 7,
  AUG: 8,
  SEP: 9,
  OCT: 10,
  NOV: 11,
  DEC: 12
};

const getCertTime = (cert) => {
  if (!cert.month) return 0;
  const parts = cert.month.trim().split(/\s+/);
  const mStr = (parts[0] || '').toUpperCase();
  const year = parseInt(parts[1] || '2026', 10);
  const mNum = MONTH_MAP[mStr] || 1;
  let day = 1;
  const match = cert.date?.match(/\b(\d{1,2})\b/);
  if (match) {
    day = parseInt(match[1], 10);
  }
  return new Date(year, mNum - 1, day).getTime();
};

export default function Certificates() {
  const { certificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' (Oct -> Mar) | 'asc' (Mar -> Oct)
  const [copiedCode, setCopiedCode] = useState(null);

  const getCertCategory = (cert) => {
    if (cert.id.includes('hackathon') || cert.id.includes('wonders-of-ai')) return 'hackathons';
    if (cert.id.includes('deloitte') || cert.id.includes('tata')) return 'simulations';
    return 'datascience';
  };

  const categories = [
    { id: 'all', label: 'All Credentials', count: certificates.length },
    {
      id: 'hackathons',
      label: 'Hackathons & Sprints',
      count: certificates.filter((c) => getCertCategory(c) === 'hackathons').length
    },
    {
      id: 'simulations',
      label: 'Corporate Simulations',
      count: certificates.filter((c) => getCertCategory(c) === 'simulations').length
    },
    {
      id: 'datascience',
      label: 'AI & Data Science',
      count: certificates.filter((c) => getCertCategory(c) === 'datascience').length
    }
  ];

  // Month-based sorted certificates
  const displayedCertificates = useMemo(() => {
    const list = certificates.filter((cert) => {
      if (activeCategory === 'all') return true;
      return getCertCategory(cert) === activeCategory;
    });

    return [...list].sort((a, b) => {
      const timeA = getCertTime(a);
      const timeB = getCertTime(b);
      return sortOrder === 'desc' ? timeB - timeA : timeA - timeB;
    });
  }, [certificates, activeCategory, sortOrder]);

  const openCertModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeCertModal = () => {
    setSelectedCert(null);
  };

  const handleCopyCode = (code, e) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'));
  };

  return (
    <div className="page-wrapper certificates-page-view">
      <section id="certificates" className="section-padding certificates-section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header cert-section-header">
            <div className="section-tag cert-hero-tag">
              <Award size={14} className="text-copper" />
              <span>Verified Credentials & Honors</span>
              <span className="cert-tag-pulse" />
            </div>
            <h1 className="section-title">
              Certifications & <span className="text-copper">Achievements</span>
            </h1>
            <p className="section-subtitle">
              Chronological milestone record tracking verified credentials, national hackathon accomplishments, and machine learning specializations — arranged systematically by month.
            </p>

            {/* Quick Stats Ribbon */}
            <div className="cert-stats-strip font-mono">
              <div className="cert-stat-item">
                <span className="cert-stat-val text-copper">{certificates.length}</span>
                <span className="cert-stat-label">Official Credentials</span>
              </div>
              <div className="cert-stat-divider" />
              <div className="cert-stat-item">
                <span className="cert-stat-val text-lime">100%</span>
                <span className="cert-stat-label">Authentic & Verified</span>
              </div>
              <div className="cert-stat-divider" />
              <div className="cert-stat-item">
                <span className="cert-stat-val text-amber">Mar 2026 — Oct 2026</span>
                <span className="cert-stat-label">Timeline Range</span>
              </div>
            </div>
          </div>

          {/* Interactive Controls Bar: Filters, Month Sorting & View Switcher */}
          <div className="cert-controls-bar">
            {/* Category Filter Pills */}
            <div className="cert-category-filters" role="tablist">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`cert-filter-btn font-mono ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <span>{cat.label}</span>
                    <span className="cert-filter-count">{cat.count}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Controls: Month Sort Toggle */}
            <div className="cert-controls-right">
              {/* Month-based Sort Toggle */}
              <button
                type="button"
                className="cert-sort-btn font-mono"
                onClick={toggleSortOrder}
                title="Toggle month sorting order"
              >
                <ArrowUpDown size={14} className="text-copper" />
                <span>
                  Month: {sortOrder === 'desc' ? 'Oct → Mar (Latest)' : 'Mar → Oct (Oldest)'}
                </span>
              </button>
            </div>
          </div>

          {/* Visual Showcase Gallery (Arranged by Month) */}
          <div className="cert-showcase-grid">
              {displayedCertificates.map((cert, index) => {
                const animDelay = `${(index * 0.08).toFixed(2)}s`;
                const authCode = cert.verificationCode || cert.serialNumber;

                return (
                  <article
                    key={cert.id}
                    className="cert-showcase-card portfolio-card interactive-hover"
                    style={{ animationDelay: animDelay }}
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
                    {/* Visual Certificate Preview Thumbnail */}
                    <div className="cert-thumb-container">
                      {cert.imageUrl ? (
                        <div className="cert-thumb-img-wrap">
                          <img
                            src={cert.imageUrl}
                            alt={cert.title}
                            className="cert-thumb-img"
                            loading="lazy"
                          />
                          {/* Holographic Sheen Layer */}
                          <div className="cert-thumb-sheen" />
                          {/* Hover Action Overlay */}
                          <div className="cert-thumb-overlay">
                            <span className="cert-thumb-action-pill font-mono">
                              <Eye size={13} />
                              <span>Inspect Certificate</span>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="cert-thumb-placeholder">
                          <Award size={36} className="text-copper" />
                          <span className="font-mono">{cert.title}</span>
                        </div>
                      )}

                      {/* Floating Month & Verified Badges */}
                      <div className="cert-thumb-badge-strip">
                        <span className="cert-badge-month font-mono">
                          <Calendar size={11} className="text-copper" />
                          {cert.month}
                        </span>
                        <span className="cert-badge-verified font-mono">
                          <CheckCircle size={11} className="text-lime" />
                          Verified
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="cert-card-content">
                      {/* Top Issuer Row */}
                      <div className="cert-card-issuer-row">
                        <span className="cert-card-issuer-pill font-mono">{cert.issuer}</span>
                      </div>

                      {/* Certificate Title */}
                      <h3 className="cert-card-main-title">{cert.title}</h3>

                      {/* Status / Level Banner */}
                      <div className="cert-card-status-row font-mono">
                        <ShieldCheck size={12} className="text-amber" />
                        <span>{cert.status}</span>
                      </div>

                      {/* Brief description snippet */}
                      <p className="cert-card-description">{cert.description}</p>

                      {/* Verification Code Chip if available */}
                      {authCode && (
                        <div
                          className="cert-auth-chip font-mono"
                          onClick={(e) => handleCopyCode(authCode, e)}
                          title="Click to copy credential ID"
                        >
                          <span className="cert-auth-label">AUTH ID:</span>
                          <span className="cert-auth-code">{authCode}</span>
                          {copiedCode === authCode ? (
                            <Check size={12} className="text-lime ml-auto" />
                          ) : (
                            <span className="cert-auth-copy">copy</span>
                          )}
                        </div>
                      )}

                      {/* Skills Tags */}
                      <div className="cert-skills-chips">
                        {cert.skills.slice(0, 4).map((skill, sIdx) => (
                          <span key={sIdx} className="tech-tag font-mono">
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Card Action Footer */}
                      <div className="cert-card-footer font-mono">
                        <div className="cert-footer-date">
                          <Calendar size={12} className="text-secondary" />
                          <span>{cert.date}</span>
                        </div>

                        <div className="cert-footer-actions">
                          {cert.pdfUrl && (
                            <a
                              href={cert.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cert-quick-btn cert-quick-pdf"
                              onClick={(e) => e.stopPropagation()}
                              title="Open verified PDF document"
                            >
                              <FileText size={13} />
                              <span>PDF</span>
                            </a>
                          )}
                          <div className="cert-quick-btn cert-quick-inspect">
                            <span>View</span>
                            <ArrowUpRight size={13} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

          {/* Glassmorphism Modal for Full Certificate Inspection */}
          <Modal
            isOpen={!!selectedCert}
            onClose={closeCertModal}
            title={selectedCert ? selectedCert.title : ''}
            maxWidth="760px"
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
                        <span className="cert-verify-code-text">
                          {selectedCert.verificationCode
                            ? `Code: ${selectedCert.verificationCode}`
                            : `Serial: ${selectedCert.serialNumber}`}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Visual Certificate High-Res Preview in Modal */}
                {selectedCert.imageUrl && (
                  <div className="cert-modal-preview-wrapper">
                    <img
                      src={selectedCert.imageUrl}
                      alt={selectedCert.title}
                      className="cert-modal-preview-img"
                    />
                    <div className="cert-modal-preview-badge font-mono">
                      <Sparkles size={12} className="text-copper" />
                      <span>High-Resolution Document Preview</span>
                    </div>
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
                        className="btn btn-primary cert-modal-btn"
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
                        className="btn btn-secondary cert-modal-btn"
                      >
                        <Eye size={16} />
                        <span>View Raw Image</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
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
