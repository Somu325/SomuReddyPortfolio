export const portfolioData = {
  header: {
    name: "SOMASEKHAR REDDY IRIKIREDDY",
    title: "Full Stack Web Developer",
    location: "Hyderabad, Telangana, 500081, India",
    email: "somureddyirikireddy@gmail.com",
    phone: "+91-9391556743",
  },

  summary:
    "Innovation for me means building tools that feel both personal and practical. On Corp-Astro, an AI platform, I created Astro Ratan, a chatbot powered by OpenAI's API with thread-based memory for seamless, personalized chats. At Genamplify Solutions Hub, I built responsive React.js/React Native apps, real-time systems with Socket.io, and a booking platform with Node.js. Skilled across frontend, backend, and Python, I turn complex ideas into intuitive digital experiences.",

  experience: [
    {
      role: "Software Developer",
      company: "TechPixe India",
      duration: "Oct 2025 - Present",
      responsibilities: [
        "Developed and managed the user interface for a multivendor application using React, including all necessary API integrations.",
      ],
    },
    {
      role: "Software Developer",
      company: "Corp-Astro",
      duration: "March 2025 - August 2025",
      responsibilities: [
        "Led the design and development of Astro Ratan, a personal AI conversational chatbot for astrology, fully architected and built by me within the Corp-Astro platform.",
        "Implemented context-driven conversations, embedding user-specific astrology charts and prompts into OpenAI API calls for accurate, personalized responses.",
        "Built backend infrastructure with FastAPI (Python), WebSockets, Supabase, and Redis, ensuring efficient caching and real-time interaction.",
      ],
    },
    {
      role: "Software Developer",
      company: "Genamplify Solutions Hub Pvt Ltd",
      duration: "March 2024 - February 2025",
      responsibilities: [
        "Engineered backend servers with Node.js and Socket.io, ensuring reliable real-time communication.",
        "Developed responsive front-end applications using React and React Native, enhancing user experience with faster load times.",
        "Implemented event-driven architecture with WebSockets, improving system responsiveness.",
        "Leading Corp-Astro, an AI-driven astrology platform enhancing personalized user insights.",
      ],
    },
  ],

  projects: [
    {
      name: "Astro Ratan - AI Chatbot",
      category: "fullstack",
      description:
        "Personal AI conversational chatbot for astrology with context-driven conversations and thread-based memory. Built backend with FastAPI, WebSockets, Supabase, and Redis.",
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
      category: "frontend",
      description:
        "Comprehensive multivendor application with React, managing complete user interface and API integrations for seamless shopping experience.",
      tech: ["React", "REST APIs", "Tailwind CSS"],
      features: [
        "Vendor management",
        "Product catalog",
        "Order tracking",
        "Payment integration",
      ],
      metrics: { status: "Active", type: "E-Commerce" },
    },
    {
      name: "Booking Platform",
      category: "fullstack",
      description:
        "Full-stack booking platform with React, Node.js, and PostgreSQL, minimizing scheduling conflicts with intuitive schedule management.",
      tech: ["React", "Node.js", "PostgreSQL", "Express"],
      features: [
        "Schedule management",
        "Real-time booking",
        "Conflict prevention",
        "User dashboard",
      ],
      metrics: { status: "Completed", type: "SaaS" },
    },
    {
      name: "Real-time Communication System",
      category: "fullstack",
      description:
        "Event-driven architecture with WebSockets for real-time communication, built with Node.js and Socket.io for reliable messaging.",
      tech: ["Node.js", "Socket.io", "WebSockets", "React"],
      features: [
        "Real-time messaging",
        "Event-driven",
        "Scalable architecture",
        "Low latency",
      ],
      metrics: { status: "Live", type: "Communication" },
    },
  ],

  skills: {
    frontend: ["React.js", "React Native", "HTML", "CSS", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "Socket.io", "Python", "FastAPI"],
    databases: ["MongoDB", "PostgreSQL", "Redis", "Supabase"],
    ml: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Deep Learning"],
    tools: ["Git", "VS Code", "MATLAB", "RESTful APIs", "WebSockets"],
    soft: [
      "Problem Solving",
      "Critical Thinking",
      "Time Management",
      "Analytical Skills",
    ],
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
    "Finalist in Smart India Hackathon 2022 in Hardware Edition",
    "Participated in training program on soft computing techniques and numerical modeling for additive manufacturing",
    "Trained at Naresh I Technologies in Data Science Field",
  ],
};
