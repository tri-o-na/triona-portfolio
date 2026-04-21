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
            fullDesc: `
            <p><b>Module Details:</b></p>
            <ul>
              <li>A two trimesters, (roughly) eight-months second year module in the Computing Science bachelor degree.</li>
              <li>Students will work in a team of size from 4 - 8.</li>
              <li>Deliver the product as requested by the customer, in the said period, with up to production grade standard.</li>
            </ul>

            <p><b>Learning Outcomes:</b></p>
            <ol>
              <li>Manage a substantial team-based software project in a disciplined and organised manner;</li>
              <li>Work with a customer in a problem domain to elaborate, specify and refine requirements;</li>
              <li>Select, and employ industry standard software practices and tools as appropriate within a software process;</li>
              <li>Present project progress through short demonstrations;</li>
              <li>Review, analyse and adapt project processes within a process improvement framework.</li>
            </ol>
            
            <p><b>Learning Journey Buddy:</b></p>
            <p>The customer is seeking to strengthen cross-cultural engagement between Singaporean and international students through technology. With increasing student exchanges and cultural immersion programs, there is a need for an AI-driven platform that not only facilitates communication in multiple languages but also nurtures empathy, cultural sensitivity, and collaboration. The project envisions a web-based chatbot application equipped with smart features such as:</p>

            <ul>
              <li>Language support for Chinese and Thai (with possible extension to Korean).</li>
              <li>A framework to guide students through structured learning and problem-solving (e.g., robotics coding exercises).</li>
              <li>Administrative functions including automated mailing lists, user input fields, integration for certifications, and time zone adaptation for international groups.</li>
              <li>Administrative functions should display thoughtfulness in planning morning, afternoon, and evening activity blocks with buffer time.</li>
            </ul>

            <p>This initiative represents a step forward in using AI to improve student experiences across borders, making global learning more inclusive, interactive, and adaptive.</p>
            
            `,
            icon: "design", iconLabel: "WEB",
            tags: ["Client Project", "Python", "SQL"],
            image: "assets/images/PSD-chatbot.gif",
            githubLink: "",
            extraLinks: [
              { label: "Final Presentation", url: "https://docs.google.com/presentation/d/17-wKtHYF8zQev-q7qjlCot4PGnqXJCse/edit?usp=sharing&ouid=113774774617297771803&rtpof=true&sd=true" , caption: `` },
              { label: "General User Flow", url: "https://docs.google.com/document/d/1F7AJVt9pgxScGmN-XS23kxTH5xkM_sPQ/edit?usp=sharing&ouid=113774774617297771803&rtpof=true&sd=true" , caption: `` },
              { label: "Staff User Guide", url: "https://docs.google.com/document/d/1JY5E1CHENryX2M2Upt0C1zK_zdcVeeYV/edit?usp=sharing&ouid=113774774617297771803&rtpof=true&sd=true" , caption: `` },
              { label: "Teacher User Guide", url: "https://docs.google.com/document/d/1R_fQfGYHtb3Z4Edyp5lBJZAQYYaZd8l5/edit?usp=sharing&ouid=113774774617297771803&rtpof=true&sd=true" , caption: `` },
              { label: "Student User Guide", url: "https://docs.google.com/document/d/1XFqwseAfnASZncB2ykTRf_CT64FyZdv9/edit?usp=sharing&ouid=113774774617297771803&rtpof=true&sd=true" , caption: `` },
              { label: "Technical Documentation", url: "https://docs.google.com/document/d/1RH5rG8Xgrzo2vDCKHHQ4f5xKxnS7jtOc/edit?usp=sharing&ouid=113774774617297771803&rtpof=true&sd=true" , caption: `` },
            ],
          },
          {
            type: "Cloud",
            id: "SIT · Y2 · T1", term: "Trimester 1",
            title: "AuraLearn: Cloud-based Webapp",
            moduleName: "Cloud and Distributed Computing",
            moduleCode: "CLOUD",
            desc: "Design and implement a cloud-based distributed system.",
            fullDesc: `
            <p>Design and implement a smart, intelligent, reliable, and secure cloud-based distributed system incorporating cloud native frameworks such as containers and/or Kubernetes. The system must demonstrate an original contribution documented in a research article format, comparing it to related research or industrial work.</p>

            <p>You may choose one of two problem statements from Lion Befrienders or propose your own idea, such as:</p>
            <ul>
              <li>A distributed application utilizing cloud computing.</li>
              <li>An integrated system employing AI, cloud computing, and embedded systems.</li>
              <li>A distributed data collection and analytic framework for environmental monitoring.</li>
            </ul>

            <p>Working in groups, you will apply knowledge from Dell’s online courses to derive your own specification and design. Groups are responsible for dividing work and managing the project to deliver novel functionality and tangible outcomes.</p>
            `,
            icon: "cloud", iconLabel: "CLD",
            tags: ["HTML", "CSS", "JavaScript", "Docker", "Kubernetes", "Firebase"],
            image: "assets/images/CLOUD-ArchitecturalDiagram.png",
            githubLink: "",
            extraLinks: [
              { label: "Project Proposal", url: "https://drive.google.com/file/d/1yHbQPZlhqy4_cfH0li9l_sKUbDEHJJs5/view?usp=sharing" , caption: `` },
              { label: "Architectural Diagram", url: "assets/images/CLOUD-ArchitecturalDiagram.png" , caption: `` },
              { label: "Final Presentation", url: "https://drive.google.com/file/d/1HJPHMJV1oHYJFhw71DDyrl-2yaALtP7x/view?usp=sharing" , caption: `` },
              { label: "Final Report", url: "https://drive.google.com/file/d/1HV8lzVeeaX0a3zHouXgxBUUg-cvkJqhw/view?usp=sharing" , caption: `` },
              { label: "", url: "" , caption: `` },

            ],
          },
          {
            type: "Networks & IoT",
            id: "SIT · Y2 · T1", term: "Trimester 1",
            title: "Intelligent Autonomous Line-Following Robot",
            moduleName: "Embedded Systems Programming",
            moduleCode: "ESP",
            desc: "Develop an autonomous robot that follows a line, responds to encoded commands, avoids obstacles, and reports telemetry remotely.",
            fullDesc: `
            <p><b>Background:</b></p>
              <p>Line-following robots are a classic benchmark in embedded systems, testing sensor integration, control algorithms, and real-time decision making.</p>
            <br>
            <p><b>Objectives:</b></p>
            <ul>
              <li>Develop an autonomous robot that follows a line, responds to encoded commands, avoids obstacles, and reports telemetry remotely.</li>
            </ul>

            <p><b>Key Features:</b></p>
            <ul>
              <li>Single IR sensor + PID controller for line following.</li>
              <li>Barcode commands to trigger IMU-based precise turns.</li>
              <li>Ultrasonic sensor for obstacle detection/avoidance.</li>
              <li>MQTT communication to send live status and mapping data.</li>
            </ul>

            <p><b>Deliverables:</b></p>
            <ul>
              <li>Hardware and firmware implementing all features.</li>
              <li>Telemetry logs visualised on a PC or web dashboard.</li>
              <li>Demo run on a fixed test track with line + barcodes + obstacles.</li>
            </ul>

            <p><b>Constraints & Notes:</b></p>
            <ul>
              <li>Robot control must be stable.</li>
              <li>Telemetry should not interfere with line-following control.</li>
              <li>Required calibration and noise filtering for sensors.</li>
            </ul>
            `,
            icon: "iot", iconLabel: "IOT",
            tags: ["C", "Raspberry Pi Pico", "IoT"],
            image: "assets/images/ESP-RobotCar.jpg",
            githubLink: "",
            extraLinks: [
              { label: "Robot Car Model", url: "assets/images/ESP-RobotCar.jpg" , caption: `` },
              { label: "Final Video Demo", url: "https://drive.google.com/file/d/17aBa4kkCABS7xlAK9U_EjKjKImzAxYm7/view?usp=sharing" , caption: `` },
              { label: "Final Report", url: "https://drive.google.com/file/d/1DmzlJlvD2Uof6ShFjlb1uSFb1ZqIIMv8/view?usp=sharing" , caption: `` },
              { label: "", url: "" , caption: `` },
              { label: "", url: "" , caption: `` },

            ],
          },
          {
            type: "Social Innovation & UI/UX",
            id: "SIT · Y2 · T1/2", term: "Trimester 1/2",
            title: "SITogether",
            moduleName: "Social Innovation Project",
            moduleCode: "SIP",
            desc: "Cross-course group project solving a real societal problem: design the full UI/UX prototype for the app.",
            fullDesc: `
            <ul>
              <li>The Social Innovation Project (USI2001) is a 3-credit, student-led independent learning module and a graduation requirement.</li>
              <li>Working in interdisciplinary teams of 3 to 5, students use a multi-pronged, problem-solving approach to address multi-faceted issues in our pluralistic society, such as diversity, inclusivity, and sustainable practices.</li>
              <li>The project draws on design thinking principles to create a positive social impact for a specific community.</li>
              <li>To ensure sustainability and continuity, projects can extend from one cohort to another, leading to tangible outcomes.</li>
              <li>Teams may take up to 3 consecutive trimesters to complete the module, consulting with resource persons who act as consultants rather than supervisors.</li>
              <li>All registration and project communication are managed through xSiTe.</li>
            </ul>

            <p><b>Chosen Problem Statement:</b></p>
            <ul>
              <li>How might we create a more supportive academic environment for SIT students (freshmen) through the use of technology?</li>
            </ul>

            <p><b>Our group was selected for a showcase, however due to scheduling conflicts, were unable to make it.</b></p>
            `,
            icon: "design", iconLabel: "UX",
            tags: ["UI/UX", "Adobe XD", "HCI"],
            image: "assets/images/SIP-SITogether.jpg",
            githubLink: "",
            extraLinks: [
              { label: "Project Proposal Plan", url: "https://drive.google.com/file/d/19tYuC4qRGbdz4RUVRAK26NAirdFgv1EV/view?usp=sharing" , caption: `` },
              { label: "Final Poster", url: "https://drive.google.com/file/d/1emV1cVgbIU6zewwGt_ifoA6_2GIgxTpB/view?usp=sharing" , caption: `` },
              { label: "Final Video", url: "https://drive.google.com/file/d/1tDv5nuL4x_iamu6nclsLEQzJS_XFTsc3/view?usp=sharing" , caption: `` },
            ],
          },
          {
            type: "Mobile & Design",
            id: "SIT · Y2 · T2", term: "Trimester 2",
            title: "MorphLearn: AI-driven Mobile App",
            moduleName: "Mobile App Development",
            moduleCode: "MAD",
            desc: "Develop and implement a real, fully featured mobile application in Android tailored to users' learning style.",
            fullDesc: `
            <p><b>Objectives:</b></p>
            <p>The project is a trimester long implementation of a real, fully featured mobile application in Android. The main objectives are to:</p>
            <ul>
              <li>Learn to develop a working mobile application in Android</li>
              <li>Gain experience with some Agile software development methods such as Continuous Integration (CI), stand-up meetings and sprints</li>
              <li>Work in a team to develop a mobile application of moderate complexity</li>
            </ul>

            <p><b>Requirements:</b></p>
            <p>The mobile application should be a 100% native Android application. (No hybrid applications or hybrid app frameworks). The form factor can be a phone, tablet or wearable (watch), or any combination of form factors.</p>
            `,
            icon: "design", iconLabel: "MOB",
            tags: ["Kotlin", "Android", "CI/CD"],
            image: "assets/images/MAD-MorphLearn.jpg",
            githubLink: "",
            extraLinks: [
              { label: "Project Proposal", url: "https://drive.google.com/file/d/1_Knq_CwsZE3rKkXwdqDpCyzKPA6cE1Pg/view?usp=sharing" , caption: `` },
              { label: "Final Architectural Diagram", url: "assets/images/MAD-FinalArchitecturalDiagram.png" , caption: `` },
              { label: "Final Report", url: "https://drive.google.com/file/d/1S9R_aJreMR9MU638tFnng7r4BkSYxC6H/view?usp=sharing" , caption: `` },
              { label: "", url: "" , caption: `` },
              { label: "", url: "" , caption: `` },

            ],
          },
          {
            type: "Data & IoT",
            id: "SIT · Y2 · T2", term: "Trimester 2",
            title: "UWB Localisation",
            moduleName: "Data Analytics",
            moduleCode: "DATA",
            desc: "Demonstrate the three stages of Data Analytics: Data Preparation, Data Mining, and Data Visualisation.",
            fullDesc: `<p>A machine learning pipeline for Ultra-Wideband (UWB) indoor localisation, tackling LOS/NLOS signal classification and distance estimation across 7 diverse indoor environments. </p>z
            <p> I focused on the Cross-Environment Validation and creating the final architectural diagram </p>`,
            icon: "data", iconLabel: "DA",
            tags: ["Python", "Data Analytics"],
            image: "",
            githubLink: "",
            extraLinks: [
              { label: "Final Presentation Video", url: "https://drive.google.com/file/d/1nr40WPabd7Jo0egA-fCy7gxCdnnYasjQ/view?usp=sharing" , caption: `` },
              { label: "Final Report", url: "https://drive.google.com/file/d/1Fr0Z1wqfundEyxLKvYqSpoU2IcqUpocS/view?usp=sharing" , caption: `` },
              { label: "", url: "" , caption: `` },
              { label: "", url: "" , caption: `` },

            ],
          },
          {
            type: "Networks & IoT",
            id: "SIT · Y2 · T2", term: "Trimester 2",
            title: "Fast React: Distributed Multi-Hop Wireless Button Game System",
            moduleName: "Internet of Things (Protocols & Networks)",
            moduleCode: "IOT",
            desc: "Design and implement a wireless button for a quiz game that allows players to answer questions and interact in real time.",
            fullDesc: `
            <p><b>Wireless Button:</b></p>
            <p>Design and implement a wireless button for a quiz game that allows players to answer questions and interact with the game in real-time. The system should be able to determine who pressed the button first. The button should be easy to use, reliable, and able to communicate with the quiz game system wirelessly. The device should be usable face-to-face or remotely. Ensure the button is easy to use and intuitive for players. Implement reliable wireless communication between the button and the quiz game system. Conduct testing and evaluation to determine the effectiveness and usability of the button. The system should be secure and protected against unauthorised access and tampering.</p>
            <br>
            <p><b>Technical Considerations:</b></p>
            <ul>
              <li>BLE and WiFi</li>
              <li>Look into latency</li>
              <li>Ensure sufficient security</li>
            </ul>
            `,
            icon: "iot", iconLabel: "IOT",
            tags: ["Arduino", "IoT"],
            image: "",
            githubLink: "",
            extraLinks: [
              { label: "Project Proposal", url: "https://drive.google.com/file/d/1lSWG9xHDNvLt48kG4ODd4BDMo1azFBcH/view?usp=sharing" , caption: `` },
              { label: "Final Report", url: "https://drive.google.com/file/d/1apUYfF28GwIHocCDmpm0jq43qk0iYhb6/view?usp=sharing" , caption: `` },
              { label: "Final Video Demo", url: "https://drive.google.com/file/d/1iI-VmVYge7tlCn1nuT_sy_deRWmAKgrq/view?usp=sharing" , caption: `` },
              { label: "Final Presentation", url: "" , caption: `` },
              { label: "Final Poster", url: "https://drive.google.com/file/d/1PBT5kEW7zzKLwODzhtgy0v0YB6CHOj0O/view?usp=sharing" , caption: `` },

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
              { label: "Final Report", url: "https://docs.google.com/document/d/1_rVGtRqkQdU1MOqdLKJIeST3dKo_NkMf/edit?authuser=0&ouid=113774774617297771803&rtpof=true&sd=true&usp=sharing" , caption: `` },
              { label: "Final Presentation", url: "https://docs.google.com/presentation/d/1dMs8ssCZesVW-en13FiGfB0b7wXwOZJgsBS1ebJ_6Rg/present" },

            ],
          },
          {
            type: "Backend Dev & DevOps",
            id: "SIT · Y1 · T1", term: "Trimester 1",
            title: "Tic Tac Toe Game Program",
            moduleName: "Programming Methodology",
            moduleCode: "PGM",
            desc: "Implement with testing and demonstrate your AI/ML enabled Tic Tac Toe game algorithm in C programming.",
            fullDesc: `
              <p>Write a C program to develop a 3x3 Tic Tac Toe game program. The design of the game will come with user-friendly graphical user interface (GUI). The GUI will minimally display player 1 (having symbol X) and player 2 (having symbol O), and the winner declared.</p>
              
              <p>The game program requires 2 game modes, one player and two player mode. One player mode is when the user plays with an AI.</p>
              <p> <b>Conclusion:</b> A completed and functional Tic Tac Toe Application with a Graphic User Interface GUI. </p>
            `,
            icon: "systems", iconLabel: "SYS",
            tags: ["C"],
            image: "assets/images/PGM-TicTacToe.jpg",
            githubLink: "",
            extraLinks: [
              { label: "Final Report", url: "https://docs.google.com/document/d/19ET7QotK00rYyQR8tr3LbrEVfy1_4xy8N24NJHhc750/edit?authuser=0&usp=sharing" , caption: `` },
              { label: "Final Video Demo", url: "https://drive.google.com/file/d/1HLjXAqaEKGZ8HSb6nMLkC9sN0eO_x6dm/view?usp=sharing" , caption: `` },
              { label: "", url: "" , caption: `` },
              { label: "", url: "" , caption: `` },
              { label: "", url: "" , caption: `` },
            ],
          },
          {
            type: "Networks & IoT",
            id: "SIT · Y1 · T2", term: "Trimester 2",
            title: "FloodShield: IoT-based Underground Pipe Monitoring System",
            moduleName: "Computer Networks",
            moduleCode: "CNET",
            desc: "Design, implement, and test an application implemented with 2–3 Raspberry Pis connected via wired/wireless LAN.",
            fullDesc: `<p>This project provides a hands-on application of computer network knowledge by challenging teams of 4–6 students to design, implement, and test a network application. The primary technical objective is to create a solution for device communication that simulates real-world challenges in network architecture and configuration. Teams must utilize 2-3 Raspberry Pi devices connected via wired or wireless LAN, and these devices must communicate exclusively through the team\'s developed program, with serial communication strictly prohibited. </p>
            
            <p> <b>Final Product</b>: A completed and functional pipe monitoring system that detects blockages, alerting the homeowner  </p>
            `,
            icon: "iot", iconLabel: "NET",
            tags: ["Cisco", "IoT", "Networking", "Raspberry Pi"],
            image: "assets/images/CNET-FloodShield.png",
            githubLink: "",
            extraLinks: [
              { label: "Project Proposal", url: "https://docs.google.com/document/d/1uQl0bJd6u8_Qhv_rJ4Sn4pXuuizZp36ufTkhtY0hn3Y/edit?authuser=0&usp=sharing" , caption: `` },
              { label: "Final Poster", url: "assets/images/CNET-FloodShield-Poster.png" },
              { label: "Final Presentation", url: "https://drive.google.com/file/d/1GdlaxtL83ZwOxxhXK9FgRrIkfQT9JGvI/view?authuser=0&usp=sharing" , caption: `` },

            ],
          },
          {
            type: "Algorithms",
            id: "SIT · Y1 · T2", term: "Trimester 2",
            title: "Route Radar: Flight Map Routing Project",
            moduleName: "Data Structures and Algorithms",
            moduleCode: "DSA",
            desc: "Design and implement an efficient system for finding and ranking flight routes between airports.",
            fullDesc: `<p> This was a Flight Map Routing Project done in a team of six students to design and implement an efficient system for finding and ranking flight routes between airports. The core implementation, which had to be developed in Python, required the application of data structures like graphs (e.g., adjacency lists) to model airport connections, and relevant algorithms to find the shortest, lowest-cost, or most cost-effective paths. A crucial deliverable was a user-friendly UI/visualization, potentially using a map, to display route options, total distance, ticket prices, and travel time. The project emphasized practical application of theoretical knowledge, effective teamwork, and was assessed based on the correct use of data structures and algorithms, features implemented, and the quality of the visualization. </p>
            <br>
            <p><b>Final Product:</b></p>
            <ul>
              <li>A completed and functional Flight Map Routing Application to calculate the shortest route, lowest cost and most effective path between airports</li>
              <li>I mainly focused on the algorithms part for this project, working on getting the shortest route using our custom algorithm inspired by the Floyd-Warshall Algorithm which mainly finds the best route for both direct and layover flights</li>
            </ul>
            `,
            icon: "data", iconLabel: "ALG",
            tags: ["Python", "Algorithms"],
            image: "assets/images/DSA-RouteRadar.jpg",
            githubLink: "",
            extraLinks: [
              { label: "Final Video Presentation", url: "https://drive.google.com/file/d/1oolPARnabet44eZ0wK7uqnV_hrpTbNhY/view?usp=sharing" },

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
              { label: "Phase 1 Report (team of 6)", url: "https://docs.google.com/document/d/163U--2pIx-x_klNpg4zraARYNlEW9gFVsg9fBfXDtzY/edit?usp=sharing" , caption: `` },
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
            image: "",
            githubLink: "",
            extraLinks: [
              { label: "Video Demo", url: "https://drive.google.com/file/d/19kJug7idzTQVRDNRiXhIqAPU8lZI2TOB/view?usp=sharing" },

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
            image: "assets/images/DB-ArchitecturalDiagram.png",
            githubLink: "",
            extraLinks: [
              { label: "Progress Report", url: "https://drive.google.com/file/d/1ZZ2sDmc-B3dh0tPrdisJpgEYfhHdukBp/view" , caption: `` },
              { label: "Final Report", url: "https://drive.google.com/file/d/1jo-LKZPyqjNBZci5_XgqgHxPz_bUSooM/view" , caption: `` },
              { label: "Presentation Video", url: "https://drive.google.com/file/d/1_jYe-ewTAAP2OIKp2HUCLp_yk-7HM5Wj/view?usp=sharing" },

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
              { label: "Final Report", url: "https://docs.google.com/document/d/1gqFAvFQ8ofjcQHc4MHvq6U36EXuhEXJOh0wsoHKXoyg/edit?authuser=0&usp=sharing" , caption: `` },
              { label: "Final Presentation Video", url: "https://drive.google.com/file/d/1JfEaO_Gom-5ET9nhH-DkPH8lnaE_71-M/view?usp=sharing" , caption: `` },
              { label: "Final Video Demo", url: "https://drive.google.com/file/d/1v1gSQ2dcW95CQsHu-xt4dKmJ6sD-MKuJ/view?usp=sharing" },

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
              { label: "Panel Slide: Overview of Project", url: "https://drive.google.com/file/d/11tyVpg-OoErcIOO5mRvCkO3ZFr7CYX_U/view" , caption: `` },
              { label: "Final Report", url: "https://drive.google.com/file/d/1CFwUWpxiOMnqkazMdmucbAizdzMJoiNy/view" , caption: `` },
              { label: "Final Presentation Slides", url: "https://drive.google.com/file/d/1crH0xueWD1-fKd_vQ_UEcTppnEvIPkzW/view" },

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
            type: "Mobile & Design",
            id: "TP · Y1 · S1", term: "Semester 1",
            title: "Clarity Music App",
            moduleName: "Computational Thinking",
            moduleCode: "COMT",
            desc: "Propose, design, develop, test and implement a music player application for a selected target audience using Android Studio.",
            fullDesc: `
              <ul>
                <li>Propose, design, develop, test and implement a music player application for the selected target audience using Android Development Platform.</li>
                <li>An Integrated Mobile Application with a suitable user interface that enhances students' experience.</li>
              </ul>
              <p><b>Final Product:</b>  A completed and functional Music Player application, which follows closely the Hi-Fi design, planned and designed in Adobe XD.</p>`,
            icon: "design", iconLabel: "MOB",
            tags: ["Java", "Adobe XD", "Android Studio"],
            image: "assets/images/COMT-Clarity.jpeg",
            githubLink: "",
            extraLinks: [
              { label: "Final UI App Demo on Adobe XD", url: "https://drive.google.com/file/d/1WkpqdlObjaLkcTT1cR9k6S0KkMjeuJry/view?usp=sharing" , caption: `` },
              { label: "Final App Demo on Android Studio", url: "https://drive.google.com/file/d/1dud9MK9SSJxy-l8havk64FbzTLObogrC/view?usp=sharing" },

            ],
          },
          {
            type: "Web, Database & OS",
            id: "TP · Y1 · S2", term: "S2",
            title: "Review.Hut: Restaurant Review Webapp",
            moduleName: "Coding / Database Development",
            moduleCode: "CDEV",
            desc: "Design and implement an application with an SQL database.",
            fullDesc: `I made a restaurant review website consisting of a list of restaurants that users can add reviews to, authentication, the add to favourites function and more.`,
            icon: "design", iconLabel: "WEB",
            tags: ["HTML", "CSS", "SQL", "JavaScript"],
            image: "assets/images/CDEV-Review.hut.jpeg",
            githubLink: "",
            extraLinks: [
              { label: "Proposal", url: "https://drive.google.com/file/d/1VztfyDpS3DpaInq6nmaJVJCXIfVMi5wy/view" , caption: `` },
              { label: "ER Diagram", url: "assets/images/CDEV-ER-Diagram.png" , caption: `` },
              { label: "Adobe XD: Low-Fidelity Prototype", url: "https://xd.adobe.com/view/238fa63b-0d03-4ea4-846e-6bc73c0ab65d-76dc/?fullscreen&hints=off" , caption: `` },
              { label: "Adobe XD: Hi-Fidelity Prototype", url: "https://xd.adobe.com/view/0e883a9e-c639-44bb-81d9-17f60de99fc7-5bdb/?fullscreen&hints=off" , caption: `` },
              { label: "Final Video Demo", url: "https://drive.google.com/file/d/1bj5W8HO8iei_BlhgTSpwe6p7m93zKaje/view?usp=sharing" },

            ],
          },
          {
            type: "Systems & Networking",
            id: "TP · Y1 · S1", term: "Semester 1",
            title: "Company Network Setup",
            moduleName: "Network Technology",
            moduleCode: "NETY",
            desc: "Configure the WAN network connecting Southeast Asia to cloud service facilities, and the LAN network for the respective offices.",
            fullDesc: `
              <ul>
                <li>Engaged by a MNC company to implement their Network Infrastructure as a Network Consultant Role.</li>
                <li>Tasked to configure the WAN network connecting the Southeast-Asia to clouds service facility in other countries as well as the LAN network configuration for the respective offices for the Southeast-Asia offices.</li>
              </ul>
              <br>
              <p><b>Final Product:</b></p>
              <ul>
                <li>Research and recommended the appropriate hardware such as routers and switches taking into consideration of cost-effectiveness and scalability.</li>
                <li>Implement the network configuration ensuring hosts from each country are able to communicate with each other.</li>
              </ul>`,
            icon: "iot", iconLabel: "NET",
            tags: ["Cisco Packet Tracer", "Networking"],
            image: "assets/images/NETY-NetworkDiagram.jpg",
            githubLink: "",
            extraLinks: [
              { label: "Network Diagram", url: "assets/images/NETY-NetworkDiagram.jpg" , caption: `` },
              { label: "Final Report", url: "https://docs.google.com/document/d/1stHQmEXgxLw1ywKAN6MY1KwZ78SEJ0ew/edit?rtpof=true&sd=true&tab=t.0" , caption: `` },
              { label: "Final Presentation Slides", url: "https://docs.google.com/presentation/d/1vRKWwXiiboQOnms4LhCu-8wOeuCwwrW4/present?slide=id.p1" },
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
            desc: "Improved an AI's ability to recognise and interpret error messages from screenshots using ML algorithms and NLP. Reduced processing times by 60%.",
            fullDesc: `<p><b>Main Function:</b> Streamlines the debugging process.</p>

            <p><b>Target Users:</b> Developers in DBS. </p>

            <p><b>Purpose:</b> Solve code errors quickly and efficiently with GenAI. </p>
            
            **Improve the current project's accuracy of detecting the correct error from a screenshot`,
            icon: "ai", iconLabel: "AI",
            tags: ["NLP", "LLMs", "Python", "ML"],
            image: "assets/images/DBS-HelpLah!.png",
            githubLink: "",
            extraLinks: [
              { label: "Final Report", url: "https://docs.google.com/document/d/1EoZUTf6ecQZPY7h-9GsXRNhs-2nEhyp8yQKYQGh_BM0/edit?usp=sharing" , caption: `` },
              { label: "Final Presentation", url: "https://drive.google.com/file/d/1n6cljT819m-5LPcixtoSVzQNhPY8FXrn/view?usp=sharing" },
              // { label: "Final Video Demo", url: "assets/videos/DBS-FinalVideoDemo.mp4" , caption: `` },
              { label: "More Details", url: "https://sites.google.com/view/gwbl-triona-portfolio" },

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
            fullDesc: `
              <ul>
                <li>The purpose of this project is to understand and apply the knowledge of mobile application development.</li>
                <li>The project consists of three parts and involves developing a working mobile application using the Flutter framework:</li>
                <ul>
                  <li>Part 1 is to produce a proposal for your mobile application and develop a high-fidelity prototype.</li>
                  <li>Part 2 is to develop a self-contained basic Flutter application based on the proposed functionalities, navigation and design layout.</li>
                  <li>Part 3 is to personalise and enhance the Flutter application from Part 2 with basic authentication, data persistency and additional features.</li>
                </ul>
              </ul>
              <br>
              <p><b>Final Product:</b></p>
              <ul>
                <li>A completed and functional Book Review application, which follows closely the Hi-Fi design, planned and designed in Adobe XD.</li>
              </ul>`,
            icon: "design", iconLabel: "MOB",
            tags: ["Flutter", "Dart", "Adobe XD", "Android Studio"],
            image: "assets/images/MBAP-Readium.jpeg",
            githubLink: "",
            extraLinks: [
              { label: "Adobe XD: Hi-Fidelity Prototype", url: "https://xd.adobe.com/view/035ee033-aea4-4491-9ed2-b0e1db529794-560d/?fullscreen" , caption: `` },
              { label: "ER Diagram", url: "assets/images/MBAP-ER-Diagram.png" , caption: `` },
              { label: "Final Video Demo", url: "https://drive.google.com/file/d/1YipZ-CGC5TTsSAkM62-CLEQst8i2npAx/view?usp=sharing" },

            ],
          },
          {
            type: "Web, Database & OS",
            id: "TP · Y2 · S1", term: "Semester 1",
            title: "Clotho: E-commerce Webapp",
            moduleName: "Full Stack Web Development",
            moduleCode: "FWEB",
            desc: "Develop a dynamic web application using MongoDB, Express, Angular, and Node.js.",
            fullDesc: `<ul>
                <li>This project aims to understand and apply the knowledge of dynamic web application development to develop a web application using Mongo, Express, Angular, and Node.js.</li>
              </ul>
              <br>
              <p><b>Final Product:</b></p>
              <ul>
                <li>A completed and functional Clothing E-commerce Web Application, which follows closely the Hi-Fi design, planned and designed in Adobe XD.</li>
              </ul>`,
            icon: "design", iconLabel: "WEB",
            tags: ["HTML", "CSS", "MongoDB", "Angular", "Node.js"],
            image: "assets/images/FWEB-Clotho.jpeg",
            githubLink: "",
            extraLinks: [
              { label: "Adobe XD: Low-Fidelity Prototype", url: "https://xd.adobe.com/view/06f8f57a-590c-4e6d-a96d-09348457d1eb-53ab/?fullscreen" , caption: `` },
              { label: "Use Case Diagram", url: "assets/images/FWEB-UseCaseDiagram.png" , caption: `` },
              { label: "Mongo DB Data Modelling Diagram / ER Diagram", url: "assets/images/FWEB-ERDiagram.png" , caption: `` },
              { label: "Final Presentation", url: "https://docs.google.com/presentation/d/1M8e8MVAZLlM_g17-M2Oyn_oiZe_57BLy/present?slide=id.p1" , caption: `` },
              { label: "", url: "" , caption: `` },

            ],
          },
          {
            type: "Cloud",
            id: "TP · Y2 · S2", term: "S2",
            title: "Eleganceia: Hotel Reservation Webapp",
            moduleName: "Cloud Application Development",
            moduleCode: "CADV",
            desc: "Develop a cloud-based web application using services from Amazon Web Services (AWS).",
            fullDesc: `<ul>
              <li>The purpose of this project is to understand and apply the knowledge of cloud application development.</li>
              <li>The project consists of three parts and involves developing a cloud-based web application using services from Amazon Web Services (AWS):</li>
              <ul>
                <li>Part 1 is to produce a proposal for your cloud-based web application and develop a high-fidelity prototype.</li>
                <li>Part 2 is to implement at least two microservices that provide HTTP GET, POST, PUT and DELETE functions/API that link(s) to the manipulation of a database with the inclusion of business logic when applicable.</li>
                <li>Part 3 is to develop a cloud-based web application that consumes the microservices created in Part 2. It also involves a Self-Directed Learning (SDL) report and a Quiz.</li>
              </ul>
            </ul>
            <br>
            <p><b>Final Product:</b> A completed and functional Hotel Reservation Web Application, which follows closely the Hi-Fi design, planned and designed in Adobe XD </p>`,
            icon: "cloud", iconLabel: "CLD",
            tags: ["AWS", "JavaScript", "Postman"],
            image: "assets/images/CADV-eleganceia.png",
            githubLink: "",
            extraLinks: [
              { label: "Use Case Diagram", url: "assets/images/CADV-UseCaseDiagram.png", 
                caption: `<p>The app targets vacationers and staycationers with guest and registered user roles. Guests have limited access, mainly to sign up or view all hotels. Registered users, who've signed up and logged in, enjoy full site access, including reservations, room views, and favorites.</p>

                <p>The database stores vital data about hotels, rooms, user profiles, favourites, and reservations. It's closely linked to reservation-making since it provides necessary user details, like names and email addresses. The credit payment service focuses solely on payments, letting users choose between credit card and on-site payment during reservations.</p>
                <br>
                <ul>
                  <li><b>Microservice1</b> - User Info: Purple</li>
                  <li><b>Microservice2</b> - Hotels, rooms, reservations: Dark blue</li>
                  <li><b>Microservice3</b> - Favourites: Green</li>
                </ul>` },
              { label: "Microservices Architectural Diagram", url: "assets/images/CADV-ArchitecturalDiagram.png" , caption: `The client is linked to the Amazon S3 storage, the AWS Elastic Load Balancing for security and filtering purposes and the Amazon API Gateway which ensures only selected data can pass through. This then leads to the 3 microservices I have created User Info, Hotels, Rooms & Reservations and Favourites. ` },
              { label: "ER Diagram", url: "assets/images/CADV-ER-Diagram.png" , caption: `` },
              { label: "Adobe XD: Hi-Fidelity Prototype", url: "https://xd.adobe.com/view/b339f52a-432d-4795-bf25-2dc9dbd303a3-e66a/" , caption: `` },
              { label: "Adobe XD: Low-Fidelity Prototype", url: "https://xd.adobe.com/view/3fa75de2-63a5-4e74-b4dd-8599801b498b-6af4/?fullscreen&hints=off" , caption: `` },
              { label: "Final Video Demo", url: "https://drive.google.com/file/d/1rCEnPi4mo4hEebJD5iXz1UBXXSEvMVLz/view?usp=sharing" },

            ],
          },
          {
            type: "Networks & IoT",
            id: "TP · Y2 · S2", term: "S2",
            title: "Pool Water TPC Sensor",
            moduleName: "IoT Application Development",
            moduleCode: "ITAD",
            desc: "Propose, design, build and test a smart IoT solution for a real-life problem.",
            fullDesc: `
            <ul>
              <li>The purpose of this project is to understand and apply the knowledge of Internet of Things (IoT).</li>
              <li>You are to propose, design, build and test a smart IoT solution for a real-life problem.</li>
              <li>There is no restriction to the nature of the IoT solution. It can be of any business domain.</li>
              <li>You are to be as creative as you can, but do be realistic and ensure that you can complete the IoT solution within the specified timeframe.</li>
              <li>As a minimum requirement, your IoT solution must apply the following knowledge that you have learnt:</li>
              <ul>
                <li>Setup of IoT Thing</li>
                <li>Storing of data into DynamoDB</li>
                <li>Usage of Simple Notification Service</li>
                <li>Usage of Lambda functions</li>
              </ul>
            </ul>
            <br>
            <p><b>Final Product:</b></p>
            <ul>
              <li>A sensor to detect pool water's temperature, pH and chlorine levels which can be set by the owner or user via a mobile device or tablet.</li>
              <li>Alerts will also be sent to the owner if the pool's quality is not up to standard (when the levels are too low or too high) which may harm the swimmer when swimming.</li>
            </ul>`,
            icon: "iot", iconLabel: "IOT",
            tags: ["IoT", "AWS", "JavaScript"],
            image: "assets/images/ITAD-ArchitecturalDiagram.png",
            githubLink: "",
            extraLinks: [
              { label: "Architectural Diagram", url: "assets/images/ITAD-ArchitecturalDiagram.png" , caption: `` },
              { label: "Final Presentation", url: "https://drive.google.com/file/d/1tsIcPcAFSe5aJ21M9jlCBO0FNQb5GUGQ/view" , caption: `` },

            ],
          },
          {
            type: "Backend Dev & DevOps",
            id: "TP · Y2 · S2", term: "S2",
            title: "Dogtopia: Dog Review Web Application",
            moduleName: "DevOps (Development Operations)",
            moduleCode: "DVOPS",
            desc: "Apply DevOps principles and tooling across the full software development lifecycle.",
            fullDesc: `
            <ul>
              <li><b>Part 1:</b></li>
              <ul>
                <li>Each group (this project had a group of 2) is tasked to create a web application utilizing standard continuous integration and delivery techniques such as Version Control using Source Code Management tools to create a web application that meets the project specification.</li>
                <li>Project Contribution was assessed individually. Each member was to generate a report to affirm their web application and understanding of Version Control.</li>
              </ul>
              <li><b>Part 2:</b></li>
              <ul>
                <li>Each group is tasked to construct a DevOps automation pipeline. You will be configuring Continuous Integration and Delivery (CI/CD) and automated testing tools to enhance the web application created in the previous assignment.</li>
                <li>Project Contribution was assessed individually. Each member was to generate a report to affirm their web application and understanding of the DevOps automation pipelines, test automation, and your implemented advanced feature.</li>
              </ul>
            </ul>
            <br>
            <p><b>Final Product:</b> A completed and functional Dog Review Web Application</p>`,
            icon: "backend", iconLabel: "DEV",
            tags: ["Jenkins", "Selenium", "Jira", "Eclipse", "JUnit"],
            image: "assets/images/DVOPS-Dogtopia.jpeg",
            githubLink: "", //mirror from master
            extraLinks: [
              { label: "Final Presentation Part 1", url: "https://drive.google.com/file/d/17viQfFaV68SmszEzVbfx3mhyNTVEfl-O/view?usp=sharing" , caption: `` },
              { label: "Final Presentation Part 2", url: "https://drive.google.com/file/d/1u6FpFOLgEhiwAk1dnEJAmSfAHU5IQwpK/view?usp=sharing" , caption: `` },
            ],
          },
          {
            type: "AI & Machine Learning",
            term: "S2",
            title: "RadiantRocks: Diamond Price Prediction Webapp",
            moduleName: "Machine Learning",
            moduleCode: "MLDP",
            desc: "Understand and apply Machine Learning techniques to build a price prediction model.",
            fullDesc: `
            <p><b>Background/Description:</b></p>
            <ul>
              <li>The purpose of this project is to understand and apply the knowledge of Machine Learning.</li>
              <li>In this project, I demonstrated my ability to:</li>
              <ul>
                <li>Implement the processes of machine learning tasks in Python 3.</li>
                <li>Explain and document the processes that you have taken in your machine learning tasks.</li>
                <li>Present the steps that you have taken in your tasks.</li>
              </ul>
            </ul>

            <p><b>Final Product: </b> A completed and functional Diamond Prediction Web Application, which predicts the price of a diamond with the given specifications.</p>`,
            icon: "ai", iconLabel: "ML",
            tags: ["Python", "JupyterLab", "ML", "HTML", "CSS"],
            image: "assets/images/MLDP-RadiantRocks.png",
            githubLink: "",
            extraLinks: [
              { label: "Final Presentation", url: "https://drive.google.com/file/d/1Rrycy_LFoy6povwJsu-OhXQ8CTP4mp2H/view" , caption: `` },
              { label: "Diamond Prices Dataset", url: "https://docs.google.com/spreadsheets/d/1a8grd8zz97aQLuFvA2H-BdhSdqUconW24JkZEL2vm18/edit?usp=sharing" , caption: `` },

            ],
          },
        ],
      },
    ],
  },
];

// ── Flatten into PORTFOLIO.projects for all render scripts ──
// Works whether data.js has already declared PORTFOLIO or not.
if (typeof PORTFOLIO === "undefined") {
  var PORTFOLIO = {};
}
PORTFOLIO.projects = PROJECT_DATA.flatMap(schoolGroup =>
  schoolGroup.years.flatMap(yearGroup =>
    yearGroup.projects.map(p => ({
      ...p,
      school: schoolGroup.school,
      year: yearGroup.year,
    }))
  )
);
