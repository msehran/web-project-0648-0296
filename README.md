# VÉLORA — Unisex Fashion Store

A modern, responsive storefront website for a unisex fashion brand. This project is built as a static front-end e-commerce landing experience using HTML, CSS, and JavaScript, with reusable UI components for navigation, footer, and mobile menu sections.

## Project Overview

VÉLORA is designed to showcase lifestyle and fashion products through a clean storefront experience. The website includes a homepage, shopping page, collections, product details, contact section, and registration page, giving users a complete browsing flow for an online fashion brand.

## Features

- Responsive storefront layout for desktop and mobile devices
- Reusable header and footer components
- Mobile bottom navigation menu
- Multiple storefront pages for shopping and browsing
- Product-focused landing page design
- Clean, modern fashion branding with icon-based UI
- Static front-end setup with no backend required

## Pages

- Home: `index.html`
- Shop: `shop.html`
- Collections: `collections.html`
- Product Details: `product.html`
- Contact: `contact.html`
- Register / Account: `register.html`

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap Icons
- Font Awesome

## Project Structure

```text
Web Project/
├── assets/                 # Images, icons, and visual assets
├── components/             # Reusable JS component templates
│   ├── footer.js
│   ├── header.js
│   └── navigation-menu.js
├── css/                    # Global and page-specific stylesheets
│   ├── globals.css
│   ├── home.css
│   ├── shop.css
│   ├── product.css
│   ├── register.css
│   ├── contact.css
│   ├── collections.css
│   └── layout/
│       ├── header.css
│       └── footer.css
├── js/
│   ├── main.js             # Component loader for shared UI
│   └── home.js
├── collections.html
├── contact.html
├── index.html
├── product.html
├── README.md
├── register.html
├── shop.html
└── Json/                  # Project data folder
```

## How to Run

Since this is a static website, you can run it in any of the following ways:

### Option 1: Open directly in the browser

- Open `index.html` in a browser

### Option 2: Use a local development server

From the project folder, run:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

### Option 3: VS Code Live Server

- Open the project in VS Code
- Right-click `index.html`
- Select "Open with Live Server"

## Notes

- This project is a front-end storefront prototype and does not currently include a database or backend API.
- Product content and branding can be customized in the HTML, CSS, and JavaScript files.
- Shared website sections like the header and footer are dynamically injected from the `components` directory.

## License

This project is for educational and portfolio/demo purposes.
