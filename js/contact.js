import { heroSection } from "../components/hero-section.js";

const hero = document.querySelector(".hero");

hero.innerHTML = heroSection(
  "Get in Touch",
  "Contact Us",
  "We did love to hear from you! Whether you have a question, feedback, or need support, our team is here to help.",
  false,
  "",
  "hero-m.png",
);
