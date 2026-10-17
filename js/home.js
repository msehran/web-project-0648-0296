import { heroSection } from "../components/hero-section.js";

const hero = document.querySelector(".hero");

hero.innerHTML = heroSection(
  "Timeless style",
  "Effortless Looks for Every You",
  "Minimalist designs, Premium fabrics. Everyday essentials for the more stylish tomorrow.",
  true,
  "Shop New Arrivals",
  "home-hero-mw.png",
  "/ Modern living",
);
