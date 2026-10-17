export function createArrivalProduct(product) {
  return `
     <div class="section-header">
        <h2 class="section-title">New Arrivals</h2>
        <a href="./shop.html">View All <i class="bi bi-arrow-right"></i></a>
     </div>
      <div class="products-container" id="new-arrivals-container">
        ${product
          .map((item) => {
            return `
                 <a href="./product.html?id=${item.id}" class="product-card">
                    <div class="product-image">
                        <img src="./../assets/images/arrival-product/${item.image}" alt="${item.name}">
                    </div>
                    <div class="product-info">
                        <p class="product-gender">${item.category}</p>
                        <h3 class="product-name">${item.name}</h3>
                        <p class="product-price">$${item.price.toFixed(2)}</p>
                    </div>
                    <button class="add-wishlist"><i class="bi bi-heart"></i></button>
                 </a>
                `;
          })
          .join("")}
     </div>`;
}

export function collections(collections) {
  return `
    <div class="section-header">
        <h2 class="section-title">Collections</h2>
        <a href="./collections.html">Explore All <i class="bi bi-arrow-right"></i></a>
      </div>
      <div class="collections-container">
        ${collections
          ?.map((item) => {
            return `
                 <div class="collection-card"> 
                     <img class="collection-image" src="./../assets/images/collections/${item.image}" alt="${item.title}">
                     <a href="/collections.html?id=${item.id}" class="collection-info">
                        <div class="collection-text">
                           <h3 class="collection-title">${item.title}</h3>
                           <i class="bi bi-arrow-right"></i>
                        </div>
                     </a>
                </div>
                `;
          })
          .join("")}
     </div>`;
}
