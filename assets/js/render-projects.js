// render-projects.js
document.addEventListener("DOMContentLoaded", () => {
  const ICON_GROUPS = [
    { key: "design",   label: "Front-End & Design" },
    { key: "ai",       label: "AI & ML" },
    { key: "backend",  label: "Back-End Development" },
    { key: "cloud",    label: "Cloud" },
    { key: "data",     label: "Data Algo" },
    { key: "iot",      label: "IoT & Networking" },
    { key: "systems",  label: "Systems" },
  ];

  const schoolLabels = {
    sit: "SIT × UofG",
    tp:  "Temasek Poly",
    dbs: "DBS Internship",
  };

  // ── Auto-generate display ID from school + year + term + module initials ──
  // e.g. SIT · Y1 · T1 · COA
  // You can still override by setting id: "..." explicitly in data-projects.js
  function getDisplayId(p) {
    // if (p.id) return p.id; // use manual override if set
    const schoolMap = { sit: "SIT", tp: "TP", dbs: "DBS" };
    const yearMap   = { y1: "Y1", y2: "Y2", intern: "INT" };
    const initials  = (p.moduleCode)
    const parts = [
      schoolMap[p.school] || p.school.toUpperCase(),
      yearMap[p.year]     || p.year.toUpperCase(),
      p.term              || "",
      initials,
    ].filter(Boolean);
    return parts.join(" · ");
  }

  // ── Card builder ─────────────────────────────────────────
  function projectCard(p) {
    const displayId  = getDisplayId(p);
    const tags       = p.tags.map(t => `<span class="tag">${t}</span>`).join("");
    const ongoingTag = p.ongoing ? `<span class="tag ongoing">Ongoing</span>` : "";
    const schoolBadge = `<span class="card-school-badge ${p.school}">${schoolLabels[p.school] || p.school}</span>`;
    const moduleLabel = p.moduleName
      ? `<div class="project-module">${p.moduleName}</div>`
      : "";

    const hasImage = !!p.image;

    // Left thumb: image if available, otherwise icon
    const thumb = hasImage
      ? `<img src="${p.image}" alt="${p.title}">`
      : `<div class="project-thumb-placeholder">
          <div class="thumb-icon ${p.icon}">${p.iconLabel}</div>
        </div>`;

    // No more inline floating image
    const inlineImage = "";

    const detailUrl = `project-detail.html?id=${encodeURIComponent(displayId)}`;

    return `
      <a class="project-card" href="${detailUrl}" data-icon="${p.icon}">
        <div class="project-thumb">${thumb}</div>
        <div class="project-body">
          ${inlineImage}
          <div class="project-number-row">
            <span class="project-number">${displayId}</span>
            ${schoolBadge}
          </div>
          ${moduleLabel}
          <div class="project-title">${p.title}</div>
          <div class="project-desc">${p.desc}</div>
          <div class="project-tags">${ongoingTag}${tags}</div>
        </div>
      </a>`;
  }

  // ── Render grouped by icon ────────────────────────────────
  function renderAll(filter) {
    const grid = document.getElementById("projects-grid");

    const filtered = filter === "all"
      ? PORTFOLIO.projects
      : PORTFOLIO.projects.filter(p => p.icon === filter);

    if (!filtered.length) {
      grid.innerHTML = `<p style="color:var(--forest-light);font-family:var(--mono);font-size:12px;margin-top:24px;">No projects in this category yet.</p>`;
      return;
    }

    const groupsToShow = filter === "all"
      ? ICON_GROUPS.filter(g => filtered.some(p => p.icon === g.key))
      : ICON_GROUPS.filter(g => g.key === filter);

    grid.innerHTML = groupsToShow.map(group => {
      const cards = filtered.filter(p => p.icon === group.key).map(projectCard).join("");
      const count = filtered.filter(p => p.icon === group.key).length;
      return `
        <div class="project-type-group" data-group="${group.key}">
          <div class="type-label-row">
            <span class="type-dot ${group.key}"></span>
            <span class="type-label">${group.label}</span>
            <span class="type-count">${count}</span>
          </div>
          <div class="projects-row">${cards}</div>
        </div>`;
    }).join("");
  }

  // ── Filter bar ───────────────────────────────────────────
  renderAll("all");

  document.querySelectorAll(".proj-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".proj-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderAll(btn.dataset.filter);
    });
  });
});