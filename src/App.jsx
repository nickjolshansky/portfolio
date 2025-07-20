import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DevSection from "./components/DevSection";
import MediaSection from "./components/MediaSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import useScrollFadeIn from './hooks/useScrollFadeIn';

import "./styles/index.css";
import "./styles/navbar.css";
import "./styles/hero-section.css";
import "./styles/dev-section.css";
import "./styles/media-section.css";
import "./styles/project-section.css";
import "./styles/contact-section.css";
import "./styles/footer.css";

function App() {
  useScrollFadeIn();

  return (
    <>
      <Navbar />
      <HeroSection />
      <DevSection />
      <MediaSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;