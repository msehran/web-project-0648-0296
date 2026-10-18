export function renderProductCard(product) {
  return `
        <article data-id="${product.id}">
           <a class="product-card" href="/product.html?productId=${product.id}">
             <div class="product-image">
                <img src="./../assets/images/products/${product.image}" alt="${product.name}" loading="lazy">
                ${
                  product.badge
                    ? `
                    <span class="product-badge">
                        ${product.badge}
                    </span>
                `
                    : ""
                }
                <button class="wishlist-btn" type="button" aria-label="Add ${product.name} to wishlist">
                    <i class="bi bi-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">
                    $${product.price.toFixed(2)}
                    ${
                      product.oldPrice
                        ? `
                        <del>$${product.oldPrice.toFixed(2)}</del>
                    `
                        : ""
                    }
                </p>
                <div class="product-rating">
                    <span class="rating-stars">
                        ${renderStars(product.rating)}
                    </span>
                    <small>
                        ${product.rating.toFixed(1)} (${product.reviews})
                    </small>
                </div>
                <div class="product-colors">
                    ${product.colors
                      .map(
                        (color) => `
                        <span
                            style="--swatch:${color}"
                            title="${color}">
                        </span>`,
                      )
                      .join("")}
                </div>
            </div>
           </a>
        </article>
    `;
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return `
        ${'<i class="bi bi-star-fill"></i>'.repeat(fullStars)}
        ${hasHalfStar ? '<i class="bi bi-star-half"></i>' : ""}
        ${'<i class="bi bi-star"></i>'.repeat(emptyStars)}
    `;
}
