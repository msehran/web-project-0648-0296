import { heroSection } from "../components/hero-section.js";
import { renderProductCard } from "../components/product-cart.js";
import productData from "../Json/products.json" with { type: "json" };
const hero = document.querySelector(".hero");

hero.innerHTML = heroSection(
  "Shop All Products",
  "Timeless fashion for Every You",
  "Explore our complete collection of modern, versatile and sustainable fashion essentials.",
  false,
  "",
  "mv-image.png",
  "",
);

// Product Section
const categories = [...new Set(productData.map((product) => product.category))];
const types = [...new Set(productData.map((product) => product.type))];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const colors = [...new Set(productData.flatMap((product) => product.colors))];

const totalProducts = productData.length;

const categoryCounts = categories.map((category) => ({
  name: category,
  count: productData.filter((product) => product.category === category).length,
}));

const typeCounts = types.map((type) => ({
  name: type,
  count: productData.filter((product) => product.type === type).length,
}));

const filterOptions = document.querySelector(".filter-options");
filterOptions.innerHTML = categoryCounts
  .map(
    (item) =>
      ` <label><input type="radio" name="category" checked> ${item.name} <span>(${item.count})</span></label>`,
  )
  .join(" ");

const typeOptions = document.querySelector(".type-options");
typeOptions.innerHTML = typeCounts
  .map(
    (item) =>
      `<label><input type="checkbox"> ${item.name} <span>(${item.count})</span></label>`,
  )
  .join(" ");

const sizeOptions = document.querySelector(".size-options");
sizeOptions.innerHTML = sizes
  .map((item) => `<label><input type="checkbox"><span>${item}</span></label>`)
  .join(" ");

const colorsOptions = document.querySelector(".color-options");
colorsOptions.innerHTML = colors
  .map(
    (color) =>
      ` <label><input type="checkbox" ><span style="--swatch:${color}"></span></label>`,
  )
  .join(" ");

const productsRender = document.querySelector(".products-grid");
productsRender.innerHTML = productData
  .map((product) => renderProductCard(product))
  .join("");
