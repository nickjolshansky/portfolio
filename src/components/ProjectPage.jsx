import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projectData from "../data/projectData";

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = projectData.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Lookup related projects by id, filter out any invalid ones
  const relatedProjects = project?.see_also ? project.see_also.map(id => projectData.find(p => p.id === id)).filter(Boolean) : [];

  if (!project) {
    return (
      <main className="project-not-found">
        <section>
          <h1>Project Not Found</h1>
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </section>
      </main>
    );
  }

  return (
    <>
      <nav>
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </nav>
      <main className="project-detail">
        <header className="project-hero">
          <h1>{project.title}</h1>

          {project.tags?.length > 0 && (
            <ul className="project-tags" aria-label="Tags">
              {project.tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))}
            </ul>
          )}

          {project.github && (
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                <span aria-hidden="true">🐙 </span>
                View on GitHub
              </a>
            </div>
          )}
        </header>

        <article className="project-content">
          {(project.overview || project.desc) && (
            <section className="project-section">
              <h2>Overview</h2>
              <p>{project.overview || project.desc}</p>
            </section>
          )}

          {project.features?.length > 0 && (
            <section className="project-section">
              <h2>Key Features</h2>
              <ul className="feature-list">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {project.screenshots?.length > 0 && (
            <section className="project-section">
              <h2>Screenshots</h2>
              <div className="project-gallery">
                {project.screenshots.map((shot, i) => (
                  <figure className="gallery-item" key={i}>
                    <img src={shot.src} alt={shot.alt || `Screenshot ${i + 1}`} />
                    {shot.caption && <figcaption className="caption">{shot.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {project.video && (
            <section className="project-section">
              <h2>Demo Video</h2>
              <div className="video-container">
                {project.video.endsWith(".webm") ? (
                  <video controls>
                    <source src={project.video} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    src={project.video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Project Demo Video"
                  ></iframe>
                )}
              </div>
            </section>
          )}

          {relatedProjects.length > 0 && (
            <section className="project-section see-also-section">
              <h2>See Related Projects</h2>
              <div className="see-also-list">
                {relatedProjects.map(rp => (
                  <Link to={`/projects/${rp.id}`} key={rp.id} className="see-also-card">
                    <div className="see-also-title">{rp.title}</div>
                    <div className="see-also-desc">{rp.desc}</div>
                    {rp.tags?.length > 0 && (
                      <ul className="see-also-tags" aria-label="Tags">
                        {rp.tags.map((tag, i) => (
                          <li key={i}>{tag}</li>
                        ))}
                      </ul>
                    )}
                    <span className="see-also-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    </>
  );
}
