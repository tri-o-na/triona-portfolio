// render-experience.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#page-experience .inner-page");

  // Build accordion list
  const listEl = document.createElement("div");
  listEl.className = "exp-list";

  listEl.innerHTML = PORTFOLIO.experience.map((job, i) => `
    <div class="exp-item${i === 0 ? ' open' : ''}">
      <div class="exp-header">
        <div class="exp-header-left">
          <div class="exp-role">${job.role}</div>
          <div class="exp-company">${job.company}</div>
          ${job.companyDesc ? `<div class="exp-company-desc">${job.companyDesc}</div>` : ""}
        </div>
        <div class="exp-header-right">
          <div class="exp-period">${job.period}</div>
          <div class="exp-chevron">▼</div>
        </div>
      </div>
      <div class="exp-body">
        <div class="exp-body-inner">
          <ul class="exp-points">
            ${job.points.map(p => `<li>${p}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>`).join("");

  container.appendChild(listEl);

  // Accordion toggle
  listEl.querySelectorAll(".exp-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.closest(".exp-item");
      const isOpen = item.classList.contains("open");
      // Close all
      listEl.querySelectorAll(".exp-item").forEach(el => el.classList.remove("open"));
      // Open clicked if it was closed
      if (!isOpen) item.classList.add("open");
    });
  });
});