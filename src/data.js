import universeImg from "./assets/universe_project.png";
import topicNestImg from "./assets/topicnest_project.png";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const roles = [
  "Computer Science @ NUS",
  "Web Developer",
  "Self-taught Designer",
  "Head of Technology @ GDG NUS",
  "Teaching Assistant @ NUS SoC",
];

export const education = [
  {
    title: "National University of Singapore",
    period: "2025 – 2029",
    subtitle: "Year 2 Computer Science undergraduate",
    points: [],
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

// Grouped so recruiters can tell paid work, tech leadership and community roles apart
export const experienceGroups = [
  {
    id: "professional",
    label: "Professional",
    items: [
      {
        role: "Teaching Assistant, IS1108 Digital and AI Ethics",
        org: "National University of Singapore — School of Computing",
        period: "Aug 2025 – Present",
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
        highlights: ["5+ partners", "100+ hackathon participants"],
        points: [
          "Develop and maintain GDG NUS’s React platform, supporting initiatives with 5+ nonprofit and community partners",
          "Lead technical operations for Hack4Good, a social-impact hackathon with 100+ participants and community partners",
          "Own the technology portfolio and collaborate with fellow developers to ship and maintain the platform",
        ],
      },
      {
        role: "Executive Committee, Technology",
        org: "Misi Kami Peduli (MKP)",
        period: "May 2026 – Present",
        points: [
          "Lead website development and maintenance for MKP, a community initiative serving underserved rural communities in Lampung, Indonesia",
          "Support fundraising, outreach, and volunteer initiatives through technology",
          "Apply software engineering to work with direct, meaningful social impact",
        ],
      },
      {
        role: "Head of Committee, IT Fest",
        org: "St. Louis Exhibition Competition Talent (HOT)",
        period: "Apr 2024 – Oct 2024",
        highlights: ["200+ participants", "40 committee members", "5 divisions"],
        points: [
          "Led the competition division of St. Louis HOT IT Fest, overseeing 5 divisions and 40 committee members",
          "Coordinated problem setting, logistics, and technical operations for an event with 200+ participants",
        ],
      },
    ],
  },
  {
    id: "community",
    label: "Community Engineering",
    items: [
      {
        role: "Tech Subcommittee",
        org: "Perhimpunan Pelajar Indonesia di Singapura (PPIS)",
        href: "https://www.ppisingapura.com/",
        points: [
          "Contributed to the organization’s official website and its technical infrastructure",
          "Configured CI/CD pipelines with GitHub Actions",
          "Resolved integration conflicts and connected frontend and backend components",
        ],
      },
    ],
  },
];

// Earlier or less technical roles, shown compactly
export const otherInvolvement = [
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
    href: "https://www.credly.com/badges/ae75e066-1a2c-4e89-8e09-27aaede18c2f/linked_in_profile",
  },
  {
    title: "Orbital — Apollo 11 (Advanced)",
    issuer: "NUS School of Computing",
    period: "Aug 2026",
    href: "https://credentials.nus.edu.sg/ccdda3f0-0bbe-4609-ad1c-383f1f4e1768#acc.YoHAQfDL",
  },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Go", "HTML", "CSS"] },
  { group: "Frameworks", items: ["React", "Tailwind CSS", "Vite"] },
  { group: "Tools", items: ["Git", "GitHub", "Vercel"] },
];

export const projects = [
  {
    id: "topicnest",
    title: "TopicNest",
    image: topicNestImg,
    summary:
      "A modern, high performance community forum with a sleek, responsive interface for real time discussions.",
    description:
      "TopicNest is a modern, high performance community forum which features a sleek, responsive interface for real time discussions, user profiles, and category based post management.",
    tech: ["TypeScript", "Go", "CSS"],
    repo: "https://github.com/glory-lion/topicnest.git",
    live: "https://topicnest-self.vercel.app/forum",
  },
  {
    id: "universe",
    title: "UniVerse",
    image: universeImg,
    summary:
      "Choosing a university shouldn’t feel like solving a puzzle with missing pieces.",
    description:
      "Choosing a university shouldn’t feel like solving a puzzle with missing pieces. UniVerse makes discovering universities clear, personalized, and enjoyable.",
    tech: ["TypeScript", "JavaScript", "CSS", "HTML"],
    repo: "https://github.com/JovianSanjaya/hacknroll2026.git",
    live: "https://hacknroll2026-ochre.vercel.app/",
  },
  {
    id: "ict-exam",
    title: "High School ICT Final Exam",
    role: "Coordinator of Tech Division",
    summary:
      "A website showcasing students’ projects and assignments for the High School Final Exam.",
    description:
      "Designed and coordinated a website to display students’ projects and assignments for the High School Final Exam, improving accessibility and organization for both students and teachers.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];
