// render-education.js
document.addEventListener("DOMContentLoaded", () => {
  const d = PORTFOLIO; // from data.js

  // ── Left column ───────────────────────────────────────────
  document.querySelector(".edu-entries").innerHTML = d.education.map(e => `
    <div class="edu-item">
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-institution">${e.institution}</div>
      <div class="edu-period">${e.period}</div>
    </div>`).join("");

  document.querySelector(".achievements-list").innerHTML = d.achievements.map(a => `
    <div class="cert-item">
      <div class="cert-name">${a.name}</div>
      <div class="cert-issuer">${[a.issuer, a.date].filter(Boolean).join(" · ")}</div>
    </div>`).join("");

  document.querySelector(".certifications-list").innerHTML = d.certifications.map(c => `
    <div class="cert-item">
      <div class="cert-name">${c.name}</div>
      <div class="cert-issuer">${[c.issuer, c.date].filter(Boolean).join(" · ")}</div>
    </div>`).join("");

  // ── Right column: modules with project links ──────────────

  // Same ID builder as render-projects.js
  function getDisplayId(p) {
    const schoolMap = { sit: "SIT", tp: "TP", dbs: "DBS" };
    const yearMap   = { y1: "Y1", y2: "Y2", intern: "INT" };
    const parts = [
      schoolMap[p.school] || p.school.toUpperCase(),
      yearMap[p.year]     || p.year.toUpperCase(),
      p.term              || "",
      p.moduleCode        || "",
    ].filter(Boolean);
    return parts.join(" · ");
  }

  // Index projects by "school|year|moduleName" — unique even when module
  // names repeat across schools/years (e.g. "Mobile App Development" in
  // both SIT Y2 and TP Y2).
  const projectsByModule = new Map();
  if (PORTFOLIO.projects) {
    PORTFOLIO.projects.forEach(p => {
      if (!p.moduleName) return;
      const key = `${p.school}|${p.year}|${p.moduleName.trim().toLowerCase()}`;
      if (!projectsByModule.has(key)) projectsByModule.set(key, []);
      projectsByModule.get(key).push(p);
    });
  }

  // Render modules, injecting project link chips where a match exists
  function renderModules(selector, mods) {
    const container = document.querySelector(selector);
    if (!container) return;

    container.innerHTML = mods.map(m => {
      // Match using the same composite key
      const key      = `${m.school}|${m.year}|${m.title.trim().toLowerCase()}`;
      const projects = (projectsByModule.get(key) || [])
        .filter(p => p.title && p.title !== "Your Project Title");

      const projectLinks = projects.map(p => {
        const id  = getDisplayId(p);
        const url = `project-detail.html?id=${encodeURIComponent(id)}`;
        return `<a class="course-project-link" href="${url}">${p.title} &rarr;</a>`;
      }).join("");

      // Use tags from matched projects as subtitle, fall back to data.js subtitle
      const allTags = [...new Set(projects.flatMap(p => p.tags || []))];
      const subtitle = allTags.length ? allTags.join(", ") : m.subtitle;

      return `
        <div class="course-item">
          <span class="course-icon">${m.term}</span>
          <div class="course-content">
            <div class="course-title">${m.title}</div>
            <div class="course-subtitle">${subtitle}</div>
            ${projectLinks ? `<div class="course-project-links">${projectLinks}</div>` : ""}
          </div>
        </div>`;
    }).join("");
  }

  const bySchoolYear = (school, year) =>
    d.modules.filter(m => m.school === school && m.year === year);

  renderModules("#sit-y2-courses",    bySchoolYear("sit", "y2"));
  renderModules("#sit-y1-courses",    bySchoolYear("sit", "y1"));
  renderModules("#tp-y1-courses",     bySchoolYear("tp",  "y1"));
  renderModules("#tp-intern-courses", bySchoolYear("tp",  "intern"));
  renderModules("#tp-y2-courses",     bySchoolYear("tp",  "y2"));
});