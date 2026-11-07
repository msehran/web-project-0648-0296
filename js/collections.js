import { heroSection } from "../components/hero-section.js";
import collections from "../Json/collections-data.json" with { type: "json" };

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

const filters = document.querySelector(".collection-filters");
const grid = document.querySelector(".collection-grid");
const categories = [
  "All Collections",
  ...new Set(collections.map(({ category }) => category)),
];

filters.innerHTML = categories
  .map(
    (category, index) =>
      `<button class="collection-filter${index === 0 ? " active" : ""}" data-category="${category}" type="button">${category}</button>`,
  )
  .join("");

function renderCollections(category = "All Collections") {
  const items =
    category === "All Collections"
      ? collections
      : collections.filter((item) => item.category === category);

  grid.innerHTML = items
    .map(
      (item) => `
    <a class="collection-card" href="shop.html" style="--collection-image:url('../assets/images/collections/${item.image}')">
      <img src="./assets/images/collections/${item.image}" alt="${item.title}" loading="lazy">
      <div class="collection-card-copy">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <span>Explore <i class="bi bi-arrow-right"></i></span>
      </div>
    </a>
  `,
    )
    .join("");
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest(".collection-filter");
  if (!button) return;
  filters.querySelector(".active")?.classList.remove("active");
  button.classList.add("active");
  renderCollections(button.dataset.category);
});

renderCollections();
