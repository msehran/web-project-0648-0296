export function heroSection(
  tagline,
  heading,
  paragraph,
  btn,
  btnText,
  imageSrc,
  tagline1 = "",
) {
  return ` <div class="hero-content">
      <div class="hero-text">
        <h4>
          ${tagline} <span>${tagline1}</span>
        </h4>
        <h1>${heading}</h1>
        <p>
          ${paragraph}
        </p>
        ${
          btn
            ? `<button class="btn">
         ${btnText} <i class="bi bi-arrow-right"></i>
        </button>`
            : ``
        }
      </div>
      <div class="hero-image">
        <img src="./assets/images/hero-section/${imageSrc}" alt="hero image" />
      </div>
    </div>`;
}
