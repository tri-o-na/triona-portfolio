// render-skills.js
// Skills are derived automatically from project tags — no manual list needed.
document.addEventListener("DOMContentLoaded", () => {

  // Manually defined groups mapping display name → tag keywords to match
  const GROUPS = [
    {
      title: "Languages",
      match: ["Python","Java","JavaScript","TypeScript","HTML","CSS","Dart","SQL","C","Rust","Assembly","Kotlin","Bash"],
    },
    {
      title: "Frontend & UI/UX",
      match: ["Adobe XD","Angular","Flutter","Android","Responsive","HCI","UI/UX","Vite.js"],
    },
    {
      title: "Backend & Data",
      match: ["Node.js","MongoDB","NoSQL","REST","Postman","SQLite","SQL","Laravel","PHP","Firebase","Actix","MySQL"],
    },
    {
      title: "Cloud, DevOps & IoT",
      match: ["AWS","Docker","Kubernetes","Jenkins","Selenium","Jira","CI/CD","IoT","Arduino"],
    },
    {
      title: "AI & Machine Learning",
      match: ["NLP","LLMs","ML","Machine Learning","JupyterLab","Algorithms","Data Analytics"],
    },
    {
      title: "Systems & Networking",
      match: ["Cisco","Networking","Raspberry Pi","Assembly","Embedded","IoT"],
    },
  ];

  // Collect all unique tags from every project
  const allTags = [...new Set(PORTFOLIO.projects.flatMap(p => p.tags))];

  // Match tags into groups (case-insensitive partial match)
  const grid = document.querySelector(".skills-grid");
  grid.innerHTML = GROUPS.map(group => {
    const matched = allTags.filter(tag =>
      group.match.some(kw => tag.toLowerCase().includes(kw.toLowerCase()))
    );
    if (!matched.length) return "";
    return `
      <div class="skill-group">
        <div class="skill-group-title">${group.title}</div>
        <div class="skill-list">
          ${matched.map(tag => `
            <div class="skill-item">
              <span class="skill-dot"></span>${tag}
            </div>`).join("")}
        </div>
      </div>`;
  }).join("");
});
