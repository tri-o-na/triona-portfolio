// render-skills.js
document.addEventListener("DOMContentLoaded", () => {

  // ── Programming languages — EXACT match only ──────────────────
  const LANGUAGES = [
    "Python", "Java", "JavaScript", "TypeScript",
    "Rust", "C", "C++", "Dart", "Kotlin", "HTML", "CSS",
    "SQL", "Assembly", "Bash", "JSP",
  ];

  // ── Category groups — keyword → display section mapping ───────
  const GROUPS = [
    {
      key: "design",
      title: "Front-End & Design",
      icon: "✦",
      langs: ["HTML", "CSS", "JavaScript", "TypeScript", "Dart", "Kotlin"],
      tools: [
        "Angular", "React", "Vue", "Flutter", "Vite.js",
        "Jetpack Compose",
        "Android SDK", "Android Studio", "Adobe XD",
        "UI/UX", "HCI", "Design Thinking",
      ],
    },
    {
      key: "backend",
      title: "Back-End Development",
      icon: "▣",
      langs: ["Python", "Java", "Rust", "TypeScript", "SQL", "JSP"],
      tools: [
        "Node.js", "Actix", "Next.js", "Django", "LlamaIndex", "Kivy", "Express", "Laravel", "PHP",
        "REST", "Postman",
      ],
    },
    {
      key: "ai",
      title: "AI & Machine Learning",
      icon: "◈",
      langs: ["Python"],
      tools: [
        "NLP", "LLMs", "ML", "Machine Learning", "OCR",
        "scikit-learn", "JupyterLab",
      ],
    },
    {
      key: "data",
      title: "Data & Algorithms",
      icon: "◇",
      langs: ["Python"],
      tools: [
        "Algorithms", "Data Analytics", "scikit-learn",
      ],
    },
    {
      key: "cloud",
      title: "Cloud & DevOps",
      icon: "◎",
      langs: [],
      tools: [
        "AWS", "AWS S3", "Docker", "Kubernetes", "Firebase", "Firebase Auth", "Firestore",
        "Jenkins", "Selenium", "Jira", "JUnit", "CI/CD", "DevOps",
      ],
    },
    {
      key: "iot",
      title: "IoT & Networking",
      icon: "⬡",
      langs: ["C", "C++"],
      tools: [
        "Arduino", "Cisco Packet Tracer", "MQTT",
        "Raspberry Pi", "Raspberry Pi Pico",
      ],
    },
    {
      key: "systems",
      title: "Systems & Low-Level",
      icon: "⬢",
      langs: ["C", "C++", "Assembly", "Rust", "Bash"],
      tools: ["Eclipse IDE"],
    },
  ];

  // ── Collect all tech values from every project's tech object ──
  function collectTech(category) {
    return [...new Set(
      PORTFOLIO.projects
        .flatMap(p => (p.tech && p.tech[category]) ? p.tech[category] : [])
    )];
  }

  const allLangs   = collectTech("languages");
  const allFrames  = collectTech("frameworks");
  const allDbs     = collectTech("databases");
  const allApis    = collectTech("apis");
  const allInfra   = collectTech("infra");
  const allTools   = collectTech("tools");

  // Everything except databases, combined for group matching
  const allNonDb = [...new Set([...allLangs, ...allFrames, ...allApis, ...allInfra, ...allTools])];

  function matchesAny(item, keywords) {
    return keywords.some(kw => item.toLowerCase() === kw.toLowerCase());
  }

  // ── Build language tags — from tech.languages ─────────────────
  const langTags = allLangs.filter(l =>
    LANGUAGES.some(known => known.toLowerCase() === l.toLowerCase())
  );

  // ── Build database tags — from tech.databases ─────────────────
  const dbTags = allDbs;

  // ── Build category groups from all non-db tech values ─────────
  const categoryGroups = GROUPS.map(group => {
    const matched = allNonDb.filter(t =>
      matchesAny(t, group.langs) || matchesAny(t, group.tools)
    );
    return { ...group, tags: [...new Set(matched)] };
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