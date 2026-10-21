import React, { useState, useRef } from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Terminal,
  ShieldCheck,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  ArrowUp
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetHelper';
import Modal from './Modal';
import PageNav from './PageNav';

export default function Resume() {
  const { personal } = portfolioData;
  const [zoomPage, setZoomPage] = useState(null); // null | 0 | 1
  const [activePage, setActivePage] = useState(1);
  const viewportRef = useRef(null);
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);

  // Track scroll position to update current page indicator
  const handleScroll = () => {
    if (!viewportRef.current || !page2Ref.current) return;
    const viewportTop = viewportRef.current.scrollTop;
    const page2Top = page2Ref.current.offsetTop - viewportRef.current.offsetTop;
    if (viewportTop >= page2Top - 140) {
      setActivePage(2);
    } else {
      setActivePage(1);
    }
  };

  const scrollToPage = (pageNum) => {
    if (pageNum === 1 && page1Ref.current && viewportRef.current) {
      viewportRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (pageNum === 2 && page2Ref.current && viewportRef.current) {
      const topPos = page2Ref.current.offsetTop - viewportRef.current.offsetTop - 12;
      viewportRef.current.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  return (
    <div className="page-wrapper resume-page-view">
      <section id="resume" className="section-padding resume-section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-tag">
              <FileText size={14} />
              <span>Curriculum Vitae</span>
            </div>
            <h1 className="section-title">
              Professional <span className="text-copper">Resume</span>
            </h1>
            <p className="section-subtitle">
              Official 2-page curriculum vitae of Mukesh Kumaran M — Undergraduate Student in AI, Software Development & Cybersecurity.
            </p>
          </div>

          {/* Clean Quick Action Bar */}
          <div className="resume-quick-bar">
            <div className="resume-verified-badge font-mono">
              <ShieldCheck size={14} className="text-amber" />
              <span>OFFICIAL VERIFIED RESUME • RAJAPALAYAM, TAMIL NADU</span>
            </div>

            <div className="resume-quick-actions">
              <a
                href={personal.resumeUrl}
                download="Mukesh_Kumaran_M_Resume.pdf"
                className="btn btn-primary resume-download-btn"
              >
                <Download size={17} className="download-arrow-icon" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <ExternalLink size={15} />
                <span>Open Full PDF</span>
              </a>
            </div>
          </div>

          {/* UNIFIED SINGLE-BOX RESUME VIEWER (SCROLLING METHOD) */}
          <div className="resume-unified-reader-box portfolio-card">
            {/* Document Reader Top Bar */}
            <div className="resume-reader-toolbar">
              <div className="reader-toolbar-left">
                <FileText size={18} className="text-copper" />
                <div className="reader-doc-meta">
                  <span className="reader-doc-name font-mono">Mukesh_Kumaran_Resume.pdf</span>
                  <span className="reader-doc-badge">2 Pages • Continuous Scroll Document</span>
                </div>
              </div>

              {/* Page Jump Navigator Buttons */}
              <div className="reader-toolbar-center font-mono">
                <button
                  type="button"
                  className={`reader-page-jump-btn ${activePage === 1 ? 'active' : ''}`}
                  onClick={() => scrollToPage(1)}
                  aria-label="Scroll to Page 1"
                >
                  <span className="page-mini-dot"></span>
                  <span>Page 1</span>
                </button>
                <span className="reader-page-sep">/</span>
                <button
                  type="button"
                  className={`reader-page-jump-btn ${activePage === 2 ? 'active' : ''}`}
                  onClick={() => scrollToPage(2)}
                  aria-label="Scroll to Page 2"
                >
                  <span className="page-mini-dot"></span>
                  <span>Page 2</span>
                </button>
              </div>

              {/* Reader Action Buttons */}
              <div className="reader-toolbar-right">
                <a
                  href={personal.resumeUrl}
                  download="Mukesh_Kumaran_M_Resume.pdf"
                  className="reader-action-btn font-mono btn-action-download"
                  title="Download PDF"
                >
                  <Download size={14} />
                  <span className="desktop-only-text">PDF</span>
                </a>
              </div>
            </div>

            {/* Scrollable Viewport Containing Both Pages */}
            <div
              className="resume-scroll-viewport"
              ref={viewportRef}
              onScroll={handleScroll}
              tabIndex={0}
              aria-label="Scrollable Resume Document Viewport"
            >
              <div className="resume-document-flow">
                {/* PAGE 1 */}
                <div className="resume-sheet-item" ref={page1Ref} id="resume-page-1">
                  <div className="resume-sheet-label font-mono">
                    <span className="sheet-label-pill">01</span>
                    <span className="sheet-label-title">PAGE 1 OF 2 — PROFILE, PROJECTS, EDUCATION & SKILLS</span>
                    <button
                      type="button"
                      className="sheet-label-zoom font-mono"
                      onClick={() => setZoomPage(0)}
                    >
                      <ZoomIn size={13} />
                      <span>Zoom Page 1</span>
                    </button>
                  </div>

                  <div
                    className="resume-sheet-paper"
                    onClick={() => setZoomPage(0)}
                    role="button"
                    tabIndex={0}
                    title="Click to view Page 1 in Fullscreen Zoom"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setZoomPage(0);
                      }
                    }}
                  >
                    <img
                      src={personal.resumePages?.[0] || getAssetUrl('/assets/mukesh_kumaran_resume_page1.jpg')}
                      alt="Mukesh Kumaran Resume Page 1"
                      className="resume-sheet-img"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* DIVIDER BETWEEN PAGE 1 & PAGE 2 */}
                <div className="resume-page-flow-divider">
                  <div className="flow-divider-line"></div>
                  <button
                    type="button"
                    className="flow-divider-badge font-mono"
                    onClick={() => scrollToPage(2)}
                  >
                    <ArrowDown size={14} className="text-copper flow-arrow-down" />
                    <span>PAGE 2 OF 2 BELOW • SCROLL DOWN</span>
                  </button>
                  <div className="flow-divider-line"></div>
                </div>

                {/* PAGE 2 */}
                <div className="resume-sheet-item" ref={page2Ref} id="resume-page-2">
                  <div className="resume-sheet-label font-mono">
                    <span className="sheet-label-pill">02</span>
                    <span className="sheet-label-title">PAGE 2 OF 2 — CERTIFICATIONS, INTERESTS & ACHIEVEMENTS</span>
                    <button
                      type="button"
                      className="sheet-label-zoom font-mono"
                      onClick={() => setZoomPage(1)}
                    >
                      <ZoomIn size={13} />
                      <span>Zoom Page 2</span>
                    </button>
                  </div>

                  <div
                    className="resume-sheet-paper"
                    onClick={() => setZoomPage(1)}
                    role="button"
                    tabIndex={0}
                    title="Click to view Page 2 in Fullscreen Zoom"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setZoomPage(1);
                      }
                    }}
                  >
                    <img
                      src={personal.resumePages?.[1] || getAssetUrl('/assets/mukesh_kumaran_resume_page2.jpg')}
                      alt="Mukesh Kumaran Resume Page 2"
                      className="resume-sheet-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Document Reader Bottom Footer */}
            <div className="resume-reader-footer font-mono">
              <div className="reader-footer-info">
                <span className="pulse-indicator-dot"></span>
                <span>Active: Page {activePage} of 2 • Scroll to browse continuous document</span>
              </div>
              <div className="reader-footer-actions">
                <button
                  type="button"
                  className="reader-back-to-top-btn"
                  onClick={() => scrollToPage(1)}
                >
                  <ArrowUp size={13} />
                  <span>Back to Top</span>
                </button>
              </div>
            </div>
          </div>

          {/* Clean Key Highlights Strip Below the Sheets */}
          <div className="resume-highlights-strip font-mono">
            <div className="resume-highlight-pill">
              <GraduationCap size={15} className="text-copper" />
              <span>B.Tech AI & Data Science (2nd Year) • CGPA 6.5</span>
            </div>
            <div className="resume-highlight-pill">
              <Briefcase size={15} className="text-copper" />
              <span>Srinivasa Textiles & SIH Prahari</span>
            </div>
            <div className="resume-highlight-pill">
              <ShieldCheck size={15} className="text-copper" />
              <span>29+ Verified Industry Certifications</span>
            </div>
            <div className="resume-highlight-pill">
              <Terminal size={15} className="text-copper" />
              <span>Python, Java, C, MySQL & System Architecture</span>
            </div>
          </div>

          {/* Clean High-Res Zoom Modal */}
          <Modal
            isOpen={zoomPage !== null}
            onClose={() => setZoomPage(null)}
            title={`Resume Document Viewer — Page ${Number(zoomPage) + 1} of 2`}
            maxWidth="920px"
          >
            <div className="resume-modal-body">
              {/* Top Banner with File Info & Page Navigator */}
              <div className="resume-modal-nav-row font-mono">
                <div className="banner-left">
                  <FileText size={16} className="text-copper" />
                  <span>Mukesh_Kumaran_Resume.pdf</span>
                  <span className="resume-current-page-tag">
                    PAGE {Number(zoomPage) + 1} OF 2
                  </span>
                </div>

                <div className="resume-flip-buttons">
                  <button
                    type="button"
                    disabled={zoomPage === 0}
                    onClick={() => setZoomPage(0)}
                    className="flip-btn"
                    aria-label="Previous Page"
                  >
                    <ChevronLeft size={16} />
                    <span>Page 1</span>
                  </button>
                  <button
                    type="button"
                    disabled={zoomPage === 1}
                    onClick={() => setZoomPage(1)}
                    className="flip-btn"
                    aria-label="Next Page"
                  >
                    <span>Page 2</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Modal Image View */}
              <div className="resume-modal-zoom-container">
                <img
                  src={personal.resumePages?.[zoomPage] || (zoomPage === 0 ? getAssetUrl('/assets/mukesh_kumaran_resume_page1.jpg') : getAssetUrl('/assets/mukesh_kumaran_resume_page2.jpg'))}
                  alt={`Mukesh Kumaran Resume Page ${Number(zoomPage) + 1}`}
                  className="resume-modal-zoom-image"
                />
              </div>

              {/* Modal Footer Actions */}
              <div className="resume-modal-footer">
                <a
                  href={personal.resumeUrl}
                  download="Mukesh_Kumaran_M_Resume.pdf"
                  className="btn btn-primary btn-sm"
                >
                  <Download size={14} />
                  <span>Download PDF Document</span>
                </a>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  <ExternalLink size={14} />
                  <span>Open Full PDF in New Tab</span>
                </a>
              </div>
            </div>
          </Modal>
        </div>
      </section>

      {/* Page Navigation */}
      <PageNav
        prev={{ label: 'Projects', path: '/projects' }}
        next={{ label: 'Get In Touch', path: '/contact' }}
      />
    </div>
  );
}
