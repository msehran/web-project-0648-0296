import { heroSection } from "../components/hero-section.js";

const hero = document.querySelector(".hero");

hero.innerHTML = heroSection(
  "Home / Register",
  "Create Your Account",
  "Join VELORA and get access to exclusive offers, faster checkout, and a personalized shopping experience.",
  false,
  "",
  "hero-m.png",
  "",
);
