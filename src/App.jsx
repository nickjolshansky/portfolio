import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DevSection from "./components/DevSection";
import MediaSection from "./components/MediaSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import ProjectPage from "./components/ProjectPage";
import Footer from "./components/Footer";
import useScrollFadeIn from "./hooks/useScrollFadeIn";

import "./styles/index.css";
import "./styles/navbar.css";
import "./styles/hero-section.css";
import "./styles/dev-section.css";
import "./styles/media-section.css";
import "./styles/project-section.css";
import "./styles/contact-section.css";
import "./styles/footer.css";
import "./styles/project-page.css";

function ScrollFadeInHandler() {
  useScrollFadeIn();
  return null;
}

function App() {
  return (
    <Router>
      <ScrollFadeInHandler />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <DevSection />
              <MediaSection />
              <ProjectsSection />
              <ContactSection />
            </>
          }
        />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
