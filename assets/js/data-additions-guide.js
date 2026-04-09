// ============================================================
//  HOW TO UPDATE YOUR PROJECT ENTRIES IN data.js
//  Add these new fields to each project object:
// ============================================================

// Each project now supports these additional fields:

/*
{
  school: "sit",           // existing
  year: "y1",              // existing
  type: "Web & Database",  // existing — still used for grouping within detail page breadcrumb
  id: "SIT · Y1 · 01",    // existing
  icon: "web",             // existing — NOW also controls which filter group the card appears in
  iconLabel: "WEB",        // existing

  // ── NEW FIELDS ─────────────────────────────────────────
  moduleName: "Full Stack Web Development",
  // ^ The module this project came from (shown on detail page)

  fullDesc: "A longer, more detailed description of what you built, why, what you learned, and any challenges you faced. This replaces the short desc on the detail page.",
  // ^ If left blank (""), falls back to desc

  githubLink: "https://github.com/tri-o-na/your-repo",
  // ^ Optional. If set, shows a "View repository" link on detail page. Leave "" if none.

  extraLinks: [
    { label: "Report",        url: "https://..." },
    { label: "Slides",        url: "https://..." },
    { label: "Video Demo",    url: "https://..." },
  ],
  // ^ Optional array of extra links shown on detail page sidebar. Leave [] if none.

  image: "assets/images/projects/your-image.jpg",
  // ^ Optional. If set, shows the image on both the card thumbnail and detail page.
  //   Leave "" to show the placeholder icon instead.
}
*/

// ── EXAMPLE: a fully filled-out project entry ──────────────────
/*
{
  school: "sit", year: "y1", type: "Design Innovation (Glasgow)",
  id: "SIT · Y1 · 07", title: "Airport Security Camera System",
  desc: "Overseas Immersion Programme in Glasgow — designed a comprehensive drone port security camera system with hybrid cloud/local storage.",
  icon: "design", iconLabel: "OIP",
  tags: ["Design Thinking", "HCI", "OIP", "Glasgow"],
  image: "assets/images/projects/oip-airport.jpg",

  moduleName: "Design Innovation (Glasgow, Scotland)",
  fullDesc: "As part of SIT's Overseas Immersion Programme in Glasgow, Scotland, our interdisciplinary team was tasked with designing a drone port from scratch. My focus was on the security camera infrastructure — determining camera placement for full site coverage, designing a resilient data storage strategy using a hybrid local-backup and cloud-based architecture to handle high-bandwidth video footage and sensor data, and presenting our recommendations to a panel. This project sharpened my skills in systems design, stakeholder communication, and working in a fast-paced international team environment.",
  githubLink: "",
  extraLinks: [
    { label: "Final Report", url: "assets/docs/oip-report.pdf" },
    { label: "Slides",       url: "assets/docs/oip-slides.pdf" },
  ],
},
*/
