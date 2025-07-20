import React from "react";

const projects = [
  {
    title: "Howard Miller Digital Transformation",
    desc: "Led website redesign incorporating modern e-commerce features, enhanced product visualization, and streamlined customer experience for a major furniture manufacturer.",
    link: "#"
  },
  {
    title: "Product Configuration Suite",
    desc: "Developed an interactive console configurator and Shopify-integrated furniture quoting tool, empowering sales representatives with real-time pricing and customization options.",
    link: "#"
  },
  // ... (add all your projects here)
];

const ProjectsSection = () => (
  <section className="projects-section" id="projects">
    <h2 className="fadein" style={{ "--fadein-delay": "0s" }}>Past Projects</h2>
    <div className="projects-list">
      {projects.map((proj, i) => (
        <div
          className="project-card fadein"
          style={{ "--fadein-delay": `${0.2 * (i + 1)}s` }}
          key={proj.title}
        >
          <h3 className="project-title">{proj.title}</h3>
          <p className="project-desc">{proj.desc}</p>
          <a href={proj.link} className="project-link">
            View Project &rarr;
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;