// Central data file - edit this to update your portfolio content

export const personalInfo = {
  name: "Arafat Hossen",
  role: "Frontend Developer",
  tagline:
    "Designing Clear,\nResponsive Web\nExperiences With\nRoom For Personality.",
  bio1: "I started learning programming by following my curiosity around how websites feel fast, expressive, and easy to use. That curiosity turned into a habit of building small ideas, breaking them, and rebuilding them with more care each time.",
  bio2: "The kind of work I enjoy most sits at the intersection of design and engineering: interfaces that feel smooth, thoughtful systems behind the UI, and projects where details like spacing, copy, and states matter just as much as the logic.",
  bio3: "Outside of programming, I enjoy exploring new ideas, staying active, and finding ways to bring creative energy back into my projects.",
  email: "arafathossensabbirofficial@gmail.com",
  phone: "+8801645435656",
  whatsapp: "+8801645435656",
  fiverr: "https://www.fiverr.com/sellers/pro_sammo/edit",
  social: {
    github: "https://github.com/arafat-hossen-sabbir",
    linkedin: "https://www.linkedin.com/in/arafat-hossen-sabbir/",
    twitter: "https://x.com/NafizAlamDev",
    facebook: "https://www.facebook.com/US3R.S4BB1R/",
  },
  stats: [
    { value: "10+", label: "Projects Ready" },
    { value: "4", label: "Skill Areas" },
    { value: "20+", label: "Tools Highlighted" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    subtitle: "Interfaces",
    icon: "🎨",
    items: [
      { name: "HTML5", level: 92 },
      { name: "CSS3 / Tailwind", level: 89 },
      { name: "JavaScript", level: 87 },
      { name: "React / Next.js", level: 84 },
    ],
  },
  {
    category: "Backend",
    subtitle: "Application Logic",
    icon: "⚙️",
    items: [
      { name: "Node.js", level: 76 },
      { name: "Express", level: 74 },
      { name: "REST APIs", level: 81 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    category: "Tools",
    subtitle: "Workflow",
    icon: "🛠️",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Figma Handoff", level: 72 },
      { name: "Responsive Design", level: 90 },
      { name: "Debugging", level: 80 },
    ],
  },
];

export const education = [
  {
    period: "2024 – 2025",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Government Mujib College",
    details: [
      "GPA: 4.08",
      "Completed higher secondary education with a science background.",
      "Developed interest in technology and computing, forming the base for further studies in CSE.",
    ],
  },
  {
    period: "2022 – 2023",
    degree: "Secondary School Certificate (SSC)",
    institution: "Chaprasirhat High School",
    details: [
      "GPA: 4.89",
      "Achieved strong academic performance with a solid foundation in science and mathematics, demonstrating consistency, discipline, and a strong ability to understand analytical and problem-solving concepts.",
    ],
  },
  {
    period: "2017 – 2018",
    degree: "Primary School Certificate (PSC)",
    institution: "Begum Sahanara Kindergarten",
    details: [
      "GPA: 5.00",
      "Successfully completed primary education with excellent academic results.",
      "Built a strong foundation in basic subjects and developed early interest in learning and creativity.",
    ],
  },
];

export const experience = [
  {
    period: "2024",
    role: "Frontend Developer Intern",
    company: "Sample Studio or Company",
    details: [
      "Contributed to responsive user interface work with close attention to layout consistency across devices.",
      "Collaborated with designers and developers to turn requirements into reusable components and cleaner interaction flows.",
      "This entry is optional later: keep, edit, or remove the experience array to hide the section.",
    ],
  },
  {
    period: "2025",
    role: "Junior Web Developer (Freelance)",
    company: "Self-Employed",
    details: [
      "Developed and deployed small business and personal portfolio websites using modern web technologies.",
      "Worked directly with clients to understand requirements and deliver responsive, user-friendly designs.",
      "Improved performance and SEO basics while maintaining clean and scalable code structure.",
    ],
  },
];

export const projects = [
  {
    id: "orbit-storefront",
    category: "E-commerce",
    title: "Orbit Storefront",
    description:
      "A modern storefront experience focused on clean discovery, strong product presentation, and conversion-friendly flows.",
    longDescription:
      "Orbit Storefront is a full-featured e-commerce concept built with Next.js and Tailwind CSS. The project focuses on clean product discovery, intuitive navigation, and optimized checkout flows that reduce friction and improve conversions.",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
    color: "#6366f1",
    bgGradient: "from-indigo-500/20 to-purple-500/20",
    icon: "🛍️",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "pulse-dashboard",
    category: "Dashboard",
    title: "Pulse Dashboard",
    description:
      "A data-focused dashboard concept with responsive cards, status summaries, and actionable interface patterns.",
    longDescription:
      "Pulse Dashboard brings complex data to life with clean, responsive cards and real-time status indicators. Built with React and Next.js, it prioritizes readability and actionable insights over visual noise.",
    tags: ["React", "Next.js", "Chart UI"],
    color: "#06b6d4",
    bgGradient: "from-cyan-500/20 to-blue-500/20",
    icon: "📊",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "canvas-connect",
    category: "Community App",
    title: "Canvas Connect",
    description:
      "A community platform concept built around profiles, updates, and a friendly, approachable interaction model.",
    longDescription:
      "Canvas Connect is a social platform designed for creatives to share their work, connect with collaborators, and build community. The interface prioritizes warmth, accessibility, and meaningful interaction.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    color: "#f59e0b",
    bgGradient: "from-amber-500/20 to-orange-500/20",
    icon: "🎨",
    liveUrl: "#",
    githubUrl: "#",
  },
];
