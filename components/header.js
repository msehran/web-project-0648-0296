export function HeaderHtml() {
  return `
  <div class="menuBtn"><i class="fa-solid fa-bars "></i></div>
    <h1><a href="/index.html" class="logo">VÉLORA</a></h1>
    <nav class="navbar">
      <ul class="navigation">
        <li><a href="/index.html">Home</a></li>
        <li><a href="/shop.html">Shop</a></li>
        <li><a href="/collections.html">Collections</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </nav>
    <div class="icon-container">
      <button class="icon"><i class="bi bi-search"></i></button>
      <a class="userIcon" class="icon" href="/register.html"><i class="fa-solid fa-user"></i></a>
      <a class="icon cart-btn"> <i class="bi bi-heart"></i>
        <p class="item-counter">0</p>
      </a>
      <button class="icon cart-btn"> <i class="bi bi-bag"></i>
        <p class="item-counter">0</p>
      </button>
    </div>`;
}
