// ============================================================
//  data.js — all data for Triona Lee's portfolio
// ============================================================

var PORTFOLIO = {

  // ── Personal info ──────────────────────────────────────────
  name: {
    first: "Triona",
    last: "Lee",
  },
  title: "Computing Science Undergraduate",
  roles: ["Full-Stack Dev", "Mobile Dev", "AI / ML", "Cloud & DevOps", "UI/UX"],
  tagline: "Computing Science undergraduate at SIT × UofG, building practical, high-impact software with a focus on UI/UX, full-stack development, and mobile optimisation.",
  bio: "Computing Science undergraduate at Singapore Institute of Technology × University of Glasgow, building practical, high-impact software with a focus on UI/UX, full-stack development, and mobile optimisation.",
  availability: "Available for opportunities",
  internship: "Internship: 31 Aug 2026 — 9 Apr 2027",
  location: "Singapore",
  phoneNumber: "+65 9766 6962",
  languages: ["English", "Chinese"],
  photo: "assets/images/profile.jpg",
  resumeUrl: "https://drive.google.com/file/d/1X8TIW7_S29HYqqIbf_HZNZqXRUOZY9up/view",

  // ── Stats (home page hero) ─────────────────────────────────
  stats: [
    { num: "5+",  label: "Years of Study" },
    { num: "19+", label: "Technologies" },
    { num: "SG",  label: "Based in" },
  ],

  // ── Contact links ──────────────────────────────────────────
  contact: {
    email:    "triona.lee13@gmail.com",
    linkedin: { label: "triona-lee",  url: "https://www.linkedin.com/in/triona-lee/" },
    github:   { label: "tri-o-na",    url: "https://github.com/tri-o-na" },
    resume:{ label: "View PDF",   url: "https://drive.google.com/file/d/1X8TIW7_S29HYqqIbf_HZNZqXRUOZY9up/view" },
  },

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      degree: "BSc (Hons) Computing Science",
      institution: "Singapore Institute of Technology × University of Glasgow",
      period: "Sep 2024 — Oct 2027",
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Temasek Polytechnic",
      period: "Apr 2021 — May 2024",
    },
    {
      degree: "Secondary Education (GCE O-Level)",
      institution: "Kuo Chuan Presbyterian Secondary School",
      period: "Jan 2017 — Oct 2020",
    },
  ],

  // ── Achievements ───────────────────────────────────────────
  achievements: [
    { name: "Edusave Good Progress Award (GPA)",                        issuer: "Temasek Polytechnic",                        date: "Nov 2023" },
    { name: "Edusave Certificate of Education Achievement",             issuer: "Temasek Polytechnic",                        date: "Oct 2023" },
    { name: "CCA Merit Award (Arts) — Digital Production & Media Crew", issuer: "Temasek Polytechnic",                        date: "Jun 2023" },
    { name: "Colours Award",                                            issuer: "Kuo Chuan Presbyterian Secondary School",     date: "Oct 2020" },
    { name: "NYAA: National Youth Achievement Award",                   issuer: "",                                           date: "Jan 2018" },
    { name: "Edusave EAGLES Award",                                     issuer: "",                                           date: "Dec 2016" },
  ],

  // ── Certifications ─────────────────────────────────────────
  certifications: [
    { name: "Docker Fundamentals",      issuer: "Dell Technologies", date: "Oct 2025" },
    { name: "Kubernetes Fundamentals",  issuer: "Dell Technologies", date: "Oct 2025" },
    { name: "Cert Prep: Scrum Master",  issuer: "LinkedIn Learning", date: "Jul 2022" },
    { name: "Windows 10: Security",     issuer: "LinkedIn Learning", date: "Nov 2021" },
    { name: "KNIME Certification",      issuer: "KNIME",             date: "Sep 2021" },
  ],

  // ── Modules ────────────────────────────────────────────────
  // school: "sit" | "tp"
  // year:   "y1" | "y2" | "intern"
  // term:   "T1" | "T2" | "T3" | "INT" (for SIT) / "01"-"10" (for TP)
  modules: [
    // SIT Year 1
    { school:"sit", year:"y1", term:"T1", title:"Computer Organisation and Architecture",  subtitle:"C Programming and Assembly with Raspberry Pi" },
    { school:"sit", year:"y1", term:"T1", title:"Programming Methodology",                 subtitle:"C Programming" },
    { school:"sit", year:"y1", term:"T2", title:"Computer Networks",                       subtitle:"Packet Tracer, IoT" },
    { school:"sit", year:"y1", term:"T2", title:"Data Structures and Algorithms",           subtitle:"Python" },
    { school:"sit", year:"y1", term:"T2", title:"Object Oriented Programming",             subtitle:"Java in Eclipse" },
    { school:"sit", year:"y1", term:"T3", title:"Operating Systems",                       subtitle:"Bash Shell Script Programming" },
    { school:"sit", year:"y1", term:"T3", title:"Web Programming",                         subtitle:"Rust" },
    { school:"sit", year:"y1", term:"T3", title:"Database Systems",                        subtitle:"Rust, TypeScript, CSS, SQL, NoSQL" },
    { school:"sit", year:"y1", term:"T3", title:"Design Innovation (Glasgow, Scotland)",   subtitle:"Design Camera System for an Airport" },
    // SIT Year 2
    { school:"sit", year:"y2", term:"T1", title:"Professional Software Development & Team Project",   subtitle:"SQL DB, Python" },
    { school:"sit", year:"y2", term:"T1", title:"Embedded Systems Programming",            subtitle:"C, Raspberry Pi Pico" },
    { school:"sit", year:"y2", term:"T1", title:"Cloud and Distributed Computing",         subtitle:"HTML, CSS, JavaScript, Docker, Kubernetes, Firebase" },
    { school:"sit", year:"y2", term:"T1", title:"Social Innovation Project",               subtitle:"UI/UX for App Prototype" },
    { school:"sit", year:"y2", term:"T2", title:"Internet of Things (Protocols & Networks)",subtitle:"Arduino, .ino" },
    { school:"sit", year:"y2", term:"T2", title:"Mobile App Development",                  subtitle:"Android Studio, Kotlin, CI" },
    { school:"sit", year:"y2", term:"T2", title:"Data Analytics",                          subtitle:"Python, Charts, Data Analytics" },
    { school:"sit", year:"y2", term:"T3", title:"Information Visualisation",               subtitle:"In Progress" },
    { school:"sit", year:"y2", term:"T3", title:"Machine Learning",                        subtitle:"In Progress" },
    { school:"sit", year:"y2", term:"T3", title:"Special Topics in Emerging Technologies", subtitle:"In Progress" },
    { school:"sit", year:"y2", term:"T3", title:"Cyber Security Fundamentals",             subtitle:"In Progress" },
    // TP Year 1
    { school:"tp", year:"y1", term:"S1", title:"Computational Thinking",       subtitle:"Android Studio, Java, Adobe XD" },
    { school:"tp", year:"y1", term:"S1", title:"Network Technology",           subtitle:"Cisco Packet Tracer, IP Calculations" },
    { school:"tp", year:"y1", term:"S2", title:"Coding / Database Development",subtitle:"HTML, CSS, JavaScript, SQL" },
    // TP Year 2
    { school:"tp", year:"y2", term:"S1", title:"Mobile App Development",         subtitle:"Adobe XD, Android Studio, Dart, Flutter" },
    { school:"tp", year:"y2", term:"S1", title:"Full Stack Web Development",     subtitle:"MongoDB, Angular, Node.js, HTML, CSS" },
    { school:"tp", year:"y2", term:"S2", title:"DevOps (Development Operations)",subtitle:"Eclipse, Jenkins, JUnit, Selenium, Jira" },
    { school:"tp", year:"y2", term:"S2", title:"Machine Learning",               subtitle:"Python, HTML, CSS, JupyterLab" },
    { school:"tp", year:"y2", term:"S2", title:"Cloud Application Development",  subtitle:"HTML, CSS, JavaScript, AWS, Postman" },
    { school:"tp", year:"y2", term:"S2", title:"IoT Application Development",    subtitle:"JavaScript, AWS" },
    // TP Intern
    { school:"tp", year:"intern", term:"INT", title:"AI & Machine Learning Engineering Intern — DBS Bank", subtitle:"Natural Language Processing, LLMs" },
  ],

  // ── Work experience ────────────────────────────────────────
  experience: [
    {
      company: "DBS Bank",
      companyDesc: "One of Asia's largest banks, headquartered in Singapore.",
      role: "AI & Machine Learning Engineering Intern",
      period: "Apr 2023 — Mar 2024",
      points: [
        "Contributed to all stages of software development — from requirements gathering and design through to implementation, testing, and deployment — resulting in on-time delivery of a fully functional application.",
        "Took ownership of application performance and reliability, identifying areas for improvement and implementing solutions that enhanced accuracy and reduced vulnerabilities.",
        "Utilised machine learning algorithms to improve an AI-powered chatbot's ability to recognise and interpret error messages from screenshots.",
        "Integrated natural language processing (NLP) for better contextual understanding and optimised the AI model to reduce processing times by 60%.",
      ],
    },
    {
      company: "Uniqlo Singapore",
      role: "Part-Time Retail Sales Worker",
      period: "May 2024 — Aug 2024",
      points: [
        "Utilised RFID-based inventory management systems and POS terminals to maintain stock accuracy and streamline checkout operations, improving floor efficiency and customer throughput.",
        "Facilitated customer inquiries regarding product specifications and availability, demonstrating clear communication and a user-first approach to problem-solving in a high-volume environment.",
      ],
    },
    {
      company: "Challenger Technologies Limited",
      role: "Part-Time Retail Sales Worker",
      period: "Sep 2022 — Oct 2022",
      points: [
        "Managed visual merchandising, ensuring product displays were organised to enhance customer interaction with hardware.",
        "Collaborated with team members to resolve operational bottlenecks, utilising strong communication skills to coordinate floor layouts and inventory updates in a fast-paced retail setting.",
      ],
    },
    {
      company: "Bata Singapore",
      role: "Part-Time Retail Sales Worker",
      period: "Dec 2019 — Mar 2020",
      points: [
        "Demonstrated strong communication skills when liaising with colleagues and customers in a clear and professional manner, improving team efficiency.",
        "Emphasised teamwork by ensuring all team members attended to customers across different store sections, providing seamless service and increasing store productivity.",
      ],
    },
  ],

  };