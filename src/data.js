import universeImg from "./assets/universe_project.png";
import topicNestImg from "./assets/topicnest_project.png";
import moduleQuestImg from "./assets/modulequest_project.jpg";
import ppisImg from "./assets/ppis_project.jpg";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Served from /public; the phone number is redacted from this copy
export const resumeUrl = `${import.meta.env.BASE_URL}Glory_Charity_Lion_Resume.pdf`;

export const roles = ["Software Engineer", "Problem Solver", "Curious Builder"];

// Short, verifiable proof points shown on the first screen
export const heroFacts = [
  { label: "SWE Intern", detail: "HDI Family International" },
  { label: "Head of Technology", detail: "GDG NUS Computing" },
  { label: "Teaching Assistant", detail: "NUS School of Computing" },
  { label: "AWS Certified", detail: "Cloud Practitioner" },
];

export const education = [
  {
    title: "National University of Singapore",
    period: "Aug 2025 – May 2029",
    subtitle: "Bachelor of Computing in Computer Science, Minor in Quantitative Finance",
    points: [
      "Year 2 undergraduate",
      "Coursework: Software Engineering, Data Structures and Algorithms, Computer Organization, Discrete Structures",
    ],
  },
  {
    title: "St. Louis 1 Senior High School, Surabaya",
    period: "2022 – 2025",
    points: [
      "22/23 and 24/25 Valedictorian",
      "Top-10 ranking student every semester",
      "Vice President of Sports and Health Department 22/23",
      "Head of IT Fest 24' Committee",
      "Coordinator of Prom Night 25' Monetary Affairs",
      "Head of Physics Team for Study Excursion 24'",
    ],
  },
  {
    title: "Petra 1 Junior High School, Surabaya",
    period: "2019 – 2022",
    points: [
      "Graduated in top 5 students overall",
      "President of Student Council 21/22",
      "Treasurer of English Club 21/22",
      "Treasurer of Music Club 21/22",
    ],
  },
];

// Ordered by engineering relevance; `featured` roles get a highlighted card
export const experienceGroups = [
  {
    id: "professional",
    label: "Professional Experience",
    items: [
      {
        role: "Software Engineering Intern",
        org: "HDI Family International",
        period: "Jun 2026 – Jul 2026",
        featured: true,
        tech: ["PHP", "Laravel", "jQuery", "Bootstrap"],
        summary: "Took an HR careers and recruitment platform from blank repo to working product.",
        points: [
          "Architected the platform end-to-end in Laravel, modelling hiring as a stateful workflow that tracks every candidate’s stage",
          "Automated candidate and recruiter notifications with cron-scheduled jobs",
          "Built token-authenticated self-service flows so candidates can securely manage their own applications",
          "Built a service-layer export pipeline for recruiter reporting, plus responsive Bootstrap/jQuery front-end pages",
        ],
      },
      {
        role: "Teaching Assistant, IS1108 Digital and AI Ethics",
        org: "National University of Singapore — School of Computing",
        period: "Aug 2026 – Present",
        points: [
          "Lead tutorials on data privacy, algorithmic bias, and responsible AI",
          "Evaluate student assignments and give constructive written feedback",
          "Facilitate class discussions and mentor students in reasoning through complex technical and ethical ideas",
        ],
      },
    ],
  },
  {
    id: "leadership",
    label: "Technical Leadership",
    items: [
      {
        role: "Head of Technology — Software Engineer",
        org: "Google Developer Group (GDG) NUS Computing",
        period: "Aug 2025 – Present",
        featured: true,
        tech: ["React"],
        summary: "Own GDG NUS’s technology end to end — writing the code and leading the people who ship it.",
        highlights: ["5+ nonprofit & community partners", "100+ hackathon participants"],
        points: [
          "Develop and maintain GDG NUS’s React platform, supporting initiatives with 5+ nonprofit and community partners",
          "Lead technical operations for Hack4Good, a social-impact hackathon with 100+ participants",
          "Collaborate with fellow developers and take responsibility for the chapter’s technical initiatives",
        ],
      },
      {
        role: "Executive Committee, Technology",
        org: "Misi Kami Peduli (MKP)",
        period: "May 2026 – Present",
        points: [
          "Lead website development and maintenance for MKP, a community initiative serving underserved rural communities in Lampung, Indonesia",
          "Support fundraising, outreach, and volunteer initiatives through technology",
        ],
      },
      {
        role: "Tech Subcommittee",
        org: "Perhimpunan Pelajar Indonesia di Singapura (PPIS)",
        period: "2026 – Present",
        href: "https://www.ppisingapura.com/",
        tech: ["GitHub Actions", "Next.js", "Vercel", "Supabase"],
        points: [
          "Selected to own CI/CD: built GitHub Actions pipelines that test and deploy the backend, website, and dashboard to Vercel",
          "Resolved merge conflicts from integrating separately built modules, and wired the frontends to the backend",
          "Support the team’s ongoing development and maintenance of the site",
        ],
      },
    ],
  },
];

// Earlier or less technical roles, shown compactly
export const otherInvolvement = [
  {
    role: "Head of Committee, IT Fest",
    org: "St. Louis HOT",
    period: "Apr – Oct 2024",
    note: "Led the competition division: 5 divisions, 40 committee members, 200+ participants",
  },
  {
    role: "Technology Associate",
    org: "PINUS",
    note: "Built and maintained digital solutions for the Indonesian student community at NUS",
  },
  {
    role: "Tech Crew",
    org: "Raffles Hall",
    note: "Managed technical equipment and provided audio-visual support for hall events",
  },
  {
    role: "Sports Management Committee",
    org: "Raffles Hall",
    note: "Team manager for the Road Relay team, supporting athletes through training",
  },
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    period: "Jul 2026",
    href: "https://www.credly.com/badges/ae75e066-1a2c-4e89-8e09-27aaede18c2f/linked_in_profile",
  },
  {
    title: "NUS Orbital — Apollo 11 (Advanced)",
    issuer: "NUS School of Computing",
    period: "Jul 2026",
    href: "https://credentials.nus.edu.sg/ccdda3f0-0bbe-4609-ad1c-383f1f4e1768#acc.YoHAQfDL",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript", "Go", "PHP", "SQL", "C++"] },
  { group: "Frameworks", items: ["React", "Next.js", "Laravel", "FastAPI", "Node.js", "Tailwind CSS"] },
  { group: "Cloud & DevOps", items: ["GitHub Actions", "AWS", "Vercel", "PostgreSQL", "Supabase", "Git"] },
];

export const projects = [
  {
    id: "module-quest",
    title: "Module Quest",
    badge: "NUS Orbital · Apollo 11 (Advanced)",
    image: moduleQuestImg,
    description:
      "A dungeon-crawler that turns NUS Computer Science and Electrical Engineering modules into quests: learn a chapter, then beat its boss in a quiz battle. Built in a team of two — I set up Firebase auth and Firestore player profiles, led the migration from vanilla JS to React, and built the leaderboard, player analytics, and prerequisite-based dungeon unlocks.",
    points: [
      "XP and potion rewards are written inside Firestore transactions, so level-ups stay consistent",
      "Route guards send CS and EE students to the right dungeons for their major",
    ],
    tech: ["React", "Firebase", "Firestore", "Vite", "Vercel"],
    repo: "https://github.com/glory-lion/module-quest",
    live: "https://module-quest.vercel.app",
  },
  {
    id: "ppis-cicd",
    title: "PPI Singapura — CI/CD",
    badge: "Team project · I owned CI/CD",
    image: ppisImg,
    description:
      "The official site of the Indonesian Students Association in Singapore, built by a team. I was selected by the team head to own delivery: every change to the backend, website, and dashboard now goes through GitHub Actions pipelines that test it and deploy it to Vercel. I also untangled the merge conflicts when separately built modules were integrated, and wired the frontends to the backend.",
    pipeline: ["Push", "Automated tests", "Build", "Deploy to Vercel"],
    pipelineTargets: "backend · website · dashboard",
    tech: ["GitHub Actions", "Next.js", "Vercel", "Supabase", "Neon PostgreSQL"],
    live: "https://www.ppisingapura.com/",
  },
  {
    id: "topicnest",
    title: "TopicNest",
    image: topicNestImg,
    description:
      "A full-stack community forum I built solo: Next.js and TypeScript on the front, a Go (Gorilla Mux) REST API over PostgreSQL behind it, with topics, posts, comments, likes, bookmarks, search, and profiles. I first ran the Go backend on Railway, then migrated it to Next.js serverless routes on Neon PostgreSQL.",
    tech: ["TypeScript", "Next.js", "Go", "PostgreSQL", "Tailwind CSS"],
    repo: "https://github.com/glory-lion/topicnest.git",
    live: "https://topicnest-self.vercel.app/forum",
  },
  {
    id: "universe",
    title: "UniVerse",
    badge: "University Discovery Platform",
    image: universeImg,
    description:
      "Choosing a university shouldn’t feel like solving a puzzle with missing pieces. UniVerse covers 100+ universities with a REST API and PostgreSQL backend for real-time filtering and ranking — plus a MediaPipe Hands mode that lets you pan, zoom, and click through Google Maps Street View with gestures.",
    tech: ["TypeScript", "PostgreSQL", "REST API", "MediaPipe"],
    repo: "https://github.com/JovianSanjaya/hacknroll2026.git",
    live: "https://hacknroll2026-ochre.vercel.app/",
  },
  {
    id: "aigc-detection",
    title: "AIGC Detection Platform",
    role: "TikTok TechJam 2026",
    description:
      "An AI-generated image detector built on CLIP ViT-L/14 embeddings with an MLP classification head. Data augmentation and partial-backbone fine-tuning took it to 80.5% accuracy; I also fixed key training and evaluation bugs and served the model through a FastAPI + React app for real-time detection.",
    tech: ["Python", "CLIP", "FastAPI", "React"],
  },
  {
    id: "ict-exam",
    title: "High School ICT Final Exam",
    role: "Coordinator of Tech Division",
    description:
      "Designed and coordinated a website to display students’ projects and assignments for the High School Final Exam, improving accessibility and organization for both students and teachers.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];
