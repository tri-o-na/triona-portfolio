// render-experience.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#page-experience .inner-page");

  // Keep the section label + title, replace everything after
  const items = PORTFOLIO.experience.map(job => `
    <div class="exp-item">
      <div class="exp-meta">
        <div class="exp-period">${job.period}</div>
        <div class="exp-company">${job.company}</div>
      </div>
      <div class="exp-body">
        <div class="exp-role">${job.role}</div>
        <ul class="exp-points">
          ${job.points.map(p => `<li>${p}</li>`).join("")}
        </ul>
      </div>
    </div>`).join("");

  // Append after existing label/title
  container.insertAdjacentHTML("beforeend", items);
});
