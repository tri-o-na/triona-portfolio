document.addEventListener("DOMContentLoaded", () => {
  const navPlaceholder = document.getElementById("main-nav");
  if (!navPlaceholder) return;

  navPlaceholder.innerHTML = `
      <a class="nav-logo" href="index.html">Triona Lee</a>
      <ul class="nav-tabs">
        <li><a href="index.html">Home</a></li>
        <li><a href="skills.html">Skills</a></li>
        <li><a href="experience.html">Experience</a></li>
        <li><a href="education.html">Education</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
  `;

  const currentPath = window.location.pathname;
  const navLinks = navPlaceholder.querySelectorAll(".nav-tabs a");

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");

    // Logic: Highlight if the URL matches the link, 
    // or if we are in project-detail.html, highlight 'projects.html'
    if (currentPath.includes(linkPath.split('.')[0])) {
      link.classList.add("active");
    }
  });
});