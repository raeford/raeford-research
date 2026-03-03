const packages = [
  {
    title: "The 1863 North Carolina Tax Assessment Archive",
    summary:
      "A searchable archive of surviving 1863 county tax records—built to help families and researchers locate people in the data and follow the paper trail across time.",
    cta: "Search the 1863 Archive",
    sideLabel: "What You Can Do Here",
    color: "#2A5B6C",
    href: "#archive-1863",
    items: [
      "search names across curated record collections",
      "view transcriptions + source images side-by-side (when available)",
      "track people, places, and households across entries",
      "save and share citations you can reuse in your own research",
      "learn as you go with guides that explain what records mean (and what they don’t)"
    ]
  },
  {
    title: "Website Design + Build",
    timeline: "4-8 Week Timeline",
    sideLabel: "What's Included",
    color: "#EFC052",
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
    color: "#B0BCA1",
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
            <p class="package-meta">${service.timeline ?? service.cta ?? ""}</p>
          </div>
          <div class="package-bottom">
            <p class="package-side">${service.sideLabel}</p>
            <div class="package-content">
              ${
                service.summary
                  ? `<p class="package-summary">${service.summary}</p>`
                  : ""
              }
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
