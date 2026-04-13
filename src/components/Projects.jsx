import React, { useState } from "react";
import { portfolioData } from "../data";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
  ];

  const filteredProjects =
    filter === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="section-subtitle">
            Showcasing my work in full stack development and modern web
            applications
          </p>
        </div>

        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-tab ${filter === cat.id ? "active" : ""}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-header">
                <div className="project-icon-box">
                  <span className="project-icon">
                    {project.icon || project.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                <div className="project-meta">
                  <span className="project-status">
                    {project.metrics.status}
                  </span>
                  <span className="project-type">{project.metrics.type}</span>
                </div>
              </div>

              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-features">
                {project.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    • {feature}
                  </span>
                ))}
              </div>

              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href="#" className="project-link">
                  <span>View Details</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          padding: var(--spacing-3xl) 0;
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

        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-2xl);
          flex-wrap: wrap;
        }

        .filter-tab {
          padding: 10px 24px;
          background: transparent;
          border: 2px solid var(--border-glass);
          border-radius: 2px;
          color: var(--text-secondary);
          font-weight: 400;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-heading);
          text-shadow: 0 0 5px rgba(0, 255, 65, 0.3);
        }

        .filter-tab:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
        }

        .filter-tab.active {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: var(--bg-primary);
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: var(--spacing-xl);
        }

        .project-card {
          padding: var(--spacing-xl);
          display: flex;
          flex-direction: column;
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--spacing-md);
        }

        .project-icon-box {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 255, 65, 0.1);
          border: 2px solid rgba(0, 255, 65, 0.3);
          border-radius: 2px;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
        }

        .project-icon {
          font-size: 14px;
          font-weight: 400;
          color: var(--accent-primary);
          font-family: var(--font-heading);
          text-shadow: 0 0 10px rgba(0, 255, 65, 0.8);
        }

        .project-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: flex-end;
        }

        .project-status,
        .project-type {
          font-size: 12px;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          border-radius: 6px;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .project-title {
          font-size: 16px;
          font-weight: 400;
          margin-bottom: var(--spacing-sm);
          color: var(--text-primary);
          font-family: var(--font-heading);
          text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
        }

        .project-description {
          font-size: 18px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-md);
          flex: 1;
          font-family: var(--font-body);
        }

        .project-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          margin-bottom: var(--spacing-md);
        }

        .feature-tag {
          font-size: 13px;
          color: var(--text-secondary);
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: var(--spacing-md);
          padding-bottom: var(--spacing-md);
          border-bottom: 1px solid var(--border-glass);
        }

        .tech-tag {
          font-size: 12px;
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          border-radius: 6px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .project-links {
          display: flex;
          gap: var(--spacing-sm);
        }

        .project-link {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          background: var(--accent-primary);
          color: var(--bg-primary);
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: transparent;
          color: var(--accent-primary);
          border: 2px solid var(--accent-primary);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-features {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 36px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
