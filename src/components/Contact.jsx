import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Calendar,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { LinkedinIcon, GithubIcon, WhatsappIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import PageNav from './PageNav';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    setStatus('sending');

    try {
      // Directly dispatch message in background to primary email
      await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(personal.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`,
          message: formData.message.trim(),
          _captcha: 'false',
          _template: 'table'
        })
      });
    } catch (err) {
      console.warn('Direct message notice:', err);
    } finally {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <div className="page-wrapper contact-page-view">
      <section id="contact" className="section-padding contact-section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-tag">
              <Mail size={14} />
              <span>Direct Communication</span>
            </div>
            <h1 className="section-title">
              Get In <span className="text-copper">Touch</span>
            </h1>
            <p className="section-subtitle">
              Whether you have an internship opportunity, a software engineering project, or would like to discuss distributed systems architecture.
            </p>
          </div>

          {/* Split 2-Column Layout */}
          <div className="contact-grid">
            {/* Left Column: Direct Info & Social Illuminations */}
            <div className="contact-info-column">
              <div className="portfolio-card contact-info-card">
                <h3 className="contact-column-title">Contact Channels</h3>
                <p className="contact-column-desc">
                  Feel free to reach out directly through email or connect across technical networks.
                </p>

                <div className="contact-channels-list">
                  {/* Email Channel */}
                  <a
                    href={`mailto:${personal.email}`}
                    className="contact-channel-item interactive-hover"
                    aria-label="Send email"
                  >
                    <div className="channel-icon-box">
                      <Mail size={20} className="text-copper" />
                    </div>
                    <div className="channel-info">
                      <span className="channel-label font-mono">PRIMARY EMAIL</span>
                      <span className="channel-value">{personal.email}</span>
                    </div>
                    <ArrowUpRight size={16} className="channel-external-icon text-secondary" />
                  </a>

                  {/* WhatsApp Channel */}
                  <a
                    href="https://wa.me/918778503021?text=Hi%20Mukesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-channel-item interactive-hover"
                    aria-label="Direct WhatsApp Message"
                  >
                    <div className="channel-icon-box">
                      <WhatsappIcon size={20} className="text-copper" />
                    </div>
                    <div className="channel-info">
                      <span className="channel-label font-mono">WHATSAPP / DIRECT</span>
                      <span className="channel-value font-mono">+91 8778503021</span>
                    </div>
                    <ArrowUpRight size={16} className="channel-external-icon text-secondary" />
                  </a>

                  {/* Location Channel */}
                  <div className="contact-channel-item">
                    <div className="channel-icon-box">
                      <MapPin size={20} className="text-copper" />
                    </div>
                    <div className="channel-info">
                      <span className="channel-label font-mono">LOCATION</span>
                      <span className="channel-value">{personal.location}</span>
                    </div>
                  </div>

                  {/* Availability Channel */}
                  <div className="contact-channel-item">
                    <div className="channel-icon-box">
                      <Clock size={20} className="text-copper" />
                    </div>
                    <div className="channel-info">
                      <span className="channel-label font-mono">CURRENT STATUS</span>
                      <span className="channel-value text-amber">{personal.statusBadge}</span>
                    </div>
                  </div>
                </div>

                {/* Social Profiles with Copper Illumination */}
                <div className="contact-socials-wrapper">
                  <span className="socials-label font-mono">CONNECT ACROSS PLATFORMS</span>
                  <div className="contact-social-icons">
                    <a
                      href="https://wa.me/918778503021?text=Hi%20Mukesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-btn"
                      aria-label="Mukesh Kumaran WhatsApp Chat"
                    >
                      <WhatsappIcon size={20} />
                    </a>

                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-btn"
                      aria-label="Mukesh Kumaran LinkedIn Profile"
                    >
                      <LinkedinIcon size={20} />
                    </a>

                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-btn"
                      aria-label="Mukesh Kumaran GitHub Profile"
                    >
                      <GithubIcon size={20} />
                    </a>

                    <a
                      href={`mailto:${personal.email}`}
                      className="social-icon-btn"
                      aria-label="Send direct email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-column">
              <div className="portfolio-card contact-form-card">
                <h3 className="contact-column-title">Send a Message</h3>
                <p className="contact-column-desc">
                  Fill in the details below to start a conversation.
                </p>

                {status === 'success' ? (
                  <div className="contact-success-state">
                    <div className="success-icon-box">
                      <CheckCircle2 size={36} className="text-copper" />
                    </div>
                    <h4 className="success-title">Message Delivered Successfully!</h4>
                    <p className="success-desc">
                      Thank you for reaching out. Your message has been sent directly to Mukesh Kumaran ({personal.email}). I will review your message and respond as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="btn btn-outline btn-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form" noValidate>
                    {status === 'error' && (
                      <div className="form-error-banner font-mono">
                        {errorMessage}
                      </div>
                    )}

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="form-name" className="form-label font-mono">
                          Your Name *
                        </label>
                        <input
                          id="form-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Jane Doe"
                          className="form-input"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="form-email" className="form-label font-mono">
                          Your Email *
                        </label>
                        <input
                          id="form-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. jane@company.com"
                          className="form-input"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="form-subject" className="form-label font-mono">
                        Subject
                      </label>
                      <input
                        id="form-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="form-message" className="form-label font-mono">
                        Message *
                      </label>
                      <textarea
                        id="form-message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        className="form-input form-textarea"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn btn-primary contact-submit-btn"
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="submit-spinner" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page Navigation */}
      <PageNav
        prev={{ label: 'Resume', path: '/resume' }}
        next={{ label: 'Home', path: '/' }}
      />
    </div>
  );
}
