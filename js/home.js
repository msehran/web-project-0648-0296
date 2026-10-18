import arrivalProducts from "./../Json/arrival-products.json" with { type: "json" };
import collectionsData from "./../Json/collections.json" with { type: "json" };
import { createArrivalProduct, collections } from "../components/home-comp.js";
import { heroSection } from "../components/hero-section.js";

// hero section
const hero = document.querySelector(".hero");
hero.innerHTML = heroSection(
  "Timeless style",
  "Effortless Looks for Every You",
  "Minimalist designs, Premium fabrics. Everyday essentials for the more stylish tomorrow.",
  true,
  "Shop New Arrivals",
  "home-hero-mw.png",
  "/ Modern living",
  "shop.html",
);

// Arival Products Section
const newArrivalsSection = document.querySelector(".new-arrivals");
newArrivalsSection.innerHTML = createArrivalProduct(arrivalProducts);

// Section Section
const collection = document.querySelector(".collections");
collection.innerHTML = collections(collectionsData);
