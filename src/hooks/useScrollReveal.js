import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useScrollReveal Hook
 * Moderate-level, silky-smooth scroll reveal animations across the entire portfolio.
 * Automatically attaches to sections, cards, timeline nodes, grids, and headings.
 * Re-scans and observes on SPA route navigation.
 */
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // Target classes to apply moderate scroll reveal to
    const targetSelectors = [
      '.reveal-on-scroll',
      '.section-header',
      '.portfolio-card',
      '.project-card',
      '.cert-showcase-card',
      '.cert-preview-card',
      '.timeline-entry-row',
      '.education-card',
      '.highlight-stat-card',
      '.skill-initial-tile',
      '.resume-unified-reader-box',
      '.contact-channel-item',
      '.contact-card',
      '.contact-form-card',
      '.footer-top-row',
      '.page-nav-wrapper',
      '.hero-metrics-strip',
      '.hero-typing-box',
      '.profile-frame-container'
    ];

    const elements = document.querySelectorAll(targetSelectors.join(', '));

    // Fallback if IntersectionObserver is not available
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px 40px 0px'
      }
    );

    // Initial check and observe
    elements.forEach((el) => {
      if (!el.classList.contains('reveal-on-scroll')) {
        el.classList.add('reveal-on-scroll');
      }

      // Check if already in viewport (e.g. above the fold on initial load)
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight + 50 && rect.bottom > -50;
      if (inView) {
        // Immediate reveal without lag for elements already on screen
        el.classList.add('is-revealed');
      } else {
        observer.observe(el);
      }
    });

    // Safety check after layout stabilizes
    const timer = setTimeout(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
          el.classList.add('is-revealed');
        }
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname, location.key]);
}

export default useScrollReveal;
