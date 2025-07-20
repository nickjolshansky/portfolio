import React from "react";

const ContactSection = () => (
  <section className="cta-section" id="contact">
    <div className="cta-content fadein" style={{ "--fadein-delay": "0s" }}>
      <h3>Ready to work together?</h3>
      <div className="contact-methods">
        <a href="mailto:nickjolshansky@gmail.com" className="cta-btn fadein" style={{ "--fadein-delay": "0.2s" }}>
          {/* SVG for mail */}
          Get in Touch
        </a>
        <a href="mailto:nickjolshansky@gmail.com" className="cta-btn fadein" style={{ "--fadein-delay": "0.2s" }}>
          {/* SVG for resume */}
          Resume
        </a>
        <div className="social-links fadein" style={{ "--fadein-delay": "0.4s" }}>
          <a href="#" className="social-btn" title="Github">
            {/* SVG for GitHub */}
          </a>
          <a href="#" className="social-btn" title="LinkedIn">
            {/* SVG for LinkedIn */}
          </a>
        </div>
      </div>
    </div>
    <div className="background-pattern"></div>
  </section>
);

export default ContactSection;