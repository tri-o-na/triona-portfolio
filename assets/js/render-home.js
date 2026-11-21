// render-home.js
document.addEventListener("DOMContentLoaded", () => {
  const d = PORTFOLIO;

  const set = (sel, val, prop = "textContent") => {
    const el = document.querySelector(sel);
    if (el && val != null) el[prop] = val;
  };

  // Left column
  set(".hero-name",    `${d.name.first}<br><em>${d.name.last}</em>`, "innerHTML");
  // Eyebrow — availability + internship period
  const eyebrow = document.querySelector(".hero-eyebrow");
  if (eyebrow) {
    eyebrow.innerHTML = `
      <span class="hero-eyebrow-avail">${d.availability}</span>`;
  }
  set(".hero-title",   d.title);

  // Role pills - clickable links to filtered projects
  const ROLE_FILTERS = [
    { label: "frontend & uiux",  filter: "design",   icon: "✦" },
    { label: "Full-Stack Dev",   filter: "fullstack", icon: "▣" },
    { label: "Back-End Dev",     filter: "backend",  icon: "▣" },
    { label: "AI / ML",          filter: "ai",       icon: "◈" },
    { label: "Cloud & DevOps",   filter: "cloud",    icon: "◎" },
  ];
  const rolePills = document.getElementById("hero-role-pills");
  if (rolePills && Array.isArray(d.roles)) {
    rolePills.innerHTML = d.roles.map(r => {
      const filter = ROLE_FILTERS.find(f => f.label === r);
      const filterValue = filter ? filter.filter : "";
      return `<a class="hero-role-pill" href="projects.html?filter=${filterValue}">${r}</a>`;
    }).join("");
  }

  set(".hero-bio",     d.bio);

  // Recruiter filter section
  const recruiterBar = document.getElementById("hero-recruiter-bar");
  if (recruiterBar) {
    recruiterBar.innerHTML = `
      <span class="recruiter-bar-label">Hiring for:</span>
      ${ROLE_FILTERS.map(r =>
        `<a class="recruiter-link" href="projects.html?filter=${r.filter}">${r.label}</a>`
      ).join("")}`;
  }

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
  const img = document.getElementById("hero-photo-img");
  if (img) img.alt = `${d.name.first} ${d.name.last}`;

  // Vertical links (right strip)
  const vLinks = document.getElementById("hero-vertical-links");
  if (vLinks && d.contact) {
    vLinks.innerHTML = `
      <a href="${d.contact.github.url}" class="hero-link" target="_blank" rel="noreferrer">GitHub</a>
      <span class="hero-link-sep"></span>
      <a href="${d.contact.linkedin.url}" class="hero-link" target="_blank" rel="noreferrer">LinkedIn</a>
      <span class="hero-link-sep"></span>
      <a href="mailto:${d.contact.email}" class="hero-link">Email</a>`;
  }

  // Quick links panel (home1)
  const quickLinks = document.getElementById("quick-links");
  if (quickLinks && d.contact) {
    quickLinks.innerHTML = `
      <a href="${d.contact.github.url}" class="quick-link" target="_blank" rel="noreferrer">
        <span class="quick-link-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </span>
        GitHub
      </a>
      <a href="${d.contact.linkedin.url}" class="quick-link" target="_blank" rel="noreferrer">
        <span class="quick-link-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </span>
        LinkedIn
      </a>
      <a href="mailto:${d.contact.email}" class="quick-link">
        <span class="quick-link-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </span>
        Email
      </a>
      <a href="skills.html" class="quick-link">
        <span class="quick-link-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </span>
        Skills
      </a>
    `;
  }

  // Floating links (home3)
  const floatingLinks = document.getElementById("floating-links");
  if (floatingLinks && d.contact) {
    floatingLinks.innerHTML = `
      <a href="${d.contact.github.url}" class="floating-link" target="_blank" rel="noreferrer" title="GitHub">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
      <a href="${d.contact.linkedin.url}" class="floating-link" target="_blank" rel="noreferrer" title="LinkedIn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
      <a href="mailto:${d.contact.email}" class="floating-link" title="Email">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </a>
      <a href="experience.html" class="floating-link" title="Experience">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      </a>
      ${d.resumeUrl ? `
      <a href="${d.resumeUrl}" class="floating-link" target="_blank" rel="noreferrer" title="Resume">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      </a>
      ` : ''}
    `;
  }

  // Stats bar (bottom)
  const EXCLUDED_TAGS = ["Client Project", "OIP", "Glasgow"];
  const techCount = Array.isArray(PORTFOLIO.projects)
    ? new Set(
        PORTFOLIO.projects
          .flatMap(p => p.tags || [])
          .filter(t => !EXCLUDED_TAGS.some(ex => ex.toLowerCase() === t.toLowerCase()))
      ).size
    : null;

  const statsBar = document.getElementById("hero-stats-bar");
  if (statsBar && Array.isArray(d.stats)) {
    statsBar.innerHTML = d.stats.map(s => {
      const num = (s.label === "Technologies" && techCount !== null)
        ? `${techCount}+` : s.num;
      return `
        <div class="hero-stat">
          <div class="hero-stat-num">${num}</div>
          <div class="hero-stat-label">${s.label}</div>
        </div>`;
    }).join("");
  }
});