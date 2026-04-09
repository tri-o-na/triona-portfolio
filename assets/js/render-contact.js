// render-contact.js
document.addEventListener("DOMContentLoaded", () => {
  const d = PORTFOLIO;

  // Contact rows
  document.querySelector(".contact-items").innerHTML = `
    <a href="mailto:${d.contact.email}" class="contact-item">
      <span class="contact-label">Email</span>
      <span class="contact-value">${d.contact.email}</span>
      <span class="contact-arrow">&rarr;</span>
    </a>
    <a href="${d.contact.linkedin.url}" target="_blank" rel="noreferrer" class="contact-item">
      <span class="contact-label">LinkedIn</span>
      <span class="contact-value">${d.contact.linkedin.label}</span>
      <span class="contact-arrow">&rarr;</span>
    </a>
    <a href="${d.contact.github.url}" target="_blank" rel="noreferrer" class="contact-item">
      <span class="contact-label">GitHub</span>
      <span class="contact-value">${d.contact.github.label}</span>
      <span class="contact-arrow">&rarr;</span>
    </a>
    <a href="${d.contact.portfolio.url}" class="contact-item">
      <span class="contact-label">Portfolio</span>
      <span class="contact-value">${d.contact.portfolio.label}</span>
      <span class="contact-arrow">&rarr;</span>
    </a>
    <div class="contact-item contact-item-static">
      <span class="contact-label">Phone</span>
      <span class="contact-value">${d.phoneNumber}</span>
      <span class="contact-arrow contact-arrow--muted">&middot;</span>
    </div>`;

  // Right panel
  document.querySelector(".contact-quote").textContent = `"${d.tagline}"`;
  document.querySelector(".contact-location").textContent =
    `${d.location} · ${d.languages.join(" & ")}`;
});
