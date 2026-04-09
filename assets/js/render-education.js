// render-education.js
document.addEventListener("DOMContentLoaded", () => {
  const d = PORTFOLIO;

  // ── Left column ──────────────────────────────────────────
  // Education entries
  document.querySelector(".edu-entries").innerHTML = d.education.map(e => `
    <div class="edu-item">
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-institution">${e.institution}</div>
      <div class="edu-period">${e.period}</div>
    </div>`).join("");

  // Achievements
  document.querySelector(".achievements-list").innerHTML = d.achievements.map(a => `
    <div class="cert-item">
      <div class="cert-name">${a.name}</div>
      <div class="cert-issuer">${[a.issuer, a.date].filter(Boolean).join(" · ")}</div>
    </div>`).join("");

  // Certifications
  document.querySelector(".certifications-list").innerHTML = d.certifications.map(c => `
    <div class="cert-item">
      <div class="cert-name">${c.name}</div>
      <div class="cert-issuer">${[c.issuer, c.date].filter(Boolean).join(" · ")}</div>
    </div>`).join("");

  // ── Right column: modules ─────────────────────────────────
  // Helper: render a list of module objects into a container selector
  function renderModules(selector, mods) {
    document.querySelector(selector).innerHTML = mods.map(m => `
      <div class="course-item">
        <span class="course-icon">${m.term}</span>
        <div class="course-content">
          <div class="course-title">${m.title}</div>
          <div class="course-subtitle">${m.subtitle}</div>
        </div>
      </div>`).join("");
  }

  const bySchoolYear = (school, year) =>
    d.modules.filter(m => m.school === school && m.year === year);

  renderModules("#sit-y2-courses",     bySchoolYear("sit", "y2"));
  renderModules("#sit-y1-courses",     bySchoolYear("sit", "y1"));
  renderModules("#tp-y1-courses",      bySchoolYear("tp",  "y1"));
  renderModules("#tp-intern-courses",  bySchoolYear("tp",  "intern"));
  renderModules("#tp-y2-courses",      bySchoolYear("tp",  "y2"));
});
