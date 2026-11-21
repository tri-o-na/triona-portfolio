// render-experience1.js - Vertical timeline design with logos
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("exp-timeline");
  if (!list) return;

  const logoMap = {
    "Panasonic Industrial Devices Singapore": "assets/logo/panasonic_logo.jpg",
    "DBS Bank": "assets/logo/dbs_bank_logo.jpg",
    "Uniqlo Singapore": "assets/logo/uniqlo_logo.jpg",
    "Challenger Technologies Limited": "assets/logo/challenger_technologies_ltd_logo.jpg",
    "Bata Singapore": "assets/logo/bata_singapore_logo.jpg"
  };

  const jobs = [...PORTFOLIO.experience].sort((a, b) => b.start.localeCompare(a.start));

  list.innerHTML = jobs.map(job => {
    const cls = [
      "tl-entry",
      job.type === "tech" ? "tl-entry--tech" : "",
      job.current ? "tl-entry--current" : "",
    ].filter(Boolean).join(" ");

    const logoPath = logoMap[job.company] || null;
    const logoHtml = logoPath 
      ? `<img src="${logoPath}" alt="${job.company}" class="tl-logo">`
      : "";

    return `
      <li class="${cls}">
        <span class="tl-dot" aria-hidden="true"></span>
        <div class="tl-content">
          <div class="tl-header">
            <div class="tl-info">
              <p class="tl-period">${job.period}${job.current ? '<span class="tl-now">Ongoing</span>' : ""}</p>
              <h2 class="tl-company">${job.company}</h2>
              <p class="tl-role">${job.role}</p>
            </div>
            ${logoHtml}
          </div>
          <ul class="tl-points">${job.points.map(p => `<li>${p}</li>`).join("")}</ul>
        </div>
      </li>`;
  }).join("");
});
