const packages = [
  {
    title: "Brand Direction + Identity",
    timeline: "3-5 Week Timeline",
    sideLabel: "What's Included",
    color: "#f48753",
    href: "#brand-direction",
    items: [
      "brand positioning + creative direction",
      "primary logo and alternate lockups",
      "custom color palette",
      "type pairing and hierarchy",
      "mini brand guide pdf",
      "social and launch graphics"
    ]
  },
  {
    title: "Website Design + Build",
    timeline: "4-8 Week Timeline",
    sideLabel: "What's Included",
    color: "#c7a24b",
    href: "#website-design",
    items: [
      "site architecture and page planning",
      "desktop and mobile responsive design",
      "custom website build",
      "up to six core pages",
      "basic seo setup",
      "launch support and walkthrough"
    ]
  },
  {
    title: "Studio Extras",
    timeline: "A La Carte Services",
    sideLabel: "Add To Your Package",
    color: "#e6c9d4",
    href: "#studio-extras",
    items: [
      "campaign graphics",
      "email signature design",
      "additional website pages",
      "packaging touchpoints",
      "pricing guide or one-page pdf",
      "print collateral"
    ]
  }
];

const servicesGrid = document.querySelector("#services-grid");

servicesGrid.innerHTML = packages
  .map(
    (service) => `
      <a class="package-card" href="${service.href}" style="--package-color: ${service.color}">
        <span class="package-tab" aria-hidden="true"></span>
        <article class="package-sheet">
          <div class="package-top">
            <h2 class="package-title">${service.title}</h2>
            <p class="package-meta">${service.timeline}</p>
          </div>
          <div class="package-bottom">
            <p class="package-side">${service.sideLabel}</p>
            <div class="package-content">
              <ul class="package-list">
                ${service.items.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>
        </article>
      </a>
    `
  )
  .join("");
