# VÉLORA — Fashion Storefront

VÉLORA is a responsive storefront concept for a modern unisex fashion brand. It is built with static HTML pages, CSS, vanilla JavaScript ES modules, and local JSON data. There is no server-side commerce or account system.

## Pages

| Page            | File               | What it includes                                          |
| --------------- | ------------------ | --------------------------------------------------------- |
| Home            | `index.html`       | Brand landing page and featured products                  |
| Shop            | `shop.html`        | Product listing, filters, and sorting UI                  |
| Collections     | `collections.html` | Collection cards rendered from JSON with category filters |
| Product details | `product.html`     | Product gallery, options, details, and service benefits   |
| Contact         | `contact.html`     | Contact information, message form, and Google Maps embed  |
| Register        | `register.html`    | Account registration form UI                              |

## Features

- Responsive desktop and mobile layouts
- Shared header, footer, and mobile navigation injected from `components/`
- Product and collection content stored in `Json/`
- Interactive product gallery and product option selectors
- Contact form front-end confirmation (it does not send messages to a server)
- SVG favicon at `assets/icon/favicon.svg`

## Built with

- HTML5 and CSS3
- Vanilla JavaScript with ES modules
- JSON data files
- Bootstrap Icons and Font Awesome
- Google Fonts
- Google Maps iframe embed on the contact page

## Run locally

The pages use JavaScript modules and JSON imports, so run a local web server instead of opening the HTML files directly.
You can also open the project in VS Code and use the Live Server extension on `index.html`.

## Project structure

```text
Velora/
├── assets/
│   ├── icon/favicon.svg
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
│   ├── layout/
│   └── page stylesheets
├── js/
│   └── page scripts and shared main.js
├── Json/
│   ├── arrival-products.json
│   ├── collections-data.json
│   ├── collections.json
│   └── products.json
├── collections.html
├── contact.html
├── index.html
├── product.html
├── register.html
└── shop.html
```

## Updating content

- Edit product and collection data in the relevant files under `Json/`.
- Replace images in `assets/images/` and update the paths used by the page scripts or markup.
- Shared page sections are in `components/`; page behavior is in `js/`; styles are in `css/`.

## Limitations

This is a front-end demo. Cart, checkout, registration, and contact submissions are not connected to a backend. The embedded Google Map requires internet access to load.
