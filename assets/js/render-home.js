// render-home.js
document.addEventListener("DOMContentLoaded", () => {
  const d = PORTFOLIO;

  const set = (sel, val, prop = "textContent") => {
    const el = document.querySelector(sel);
    if (el && val != null) el[prop] = val;
  };

  // Left column
  set(".hero-name",    `${d.name.first}<br><em>${d.name.last}</em>`, "innerHTML");
  set(".hero-eyebrow", d.availability);
  set(".hero-title",   d.title);
  set(".hero-bio",     d.bio);

  // Resume button
  const resumeBtn = document.getElementById("hero-resume-btn");
  if (resumeBtn) {
    if (d.resumeUrl) {
      resumeBtn.href = d.resumeUrl;
    } else {
      resumeBtn.style.display = "none";
    }
  }

  // Photo alt
  const img = document.querySelector(".hero-photo-wrap img");
  if (img) img.alt = `${d.name.first} ${d.name.last}`;

  // Right column — stats
  const EXCLUDED_TAGS = ["Client Project", "OIP", "Glasgow"];
  const techCount = Array.isArray(PORTFOLIO.projects)
    ? new Set(
        PORTFOLIO.projects
          .flatMap(p => p.tags || [])
          .filter(t => !EXCLUDED_TAGS.some(ex => ex.toLowerCase() === t.toLowerCase()))
      ).size
    : null;

  const statGrid = document.querySelector(".hero-stat-grid");
  if (statGrid && Array.isArray(d.stats)) {
    statGrid.innerHTML = d.stats.map(s => {
      const num = (s.label === "Technologies" && techCount !== null)
        ? `${techCount}+`
        : s.num;
      return `
        <div class="hero-stat">
          <div class="hero-stat-num">${num}</div>
          <div class="hero-stat-label">${s.label}</div>
        </div>`;
    }).join("");
  }

  // Right column — links
  const heroLinks = document.querySelector(".hero-links");
  if (heroLinks && d.contact) {
    heroLinks.innerHTML = `
      <a href="${d.contact.github.url}" class="hero-link" target="_blank" rel="noreferrer">GitHub</a>
      <span class="hero-link-sep">&middot;</span>
      <a href="${d.contact.linkedin.url}" class="hero-link" target="_blank" rel="noreferrer">LinkedIn</a>
      <span class="hero-link-sep">&middot;</span>
      <a href="mailto:${d.contact.email}" class="hero-link">Email</a>`;
  }
});