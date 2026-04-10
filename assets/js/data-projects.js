// ============================================================
//  data-projects.js — project data for Triona Lee's portfolio
//
//  Structure: grouped by school → year → projects[]
//  The render script flattens this into PORTFOLIO.projects
//  so all existing render-*.js code works unchanged.
// ============================================================

const PROJECT_DATA = [

  // ── SIT × UofG ─────────────────────────────────────────────
  {
    school: "sit",
    years: [
      {
        year: "y1",
        projects: [
          {
            type: "Backend Dev & DevOps",
            id: "SIT · Y1 · T1", term: "Trimester 1",
            title: "Assembly Language with Raspberry Pi",
            moduleName: "Computer Organisation and Architecture",
            moduleCode: "COA",
            desc: "C programming and Assembly with Raspberry Pi.",
            fullDesc: "",
            icon: "systems", iconLabel: "SYS",
            tags: ["C", "Assembly", "Raspberry Pi"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "Backend Dev & DevOps",
            id: "SIT · Y1 · T1", term: "Trimester 1",
            title: "Tic Tac Toe Game Program",
            moduleName: "Programming Methodology",
            moduleCode: "PM",
            desc: "Implement with testing and demonstrate your AI/ML enabled Tic Tac Toe game algorithm in C programming.",
            fullDesc: "",
            icon: "systems", iconLabel: "SYS",
            tags: ["C"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "Networks & IoT",
            id: "SIT · Y1 · T2", term: "Trimester 2",
            title: "FloodShield: IoT-based Underground Pipe Monitoring System",
            moduleName: "Computer Networks",
            moduleCode: "COMNET",
            desc: "Design, implement, and test an application implemented with 2–3 Raspberry Pis connected via wired/wireless LAN.",
            fullDesc: "",
            icon: "iot", iconLabel: "NET",
            tags: ["Cisco", "IoT", "Networking", "Raspberry Pi"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "Algorithms",
            id: "SIT · Y1 · T2", term: "Trimester 2",
            title: "Route Radar: Flight Map Routing Project",
            moduleName: "Data Structures and Algorithms",
            moduleCode: "DSA",
            desc: "Design and implement an efficient system for finding and ranking flight routes between airports.",
            fullDesc: "",
            icon: "data", iconLabel: "ALG",
            tags: ["Python", "Algorithms"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "Web, Database & OS",
            id: "SIT · Y1 · T2", term: "Trimester 2",
            title: "Hospital Management System",
            moduleName: "Object Oriented Programming",
            moduleCode: "OOP",
            desc: "Design and implementation of a Hospital Management System using the object-oriented programming paradigm in Java.",
            fullDesc: "",
            icon: "backend", iconLabel: "OOP",
            tags: ["Java", "OOP"],
            image: "", githubLink: "https://github.com/tri-o-na/OOP-Hospital-Management.git", 
            extraLinks: [
                { label: "Phase 1 Report (team of 6)", url: "https://docs.google.com/document/d/163U--2pIx-x_klNpg4zraARYNlEW9gFVsg9fBfXDtzY/edit?usp=sharing" },
                { label: "Phase 2 Report (group of 12)", url: "https://docs.google.com/document/d/1-DiJSAj1ZVFlJtA6vgOYnBSYy-EYVzHEAukI1v2s2Rg/edit?usp=sharing" }
            ],
          },
          {
            type: "Web, Database & OS",
            id: "SIT · Y1 · T3", term: "Trimester 3",
            title: "BugTracker: Rust-based Webapp",
            moduleName: "Web Programming",
            moduleCode: "WEB",
            desc: "Develop a Bug Tracking System using Rust and the Actix Web framework with SQLite, emphasizing robust design, security, and scalability.",
            fullDesc: "",
            icon: "design", iconLabel: "WEB",
            tags: ["Rust", "Actix", "SQLite"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "Web, Database & OS",
            id: "SIT · Y1 · T3", term: "Trimester 3",
            title: "Cryptocurrency Webapp",
            moduleName: "Database Systems",
            moduleCode: "DB",
            desc: "Design and develop a full-stack database application integrating both a relational (SQL) and non-relational (NoSQL) database, offering practical experience in modern data architecture.",
            fullDesc: "",
            icon: "backend", iconLabel: "DB",
            tags: ["Rust", "TypeScript", "SQL", "NoSQL"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "OS",
            id: "SIT · Y1 · T3", term: "Trimester 3",
            title: "Understanding use of AI",
            moduleName: "Operating Systems",
            moduleCode: "OS",
            desc: "Comprehensive programming assignment that required developing solutions for several tasks using two distinct scripting environments: Linux Bash shell script and Python.",
            fullDesc: "",
            icon: "systems", iconLabel: "SYS",
            tags: ["Bash", "Python"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "Design Innovation (Glasgow)",
            id: "SIT · Y1 · T3", term: "Trimester 3",
            title: "Airport Security Camera System",
            moduleName: "Design Innovation (Glasgow, Scotland)",
            moduleCode: "DI",
            desc: "Overseas Immersion Programme in Glasgow — interdisciplinary team designing a comprehensive drone port security camera system with hybrid local and cloud storage architecture.",
            fullDesc: "",
            icon: "design", iconLabel: "OIP",
            tags: ["Design Thinking", "HCI", "OIP", "Glasgow"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
        ],
      },
      {
        year: "y2",
        projects: [
          {
            type: "Web, Database & OS",
            id: "SIT · Y2 · T1/2", term: "Trimester 1/2",
            title: "Learning Journey Buddy",
            moduleName: "Professional Software Development & Team Project",
            moduleCode: "PSD",
            desc: "Six-month client-facing team project with an external industry partner.",
            fullDesc: "",
            icon: "design", iconLabel: "WEB",
            tags: ["Client Project", "Python", "SQL"],
            image: "", 
            githubLink: "", 
            extraLinks: [],
          },
          {
            type: "Cloud",
            id: "SIT · Y2 · T1", term: "Trimester 1",
            title: "AuraLearn: Cloud-based Webapp",
            moduleName: "Cloud and Distributed Computing",
            moduleCode: "CLOUD",
            desc: "Design and implement a cloud-based distributed system.",
            fullDesc: "",
            icon: "cloud", iconLabel: "CLD",
            tags: ["HTML", "CSS", "JavaScript", "Docker", "Kubernetes", "Firebase"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "Networks & IoT",
            id: "SIT · Y2 · T1", term: "Trimester 1",
            title: "Intelligent Autonomous Line-Following Robot",
            moduleName: "Embedded Systems Programming",
            moduleCode: "ESP",
            desc: "Develop an autonomous robot that follows a line, responds to encoded commands, avoids obstacles, and reports telemetry remotely.",
            fullDesc: "",
            icon: "iot", iconLabel: "IOT",
            tags: ["C", "Raspberry Pi Pico", "IoT"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "UI/UX & Social Innovation",
            id: "SIT · Y2 · T1/2", term: "Trimester 1/2",
            title: "SITogether",
            moduleName: "Social Innovation Project",
            moduleCode: "SIP",
            desc: "Cross-course group project solving a real societal problem — designed the full UI/UX prototype for the app.",
            fullDesc: "",
            icon: "design", iconLabel: "UX",
            tags: ["UI/UX", "Adobe XD", "HCI"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "Mobile & Design",
            id: "SIT · Y2 · T2", term: "Trimester 2",
            title: "MorphLearn: AI-driven Mobile App",
            moduleName: "Mobile App Development",
            moduleCode: "MAD",
            desc: "Develop and implement a real, fully featured mobile application in Android tailored to users' learning style.",
            fullDesc: "",
            icon: "design", iconLabel: "MOB",
            tags: ["Kotlin", "Android", "CI/CD"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "Data & IoT",
            id: "SIT · Y2 · T2", term: "Trimester 2",
            title: "UWB Localisation",
            moduleName: "Data Analytics",
            moduleCode: "DATA",
            desc: "Demonstrate the three stages of Data Analytics: Data Preparation, Data Mining, and Data Visualisation.",
            fullDesc: "",
            icon: "data", iconLabel: "DA",
            tags: ["Python", "Data Analytics"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "Networks & IoT",
            id: "SIT · Y2 · T2", term: "Trimester 2",
            title: "Fast React: Distributed Multi-Hop Wireless Button Game System",
            moduleName: "Internet of Things (Protocols & Networks)",
            moduleCode: "IOT",
            desc: "Design and implement a wireless button for a quiz game that allows players to answer questions and interact in real time.",
            fullDesc: "",
            icon: "iot", iconLabel: "IOT",
            tags: ["Arduino", "IoT"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
        ],
      },
    ],
  },

  // ── Temasek Polytechnic ────────────────────────────────────
  {
    school: "tp",
    years: [
      {
        year: "y1",
        projects: [
          {
            type: "Web, Database & OS",
            id: "TP · Y1 · S2", term: "S2",
            title: "Review.Hut: Restaurant Review Webapp",
            moduleName: "Coding / Database Development",
            moduleCode: "CDEV",
            desc: "Design and implement an application with an SQL database.",
            fullDesc: "",
            icon: "design", iconLabel: "WEB",
            tags: ["HTML", "CSS", "SQL", "JavaScript"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "Systems & Networking",
            id: "TP · Y1 · S1", term: "Semester 1",
            title: "Company Network Setup",
            moduleName: "Network Technology",
            moduleCode: "NETY",
            desc: "Configure the WAN network connecting Southeast Asia to cloud service facilities, and the LAN network for the respective offices.",
            fullDesc: "",
            icon: "iot", iconLabel: "NET",
            tags: ["Cisco Packet Tracer", "Networking"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "Mobile & Design",
            id: "TP · Y1 · S1", term: "Semester 1",
            title: "Clarity Music App",
            moduleName: "Computational Thinking",
            moduleCode: "COMT",
            desc: "Propose, design, develop, test and implement a music player application for a selected target audience using Android Studio.",
            fullDesc: "",
            icon: "design", iconLabel: "MOB",
            tags: ["Java", "Adobe XD", "Android Studio"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
        ],
      },
      {
        year: "intern",
        projects: [
          {
            type: "AI & Machine Learning",
            id: "TP · INT", term: "INT",
            title: "HelpLah!: AI-Powered Chatbot Optimisation",
            moduleName: "AI & Machine Learning Engineering Intern — DBS Bank",
            moduleCode: "INT",
            desc: "Improved an AI chatbot's ability to recognise and interpret error messages from screenshots using ML algorithms and NLP. Reduced processing times by 60%.",
            fullDesc: "",
            icon: "ai", iconLabel: "AI",
            tags: ["NLP", "LLMs", "Python", "ML"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
        ],
      },
      {
        year: "y2",
        projects: [
          {
            type: "Mobile & Design",
            id: "TP · Y2 · S1", term: "Semester 1",
            title: "Readium: Book Review Mobile App",
            moduleName: "Mobile App Development",
            moduleCode: "MBAP",
            desc: "Develop a working mobile application using the Flutter framework.",
            fullDesc: "",
            icon: "design", iconLabel: "MOB",
            tags: ["Flutter", "Dart", "Adobe XD"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "Web, Database & OS",
            id: "TP · Y2 · S1", term: "Semester 1",
            title: "Clotho: E-commerce Webapp",
            moduleName: "Full Stack Web Development",
            moduleCode: "FWEB",
            desc: "Develop a dynamic web application using MongoDB, Express, Angular, and Node.js.",
            fullDesc: "",
            icon: "design", iconLabel: "WEB",
            tags: ["MongoDB", "Angular", "Node.js"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "Cloud",
            id: "TP · Y2 · S2", term: "S2",
            title: "Eleganceia: Hotel Reservation Webapp",
            moduleName: "Cloud Application Development",
            moduleCode: "CADV",
            desc: "Develop a cloud-based web application using services from Amazon Web Services (AWS).",
            fullDesc: "",
            icon: "cloud", iconLabel: "CLD",
            tags: ["AWS", "JavaScript", "Postman"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "Networks & IoT",
            id: "TP · Y2 · S2", term: "S2",
            title: "Pool Water TPC Sensor",
            moduleName: "IoT Application Development",
            moduleCode: "ITAD",
            desc: "Propose, design, build and test a smart IoT solution for a real-life problem.",
            fullDesc: "",
            icon: "iot", iconLabel: "IOT",
            tags: ["IoT", "AWS", "JavaScript"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "Backend Dev & DevOps",
            id: "TP · Y2 · S2", term: "S2",
            title: "Dogtopia: Dog Review Web Application",
            moduleName: "DevOps (Development Operations)",
            moduleCode: "DVOPS",
            desc: "Apply DevOps principles and tooling across the full software development lifecycle.",
            fullDesc: "",
            icon: "backend", iconLabel: "DEV",
            tags: ["Jenkins", "Selenium", "Jira"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
          {
            type: "AI & Machine Learning",
            term: "S2",
            title: "Diamond Price Prediction Webapp",
            moduleName: "Machine Learning",
            moduleCode: "MLDP",
            desc: "Understand and apply Machine Learning techniques to build a price prediction model.",
            fullDesc: "",
            icon: "ai", iconLabel: "ML",
            tags: ["Python", "JupyterLab", "ML", "HTML", "CSS"],
            image: "", 
            githubLink: "", 
            extraLinks: [

            ],
          },
        ],
      },
    ],
  },
];

// ── Flatten into PORTFOLIO.projects for all render scripts ──
// Injects school + year into each project object automatically.
const PORTFOLIO = {
  projects: PROJECT_DATA.flatMap(schoolGroup =>
    schoolGroup.years.flatMap(yearGroup =>
      yearGroup.projects.map(p => ({
        ...p,
        school: schoolGroup.school,
        year:   yearGroup.year,
      }))
    )
  ),
};