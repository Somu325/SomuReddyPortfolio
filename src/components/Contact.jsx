import React, { useState } from "react";
import { portfolioData } from "../data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "@",
      label: "Email",
      value: portfolioData.header.email,
      link: `mailto:${portfolioData.header.email}`,
    },
    {
      icon: "#",
      label: "Phone",
      value: portfolioData.header.phone,
      link: `tel:${portfolioData.header.phone}`,
    },
    {
      icon: "◉",
      label: "Location",
      value: portfolioData.header.location,
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "GH",
      url: "https://github.com/yourusername",
      handle: "@somasekhar",
    },
    {
      name: "LinkedIn",
      icon: "LI",
      url: "https://linkedin.com/in/yourusername",
      handle: "/in/somasekhar-reddy",
    },
    {
      name: "Twitter",
      icon: "TW",
      url: "https://twitter.com/yourusername",
      handle: "@somasekhar_dev",
    },
    {
      name: "Dev.to",
      icon: "DV",
      url: "https://dev.to/yourusername",
      handle: "@somasekhar",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Let's <span className="highlight">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <div className="glass-card form-card">
              <h3 className="form-title">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "success"
                    ? "Sent!"
                    : "Send Message"}
                  <span>→</span>
                </button>

                {status === "success" && (
                  <div className="success-message">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="contact-info-wrapper">
            <div className="glass-card info-card">
              <h3 className="info-title">Contact Information</h3>
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <div className="info-icon-box">
                      <span className="info-icon">{info.icon}</span>
                    </div>
                    <div className="info-content">
                      <div className="info-label">{info.label}</div>
                      {info.link ? (
                        <a href={info.link} className="info-value">
                          {info.value}
                        </a>
                      ) : (
                        <div className="info-value">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card social-card">
              <h3 className="info-title">Connect on Social</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-icon-box">{social.icon}</span>
                    <div className="social-info">
                      <div className="social-name">{social.name}</div>
                      <div className="social-handle">{social.handle}</div>
                    </div>
                    <span className="social-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <img
                  src="/src/logo.png"
                  alt="SRI Logo"
                  className="footer-logo-image"
                />
              </div>
              <p className="footer-text">
                Building exceptional web experiences with the MERN stack. Let's
                create something amazing together.
              </p>
            </div>
            <div className="footer-right">
              <div className="footer-info">
                <div>© 2025 Somasekhar Reddy Irikireddy</div>
                <div>Crafted with React + Vite</div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        .contact-section {
          padding: var(--spacing-3xl) 0 0;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-3xl);
        }

        .section-title {
          font-size: 24px;
          font-weight: 400;
          margin-bottom: var(--spacing-md);
          text-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
        }

        .highlight {
          background: linear-gradient(135deg, #00ff41 0%, #00cc33 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 15px rgba(0, 255, 65, 0.6));
        }

        .section-subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-3xl);
        }

        .form-card,
        .info-card,
        .social-card {
          padding: var(--spacing-xl);
        }

        .form-title,
        .info-title {
          font-size: 16px;
          font-weight: 400;
          margin-bottom: var(--spacing-lg);
          font-family: var(--font-heading);
          text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 12px;
          font-weight: 400;
          color: var(--text-secondary);
          font-family: var(--font-heading);
          text-shadow: 0 0 5px rgba(0, 255, 65, 0.3);
        }

        .form-group input,
        .form-group textarea {
          padding: 14px 18px;
          background: rgba(0, 10, 0, 0.6);
          border: 2px solid rgba(0, 255, 65, 0.2);
          border-radius: 2px;
          color: var(--accent-primary);
          font-family: var(--font-body);
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          background: rgba(0, 20, 0, 0.8);
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-muted);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          margin-top: var(--spacing-sm);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .success-message {
          padding: 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          border-radius: 8px;
          color: var(--text-primary);
          text-align: center;
          font-size: 14px;
          font-weight: 500;
        }

        .contact-info-wrapper {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .info-item {
          display: flex;
          gap: var(--spacing-md);
          align-items: flex-start;
        }

        .info-icon-box {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 255, 65, 0.1);
          border: 2px solid rgba(0, 255, 65, 0.3);
          border-radius: 2px;
          flex-shrink: 0;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
        }

        .info-icon {
          font-size: 18px;
          font-weight: 400;
          color: var(--accent-primary);
          text-shadow: 0 0 10px rgba(0, 255, 65, 0.8);
        }

        .info-content {
          flex: 1;
        }

        .info-label {
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .info-value {
          font-size: 16px;
          color: var(--text-primary);
          font-weight: 600;
        }

        .info-value:hover {
          color: var(--accent-secondary);
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--accent-primary);
          transform: translateX(4px);
        }

        .social-icon-box {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          font-size: 14px;
          font-weight: 800;
          color: var(--accent-primary);
        }

        .social-info {
          flex: 1;
        }

        .social-name {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .social-handle {
          font-size: 13px;
          color: var(--text-muted);
        }

        .social-arrow {
          color: var(--accent-primary);
          font-size: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .social-link:hover .social-arrow {
          opacity: 1;
        }

        .footer {
          padding: var(--spacing-2xl) 0;
          border-top: 1px solid rgba(0, 255, 65, 0.2);
          box-shadow: 0 -5px 30px rgba(0, 255, 65, 0.05);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--spacing-xl);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: var(--spacing-sm);
        }

        .footer-logo-image {
          height: 45px;
          width: auto;
          max-width: 160px;
          object-fit: contain;
        }

        .footer-text {
          font-size: 14px;
          color: var(--text-secondary);
          max-width: 400px;
          line-height: 1.6;
        }

        .footer-info {
          text-align: right;
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.8;
        }

        .footer-status {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          margin-top: 8px;
          color: var(--text-primary);
          font-weight: 500;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-primary);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 36px;
          }

          .footer-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-info {
            text-align: center;
          }

          .footer-status {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
