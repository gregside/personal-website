import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectDocs.css";

export default function ProjectDocs() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="docs-page">
        <div className="docs-container">
          <Link to="/" className="docs-back">
            ← Back to Home
          </Link>
          <h1 className="docs-title">Project Not Found</h1>
          <p className="docs-overview">
            The project you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const { documentation: docs } = project;

  return (
    <div className="docs-page">
      <div className="docs-container">
        <Link to="/#projects" className="docs-back">
          ← Back to Projects
        </Link>

        <header className="docs-header">
          <h1 className="docs-title">{project.title}</h1>
          <div className="docs-meta">
            <div className="docs-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="docs-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="docs-links">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
              )}
            </div>
          </div>
        </header>

        <section className="docs-section">
          <h2>Overview</h2>
          <p>{docs.overview}</p>
        </section>

        {docs.techDetails && (
          <section className="docs-section">
            <h2>Technical Details</h2>
            <p>{docs.techDetails}</p>
          </section>
        )}

        <section className="docs-section">
          <h2>Key Features</h2>
          <ul className="docs-list">
            {docs.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="docs-section">
          <h2>Challenges</h2>
          <ul className="docs-list">
            {docs.challenges.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="docs-section">
          <h2>What I Learned</h2>
          <ul className="docs-list">
            {docs.learned.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
