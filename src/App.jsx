import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HexagonBackground from './components/HexagonBackground';
import { useScrollReveal } from './hooks/useScrollReveal';

function ScrollRevealManager() {
  useScrollReveal();
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <div className="portfolio-app-root">
        {/* Animated Cyber Hexagon Background (100% Autonomous) */}
        <HexagonBackground />

        {/* Global Moderate Scroll Reveal Manager */}
        <ScrollRevealManager />

        {/* Automatic Scroll to Top on page transition */}
        <ScrollToTop />

        {/* Fixed Glassmorphism Sticky Navbar */}
        <Navbar />

        {/* Dedicated Separate Page Routes */}
        <main className="main-content-route">
          <Routes>
            {/* 1. Home Page */}
            <Route path="/" element={<Hero />} />

            {/* 2. About Me Page */}
            <Route path="/about" element={<About />} />

            {/* 3. Skills Page */}
            <Route path="/skills" element={<Skills />} />

            {/* 4. Certificates Page */}
            <Route path="/certificates" element={<Certificates />} />

            {/* 5. Projects Page */}
            <Route path="/projects" element={<Projects />} />

            {/* 6. Resume Page */}
            <Route path="/resume" element={<Resume />} />

            {/* 7. Contact Page */}
            <Route path="/contact" element={<Contact />} />

            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}
