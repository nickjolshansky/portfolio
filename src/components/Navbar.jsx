import React, { useState, useEffect, useRef } from "react";

const NAV_SECTIONS = [
  { href: "#home", label: "Home" },
  { href: "#dev", label: "Dev Skills" },
  { href: "#media", label: "Media Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const NAV_BRAND_TEXT = {
  "#dev": "My Skillset",
  "#media": "My Background",
  "#projects": "My Work",
  "#contact": "Let's Connect",
  "#home": "Welcome",
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const navLinksRef = useRef(null);

  // Update active nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY + 70;
      let found = false;
      for (const section of NAV_SECTIONS) {
        const el = document.querySelector(section.href);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scroll >= top && scroll < bottom) {
            setActiveSection(section.href);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection("#home");
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const handleNavClick = (href) => () => {
  setMenuOpen(false);
};


  // Accessibility: allow Enter/Space to open menu
  const navToggleHandler = (e) => {
    if (e.type === "click" || e.key === "Enter" || e.key === " ") {
      setMenuOpen((open) => !open);
    }
  };

  return (
    <nav>
      <a className="nav-brand">{NAV_BRAND_TEXT[activeSection] || "Welcome"}</a>
      <div
        className={`nav-links${menuOpen ? " open" : ""}`}
        id="navLinks"
        ref={navLinksRef}
      >
        {NAV_SECTIONS.map((section) => (
          <a
            key={section.href}
            href={section.href}
            className={activeSection === section.href ? "active" : ""}
            onClick={handleNavClick(section.href)}
          >
            {section.label}
          </a>
        ))}
      </div>
      <div
        className="nav-toggle"
        id="navToggle"
        tabIndex={0}
        onClick={navToggleHandler}
        onKeyPress={navToggleHandler}
        aria-label="Open navigation menu"
        role="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;