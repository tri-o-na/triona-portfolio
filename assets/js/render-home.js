// render-home.js
document.addEventListener("DOMContentLoaded", () => {
  const d = PORTFOLIO;

  // Name
  document.querySelector(".hero-name").innerHTML =
    `${d.name.first}<br><em>${d.name.last}</em>`;

  // Eyebrow / availability
  document.querySelector(".hero-eyebrow").textContent = d.availability;

  // Title & bio
  document.querySelector(".hero-title").textContent = d.title;
  document.querySelector(".hero-bio").textContent = d.bio;

  // Stats
  const statGrid = document.querySelector(".hero-stat-grid");
  statGrid.innerHTML = d.stats.map(s => `
    <div class="hero-stat">
      <div class="hero-stat-num">${s.num}</div>
      <div class="hero-stat-label">${s.label}</div>
    </div>`).join("");

  // Hero links
  document.querySelector(".hero-links").innerHTML = `
    <a href="${d.contact.github.url}" class="hero-link" target="_blank" rel="noreferrer">GitHub</a>
    <span class="hero-link-sep">&middot;</span>
    <a href="${d.contact.linkedin.url}" class="hero-link" target="_blank" rel="noreferrer">LinkedIn</a>
    <span class="hero-link-sep">&middot;</span>
    <a href="mailto:${d.contact.email}" class="hero-link">Email</a>`;
  
  // Resume button — reads resumeUrl from data.js
  // Add  resumeUrl: "https://..."  to PORTFOLIO in data.js to activate
  const resumeBtn = document.getElementById("hero-resume-btn");
  if (resumeBtn) {
    if (d.resumeUrl) {
      resumeBtn.href = d.resumeUrl;
    } else {
      resumeBtn.style.display = "none"; // hide if not set
    }
  }

  // Photo alt
  const img = document.querySelector(".hero-photo-wrap img");
  if (img) img.alt = `${d.name.first} ${d.name.last}`;
});
