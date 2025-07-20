import React from "react";
import { Link } from "react-router-dom";
import projectData from "../data/projectData"; 

const ProjectsSection = () => (
  <section className="projects-section" id="projects">
    <h2 className="fadein" style={{ "--fadein-delay": "0s" }}>Past Projects</h2>
    <div className="projects-list">
      {projectData.map((proj, i) => (
        <div
          className="project-card fadein"
          style={{ "--fadein-delay": `${0.2 * (i + 1)}s` }}
          key={proj.id}
        >
          <h3 className="project-title">{proj.title}</h3>
          <p className="project-desc">{proj.desc}</p>
          <Link 
            to={`/projects/${proj.id}`} 
            className="project-link"
          >
            View Project &rarr;
          </Link>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;