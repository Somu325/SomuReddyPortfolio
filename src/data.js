export const portfolioData = {
  header: {
    name: "SOMASEKHAR REDDY IRIKIREDDY",
    title: "Full Stack Web Developer",
    location: "Hyderabad, Telangana, 500081, India",
    email: "somureddyirikireddy@gmail.com",
    phone: "+91-9391556743",
    linkedin: "linkedin.com/in/somureddy",
    github: "github.com/Somu325",
  },

  summary:
    "MERN Stack Developer with 2+ years of hands-on experience building full-stack web applications across startups and freelance projects. Skilled in RESTful API design, JWT authentication, real-time systems with Socket.io, and cloud deployments. Delivered production-ready code across the full stack — from MongoDB schema design to React frontend state management — with a focus on maintainability and performance.",

  experience: [
    {
      role: "Software Developer",
      company: "TechPixe India",
      duration: "Oct 2025 - Present",
      responsibilities: [
        "Built robust backend services using Node.js and Express to power seamless multivendor operations.",
        "Integrated Razorpay for secure, multi-currency transaction processing and automated invoicing.",
        "Designed optimized MongoDB aggregation pipelines to efficiently fetch vendor data and platform analytics.",
        "Configured AWS S3 for reliable storage and quick retrieval of product images and user uploads.",
        "Implemented Role-Based Access Control (RBAC) with JWT authentication for secure admin and vendor portals.",
      ],
    },
    {
      role: "Full Stack Developer, Freelance",
      company: "Corp-Astro",
      duration: "March 2025 - August 2025",
      responsibilities: [
        "Architected a scalable full-stack solution using React for the frontend and a Node.js/FastAPI hybrid backend.",
        "Developed and documented REST APIs using Swagger, enabling clear communication between frontend and backend.",
        "Integrated real-time chat functionality using Socket.io to connect astrologers with platform users instantly.",
        "Configured Redis caching to reduce database load and speed up API response times for common queries.",
        "Designed relational database schemas using Supabase and PostgreSQL to manage complex user and consultation data.",
      ],
    },
    {
      role: "Software Developer",
      company: "Genamplify Solutions Hub Pvt Ltd",
      duration: "March 2024 - February 2025",
      responsibilities: [
        "Developed efficient RESTful services using Node.js and Express to handle core business logic and data processing.",
        "Built a real-time messaging system with Socket.io, enabling live communication within the application.",
        "Utilized MongoDB and Mongoose ODM, creating complex queries and indexes to improve database read/write speeds.",
        "Applied express-validator middleware to ensure robust data validation and improve overall API security.",
      ],
    },
  ],

  projects: [
    {
      name: "Astro Ratan - AI Chatbot",
      category: "fullstack",
      description:
        "Architected a scalable full-stack personal AI chatbot with context-driven conversations, embedding user-specific charts into OpenAI API calls.",
      tech: [
        "Python",
        "FastAPI",
        "OpenAI API",
        "WebSockets",
        "Supabase",
        "Redis",
      ],
      features: [
        "Context-driven AI",
        "Real-time chat",
        "Thread memory",
        "Personalized insights",
      ],
      metrics: { status: "Live", type: "AI Platform" },
    },
    {
      name: "Multivendor E-Commerce",
      category: "fullstack",
      description:
        "Robust multivendor application featuring secure transaction processing via Razorpay and optimized MongoDB aggregation pipelines.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
      features: [
        "Vendor management",
        "Product catalog",
        "Order tracking",
        "Payment integration",
      ],
      metrics: { status: "Active", type: "E-Commerce" },
    },
    {
      name: "Full-Stack Booking Platform",
      category: "fullstack",
      description:
        "A full-stack booking system utilizing efficient RESTful services to handle core business logic, featuring secure data validation and real-time messaging.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "RESTful API endpoints",
        "JWT-based auth",
        "Mongoose indexing",
        "Socket.io messaging",
      ],
      metrics: { status: "Completed", type: "Web App" },
    },
  ],

  skills: {
    frontend: ["React.js", "React Native", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
    backend: ["Node.js", "Express.js", "RESTful API Design", "JWT Authentication", "FastAPI"],
    databases: ["MongoDB", "PostgreSQL", "Redis", "Supabase"],
    tools: ["Git", "GitHub", "Docker", "Postman", "Swagger", "AWS S3", "CI/CD"],
    other: ["Python", "Razorpay", "Stripe", "Socket.io", "WebSockets", "Responsive Design"],
  },

  education: [
    {
      degree: "Bachelor's Of Technology in Mechanical Engineering",
      duration: "2020 – 2023",
      institution: "Sri Venkateswara College Of Engineering & Technology",
    },
    {
      degree: "Diploma in Mechanical Engineering",
      duration: "2017 – 2020",
      institution: "Loyola Polytechnic College (YSRR)",
    },
  ],

  achievements: [
    "Finalist — Smart India Hackathon 2022 (Hardware Edition) — Recognized among top 50 teams nationwide for an IoT solution.",
    "Data Science & Web Development Training — Naresh I Technologies",
    "Soft Computing & Numerical Modeling Program — SVNIT, Surat",
  ],
};
