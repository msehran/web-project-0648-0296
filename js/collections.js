import { heroSection } from "../components/hero-section.js";

const hero = document.querySelector(".hero");

hero.innerHTML = heroSection(
  "Our Collections",
  "Curated Styles for Every Moment",
  "Explore out exclusive collections, designed for modern living, timeless style and effortless sophistication.",
  false,
  "",
  "mv-image.png",
  "",
);
