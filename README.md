# VÉLORA — Unisex Fashion Store

VÉLORA is a modern, responsive storefront for a unisex fashion brand. The site is built as a static front-end e-commerce experience using HTML, CSS, JavaScript, and local JSON data files.

## Overview

This project presents a complete online shopping experience with a landing page, products, collections, contact form, and registration flow. The design focuses on a clean luxury aesthetic and mobile-friendly browsing.

## Features

- Responsive storefront layout for desktop and mobile devices
- Reusable header, footer, and navigation components
- Mobile-friendly bottom navigation menu
- Multiple storefront pages for browsing and shopping
- Product and collection sections powered by JSON data
- Clean fashion-brand styling with modern typography and icons
- Static front-end implementation with no backend dependency

## Pages

- Home: `index.html`
- Shop: `shop.html`
- Collections: `collections.html`
- Product Detail: `product.html`
- Contact: `contact.html`
- Register: `register.html`

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- ES Modules
- Bootstrap Icons
- Font Awesome
- JSON data files for product content

## Project Structure

```text
Web Project/
├── assets/
│   ├── icon/
│   └── images/
│       ├── arrival-product/
│       ├── collections/
│       ├── hero-section/
│       └── products/
├── components/
│   ├── footer.js
│   ├── header.js
│   ├── hero-section.js
│   ├── home-comp.js
│   ├── navigation-menu.js
│   └── product-cart.js
├── css/
│   ├── collections.css
│   ├── contact.css
│   ├── globals.css
│   ├── home.css
│   ├── product.css
│   ├── register.css
│   ├── shop.css
│   └── layout/
│       ├── footer.css
│       └── header.css
├── js/
│   ├── collections.js
│   ├── contact.js
│   ├── home.js
│   ├── main.js
│   ├── register.js
│   └── shop.js
├── Json/
│   ├── arrival-products.json
│   ├── collections.json
│   └── products.json
├── collections.html
├── contact.html
├── index.html
├── product.html
├── README.md
├── register.html
├── shop.html
└── .git/
```

## Getting Started

### Option 1: Open directly in the browser

Open `index.html` in a browser.

### Option 2: Run a local web server

From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option 3: Use VS Code Live Server

- Open the project in VS Code
- Right-click `index.html`
- Choose "Open with Live Server"

## Customization

- Update product and collection content in the `Json/` folder
- Replace visual assets in `assets/images/`
- Adjust page styling in the CSS files under `css/`
- Modify reusable sections in the JavaScript files inside `components/`

## Notes

- This is a front-end storefront demo and does not include a backend, database, or authentication system.
- The layout is designed for a fashion brand showcase and can be expanded into a full e-commerce app later.
- Shared site sections such as the header and footer are injected dynamically from the `components/` folder.

## License

This project is intended for educational, portfolio, and demo use.
