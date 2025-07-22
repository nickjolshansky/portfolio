import React, { useEffect, useRef, useState } from "react";
import profile0 from "/images/hero-section/profile0.jpg";
import profile1 from "/images/hero-section/profile1.png";
import profile2 from "/images/hero-section/profile2.jpg";
const images = [profile0, profile1, profile2];

const smoothScrollToHash = (hash, offset = 40) => {
  const el = document.querySelector(hash);
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
};

const HeroSection = () => {
  const [imgIdx, setImgIdx] = useState(0);
  const [fadeClass, setFadeClass] = useState("");
  const imgRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("hero-fade-out");
      setTimeout(() => {
        setImgIdx(idx => (idx + 1) % images.length);
        setFadeClass("hero-fade-in");
        setTimeout(() => setFadeClass(""), 200);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleHeroLink = hash => e => {
    e.preventDefault();
    smoothScrollToHash(hash);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-bg2"></div>
      <div className="hero-bg3"></div>
      <div className="hero-inner">
        <a href="#contact" id="hero-headshot" onClick={handleHeroLink("#contact")}>
          <img ref={imgRef} src={images[imgIdx]} alt="Nicholas Olshansky headshot" className={fadeClass} draggable="false" />
        </a>
        <div className="hero-content fadein">
          <h1>Nicholas Olshansky</h1>
          <p>
            Full stack dev turning ideas into workable solutions.
            <br />
            I used to direct live TV.
            <br />
            Now I direct data and user experiences.
          </p>
          <a href="#projects" className="hero-btn" onClick={handleHeroLink("#projects")}>
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
