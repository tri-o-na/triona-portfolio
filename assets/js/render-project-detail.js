// render-project-details.js
document.addEventListener("DOMContentLoaded", () => {
  function getDisplayId(p) {
    const schoolMap = { sit: "SIT", tp: "TP", dbs: "DBS" };
    const yearMap   = { y1: "Y1", y2: "Y2", intern: "INT" };
    const initials  = p.moduleCode || "";
    const parts = [
      schoolMap[p.school] || (p.school ? p.school.toUpperCase() : ""),
      yearMap[p.year]     || (p.year ? p.year.toUpperCase() : ""),
      p.term              || "",
      initials,
    ].filter(Boolean);
    return parts.join(" · ");
  }

  const params    = new URLSearchParams(window.location.search);
  const projectId = params.get("id");
  const project   = PORTFOLIO.projects.find(p => getDisplayId(p) === projectId);

  if (!project) {
    document.getElementById("detail-not-found").style.display = "block";
    document.getElementById("detail-content").style.display   = "none";
    document.getElementById("detail-feature-wall").style.display = "none";
    return;
  }

  // ── Shared maps ────────────────────────────────────────────
  const schoolLabels = {
    sit: "SIT × University of Glasgow",
    tp:  "Temasek Polytechnic",
    dbs: "DBS Bank — Internship",
  };
  const yearLabels = { y1: "Year 1", y2: "Year 2", intern: "Internship" };

  // ── Page title ─────────────────────────────────────────────
  document.title = `${project.title} | Triona Lee`;

  // ── ① Feature wall ────────────────────────────────────────
//   const wall = document.getElementById("detail-feature-wall");
//   if (project.image) {
//     wall.style.backgroundImage = `url('${project.image}')`;
//     wall.classList.add("has-image");
//   } else {
//     // Coloured placeholder based on icon type
//     wall.classList.add("placeholder", project.icon);
//     wall.innerHTML = `
//       <div class="wall-placeholder-inner">
//         <div class="thumb-icon ${project.icon} wall-icon">${project.iconLabel}</div>
//         <span class="wall-placeholder-hint">No cover image yet</span>
//       </div>`;
//   }

  // ── ② Breadcrumb ──────────────────────────────────────────
  document.getElementById("detail-breadcrumb-title").textContent = project.title;

  // ── ③ Header ──────────────────────────────────────────────
  document.getElementById("detail-id").textContent = project.id;
  document.getElementById("detail-title").textContent = project.title;
  document.getElementById("detail-school-badge").textContent =
    schoolLabels[project.school] || project.school;

  if (project.ongoing) {
    document.getElementById("detail-ongoing").style.display = "inline-flex";
  }

  const moduleEl = document.getElementById("detail-module");
  if (project.moduleName) {
    moduleEl.textContent = project.moduleName;
  } else {
    moduleEl.style.display = "none";
  }

  document.getElementById("detail-tags").innerHTML =
    project.tags.map(t => `<span class="tag">${t}</span>`).join("");

  // ── ④ Description ─────────────────────────────────────────
  document.getElementById("detail-full-desc").innerHTML =
    project.fullDesc || project.desc;

  // ── ⑤ Google Drive embeds ─────────────────────────────────

  // Extract Drive file ID from any sharing URL format
  function driveFileId(url) {
    if (!url) return null;
    const m = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) ||
              url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    return m ? m[1] : null;
  }

  // Converts a sharing URL to an embeddable preview URL (docs/slides/sheets only)
  function driveEmbedUrl(url) {
    if (!url) return null;
    if (url.includes("/preview") || url.includes("embedded=true")) return url;

    const docMatch = url.match(
      /docs\.google\.com\/(document|presentation|spreadsheets)\/d\/([^/]+)/
    );
    if (docMatch) {
      const type = docMatch[1];
      const id   = docMatch[2];
      if (type === "presentation") return `https://docs.google.com/presentation/d/${id}/embed?start=false&loop=false`;
      if (type === "spreadsheets") return `https://docs.google.com/spreadsheets/d/${id}/preview`;
      return `https://docs.google.com/document/d/${id}/preview`;
    }
    return null; // Drive file links handled separately below
  }

  const embedsContainer = document.getElementById("detail-embeds");

  if (project.extraLinks && project.extraLinks.length) {
    const linksWrap = document.getElementById("detail-sidebar-links-wrap");
    const linksEl   = document.getElementById("detail-sidebar-links");
    linksWrap.style.display = "block";

    // ── First pass: populate sidebar links ─────────────────────
    project.extraLinks.forEach(link => {
      if (!link.url || !link.label) return;
      linksEl.insertAdjacentHTML("beforeend", `
        <a class="detail-sidebar-link" href="${link.url}" target="_blank" rel="noreferrer">
          ${link.label} &rarr;
        </a>`);
    });

    // ── Second pass: render embeds below description ────────────
    project.extraLinks.forEach(link => {
      if (!link.url) return;

      const urlLower    = link.url.toLowerCase();
      const embedUrl    = driveEmbedUrl(link.url);
      const fileId      = driveFileId(link.url);
      const isDriveFile = !!fileId && link.url.includes("drive.google.com");
      const isVideo     = urlLower.endsWith('.mp4') || urlLower.endsWith('.webm');
      const isImage     = urlLower.endsWith('.jpg') || urlLower.endsWith('.jpeg') ||
                          urlLower.endsWith('.png') || urlLower.endsWith('.gif') ||
                          urlLower.endsWith('.webp');
      const isSlides    = link.url.includes("presentation");

      const captionHtml = link.caption ? `<p class="detail-embed-caption">${link.caption}</p>` : "";
      const labelHtml   = link.label   ? `<div class="detail-section-label">${link.label}</div>` : "";

      if (isDriveFile) {
        const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
        embedsContainer.insertAdjacentHTML("beforeend", `
          <div class="detail-embed-block">
            ${labelHtml}
            <div class="detail-embed-wrap detail-embed-wrap--slides">
              <iframe src="${previewUrl}" class="detail-embed-frame"
                allow="autoplay; fullscreen" allowfullscreen loading="lazy"
                title="${link.label || ''}"></iframe>
            </div>
            ${captionHtml}
          </div>`);

      } else if (embedUrl) {
        const wrapClass = isSlides ? "detail-embed-wrap detail-embed-wrap--slides" : "detail-embed-wrap";
        embedsContainer.insertAdjacentHTML("beforeend", `
          <div class="detail-embed-block">
            ${labelHtml}
            <div class="${wrapClass}">
              <iframe src="${embedUrl}" class="detail-embed-frame"
                allowfullscreen loading="lazy" title="${link.label || ''}"></iframe>
            </div>
            ${captionHtml}
          </div>`);

      } else if (isVideo) {
        embedsContainer.insertAdjacentHTML("beforeend", `
          <div class="detail-embed-block">
            ${labelHtml}
            <div class="detail-embed-wrap detail-embed-wrap--video">
              <video controls class="detail-embed-frame" style="background:var(--forest-deep);">
                <source src="${link.url}" type="video/mp4">
              </video>
            </div>
            ${captionHtml}
          </div>`);

      } else if (isImage) {
        embedsContainer.insertAdjacentHTML("beforeend", `
          <div class="detail-embed-block">
            ${labelHtml}
            <div class="detail-embed-wrap detail-embed-wrap--image">
              <img src="${link.url}"
                style="width:100%;height:auto;display:block;object-fit:contain;background:var(--cream);"
                alt="${link.caption || link.label || ''}">
            </div>
            ${captionHtml}
          </div>`);
      }
    });
  }

  // ── Sidebar ────────────────────────────────────────────────
  document.getElementById("detail-sidebar-school").textContent =
    schoolLabels[project.school] || project.school;
  document.getElementById("detail-sidebar-term").textContent =
    `${yearLabels[project.year] || project.year}, ${project.term}`;
  document.getElementById("detail-sidebar-type").textContent = project.type;

  if (project.relevantFor && project.relevantFor.length) {
    const FULL_ROLE_NAMES = {
      "Full-Stack Dev":  "Full-Stack Developer",
      "Front-End Dev":   "Front-End Developer",
      "Back-End Dev":    "Back-End Developer",
      "Mobile Dev":      "Mobile Developer",
      "Cloud & DevOps":  "Cloud & DevOps Engineer",
      "AI / ML":         "AI / Machine Learning Engineer",
      "UI/UX":           "UI/UX Designer",
      "IoT Dev":         "IoT Developer",
      "Embedded Dev":    "Embedded Systems Developer",
      "Data Engineer":   "Data Engineer",
      "Network Engineer":"Network Engineer",
      "Systems Dev":     "Systems Developer",
      "Web Dev":         "Web Developer",
    };
    const sidebar = document.querySelector(".detail-sidebar");
    const block = document.createElement("div");
    block.className = "detail-sidebar-block";
    block.innerHTML = `
      <div class="detail-sidebar-label">Relevant For</div>
      <ul class="detail-relevant-list">${project.relevantFor.map(r =>
        `<li>${FULL_ROLE_NAMES[r] || r}</li>`
      ).join("")}</ul>`;
    sidebar.insertBefore(block, sidebar.firstChild);
  }

  // ── GitHub button (header, below tags) ─────────────────────
  if (project.githubLink) {
    const githubBtn = document.getElementById("detail-github-btn");
    if (githubBtn) {
      githubBtn.href = project.githubLink;
      githubBtn.style.display = "inline-flex";
    }
  }

  // ── Header image (next to title) ──────────────────────────
  if (project.image) {
    const wrap = document.getElementById("detail-header-image");
    const img  = document.getElementById("detail-header-img");
    img.src = project.image;
    img.alt = project.title;
    wrap.style.display = "block";
  }
});