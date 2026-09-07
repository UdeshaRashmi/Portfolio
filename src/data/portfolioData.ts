import type { Project, Experience, Education, EducationEntry, SkillCategory, Certificate } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Udesha Rashmi",
  role: "Frontend & Full-Stack Developer",
  shortBio: "Passionate final-year Information Technology undergraduate at SLIIT with hands-on experience in modern frontend and full-stack web application development.",
  about: `I am a passionate final-year Information Technology undergraduate at SLIIT (Sri Lanka Institute of Information Technology) with strong hands-on experience in building modern, responsive, and user-centric web applications. 

Specialized in frontend development with React.js, Next.js, TypeScript, and modern styling architectures, I also bring a solid foundation in backend services (Node.js, NestJS, Express, FastAPI) and cloud-ready microservice architectures. Having worked in industry Agile environments during my internship at NextGen CodeX, I excel at turning complex product requirements into clean, performant, and delightful digital experiences.

Currently seeking internship or associate-level opportunities in Software Engineering, Frontend Development, Full-Stack Development, or Web Application Development.`,
  email: "udesharashmi@gmail.com",
  phone: "+94 77 123 4567",
  location: "Sri Lanka",
  educationInstitute: "SLIIT (Sri Lanka Institute of Information Technology)",
  degree: "BSc. (Hons) in Information Technology",
  graduationYear: "Final Year (2023 – Present)",
  availability: "Available for Immediate Opportunities",
  socials: {
    github: "https://github.com/UdeshaRashmi",
    linkedin: "https://linkedin.com/in/udesha-rashmi",
    email: "mailto:udesharashmi@gmail.com",
  },
  stats: [
    { label: "Academic Degree", value: "BSc. (Hons) IT @ SLIIT" },
    { label: "Core Projects", value: "5+ Production-Grade" },
    { label: "Industry Experience", value: "Frontend Developer Intern" },
    { label: "Certifications", value: "6 Verified Badges" },
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: "nextgen-codex",
    role: "Frontend Developer Intern",
    company: "NextGen CodeX PVT LTD",
    period: "12/2025 – 06/2026",
    location: "Sri Lanka",
    type: "Internship",
    current: true,
    description: [
      "Developed high-performance, responsive and user-friendly web applications using Next.js, React.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS and Bootstrap.",
      "Engineered modular and reusable UI component systems to accelerate sprint velocity across the engineering team.",
      "Implemented mobile-first responsive layouts, cross-browser compatibility, and optimized frontend bundle loading speeds.",
      "Collaborated effectively in an Agile/Scrum team, utilizing Git and GitHub for code reviews, version control, and collaborative workflow pipelines."
    ],
    technologies: [
      "React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "Git", "GitHub", "Agile/Scrum"
    ]
  }
];

export const EDUCATION_DATA: Education = {
  degree: "BSc. (Hons) Information Technology",
  institution: "SLIIT (Sri Lanka Institute of Information Technology)",
  period: "2023 – Present",
  status: "Final Year Undergraduate",
  highlights: [
    "Specializing in Information Technology, Software Engineering & Modern Web Architectures.",
    "Actively completing ongoing 4th Year Research Project on Post-Flood Disaster & Ration Management.",
    "Comprehensive coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Management, and Microservice Architectures."
  ]
};

export const EDUCATION_HISTORY: EducationEntry[] = [
  {
    id: "sliit-bsc-it",
    institution: "SLIIT",
    title: "Bachelor of Science (Hons) in Information Technology",
    period: "Jan 2023 - Dec 2026",
    type: "Degree",
    iconName: "school"
  },
  {
    id: "sliit-hnd-it",
    institution: "SLIIT",
    title: "Higher National Diploma in Information Technology",
    period: "Jan 2023 - Dec 2024",
    type: "Diploma",
    iconName: "workspace_premium"
  },
  {
    id: "uom-full-stack",
    institution: "University of Moratuwa",
    title: "Full Stack Developer Certificate Course, Full Stack Development",
    period: "Apr 2025 - Present",
    type: "Certificate",
    iconName: "terminal"
  },
  {
    id: "british-council-english",
    institution: "British Council Sri Lanka",
    title: "Certificate course, English Language and Literature, General",
    type: "Certificate",
    iconName: "language"
  },
  {
    id: "hungama-wijayaba",
    institution: "Hungama Wijayaba National School",
    title: "Ordinary Level and Advanced Level Education",
    description: "I successfully completed my Ordinary Level (O/L) examination in English medium, achieving grades A8 and C1, and went on to complete my Advanced Level (A/L) examinations in the Biological Stream, passing Biology, Chemistry, and Physics. I am proud to have passed both O/L and A/L examinations, which laid a strong academic foundation for my higher education and professional development.",
    type: "School",
    iconName: "history_edu"
  },
  {
    id: "ambalantota-maha-vidyalaya",
    institution: "H/Ambalantota Maha Vidyalaya",
    title: "Primary Education",
    description: "During my primary education, I studied at H/Ambalantota Maha Vidyalaya, where I built the early learning foundation that supported my academic journey.",
    type: "School",
    iconName: "school"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "TypeScript", level: "Advanced", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
      { name: "Python", level: "Proficient", highlight: true },
      { name: "Java", level: "Proficient" },
      { name: "C / C++", level: "Familiar" },
      { name: "R", level: "Familiar" },
    ]
  },
  {
    title: "Frontend Technologies",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: "Advanced", highlight: true },
      { name: "Next.js", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", highlight: true },
      { name: "Vue.js / Nuxt.js", level: "Proficient", highlight: true },
      { name: "Angular", level: "Familiar" },
      { name: "Bootstrap", level: "Proficient" },
      { name: "PrimeNG", level: "Familiar" },
      { name: "HTML5 & CSS3", level: "Advanced" },
    ]
  },
  {
    title: "Backend Technologies",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: "Advanced", highlight: true },
      { name: "Express.js", level: "Advanced", highlight: true },
      { name: "NestJS", level: "Proficient", highlight: true },
      { name: "FastAPI (Python)", level: "Proficient", highlight: true },
      { name: "Spring Boot", level: "Familiar" },
      { name: "REST API Development", level: "Advanced" },
    ]
  },
  {
    title: "Databases & ORMs",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", level: "Proficient", highlight: true },
      { name: "MongoDB", level: "Advanced", highlight: true },
      { name: "MySQL", level: "Proficient" },
      { name: "Prisma ORM", level: "Proficient", highlight: true },
      { name: "SQLAlchemy", level: "Proficient" },
      { name: "Hibernate", level: "Familiar" },
    ]
  },
  {
    title: "Tools & DevOps",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "Advanced", highlight: true },
      { name: "Postman", level: "Advanced" },
      { name: "Swagger / OpenAPI", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "IntelliJ IDEA", level: "Proficient" },
      { name: "DBeaver", level: "Proficient" },
    ]
  },
  {
    title: "Concepts & Architecture",
    iconName: "Cpu",
    skills: [
      { name: "Microservices Architecture", level: "Advanced", highlight: true },
      { name: "JWT Authentication & RBAC", level: "Advanced", highlight: true },
      { name: "GIS Mapping (Leaflet)", level: "Proficient" },
      { name: "Agile / Scrum Methodologies", level: "Advanced" },
      { name: "OOP & Clean Architecture", level: "Advanced" },
      { name: "SDLC Lifecycle", level: "Advanced" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "post-flood-rescue-system",
    title: "Post-Flood Rescue & Ration Distribution Platform",
    subtitle: "4th Year Final Research Project @ SLIIT",
    category: "AI / Research",
    badge: "Ongoing Research",
    featured: true,
    role: "Full-Stack & Machine Learning Lead",
    description: "A disaster management platform engineered to coordinate post-flood rescue operations, allocate ration distribution, and prioritize emergency relief using predictive AI models and interactive GIS mapping.",
    detailedPoints: [
      "Developing a full-stack disaster response management platform utilizing React.js, TypeScript, Node.js, Express.js, and MongoDB.",
      "Building secure RESTful APIs with JWT authentication and Role-Based Access Control (RBAC) to support multi-stakeholder rescue coordination and user roles.",
      "Integrating Machine Learning models developed with Python, Flask, and Scikit-learn to forecast and prioritize emergency relief needs based on regional flood vulnerability.",
      "Designing high-performance responsive dashboards with interactive Leaflet GIS maps to visualize disaster zones, active victims, and relief status in real time."
    ],
    technologies: [
      "React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Python", "Flask", "Scikit-Learn", "Leaflet GIS", "JWT", "Tailwind CSS"
    ],
    highlights: [
      "AI Relief Prioritization", "Live GIS Leaflet Mapping", "Role-Based Rescue Dispatch"
    ]
  },
  {
    id: "bookease-healthcare",
    title: "BookEase – Healthcare Appointment Platform",
    subtitle: "Enterprise Medical Scheduling System",
    category: "Full-Stack",
    badge: "Full-Stack Enterprise",
    featured: true,
    role: "Full-Stack Developer",
    description: "A full-stack healthcare platform enabling seamless patient appointment bookings, doctor scheduling, role-based workflows, and automated status tracking.",
    detailedPoints: [
      "Built a modern, responsive web application using Next.js, React, TypeScript, Tailwind CSS, NestJS, PostgreSQL, and Prisma ORM.",
      "Developed secure RESTful micro-endpoints with NestJS for authentication, role-based access control (Patient, Doctor, Admin), and automated doctor availability allocation.",
      "Implemented comprehensive patient & admin dashboards with appointment scheduling, live status tracking, medical history, and form validation.",
      "Integrated Swagger / OpenAPI documentation for seamless API contract verification and testing."
    ],
    technologies: [
      "Next.js", "React.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Swagger", "JWT"
    ],
    highlights: [
      "Prisma + PostgreSQL DB", "NestJS Clean Architecture", "Admin & Patient Portals"
    ]
  },
  {
    id: "eduswap-skill-sharing",
    title: "EduSwap – Peer-to-Peer Skill Sharing Platform",
    subtitle: "Collaborative Knowledge Exchange Ecosystem",
    category: "Full-Stack",
    badge: "P2P Knowledge Platform",
    featured: true,
    role: "Full-Stack Developer",
    description: "An intuitive collaborative web application enabling peer-to-peer skill swapping, live session scheduling, interactive reviews, and automated matchmaking.",
    detailedPoints: [
      "Engineered a responsive frontend with Vue.js, Nuxt.js, TypeScript, and Tailwind CSS for frictionless user onboarding.",
      "Developed high-throughput RESTful APIs with Python FastAPI and MySQL for user authentication, skill directory listings, swap proposals, and live session bookings.",
      "Built dual user and admin control panels supporting algorithmic skill matching, dynamic session calendar scheduling, and peer feedback verification.",
      "Secured application endpoints using JWT authentication, rate limiting, and structured data validation."
    ],
    technologies: [
      "Vue.js", "Nuxt.js", "TypeScript", "Python", "FastAPI", "MySQL", "Tailwind CSS", "SQLAlchemy", "JWT"
    ],
    highlights: [
      "FastAPI Async Backend", "Vue 3 / Nuxt Reactive UI", "Skill Match Algorithm"
    ]
  },
  {
    id: "microservice-customer-service",
    title: "Customer Service Microservices Architecture",
    subtitle: "Distributed Microservices Ecosystem",
    category: "Microservices",
    badge: "Microservices Architecture",
    featured: false,
    role: "Backend Architect",
    description: "A distributed microservice architecture designed for scalable e-commerce operations, featuring isolated domains, centralized API gateway routing, and Swagger docs.",
    detailedPoints: [
      "Implemented a decoupled microservices architecture with Node.js and Express.js, encompassing independent Product, Customer, Order, Payment, and Inventory services.",
      "Configured a high-performance API Gateway for centralized reverse-proxy request routing, authentication guards, and rate limiting.",
      "Integrated comprehensive Swagger / OpenAPI documentation for independent service testing, monitoring, and validation.",
      "Applied industry design patterns (CQRS, Service Registry, Database-per-Service) to guarantee horizontal scalability and high availability."
    ],
    technologies: [
      "Node.js", "Express.js", "Microservices", "API Gateway", "Swagger / OpenAPI", "JWT", "RESTful Architecture"
    ],
    highlights: [
      "Centralized API Gateway", "5 Decoupled Services", "Swagger API Testing"
    ]
  },
  {
    id: "melody-mesh",
    title: "Melody-Mesh – Music Event Management Platform",
    subtitle: "Full-Stack Event Management & Ticketing Hub",
    category: "Frontend",
    badge: "Event Platform",
    featured: false,
    role: "Frontend & Full-Stack Developer",
    description: "A full-stack event management and social ticketing platform designed for music enthusiasts, event organizers, and interactive community collaboration.",
    detailedPoints: [
      "Built a modern full-stack music event platform utilizing React.js, Node.js, Express.js, and MongoDB.",
      "Constructed RESTful API endpoints supporting event creation, ticket reservations, attendee interactions, and real-time announcements.",
      "Crafted an engaging, responsive UI with Tailwind CSS, delivering fluid transitions and high engagement.",
      "Implemented rigorous server-side input validation, error handling middleware, and structured MongoDB data schemas."
    ],
    technologies: [
      "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST API", "JavaScript"
    ],
    highlights: [
      "Interactive Event Discovery", "Custom Tailwind UI", "Clean Full-Stack Architecture"
    ]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "aws-highly-available-web-applications",
    title: "Highly Available Web Applications",
    issuer: "Amazon Web Services (AWS)",
    issued: "Issued Aug 2026",
    credentialName: "AWS SimuLearn: Highly Available Web Applications",
    badgeColor: "from-blue-500 to-cyan-600",
    iconName: "Cloud",
    skills: ["AWS", "High Availability", "Cloud Architecture", "Web Applications"]
  },
  {
    id: "aws-networking-concepts",
    title: "Networking Concepts",
    issuer: "Amazon Web Services (AWS)",
    issued: "Issued Aug 2026",
    credentialName: "AWS SimuLearn: Networking Concepts",
    badgeColor: "from-blue-500 to-indigo-600",
    iconName: "Cloud",
    skills: ["AWS", "Networking", "Cloud Infrastructure", "VPC Fundamentals"]
  },
  {
    id: "ai-ml-engineer-sliit",
    title: "AI/ML Engineer - Stage 1",
    issuer: "Sri Lanka Institute of Information Technology (SLIIT)",
    badgeColor: "from-purple-500 to-indigo-600",
    iconName: "BrainCircuit",
    skills: ["Machine Learning", "Python", "Data Science", "Model Evaluation"]
  },
  {
    id: "python-beginners-uom",
    title: "Python For Beginners",
    issuer: "University of Moratuwa (CODL)",
    badgeColor: "from-blue-500 to-cyan-600",
    iconName: "Terminal",
    skills: ["Python Fundamentals", "Data Structures", "Algorithms", "Problem Solving"]
  },
  {
    id: "frontend-web-dev-uom",
    title: "Front-End Web Development",
    issuer: "University of Moratuwa (CODL)",
    badgeColor: "from-cyan-500 to-teal-600",
    iconName: "Layout",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "DOM Manipulation"]
  },
  {
    id: "web-design-beginners-uom",
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa (CODL)",
    badgeColor: "from-rose-500 to-pink-600",
    iconName: "Palette",
    skills: ["UI/UX Principles", "Layout Systems", "Color Theory", "Web Accessibility"]
  },
  {
    id: "foundations-pm-uom",
    title: "Foundations of Project Management",
    issuer: "University of Moratuwa (CODL)",
    badgeColor: "from-amber-500 to-orange-600",
    iconName: "Briefcase",
    skills: ["Project Lifecycle", "Agile & Waterfall", "Stakeholder Management", "Risk Assessment"]
  },
  {
    id: "scope-schedule-mgmt-uom",
    title: "Project Scope and Schedule Management",
    issuer: "University of Moratuwa (CODL)",
    badgeColor: "from-emerald-500 to-green-600",
    iconName: "CalendarCheck",
    skills: ["WBS Creation", "Gantt Charts", "Schedule Optimization", "Sprint Planning"]
  }
];
