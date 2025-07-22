import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollFadeIn() {
  const location = useLocation();

  useEffect(() => {
    function fadeInOnScroll() {
      document.querySelectorAll(".fadein").forEach(el => {
        const elemTop = el.getBoundingClientRect().top + window.scrollY;
        const winBottom = window.scrollY + window.innerHeight - 80;
        if (elemTop < winBottom) {
          el.classList.add("visible");
        }
      });
    }
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();

    return () => window.removeEventListener("scroll", fadeInOnScroll);
  }, [location.pathname]);
}
