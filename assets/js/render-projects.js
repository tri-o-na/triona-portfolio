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
  // Also auto-adds "design" if project uses Adobe XD or CSS in its tech stack
  function projectFilters(p) {
    const base = (p.filters && p.filters.length) ? [...p.filters] : [p.icon];
    const tech = p.tech || {};
    const allTechValues = Object.values(tech).flat();
    const hasDesignTech = allTechValues.some(v =>
      v === "Adobe XD" || v === "CSS"
    );
    if (hasDesignTech && !base.includes("design")) base.push("design");
    return base;
  }

  // Sort key: school priority (dbs > sit > tp), then year desc, then term desc
  const SCHOOL_ORDER = { dbs: 3, sit: 2, tp: 1 };
  const YEAR_ORDER   = { y2: 2, y1: 1, intern: 3 };
  function termOrder(term) {
    if (!term) return 0;
    const t = term.toString().toLowerCase();
    if (t.includes("3") || t === "sem 2") return 3;
    if (t.includes("2") || t === "sem 1") return 2;
    return 1;
  }
  function sortKey(p) {
    return (
      (SCHOOL_ORDER[p.school] || 0) * 1000 +
      (YEAR_ORDER[p.year]     || 0) * 10 +
      termOrder(p.term)
    );
  }
  const sortedProjects = [...PORTFOLIO.projects].sort((a, b) => sortKey(b) - sortKey(a));

  // Debug: Log IoT projects order
  console.log("IoT projects in sorted order:",
    sortedProjects
      .filter(p => p.icon === "iot" || (p.filters && p.filters.includes("iot")))
      .map(p => ({ title: p.title, term: p.term, school: p.school, year: p.year, sortKey: sortKey(p) }))
  );

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

    // Category dots for top left of card
    const filters = projectFilters(p);
    const categoryIcons = {
      design: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
      fullstack: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
      backend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="5" rx="1"/><rect x="2" y="10" width="20" height="5" rx="1"/><rect x="2" y="18" width="20" height="5" rx="1"/><line x1="6" y1="4.5" x2="6.01" y2="4.5"/><line x1="6" y1="12.5" x2="6.01" y2="12.5"/><line x1="6" y1="20.5" x2="6.01" y2="20.5"/></svg>',
      ai: '<img src="assets/icons/icons8-robot-100.png" alt="AI" style="width: 12px; height: 12px; object-fit: contain;">',
      cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>',
      data: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
      iot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1"/></svg>',
      systems: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
      mobile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="20" x2="12.01" y2="20"/><circle cx="12" cy="18" r="1"/></svg>'
    };
    const categoryDots = filters.map(f => {
      const group = ICON_GROUPS.find(g => g.key === f);
      const label = group ? group.label : f;
      const icon = categoryIcons[f] || '';
      return `<span class="card-category-dot ${f}" data-tooltip="${label}">${icon}</span>`;
    }).join("");

    // Add mobile dot if project is relevant for mobile dev
    const mobileDot = (p.relevantFor && p.relevantFor.some(r => r.toLowerCase().includes("mobile")))
      ? `<span class="card-category-dot mobile" data-tooltip="Mobile Dev">${categoryIcons.mobile}</span>`
      : "";
    const allDots = categoryDots + mobileDot;

    // No more inline floating image
    const inlineImage = "";

    const detailUrl = `project-detail.html?id=${encodeURIComponent(displayId)}`;

    return `
      <a class="project-card" href="${detailUrl}" data-icon="${p.icon}">
        <div class="card-category-dots">${allDots}</div>
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

  // ── State ─────────────────────────────────────────────────
  let activeFilters = new Set(); // empty = "all"
  let currentQuery  = "";

  function techMatches(p, query) {
    if (!query) return true;
    const q = query.toLowerCase();
    const tech = p.tech || {};
    return Object.values(tech).some(arr =>
      Array.isArray(arr) && arr.some(v => v.toLowerCase().includes(q))
    );
  }

  function projectMatchesFilters(p) {
    if (!activeFilters.size) return true;
    return [...activeFilters].some(f => projectFilters(p).includes(f));
  }

  // ── Render ────────────────────────────────────────────────
  function renderAll() {
    const grid = document.getElementById("projects-grid");

    const filtered = sortedProjects
      .filter(p => projectMatchesFilters(p))
      .filter(p => techMatches(p, currentQuery));

    if (!filtered.length) {
      const msg = currentQuery
        ? `No projects match "${currentQuery}"${activeFilters.size ? " in the selected categories" : ""}.`
        : "No projects in this category yet.";
      grid.innerHTML = `<p style="color:var(--forest-light);font-family:var(--mono);font-size:12px;margin-top:24px;">${msg}</p>`;
      return;
    }

    // Always show flat list, sorted by latest to newest
    grid.innerHTML = `<div class="projects-row">${filtered.map(projectCard).join("")}</div>`;
  }

  // ── Sync button UI ────────────────────────────────────────
  function syncButtonUI() {
    const isAll = !activeFilters.size;
    document.querySelectorAll(".proj-filter-btn").forEach(b => {
      const f = b.dataset.filter;
      if (f === "all") {
        b.classList.toggle("active", isAll);
      } else {
        b.classList.toggle("active", activeFilters.has(f));
      }
    });

    // Mobile dropdown: mark selected options
    document.querySelectorAll("#pcs-dropdown .pcs-option").forEach(o => {
      const f = o.dataset.filter;
      if (f === "all") {
        o.classList.toggle("selected", isAll);
      } else {
        o.classList.toggle("selected", activeFilters.has(f));
      }
    });

    // Mobile trigger label
    const lbl = document.getElementById("pcs-label");
    const dot = document.querySelector("#proj-custom-select .pcs-dot");
    if (lbl) {
      if (isAll) {
        lbl.textContent = "All";
        if (dot) dot.className = "pcs-dot pcs-dot-all";
      } else if (activeFilters.size === 1) {
        const key = [...activeFilters][0];
        const opt = document.querySelector(`#pcs-dropdown .pcs-option[data-filter="${key}"]`);
        lbl.textContent = opt ? opt.textContent.trim() : key;
        if (dot) dot.className = `pcs-dot pcs-dot-${key}`;
      } else {
        lbl.textContent = `${activeFilters.size} categories`;
        if (dot) dot.className = "pcs-dot pcs-dot-all";
      }
    }

    // URL param
    const params = isAll ? "" : `?filter=${[...activeFilters].join(",")}`;
    history.replaceState(null, "", location.pathname + params);
  }

  // ── Toggle a category filter ──────────────────────────────
  function toggleFilter(key) {
    if (key === "all") {
      activeFilters.clear();
    } else {
      if (activeFilters.has(key)) {
        activeFilters.delete(key);
      } else {
        activeFilters.add(key);
      }
    }
    syncButtonUI();
    renderAll();
  }

  // ── Init from URL ─────────────────────────────────────────
  const urlParam = new URLSearchParams(window.location.search).get("filter");
  if (urlParam) {
    urlParam.split(",").forEach(f => {
      if (f !== "all") activeFilters.add(f);
    });
  }
  syncButtonUI();
  renderAll();

  // ── Desktop filter buttons ────────────────────────────────
  document.querySelectorAll(".proj-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => toggleFilter(btn.dataset.filter));
  });

  // ── Tech search input ─────────────────────────────────────
  const searchInput = document.getElementById("proj-tech-search");
  const searchBtn = document.getElementById("proj-search-btn");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentQuery = searchInput.value.trim();
      renderAll();
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        currentQuery = searchInput.value.trim();
        renderAll();
      }
    });
  }
  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      searchInput.focus();
      currentQuery = searchInput.value.trim();
      renderAll();
    });
  }

  // ── Custom mobile dropdown ────────────────────────────────
  const customBtn      = document.getElementById("proj-custom-select");
  const customDropdown = document.getElementById("pcs-dropdown");

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
        toggleFilter(opt.dataset.filter);
        // keep dropdown open for multi-select; close only on All
        if (opt.dataset.filter === "all") {
          customDropdown.classList.remove("open");
          customBtn.setAttribute("aria-expanded", "false");
        }
      });
    });
  }
});