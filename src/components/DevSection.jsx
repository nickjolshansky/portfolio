import React from "react";

const DevSection = () => (
  <section className="dev-section" id="dev">
    <div className="dev-content">
      <h2 className="section-title fadein" style={{ "--fadein-delay": "0s" }}>My Development Expertise</h2>
      <div className="dev-grid">
        {/* Dev Cards */}
        <div className="dev-card">
          <h3><span className="dev-icon">💻</span>Full-Stack Development</h3>
          <p>Experienced in building and integrating modern web applications, from dynamic React frontends to robust Java/Spring and Node.js backends. Proficient in RESTful API design, ORM integration, and database management.</p>
        </div>
        <div className="dev-card">
          <h3><span className="dev-icon">🤖</span>Automation & AI</h3>
          <p>Engineered AI-driven product content generation in bulk, customer service chat interfaces, and automated workflows for marketing operations.</p>
        </div>
        <div className="dev-card right-highlight">
          <h3><span className="dev-icon">🛒</span>E-commerce & Integrations</h3>
          <p>Developed custom Shopify solutions, managed multi-marketplace product catalogs, and built integrations with warehouse, shipping, and third-party platforms.</p>
        </div>
        <div className="dev-card right-highlight">
          <h3><span className="dev-icon">📃</span>Testing & QA</h3>
          <p>Designed and implemented unit and integration tests (jUnit/Mockito, xUnit.NET). Proficient with Postman, Thunder Client, and Swagger.</p>
        </div>
      </div>
      {/* Skills Grid */}
      <div className="skills-grid">
        <div className="skills-col">
          <div className="skills-col-header">Front-End</div>
          <ul className="skills-list">
            <li>HTML5, CSS3, JS (ES6)</li>
            <li>jQuery</li>
            <li>React + Vite, MUI, Bootstrap</li>
            <li>Shopify Liquid</li>
            <li>Responsive & UX/UI Design</li>
          </ul>
        </div>
        <div className="skills-col">
          <div className="skills-col-header">Back-End</div>
          <ul className="skills-list">
            <li>Node.js, Express, Java, Spring, C#, ASP.NET</li>
            <li>MySQL / PostgreSQL</li>
            <li>ORMs (Entity Framework Core / Hibernate)</li>
            <li>RESTful APIs / GraphQL</li>
            <li>PHP</li>
          </ul>
        </div>
        <div className="skills-col">
          <div className="skills-col-header">Tools &amp; Tech</div>
          <ul className="skills-list">
            <li>Git / GitHub</li>
            <li>DBeaver / MySQL Workbench / PHPmyAdmin</li>
            <li>VS Code</li>
            <li>Postman, Thunder Client</li>
            <li>Shopify</li>
            <li>Adobe Photoshop, Premiere, Audacity, Final Cut Pro</li>
            <li>Unity, Blender, OBS Studio, Ross Overdrive</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default DevSection;