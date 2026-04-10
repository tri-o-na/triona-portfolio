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
  document.getElementById("detail-full-desc").textContent =
    project.fullDesc || project.desc;

  // ── ⑤ Google Drive embeds ─────────────────────────────────
  // Converts a sharing URL to an embeddable preview URL.
  // Supports: Google Docs, Slides, Sheets, Drive file viewer.
  function driveEmbedUrl(url) {
    if (!url) return null;

    // Already an embed/preview URL — use as-is
    if (url.includes("/preview") || url.includes("embedded=true")) return url;

    // Google Docs / Slides / Sheets: /edit → /preview
    const docMatch = url.match(
      /docs\.google\.com\/(document|presentation|spreadsheets)\/d\/([^/]+)/
    );
    if (docMatch) {
      const type = docMatch[1];
      const id   = docMatch[2];
      if (type === "presentation")  return `https://docs.google.com/presentation/d/${id}/embed?start=false&loop=false`;
      if (type === "spreadsheets")  return `https://docs.google.com/spreadsheets/d/${id}/preview`;
      return `https://docs.google.com/document/d/${id}/preview`;
    }

    // Drive file: /file/d/ID/view → /file/d/ID/preview
    const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
    if (driveMatch) {
      return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
    }

    // Drive open?id= link
    const openMatch = url.match(/[?&]id=([^&]+)/);
    if (openMatch && url.includes("drive.google.com")) {
      return `https://drive.google.com/file/d/${openMatch[1]}/preview`;
    }

    return null; // not a recognisable Drive link — skip embed, show link only
  }

  const embedsContainer = document.getElementById("detail-embeds");

  if (project.extraLinks && project.extraLinks.length) {
    const linksWrap = document.getElementById("detail-sidebar-links-wrap");
    const linksEl   = document.getElementById("detail-sidebar-links");
    linksWrap.style.display = "block";

    project.extraLinks.forEach(link => {
      const embedUrl = driveEmbedUrl(link.url);

      // Always add to sidebar as a clickable link
      linksEl.insertAdjacentHTML("beforeend", `
        <a class="detail-sidebar-link" href="${link.url}" target="_blank" rel="noreferrer">
          ${link.label} &rarr;
        </a>`);

      // If it's a Drive link, also embed it inline below the description
      if (embedUrl) {
        embedsContainer.insertAdjacentHTML("beforeend", `
          <div class="detail-embed-block">
            <div class="detail-section-label">${link.label}</div>
            <div class="detail-embed-wrap">
              <iframe
                src="${embedUrl}"
                class="detail-embed-frame"
                allowfullscreen
                loading="lazy"
                title="${link.label}">
              </iframe>
            </div>
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

  if (project.githubLink) {
    document.getElementById("detail-sidebar-github-wrap").style.display = "block";
    document.getElementById("detail-sidebar-github").href = project.githubLink;
  }
});