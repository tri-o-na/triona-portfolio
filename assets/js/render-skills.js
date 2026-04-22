// render-skills.js
document.addEventListener("DOMContentLoaded", () => {

  // ── Programming languages — EXACT match only ──────────────────
  const LANGUAGES = [
    "Python", "Java", "JavaScript", "TypeScript",
    "Rust", "C", "Dart", "Kotlin", "HTML", "CSS",
    "SQL", "Assembly", "Bash",
  ];

  // ── Category groups ───────────────────────────────────────────
  const GROUPS = [
    {
      key: "design",
      title: "Front-End & Design",
      icon: "✦",
      langs: ["HTML", "CSS", "JavaScript", "TypeScript", "Dart", "Kotlin"],
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
        "Node.js", "Actix", "Express", "Laravel", "PHP",
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

  // ── Databases group (explicit list, not derived from tags) ─────
  const DATABASE_ITEMS = [
    "SQL", "SQLite", "MySQL", "PostgreSQL",
    "MongoDB", "NoSQL", "Firebase", "Firestore", "AWS S3", "AWS DynamoDB"
  ];

  // ── Tags to exclude from skills entirely ─────────────────────
  const EXCLUDED_TAGS = ["Client Project", "OIP", "Glasgow"];

  // ── Collect all unique tags from every project ────────────────
  const allTags = [...new Set(PORTFOLIO.projects.flatMap(p => p.tags))]
    .filter(t => !EXCLUDED_TAGS.some(ex => ex.toLowerCase() === t.toLowerCase()));

  // ── Exact-match only for languages (no startsWith) ────────────
  function isLanguage(tag) {
    return LANGUAGES.some(l => tag.toLowerCase() === l.toLowerCase());
  }

  function matchesAny(tag, keywords) {
    return keywords.some(kw => tag.toLowerCase() === kw.toLowerCase());
  }

  // ── Build language tags — exact match only ────────────────────
  const langTags = allTags.filter(t => isLanguage(t));

  // ── Build database tags — from allTags + explicit list ────────
  const dbTags = [...new Set([
    ...allTags.filter(t => matchesAny(t, DATABASE_ITEMS)),
    ...DATABASE_ITEMS.filter(d => allTags.some(t => t.toLowerCase() === d.toLowerCase())),
  ])];

  // ── Build category groups ─────────────────────────────────────
  const categoryGroups = GROUPS.map(group => {
    const relevantLangs = allTags.filter(t => matchesAny(t, group.langs));
    const relevantTools = allTags.filter(t => matchesAny(t, group.tools));
    const tags = [...new Set([...relevantLangs, ...relevantTools])];
    return { ...group, tags };
  }).filter(g => g.tags.length > 0);

  // ── Render helper ─────────────────────────────────────────────
  function renderGroup(key, icon, title, tags, forceSingleCol) {
    if (!tags.length) return "";

    const half    = Math.ceil(tags.length / 2);
    const col1    = tags.slice(0, half);
    const col2    = tags.slice(half);
    const hasCols = !forceSingleCol && tags.length > 5;

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

  // Languages + Databases side by side in a paired wide row
  const langsHtml = renderGroup("languages", "{ }", "Programming Languages", langTags);
  const dbHtml    = renderGroup("databases", "⊞", "Databases", dbTags);

  const pairedHtml = (langsHtml || dbHtml)
    ? `<div class="skill-group-pair">${langsHtml}${dbHtml}</div>`
    : "";

  const categoriesHtml = categoryGroups
    .map(g => renderGroup(g.key, g.icon, g.title, g.tags))
    .join("");

  grid.innerHTML = pairedHtml + categoriesHtml;
});