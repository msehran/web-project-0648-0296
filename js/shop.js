import { heroSection } from "../components/hero-section.js";

const hero = document.querySelector(".hero");

hero.innerHTML = heroSection(
  "Shop All Products",
  "Timeless fashion for Every You",
  "Explore our complete collection of modern, versatile and sustainable fashion essentials.",
  false,
  "",
  "mw.png",
  "",
);
