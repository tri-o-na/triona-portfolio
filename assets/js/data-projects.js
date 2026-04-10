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
            image: "assets/images/PSD-chatbot.gif",
            githubLink: "",
            extraLinks: [
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
            ],
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
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              
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
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},

            ],
          },
          {
            type: "UI/UX & Social Innovation",
            id: "SIT · Y2 · T1/2", term: "Trimester 1/2",
            title: "SITogether",
            moduleName: "Social Innovation Project",
            moduleCode: "SIP",
            desc: "Cross-course group project solving a real societal problem: design the full UI/UX prototype for the app.",
            fullDesc: "",
            icon: "design", iconLabel: "UX",
            tags: ["UI/UX", "Adobe XD", "HCI"],
            image: "assets/images/SIP-SITogether.jpg",
            githubLink: "",
            extraLinks: [
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},

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
            image: "assets/images/MAD-MorphLearn.jpg",
            githubLink: "",
            extraLinks: [
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},

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
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},

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
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},

            ],
          },
        ],
      },
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
            fullDesc: `
              <p>Developed Assembly language code on the Raspberry Pi platform to calculate DRAM capacity based on user inputs:</p>
              <ul>
                <li><b>Input 1:</b> Number of row address bits.</li>
                <li><b>Input 2:</b> Number of column address bits.</li>
                <li><b>Input 3:</b> Number of data bits per memory cell.</li>
              </ul>
              <p>The program calculates and outputs the total capacity in bytes.</p>
              <blockquote>
                <b>Example:</b> 11 row bits, 11 column bits, 4 data bits = 2,097,152 bytes.
              </blockquote>
            `,
            icon: "systems", iconLabel: "SYS",
            tags: ["C", "Assembly", "Raspberry Pi"],
            image: "",
            githubLink: "",
            extraLinks: [
              { label: "Final Report", url: "https://docs.google.com/document/d/1_rVGtRqkQdU1MOqdLKJIeST3dKo_NkMf/edit?authuser=0&ouid=113774774617297771803&rtpof=true&sd=true&usp=sharing" },
              { label: "Final Presentation", url: "https://docs.google.com/presentation/d/1dMs8ssCZesVW-en13FiGfB0b7wXwOZJgsBS1ebJ_6Rg/present" },

            ],
          },
          {
            type: "Backend Dev & DevOps",
            id: "SIT · Y1 · T1", term: "Trimester 1",
            title: "Tic Tac Toe Game Program",
            moduleName: "Programming Methodology",
            moduleCode: "PM",
            desc: "Implement with testing and demonstrate your AI/ML enabled Tic Tac Toe game algorithm in C programming.",
            fullDesc: `
              <p>Write a C program to develop a 3x3 Tic Tac Toe game program. The design of the game will come with user-friendly graphical user interface (GUI). The GUI will minimally display player 1 (having symbol X) and player 2 (having symbol O), and the winner declared.</p>
              
              <p>The game program requires 2 game modes, one player and two player mode. One player mode is when the user plays with an AI.</p>
              <p> <b>Conclusion:</b> A completed and functional Tic Tac Toe Application with a Graphic User Interface GUI. </p>
            `,
            icon: "systems", iconLabel: "SYS",
            tags: ["C"],
            image: "",
            githubLink: "",
            extraLinks: [
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
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
              { label: "Proposal", url: "https://docs.google.com/document/d/1uQl0bJd6u8_Qhv_rJ4Sn4pXuuizZp36ufTkhtY0hn3Y/edit?authuser=0&usp=sharing"},
              { label: "Presentation", url: "https://drive.google.com/file/d/1GdlaxtL83ZwOxxhXK9FgRrIkfQT9JGvI/view?authuser=0&usp=sharing"},
              { label: "Poster", url: "assets/images/CNET-FloodShield-Poster.png"},

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
              { label: "Final Video Presentation", url: "https://drive.google.com/file/d/18m34hWpIvJFjAO8hwfDgGTfgLvysXEWv/view"},

            ],
          },
          {
            type: "Web, Database & OS",
            id: "SIT · Y1 · T2", term: "Trimester 2",
            title: "Hospital Management System",
            moduleName: "Object Oriented Programming",
            moduleCode: "OOP",
            desc: "Design and implementation of a Hospital Management System using the object-oriented programming paradigm in Java.",
            fullDesc: "This project involved the design and implementation of a Hospital Management System using the object-oriented programming paradigm in Java. Working within a large group of 12 that was subdivided into two six-student programming teams, the project was split into two phases. Phase 1 focused on individual teams developing an automatically assigned core module of the system, including producing a detailed technical report with usage explanation and Javadoc documentation. Phase 2 required the two programming teams in the larger group to consolidate their work into a single main program and integrate two additional modules selected from four modules provided by other groups in an executable object format. This emphasized real-world software development challenges, such as integrating black-box components, effective communication, and collaborative design.",
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
            fullDesc: "This project involved developing a Bug Tracking System using Rust and the Actix Web framework with SQLite for data storage, emphasizing robust design, security, and scalability. My main responsibility was implementing the core functionality of Project List State Management, which required designing a mechanism to hold a mutable, shared list of project names (such as 'Project A,' 'Project B,' etc.) across the application. This task required the correct application of Rust's concurrency primitives, such as the Arc (Atomically Reference Counted) and Mutex (Mutual Exclusion) wrappers, to ensure thread-safe read and write access to the shared project data by multiple, concurrent server processes. This hands-on experience demonstrated my ability to apply advanced concurrency and state management concepts in a modern, high-performance web framework.",
            icon: "design", iconLabel: "WEB",
            tags: ["Rust", "Actix", "SQLite"],
            image: "assets/images/CNET-FloodShield.png",
            githubLink: "",
            extraLinks: [
              { label: "Video Demo", url: "https://drive.google.com/file/d/1s2v0WvjSs-7ZNoeuwEA2FZe0twiQse6w/view"},

            ],
          },
          {
            type: "Web, Database & OS",
            id: "SIT · Y1 · T3", term: "Trimester 3",
            title: "CRYpt: Cryptocurrency Webapp",
            moduleName: "Database Systems",
            moduleCode: "DB",
            desc: "Design and develop a full-stack database application integrating both a relational (SQL) and non-relational (NoSQL) database, offering practical experience in modern data architecture.",
            fullDesc: "This group project involved the design and development of a full-stack database application that integrates both a relational (SQL) and a non-relational (NoSQL) database as its back-end, offering practical experience in complex, modern data architecture. My responsibilities included constructing the conceptual Entity-Relationship (ER) diagram and relational schema, implementing core functionalities using advanced SQL features (like nested queries and triggers), and designing and implementing the NoSQL component with appropriate data models. The final application, preferably with a GUI, demonstrated the system's ability to manage and query data across these two distinct technologies, requiring a detailed justification of the dual-backend modeling choices.",
            icon: "backend", iconLabel: "DB",
            tags: ["Rust", "TypeScript", "SQL", "NoSQL"],
            image: "",
            githubLink: "",
            extraLinks: [
              { label: "Progress Report", url: "https://drive.google.com/file/d/1ZZ2sDmc-B3dh0tPrdisJpgEYfhHdukBp/view"},
              { label: "Final Report", url: "https://drive.google.com/file/d/1jo-LKZPyqjNBZci5_XgqgHxPz_bUSooM/view"},
              { label: "Presentation Video", url: "https://drive.google.com/file/u/0/d/1aXbaILnPiv6m6DeBNrGtcm-8GfJP03sa/view"},

            ],
          },
          {
            type: "OS",
            id: "SIT · Y1 · T3", term: "Trimester 3",
            title: "Understanding use of AI",
            moduleName: "Operating Systems",
            moduleCode: "OS",
            desc: "Comprehensive programming assignment that required developing solutions for several tasks using two distinct scripting environments: Linux Bash shell script and Python.",
            fullDesc: "My primary contribution to this Operating Systems project was Question 2, a comprehensive programming assignment that required developing solutions for several tasks using two distinct scripting environments: Linux Bash shell script and Python. I was responsible for creating the required programs, such as one to check if a user-keyed-in number is prime, in both a self-developed Bash script and a self-developed Python function. The core of the project involved a rigorous, comparative analysis of these programming approaches—specifically, assessing the similarities, differences, advantages, and weaknesses between the codes I developed versus those generated by Generative AI (GenAI), evaluating factors like code structure, efficiency, and the time spent on development. This comparative study reinforced my understanding of OS command automation and high-level language capabilities, and provided valuable insights into the effective use of AI tools in software development.",
            icon: "systems", iconLabel: "SYS",
            tags: ["Bash", "Python"],
            image: "",
            githubLink: "",
            extraLinks: [
              { label: "Final Report", url: "https://docs.google.com/document/d/1gqFAvFQ8ofjcQHc4MHvq6U36EXuhEXJOh0wsoHKXoyg/edit?authuser=0&usp=sharing"},
              { label: "Presentation Video", url: "https://drive.google.com/file/d/1JfEaO_Gom-5ET9nhH-DkPH8lnaE_71-M/view"},
              { label: "Video Demo", url: "https://drive.google.com/file/d/1v1gSQ2dcW95CQsHu-xt4dKmJ6sD-MKuJ/view"},

            ],
          },
          {
            type: "Design Innovation (Glasgow)",
            id: "SIT · Y1 · T3", term: "Trimester 3",
            title: "FuturAir - Harthill Logistics Drone Port serving the Scottish Central Belt",
            moduleName: "Design Innovation (Glasgow, Scotland)",
            moduleCode: "DI",
            desc: "Overseas Immersion Programme in Glasgow: design a comprehensive drone port security camera system with hybrid local and cloud storage architecture.",
            fullDesc: `
              <p><b>Project Scope:</b> Design of a strategic Drone Port located near Harthill in Scotland’s Central Belt. This location was chosen for its logistical advantage, providing an aerial delivery service that bypasses difficult road networks to serve the surrounding towns and cities without the need for traditional runways.</p>
              
              <p style="padding-left: 20px;"><b>Design Philosophy:</b> The project prioritizes safety, practicality, and low-energy sustainability in alignment with the UN Sustainable Development Goals (SDGs). The design focuses on minimizing disruption to local communities while harmonizing with the natural environment through green energy utilization.</p>

              <p style="padding-left: 20px;"><b>Technical Research & Systems:</b> This comprehensive study includes research into the evolution of IT systems for airport operations and the design of a specialized camera security system. It explores the data sensors required to optimize operations, specifically focusing on camera footage for monitoring and user optimization.</p>

              <p style="padding-left: 20px;"><b>Proposed Solution:</b> The final design features a power-efficient facility capable of handling regular parcels and high-priority medical packages for hospitals. Key innovations include a specialized parcel sorting facility designed for rapid processing and high accuracy, ensuring a viable and future-proof logistics solution for the region.</p>
            `,
            icon: "design", iconLabel: "OIP",
            tags: ["Design Thinking", "HCI", "OIP", "Glasgow"],
            image: "assets/images/DI-FuturAir-Map-Layout.png",
            githubLink: "",
            extraLinks: [
              { label: "Panel Slide: Overview of Project", url: "https://drive.google.com/file/d/11tyVpg-OoErcIOO5mRvCkO3ZFr7CYX_U/view"},
              { label: "Final Report", url: "https://drive.google.com/file/d/1CFwUWpxiOMnqkazMdmucbAizdzMJoiNy/view"},
              { label: "Final Presentation Slides", url: "https://drive.google.com/file/d/1crH0xueWD1-fKd_vQ_UEcTppnEvIPkzW/view"},

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
            image: "assets/images/CDEV-Review.hut.jpeg",
            githubLink: "",
            extraLinks: [
              { label: "Proposal", url: "https://drive.google.com/file/d/1VztfyDpS3DpaInq6nmaJVJCXIfVMi5wy/view"},
              { label: "ER Diagram", url: "assets/images/CDEV-ER-Diagram.png"},
              { label: "Adobe XD: Low-Fi Prototype", url: "https://xd.adobe.com/view/238fa63b-0d03-4ea4-846e-6bc73c0ab65d-76dc/?fullscreen&hints=off"},
              { label: "Adobe XD: Hi-Fi Prototype", url: "https://xd.adobe.com/view/0e883a9e-c639-44bb-81d9-17f60de99fc7-5bdb/?fullscreen&hints=off"},
              { label: "Final Video Demo", url: "https://youtu.be/BvBPp_CO-FI"},

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
              { label: "Network Diagram", url: "assets/images/NETY-NetworkDiagram.jpg"},
              { label: "Final Report", url: "https://docs.google.com/document/d/1stHQmEXgxLw1ywKAN6MY1KwZ78SEJ0ew/edit?rtpof=true&sd=true&tab=t.0"},
              { label: "Final Presentation Slides", url: "https://docs.google.com/presentation/d/1vRKWwXiiboQOnms4LhCu-8wOeuCwwrW4/present?slide=id.p1"},
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
            image: "assets/images/COMT-Clarity.jpeg",
            githubLink: "",
            extraLinks: [
              { label: "Final UI App Demo on Adobe XD", url: "https://youtu.be/K6NaDIBPkQs"},
              { label: "Final App Demo on Android Studio", url: "https://youtu.be/rx7AffqwVD0"},

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
            image: "assets/images/DBS-HelpLah!.png",
            githubLink: "",
            extraLinks: [
              { label: "Final Report", url: "https://docs.google.com/document/d/1EoZUTf6ecQZPY7h-9GsXRNhs-2nEhyp8yQKYQGh_BM0/edit?usp=sharing"},
              { label: "Final Presentation", url: "https://drive.google.com/file/d/1n6cljT819m-5LPcixtoSVzQNhPY8FXrn/view?usp=sharing"},
              { label: "Final Video Demo", url: "assets/videos/DBS-FinalVideoDemo.mp4"},
              { label: "More Details", url: "https://sites.google.com/view/gwbl-triona-portfolio"},

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
            image: "assets/images/MBAP-Readium.jpeg",
            githubLink: "",
            extraLinks: [
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},

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
            image: "assets/images/FWEB-Clotho.jpeg",
            githubLink: "",
            extraLinks: [
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},

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
            image: "assets/images/CADV-eleganceia.png",
            githubLink: "",
            extraLinks: [
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},

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
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},

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
            image: "assets/images/DVOPS-Dogtopia.jpeg",
            githubLink: "",
            extraLinks: [
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},

            ],
          },
          {
            type: "AI & Machine Learning",
            term: "S2",
            title: "RadiantRocks: Diamond Price Prediction Webapp",
            moduleName: "Machine Learning",
            moduleCode: "MLDP",
            desc: "Understand and apply Machine Learning techniques to build a price prediction model.",
            fullDesc: "",
            icon: "ai", iconLabel: "ML",
            tags: ["Python", "JupyterLab", "ML", "HTML", "CSS"],
            image: "assets/images/MLDP-RadiantRocks.png",
            githubLink: "",
            extraLinks: [
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},
              { label: "", url: ""},

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
        year: yearGroup.year,
      }))
    )
  ),
};