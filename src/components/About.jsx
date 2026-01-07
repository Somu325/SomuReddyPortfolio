import React from "react";
import { portfolioData } from "../data";

const About = () => {
  const skills = {
    frontend: portfolioData.skills.frontend.map((skill, idx) => ({
      name: skill,
      level: 95 - idx * 2,
    })),
    backend: portfolioData.skills.backend.map((skill, idx) => ({
      name: skill,
      level: 93 - idx * 2,
    })),
    databases: portfolioData.skills.databases.map((skill, idx) => ({
      name: skill,
      level: 90 - idx * 2,
    })),
    tools: portfolioData.skills.tools.map((skill, idx) => ({
      name: skill,
      level: 88 - idx * 2,
    })),
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know more about my skills, experience, and what drives me as
            a developer
          </p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <div className="about-card glass-card">
              <h3 className="card-title">Who I Am</h3>
              <p className="card-text">{portfolioData.summary}</p>
            </div>

            <div className="experience-section">
              <h3 className="section-subtitle-small">
                Professional Experience
              </h3>
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="experience-card glass-card">
                  <div className="exp-header">
                    <div>
                      <h4 className="exp-role">{exp.role}</h4>
                      <p className="exp-company">{exp.company}</p>
                    </div>
                    <span className="exp-period">{exp.duration}</span>
                  </div>
                  <ul className="exp-responsibilities">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="education-section">
              <h3 className="section-subtitle-small">Education</h3>
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="education-card glass-card">
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                  <span className="edu-duration">{edu.duration}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-sidebar">
            <div className="skills-card glass-card">
              <h3 className="card-title">Technical Skills</h3>

              <div className="skill-group">
                <h4 className="skill-category">Frontend</h4>
                {skills.frontend.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="skill-group">
                <h4 className="skill-category">Backend</h4>
                {skills.backend.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="skill-group">
                <h4 className="skill-category">Databases</h4>
                {skills.databases.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="skill-group">
                <h4 className="skill-category">Tools & APIs</h4>
                {skills.tools.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="achievements-card glass-card">
              <h3 className="card-title">Achievements</h3>
              <ul className="achievements-list">
                {portfolioData.achievements.map((achievement, idx) => (
                  <li key={idx} className="achievement-item">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: var(--spacing-3xl) 0;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-3xl);
        }

        .section-title {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: var(--spacing-md);
        }

        .highlight {
          background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .section-subtitle-small {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: var(--spacing-lg);
          color: var(--text-primary);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: var(--spacing-xl);
        }

        .about-card {
          padding: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
        }

        .card-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: var(--spacing-md);
        }

        .card-text {
          font-size: 16px;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .experience-card,
        .education-card {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--spacing-sm);
          gap: var(--spacing-md);
        }

        .exp-role {
          font-size: 20px;
          font-weight: 700;
          color: var(--accent-primary);
          margin-bottom: 4px;
        }

        .exp-company {
          font-size: 16px;
          color: var(--text-secondary);
        }

        .exp-period {
          font-size: 14px;
          color: var(--text-muted);
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          white-space: nowrap;
        }

        .exp-responsibilities {
          list-style: none;
          padding: 0;
        }

        .exp-responsibilities li {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }

        .exp-responsibilities li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--accent-primary);
        }

        .edu-degree {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .edu-institution {
          font-size: 15px;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .edu-duration {
          font-size: 14px;
          color: var(--text-muted);
        }

        .skills-card,
        .achievements-card {
          padding: var(--spacing-xl);
          margin-bottom: var(--spacing-md);
        }

        .skill-group {
          margin-bottom: var(--spacing-lg);
        }

        .skill-group:last-child {
          margin-bottom: 0;
        }

        .skill-category {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--spacing-md);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .skill-item {
          margin-bottom: var(--spacing-md);
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .skill-name {
          font-size: 15px;
          font-weight: 500;
          color: var(--text-primary);
        }

        .skill-percentage {
          font-size: 14px;
          color: var(--accent-primary);
          font-weight: 600;
        }

        .skill-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
          border-radius: 4px;
          transition: width 1s ease-out;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .achievements-list {
          list-style: none;
          padding: 0;
        }

        .achievement-item {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 36px;
          }

          .about-card,
          .experience-card,
          .education-card,
          .skills-card,
          .achievements-card {
            padding: var(--spacing-md);
            margin-bottom: var(--spacing-md);
          }

          .exp-header {
            flex-direction: column;
            gap: var(--spacing-xs);
          }

          .exp-period {
            align-self: flex-start;
          }

          .section-subtitle-small {
            font-size: 20px;
            margin-bottom: var(--spacing-md);
          }

          .card-title {
            font-size: 20px;
          }
        }

        @media (max-width: 480px) {
          .about-card,
          .experience-card,
          .education-card,
          .skills-card,
          .achievements-card {
            padding: var(--spacing-sm);
            margin-bottom: var(--spacing-sm);
          }

          .section-title {
            font-size: 28px;
          }

          .section-subtitle-small {
            font-size: 18px;
          }

          .exp-role {
            font-size: 18px;
          }

          .exp-company,
          .exp-responsibilities li {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
