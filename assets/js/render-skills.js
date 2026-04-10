// render-skills.js
// Languages get their own group.
// Category groups (tools/frameworks) can ALSO show languages that are
// relevant to that domain — languages appear in BOTH places intentionally.
document.addEventListener("DOMContentLoaded", () => {

  // ── Programming languages — shown as their own group first ────
  const LANGUAGES = [
    "Python", "Java", "JavaScript", "TypeScript",
    "Rust", "C", "Dart", "Kotlin", "HTML", "CSS",
    "SQL", "Assembly", "Bash",
  ];

  // ── Category groups: tools, frameworks, concepts ─────────────
  // These match tools/concepts AND can repeat languages where relevant.
  // Languages listed here will appear in both Languages AND the category.
  const GROUPS = [
    {
      key: "design",
      title: "Front-End & Design",
      icon: "✦",
      // languages relevant to this domain
      langs: ["HTML", "CSS", "JavaScript", "TypeScript", "Dart", "Kotlin"],
      // tools / frameworks / concepts only
      tools: [
        "Angular", "React", "Vue", "Flutter", "Vite.js",
        "Android", "Android Studio", "Adobe XD",
        "UI/UX", "HCI", "Design Thinking",
      ],
    },
    {
      key: "backend",
      title: "Back-End Development",
      icon: "▣",
      langs: ["Python", "Java", "Rust", "TypeScript", "SQL"],
      tools: [
        "Node.js", "MongoDB", "NoSQL", "SQLite",
        "Actix", "Express", "Laravel", "PHP",
        "REST", "Postman",
      ],
    },
    {
      key: "ai",
      title: "AI & Machine Learning",
      icon: "◈",
      langs: ["Python"],
      tools: [
        "NLP", "LLMs", "ML", "Machine Learning",
        "JupyterLab",
      ],
    },
    {
      key: "data",
      title: "Data & Algorithms",
      icon: "◇",
      langs: ["Python"],
      tools: [
        "Algorithms", "Data Analytics",
      ],
    },
    {
      key: "cloud",
      title: "Cloud & DevOps",
      icon: "◎",
      langs: [],
      tools: [
        "AWS", "Docker", "Kubernetes", "Firebase",
        "Jenkins", "Selenium", "Jira", "CI/CD",
      ],
    },
    {
      key: "iot",
      title: "IoT & Networking",
      icon: "⬡",
      langs: ["C"],
      tools: [
        "Arduino", "Cisco", "Cisco Packet Tracer",
        "Networking", "IoT",
        "Raspberry Pi", "Raspberry Pi Pico",
      ],
    },
    {
      key: "systems",
      title: "Systems & Low-Level",
      icon: "⬢",
      langs: ["C", "Assembly", "Rust", "Bash"],
      tools: [],
    },
  ];

  // ── Collect all unique tags from every project ────────────────
  const allTags = [...new Set(PORTFOLIO.projects.flatMap(p => p.tags))];

  // ── Helper: does a tag match any keyword? ─────────────────────
  function matchesAny(tag, keywords) {
    return keywords.some(kw =>
      tag.toLowerCase() === kw.toLowerCase() ||
      tag.toLowerCase().startsWith(kw.toLowerCase())
    );
  }

  // ── Build the Languages group from allTags ────────────────────
  const langTags = allTags.filter(t => matchesAny(t, LANGUAGES));

  // ── Build each category group ─────────────────────────────────
  // Each group = its relevant languages (filtered to what exists in allTags)
  //            + its tools (filtered to what exists in allTags)
  const categoryGroups = GROUPS.map(group => {
    const relevantLangs = allTags.filter(t => matchesAny(t, group.langs));
    const relevantTools = allTags.filter(t => matchesAny(t, group.tools));
    // Deduplicate, langs first then tools
    const tags = [...new Set([...relevantLangs, ...relevantTools])];
    return { ...group, tags };
  }).filter(g => g.tags.length > 0);

  // ── Render helper ─────────────────────────────────────────────
  function renderGroup(key, icon, title, tags) {
    if (!tags.length) return "";

    const half    = Math.ceil(tags.length / 2);
    const col1    = tags.slice(0, half);
    const col2    = tags.slice(half);
    const hasCols = tags.length > 5;

    const tagItem = t => `
      <div class="skill-item">
        <span class="skill-dot ${key}"></span>${t}
      </div>`;

    const bodyHtml = hasCols
      ? `<div class="skill-cols">
           <div class="skill-col">${col1.map(tagItem).join("")}</div>
           <div class="skill-col">${col2.map(tagItem).join("")}</div>
         </div>`
      : `<div class="skill-list">${tags.map(tagItem).join("")}</div>`;

    return `
      <div class="skill-group" data-category="${key}">
        <div class="skill-group-header">
          <span class="skill-group-icon">${icon}</span>
          <span class="skill-group-title">${title}</span>
          <span class="skill-group-count">${tags.length}</span>
        </div>
        ${bodyHtml}
      </div>`;
  }

  // ── Inject into page ──────────────────────────────────────────
  const grid = document.querySelector(".skills-grid");

  // Languages card spans full width — add a special class for that
  const langsHtml = langTags.length
    ? renderGroup("languages", "{ }", "Programming Languages", langTags)
        .replace('class="skill-group"', 'class="skill-group skill-group--wide"')
    : "";

  const categoriesHtml = categoryGroups
    .map(g => renderGroup(g.key, g.icon, g.title, g.tags))
    .join("");

  grid.innerHTML = langsHtml + categoriesHtml;
});