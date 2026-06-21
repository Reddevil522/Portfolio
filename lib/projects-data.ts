export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  tags: string[];
  status: "active" | "archived" | "Not Deployed";
  links: {
    visit?: string;
    github?: string;
    pypi?: string;
    link?: string;
    // youtube?: string;
    // archive?: string;
    // howIBuilt?: string;
  };
  author: string;
  // authorAvatar: string;
  techStack: string[];
  features: string[];
  learningOutcomes: string[];
}

/**
 * Main projects array — update content here as required.
 * Ensure slug values are URL-safe and unique.
 */
export const projects: Project[] = [
  {
    id: "1",

    title: "MeetVerse",

    slug: "meetverse",

    description:
      "Full-stack real-time video conferencing platform with secure meetings, chat, screen sharing, and participant management",

    detailedDescription:
      "MeetVerse is a modern full-stack video conferencing platform inspired by Google Meet and Zoom. Built using the MERN stack, it enables users to create and join meetings, communicate through real-time video and audio, share screens, exchange messages, manage participants, and collaborate seamlessly. The platform features secure authentication, meeting scheduling, waiting room support, host controls, responsive design, and a professional user experience optimized for virtual communication.",

    image: "/meetverse.png",

    tags: [
      "Video Conferencing",
      "Real-Time Communication",
      "WebRTC",
      "MERN Stack",
      "Collaboration",
      "Meeting Platform"
    ],

    status: "active",

    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "WebRTC",
      "JWT",
      "Vanilla CSS",
      "Render",
    ],

    features: [
      "Create and join secure video meetings",
      "Real-time video and audio communication",
      "Screen sharing functionality",
      "Live meeting chat and messaging",
      "Host controls and participant management",
      "Waiting room with host approval system",
      "Meeting link sharing and invitations",
      "Authentication and authorization using JWT",
      "Responsive UI inspired by Google Meet and Zoom",
      "Fullscreen video mode for participants",
      "Camera and microphone controls",
      "Meeting status indicators and notifications"
    ],

    learningOutcomes: [
      "WebRTC peer-to-peer communication",
      "Real-time application development with Socket.io",
      "Authentication and authorization implementation",
      "Video streaming and media device management",
      "Scalable MERN stack architecture",
      "State management in React applications",
      "Production deployment and optimization",
      "Real-time event handling and synchronization",
      "Responsive UI/UX design for collaboration platforms"
    ],

    links: {
      visit: "https://meetverse-frontend-cv6z.onrender.com",
      github: "https://github.com/Reddevil522/MeetVerse.git"
    },

    author: "Gopal Kumar"
  },


  {
    id: "2",

    title: "Voyanta",

    slug: "voyanta",

    description:
      "Full-stack travel accommodation booking platform inspired by Airbnb with authentication, reviews, maps, bookings, and user management",

    detailedDescription:
      "Voyanta is a modern full-stack travel accommodation booking platform built using the MERN-adjacent stack (MongoDB, Express.js, Node.js, EJS). It allows users to explore unique stays, create listings, upload images, make bookings, leave reviews, manage profiles, and discover locations through interactive maps powered by MapTiler. The platform features secure authentication, authorization, responsive design, booking management, account settings, OTP verification, and a seamless user experience similar to Airbnb.",

    image: "/voyanta.png",

    tags: [
      "Travel",
      "Booking Platform",
      "Full-Stack",
      "Node.js",
      "MongoDB",
      "Airbnb Clone"
    ],

    status: "active",

    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Bootstrap 5",
      "Passport.js",
      "Cloudinary",
      "MapTiler",
      "Nodemailer",
      "Express Session",
      "Connect Flash"
    ],

    features: [
      "User authentication and authorization with Passport.js",
      "Create, edit, and delete accommodation listings",
      "Interactive maps and geolocation powered by MapTiler",
      "Image upload and cloud storage using Cloudinary",
      "Property booking and reservation system",
      "Ratings and reviews for listings",
      "Search and filter listings by location",
      "Responsive Airbnb-inspired user interface",
      "User profile management and account settings",
      "Flash messages and robust error handling"
    ],

    learningOutcomes: [
      "Full-stack web application architecture",
      "Authentication and authorization implementation",
      "RESTful API and MVC pattern development",
      "MongoDB schema design and data relationships",
      "File upload and cloud storage integration",
      "Interactive maps and geocoding integration",
      "Session management and security best practices",
      "Server-side rendering with EJS",
      "Production deployment and environment configuration"
    ],

    links: {
      visit: "https://wanderlust-50up.onrender.com",
      github: "https://github.com/Reddevil522/Wanderlust.git"
    },

    author: "Gopal Kumar"
  },


  {
    id: "3",
    title: "Nexora AI",
    slug: "nexora-ai",
    description: "AI-powered chat application with persistent conversations and thread management using Gemini AI",
    detailedDescription:
      "A modern AI-powered Chat Application built with the MERN Stack (MongoDB, Express.js, React.js, Node.js) integrated with Google Gemini AI. Nexora AI enables users to create and manage conversation threads, interact with AI in real time, store chat history, render Markdown responses, and enjoy a seamless ChatGPT-like experience with a responsive user interface.",

    // image: "/nexora-ai.png",
    image: "/nexora-ai.png",

    tags: ["AI", "MERN", "Full-Stack", "Chat Application", "Gemini AI"],

    // status: "active",
    status: "active",

    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Context API",
      "Gemini AI",
      "React Markdown",
      "Highlight.js"
    ],

    features: [
      "Real-time AI-powered conversations using Gemini AI",
      "Thread-based chat management and history persistence",
      "Create, view, switch, and delete conversation threads",
      "Markdown rendering with syntax-highlighted code blocks",
      "Responsive and modern ChatGPT-inspired interface",
      "MongoDB-powered storage for chat history and messages"
    ],

    learningOutcomes: [
      "Full-stack MERN application development",
      "Google Gemini AI API integration",
      "RESTful API development with Express.js",
      "MongoDB schema design and data persistence",
      "React Context API state management",
      "Markdown parsing and syntax highlighting implementation"
    ],

    links: {
      visit: "https://nexora-ai-xqbi.onrender.com",
      github: "https://github.com/Reddevil522/Nexora_AI.git"
    },

    author: "Gopal Kumar"
  },




  // {
  //   id: "2",
  //   title: "LMS Platform",
  //   slug: "lms-platform",
  //   description: "Complete Learning Management System with course management and user dashboards",
  //   detailedDescription:
  //     "A comprehensive Learning Management System (LMS) platform built with the MERN Stack. This real-world e-learning application includes course management, user enrollments, role-based authentication, and a powerful admin dashboard similar to platforms like Udemy and Coursera.",
  //   image: "/lms.jpg",
  //   tags: ["Education", "MERN", "Full-Stack", "E-learning"],
  //   status: "active",
  //   techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Redux"],
  //   features: [
  //     "Course management system with categories",
  //     "User enrollment and progress tracking",
  //     "Role-based access (Admin/Instructor/Student)",
  //     "Interactive course player with video support",
  //     "Admin dashboard for user and course management",
  //     "Responsive mobile-friendly design",
  //   ],
  //   learningOutcomes: [
  //     "Authentication & role-based access control",
  //     "RESTful API development with Express.js",
  //     "MongoDB data modeling for complex relationships",
  //     "State management with Redux",
  //     "Protected routes and middleware implementation",
  //     "Full-stack application architecture",
  //   ],
  //   links: {
  //     visit: "https://l-m-s-web-frontend.onrender.com",
  //     github: "https://github.com/HexagonDigitalServices/L-M-S",
  //     // howIBuilt: "https://youtu.be/lDg72UDAq60?si=keX7_pOq_QytNwO7",
  //   },
  //   author: "LMS Platform",
  //   // authorAvatar: "/Hexagon.png",
  // },
  // {
  //   id: "3",
  //   title: "Resume Builder",
  //   slug: "resume-builder",
  //   description: "AI-powered resume creation platform with professional templates",
  //   detailedDescription:
  //     "A production-ready Resume Builder SaaS application built with the MERN Stack. This platform allows users to create, customize, and export professional resumes with AI-powered suggestions and multiple template options.",
  //   image: "/resume.jpg",
  //   tags: ["AI", "SaaS", "MERN", "Productivity"],
  //   status: "active",
  //   techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "PDF Generation"],
  //   features: [
  //     "Multiple professional resume templates",
  //     "AI-powered content suggestions",
  //     "Real-time preview and editing",
  //     "PDF export functionality",
  //     "Resume tracking and versioning",
  //     "Mobile-optimized responsive design",
  //   ],
  //   learningOutcomes: [
  //     "End-to-end MERN stack development workflow",
  //     "PDF generation and export functionality",
  //     "Complex form handling and validation",
  //     "Responsive UI design with Tailwind CSS",
  //     "Database modeling for user data",
  //     "File handling and storage strategies",
  //   ],
  //   links: {
  //     visit: "https://resumexpert-frontend.onrender.com",
  //     github: "https://github.com/HexagonDigitalServices/BUILDRESUMEWEB",
  //     // howIBuilt: "https://youtu.be/gWHgPP5ay7Q?si=FhtnDh4O7jm9rsEY",
  //   },
  //   author: "Resume Builder",
  //   // authorAvatar: "/Hexagon.png",
  // },
  // {
  //   id: "4",
  //   title: "Task Manager",
  //   slug: "task-manager",
  //   description: "Productivity application for task management with team collaboration",
  //   detailedDescription:
  //     "A fully functional Task Manager application built with the MERN Stack. This productivity tool helps individuals and teams manage tasks, set priorities, track progress, and collaborate effectively with real-time updates.",
  //   image: "/task.jpg",
  //   tags: ["Productivity", "MERN", "Full-Stack", "Collaboration"],
  //   status: "active",
  //   techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.io"],
  //   features: [
  //     "Task creation with priority levels and deadlines",
  //     "Drag-and-drop task organization",
  //     "Team collaboration and assignment",
  //     "Progress tracking and analytics",
  //     "Real-time updates with WebSockets",
  //     "Calendar integration and reminders",
  //   ],
  //   learningOutcomes: [
  //     "Real-time application development with Socket.io",
  //     "CRUD operations implementation",
  //     "User authentication and authorization",
  //     "Database design for task management",
  //     "Frontend-backend integration",
  //     "Deployment and hosting strategies",
  //   ],
  //   links: {
  //     visit: "https://taskflow-frontend-6swl.onrender.com",
  //     github: "https://github.com/HexagonDigitalServices/FlowTask",
  //     // howIBuilt: "https://youtu.be/VAKDr1lsix0?si=FZvPZSo2qIOTjiJD",
  //   },
  //   author: "Task Manager",
  //   // authorAvatar: "/Hexagon.png",
  // },
  // {
  //   id: "5",
  //   title: "Food Delivery App",
  //   slug: "food-delivery-app",
  //   description: "Full-stack food ordering platform with restaurant management",
  //   detailedDescription:
  //     "A complete Food Delivery Web Application built with the MERN Stack. This platform connects restaurants with customers, featuring menu management, order processing, payment integration, and real-time order tracking.",
  //   image: "/food.jpg",
  //   tags: ["E-commerce", "MERN", "Full-Stack", "Payments"],
  //   status: "active",
  //   techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe", "WhatsApp API"],
  //   features: [
  //     "Restaurant and menu management",
  //     "Shopping cart and checkout system",
  //     "Stripe payment integration",
  //     "Real-time order tracking",
  //     "WhatsApp order notifications",
  //     "Admin dashboard for order management",
  //   ],
  //   learningOutcomes: [
  //     "Payment gateway integration (Stripe)",
  //     "Third-party API integration (WhatsApp)",
  //     "E-commerce platform development",
  //     "Real-time data synchronization",
  //     "Geolocation and mapping services",
  //     "Multi-vendor platform architecture",
  //   ],
  //   links: {
  //     visit: "https://frenzyfood-frontend.onrender.com",
  //     github: "https://github.com/HexagonDigitalServices/Foodie-frenzy",
  //     // howIBuilt: "https://youtu.be/6CL4f8fPk9w?si=eo8gxXCjMmd1xRUz",
  //   },
  //   author: "Food Delivery App",
  //   // authorAvatar: "/Hexagon.png",
  // },
  // {
  //   id: "6",
  //   title: "Movie Ticket Booking",
  //   slug: "movie-ticket-booking",
  //   description: "Complete movie booking system with seat selection and payments",
  //   detailedDescription:
  //     "A professional Movie Ticket Booking Website built with the MERN Stack, similar to BookMyShow. This full-stack application features movie listings, seat selection, booking management, and payment processing with a modern user interface.",
  //   image: "/movie.jpg",
  //   tags: ["Booking", "MERN", "Full-Stack", "Entertainment"],
  //   status: "active",
  //   techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Razorpay", "JWT"],
  //   features: [
  //     "Movie listings with showtimes",
  //     "Interactive seat selection layout",
  //     "Secure booking and payment system",
  //     "User authentication and booking history",
  //     "Admin panel for theater management",
  //     "Responsive design for all devices",
  //   ],
  //   learningOutcomes: [
  //     "Complex booking system logic",
  //     "Payment integration (Razorpay/Stripe)",
  //     "JWT authentication implementation",
  //     "Role-based access control",
  //     "Database design for booking systems",
  //     "Frontend animations and UX design",
  //   ],
  //   links: {
  //     visit: "https://moviebooking-frontend-rrwx.onrender.com",
  //     github: "https://github.com/HexagonDigitalServices/BOOKMOVIE",
  //     // howIBuilt: "https://youtu.be/KQ7srsb8cfc?si=3m4Uk4mvYGF25Ykf",
  //   },
  //   author: "Movie Ticket Booking",
  //   // authorAvatar: "/Hexagon.png",
  // },
];

/* -------------------------
   Helper utilities
   ------------------------- */

/** Return a project by slug or null */
export function getProjectBySlug(slug: string | undefined | null): Project | null {
  // defensive normalization: decode URI components, coerce to string, trim
  const normalized = decodeURIComponent(String(slug ?? "")).trim();
  if (!normalized) return null;
  return projects.find((p) => p.slug === normalized) ?? null;
}
/** Return all slugs (useful for generateStaticParams or getStaticPaths) */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Compose the canonical URL for a project (useful in UIs) */
export function getProjectUrl(project: Project | { slug: string }) {
  return `/projects/${project.slug}`;
}

/** Return all projects (shallow copy) */
export function getAllProjects(): Project[] {
  return [...projects];
}