import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <img src="/src/logo.png" alt="SRI Logo" className="logo-image" />
          </div>

          {/* Desktop Nav */}
          <nav className="nav desktop-nav">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>

          <a href="#contact" className="btn btn-primary header-cta desktop-cta">
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <button
          className="mobile-menu-close"
          onClick={closeMobileMenu}
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav className="mobile-nav">
          <a href="#home" className="mobile-nav-link" onClick={closeMobileMenu}>
            Home
          </a>
          <a
            href="#about"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
          <a
            href="#contact"
            className="btn btn-primary mobile-cta"
            onClick={closeMobileMenu}
          >
            Let's Talk
          </a>
        </nav>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(0, 5, 0, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 255, 65, 0.2);
          padding: 1rem 0;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 65, 0.1);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--spacing-lg);
        }

        .logo {
          display: flex;
          align-items: center;
        }

        .logo-image {
          height: 50px;
          width: auto;
          max-width: 180px;
          object-fit: contain;
          transition: all 0.3s ease;
          filter: brightness(1);
        }

        .logo-image:hover {
          filter: brightness(1.2);
          transform: scale(1.05);
        }

        .desktop-nav {
          display: flex;
          gap: var(--spacing-lg);
        }

        .nav-link {
          font-family: var(--font-heading);
          color: var(--text-secondary);
          font-weight: 400;
          font-size: 11px;
          transition: all 0.3s ease;
          position: relative;
          letter-spacing: 1px;
          text-shadow: 0 0 5px rgba(0, 255, 65, 0.3);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-primary);
          transition: width 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
        }

        .nav-link:hover {
          color: var(--accent-primary);
          text-shadow: 0 0 10px rgba(0, 255, 65, 0.8);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .desktop-cta {
          font-size: 14px;
          padding: 12px 28px;
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 28px;
        }

        .hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background: var(--accent-primary);
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(7px, 7px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        /* Matrix Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          max-width: 400px;
          height: 100vh;
          background: rgba(0, 5, 0, 0.98);
          backdrop-filter: blur(20px);
          transition: right 0.3s ease;
          z-index: 999;
          padding-top: 80px;
          border-left: 1px solid rgba(0, 255, 65, 0.2);
        }

        .mobile-menu-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          background: rgba(0, 255, 65, 0.1);
          border: 2px solid rgba(0, 255, 65, 0.3);
          border-radius: 2px;
          color: var(--accent-primary);
          font-size: 28px;
          font-weight: 300;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
        }

        .mobile-menu-close:hover {
          background: var(--accent-primary);
          color: var(--bg-primary);
          transform: rotate(90deg);
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
        }

        .mobile-menu.open {
          right: 0;
          box-shadow: -10px 0 50px rgba(0, 0, 0, 0.5), -5px 0 30px rgba(0, 255, 65, 0.1);
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding: 0 var(--spacing-lg);
        }

        .mobile-nav-link {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 400;
          color: var(--text-primary);
          padding: var(--spacing-md) 0;
          border-bottom: 1px solid rgba(0, 255, 65, 0.15);
          transition: all 0.3s ease;
          text-shadow: 0 0 5px rgba(0, 255, 65, 0.3);
        }

        .mobile-nav-link:hover {
          padding-left: var(--spacing-sm);
          color: var(--accent-primary);
          text-shadow: 0 0 15px rgba(0, 255, 65, 0.8);
        }

        .mobile-cta {
          margin-top: var(--spacing-xl);
          width: 100%;
          justify-content: center;
        }

        /* Tablet & Mobile */
        @media (max-width: 1024px) {
          .desktop-nav {
            gap: var(--spacing-md);
          }

          .nav-link {
            font-size: 14px;
          }
        }

        @media (max-width: 768px) {
          .desktop-nav,
          .desktop-cta {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .logo-image {
            height: 45px;
            max-width: 150px;
          }

          .header {
            padding: 1rem 0;
          }

          .header.scrolled {
            padding: 0.75rem 0;
          }
        }

        @media (max-width: 480px) {
          .logo-image {
            height: 40px;
            max-width: 120px;
          }

          .mobile-nav-link {
            font-size: 20px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
