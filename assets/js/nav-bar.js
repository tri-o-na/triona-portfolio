document.addEventListener("DOMContentLoaded", () => {
  const navPlaceholder = document.getElementById("main-nav");
  if (!navPlaceholder) return;

  const pages = [
    { label: "Home",       href: "index.html" },
    { label: "Skills",     href: "skills.html" },
    { label: "Experience", href: "experience.html" },
    { label: "Education",  href: "education.html" },
    { label: "Projects",   href: "projects.html" },
    { label: "Contact",    href: "contact.html" },
  ];

  const currentPath = window.location.pathname;

  function isActive(href) {
    const page = href.split(".")[0]; // e.g. "index", "projects"
    // project-detail should highlight Projects
    if (currentPath.includes("project-detail")) return href === "projects.html";
    return currentPath.includes(page) || (page === "index" && currentPath.endsWith("/"));
  }

  // Desktop tabs
  const tabsHtml = pages.map(p => `
    <li><a href="${p.href}"${isActive(p.href) ? ' class="active"' : ''}>${p.label}</a></li>
  `).join("");

  // Mobile menu links
  const mobileLinksHtml = pages.map(p => `
    <a href="${p.href}"${isActive(p.href) ? ' class="active"' : ''}>${p.label}</a>
  `).join("");

  navPlaceholder.innerHTML = `
    <a class="nav-logo" href="index.html">Triona Lee</a>
    <ul class="nav-tabs">${tabsHtml}</ul>
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  `;

  // Inject mobile dropdown after nav
  const mobileMenu = document.createElement("div");
  mobileMenu.className = "nav-mobile-menu";
  mobileMenu.id = "nav-mobile-menu";
  mobileMenu.innerHTML = mobileLinksHtml;
  navPlaceholder.after(mobileMenu);

  // Toggle open/close
  const hamburger = document.getElementById("nav-hamburger");
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  // Close menu when a link is clicked
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
    });
  });

  // Close when clicking outside
  document.addEventListener("click", e => {
    if (!navPlaceholder.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
    }
  });
});