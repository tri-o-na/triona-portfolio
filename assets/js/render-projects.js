// render-projects.js
document.addEventListener("DOMContentLoaded", () => {
  const ICON_GROUPS = [
    { key: "design",    label: "Front-End & Design" },
    { key: "fullstack", label: "Full-Stack Development" },
    { key: "backend",   label: "Back-End Development" },
    { key: "ai",        label: "AI & ML" },
    { key: "cloud",     label: "Cloud" },
    { key: "data",      label: "Data & Algorithms" },
    { key: "iot",       label: "IoT & Networking" },
    { key: "systems",   label: "Systems" },
  ];

  // Returns all filter keys a project belongs to (filters[] takes priority over icon)
  function projectFilters(p) {
    return (p.filters && p.filters.length) ? p.filters : [p.icon];
  }

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
    const relevantFor = (p.relevantFor && p.relevantFor.length)
      ? `<div class="project-relevant"><span class="relevant-label">Relevant for:</span> ${p.relevantFor.join(", ")}</div>`
      : "";
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
          ${relevantFor}
        </div>
      </a>`;
  }

  // ── Render grouped by icon ────────────────────────────────
  function renderAll(filter) {
    const grid = document.getElementById("projects-grid");

    const filtered = filter === "all"
      ? PORTFOLIO.projects
      : PORTFOLIO.projects.filter(p => projectFilters(p).includes(filter));

    if (!filtered.length) {
      grid.innerHTML = `<p style="color:var(--forest-light);font-family:var(--mono);font-size:12px;margin-top:24px;">No projects in this category yet.</p>`;
      return;
    }

    const groupsToShow = filter === "all"
      ? ICON_GROUPS.filter(g => filtered.some(p => projectFilters(p).includes(g.key)))
      : ICON_GROUPS.filter(g => g.key === filter);

    grid.innerHTML = groupsToShow.map(group => {
      const inGroup = filtered.filter(p => projectFilters(p).includes(group.key));
      const cards = inGroup.map(projectCard).join("");
      const count = inGroup.length;
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
  const urlFilter = new URLSearchParams(window.location.search).get("filter") || "all";

  function activateFilter(filter) {
    document.querySelectorAll(".proj-filter-btn").forEach(b => b.classList.remove("active"));
    const btn = document.querySelector(`.proj-filter-btn[data-filter="${filter}"]`);
    if (btn) btn.classList.add("active");

    const optEl = document.querySelector(`#pcs-dropdown .pcs-option[data-filter="${filter}"]`);
    if (optEl) {
      document.querySelectorAll("#pcs-dropdown .pcs-option").forEach(o => o.classList.remove("selected"));
      optEl.classList.add("selected");
      const lbl = document.getElementById("pcs-label");
      if (lbl) lbl.textContent = optEl.textContent.trim();
      const dot = document.querySelector("#proj-custom-select .pcs-dot");
      if (dot) dot.className = `pcs-dot pcs-dot-${filter}`;
    }

    const params = filter === "all" ? "" : `?filter=${filter}`;
    history.replaceState(null, "", location.pathname + params);

    renderAll(filter);
  }

  activateFilter(urlFilter);

  document.querySelectorAll(".proj-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => activateFilter(btn.dataset.filter));
  });

  // Custom mobile dropdown
  const customBtn   = document.getElementById("proj-custom-select");
  const customDropdown = document.getElementById("pcs-dropdown");
  const pcsLabel    = document.getElementById("pcs-label");

  if (customBtn && customDropdown) {
    customBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = customDropdown.classList.toggle("open");
      customBtn.setAttribute("aria-expanded", isOpen);
    });

    document.addEventListener("click", () => {
      customDropdown.classList.remove("open");
      customBtn.setAttribute("aria-expanded", "false");
    });

    customDropdown.querySelectorAll(".pcs-option").forEach(opt => {
      opt.addEventListener("click", (e) => {
        e.stopPropagation();
        const filter = opt.dataset.filter;

        customDropdown.querySelectorAll(".pcs-option").forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");

        if (pcsLabel) pcsLabel.textContent = opt.textContent.trim();
        const triggerDot = customBtn.querySelector(".pcs-dot");
        if (triggerDot) {
          triggerDot.className = `pcs-dot pcs-dot-${filter}`;
        }

        customDropdown.classList.remove("open");
        customBtn.setAttribute("aria-expanded", "false");
        activateFilter(filter);
      });
    });
  }
});