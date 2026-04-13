import React, { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const roles = [
    "Full Stack Web Developer",
    "MERN Stack Developer",
    "React Specialist",
    "Node.js Expert",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentRole.length) {
            setDisplayText(currentRole.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentRole.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const techStack = [
    { name: "MongoDB", icon: "M" },
    { name: "Express", icon: "E" },
    { name: "React.js", icon: "R" },
    { name: "Node.js", icon: "N" },
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content animate-slide-up">
          <h1 className="hero-title">
            Hi, I'm{" "}
            <span className="hero-name">Somasekhar Reddy Irikireddy</span>
          </h1>

          <div className="hero-subtitle">
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description">
            Innovation for me means building tools that feel both personal and
            practical. I specialize in creating responsive applications,
            real-time systems, and AI-driven platforms that transform complex
            ideas into intuitive digital experiences.
          </p>

          <div className="hero-tech-stack">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="tech-badge glass-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <span>→</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">3</div>
              <div className="stat-label">Companies</div>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-scale-in">
          <div className="code-window glass-card">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <span className="window-title">developer.js</span>
            </div>
            <div className="code-block">
              <div className="code-line">
                <span className="code-keyword">const</span>{" "}
                <span className="code-variable">developer</span> = {"{"}
              </div>
              <div className="code-line code-indent">
                <span className="code-property">name</span>:{" "}
                <span className="code-string">"Somasekhar Reddy"</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-property">role</span>:{" "}
                <span className="code-string">"Full Stack Developer"</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-property">location</span>:{" "}
                <span className="code-string">"Hyderabad, India"</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-property">email</span>:{" "}
                <span className="code-string">
                  "somureddyirikireddy@gmail.com"
                </span>
                ,
              </div>
              <div className="code-line code-indent">
                <span className="code-property">skills</span>: [
              </div>
              <div className="code-line code-indent-2">
                <span className="code-string">"React.js"</span>,{" "}
                <span className="code-string">"Node.js"</span>,
              </div>
              <div className="code-line code-indent-2">
                <span className="code-string">"MongoDB"</span>,{" "}
                <span className="code-string">"Python"</span>
              </div>
              <div className="code-line code-indent">],</div>
              <div className="code-line code-indent">
                <span className="code-property">available</span>:{" "}
                <span className="code-boolean">true</span>
              </div>
              <div className="code-line">{"}"};</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
          position: relative;
        }

        .hero .container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: var(--spacing-3xl);
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          color: var(--text-secondary);
          font-size: 14px;
          font-weight: 500;
          margin-bottom: var(--spacing-lg);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-primary);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .hero-title {
          font-size: 32px;
          font-weight: 400;
          margin-bottom: var(--spacing-md);
          line-height: 1.4;
          text-shadow: 0 0 20px rgba(0, 255, 65, 0.5), 0 0 40px rgba(0, 255, 65, 0.3);
        }

        .hero-name {
          display: block;
          background: linear-gradient(135deg, #00ff41 0%, #00cc33 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 15px rgba(0, 255, 65, 0.6));
        }

        .hero-subtitle {
          font-size: 24px;
          font-weight: 400;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
          min-height: 48px;
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-body);
        }

        .typing-text {
          color: var(--accent-primary);
          text-shadow: 0 0 10px rgba(0, 255, 65, 0.8);
        }

        .cursor {
          color: var(--accent-primary);
          animation: blink 1s step-end infinite;
          text-shadow: 0 0 10px rgba(0, 255, 65, 0.8);
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-description {
          font-size: 20px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-xl);
          max-width: 600px;
          font-weight: 400;
          font-family: var(--font-body);
          text-shadow: 0 0 5px rgba(0, 255, 65, 0.3);
        }

        .hero-tech-stack {
          display: flex;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-xl);
          flex-wrap: wrap;
        }

        .tech-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .tech-icon {
          font-size: 24px;
        }

        .tech-name {
          font-weight: 600;
          font-size: 15px;
        }

        .hero-actions {
          display: flex;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-2xl);
          flex-wrap: wrap;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: var(--spacing-lg);
          padding-top: var(--spacing-lg);
          border-top: 1px solid var(--border-glass);
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-size: 28px;
          font-weight: 400;
          margin-bottom: 4px;
          color: var(--accent-primary);
          font-family: var(--font-heading);
          text-shadow: 0 0 15px rgba(0, 255, 65, 0.6);
        }

        .stat-label {
          font-size: 16px;
          color: var(--text-muted);
          font-family: var(--font-body);
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--accent-primary);
          opacity: 0.3;
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
        }

        .code-window {
          padding: 0;
          overflow: hidden;
        }

        .window-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: 16px 20px;
          background: rgba(0, 0, 0, 0.4);
          border-bottom: 1px solid var(--border-glass);
        }

        .window-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--text-muted);
        }

        .window-title {
          font-family: var(--font-heading);
          font-size: 10px;
          color: var(--accent-primary);
          text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
        }

        .code-line {
          margin-bottom: 4px;
          font-size: 11px;
          font-family: var(--font-heading);
        }

        .code-indent {
          padding-left: 24px;
        }

        .code-indent-2 {
          padding-left: 48px;
        }

        .code-keyword {
          color: #00ff41;
          text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
        }

        .code-variable {
          color: #00dd33;
        }

        .code-property {
          color: #00cc33;
        }

        .code-string {
          color: #00aa33;
        }

        .code-boolean {
          color: #00ff41;
          text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
        }

        @media (max-width: 1024px) {
          .hero .container {
            grid-template-columns: 1fr;
            gap: var(--spacing-2xl);
          }

          .hero-title {
            font-size: 24px;
          }

          .hero-subtitle {
            font-size: 20px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 20px;
          }

          .hero-subtitle {
            font-size: 18px;
          }

          .hero-stats {
            flex-direction: row;
            justify-content: space-between;
            gap: var(--spacing-sm);
            flex-wrap: nowrap;
          }

          .stat-item {
            flex: 1;
            min-width: 0;
          }

          .stat-value {
            font-size: 32px;
          }

          .stat-label {
            font-size: 11px;
            line-height: 1.3;
          }

          .stat-divider {
            height: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
