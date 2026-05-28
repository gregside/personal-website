export interface Project {
  slug: string;
  title: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  tags: string[];
  documentation: {
    overview: string;
    features: string[];
    challenges: string[];
    learned: string[];
    techDetails?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description:
      "A full-stack web application built with React and Node.js. Features user authentication, real-time updates, and a responsive dashboard.",
    repoUrl: "https://github.com/gregwoodside/project-one",
    liveUrl: "https://project-one.example.com",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    documentation: {
      overview:
        "A full-stack dashboard application that provides real-time data visualization and user management. Built to handle concurrent users with live-updating charts and tables.",
      features: [
        "JWT-based authentication with refresh token rotation",
        "Real-time WebSocket updates for dashboard widgets",
        "Responsive design that works across desktop and mobile",
        "Role-based access control for admin and standard users",
      ],
      challenges: [
        "Managing WebSocket reconnection logic and state synchronization when users lose connectivity",
        "Optimizing PostgreSQL queries for dashboard aggregations on large datasets",
        "Handling JWT token refresh seamlessly without interrupting the user experience",
      ],
      learned: [
        "How to architect a real-time data pipeline from database triggers through to the frontend",
        "Best practices for connection pooling and query optimization in PostgreSQL",
        "Strategies for graceful degradation when real-time connections fail",
      ],
      techDetails:
        "The frontend is built with React and TypeScript, using Chart.js for data visualization. The backend runs on Node.js with Express, connected to a PostgreSQL database. WebSocket connections are managed through Socket.IO with Redis as the pub/sub adapter for horizontal scaling.",
    },
  },
  {
    slug: "project-two",
    title: "Project Two",
    description:
      "A CLI tool that automates common development workflows including scaffolding, testing, and deployment pipelines.",
    repoUrl: "https://github.com/gregwoodside/project-two",
    tags: ["Python", "CLI", "Automation"],
    documentation: {
      overview:
        "A command-line tool designed to reduce repetitive setup work in development workflows. Handles project scaffolding, test execution, and deployment configuration from a single interface.",
      features: [
        "Interactive project scaffolding with template selection",
        "Automated test runner with parallel execution support",
        "Deployment pipeline configuration for multiple cloud providers",
        "Plugin system for extending functionality",
      ],
      challenges: [
        "Designing a plugin architecture that is flexible without becoming overly complex",
        "Handling cross-platform compatibility between macOS, Linux, and Windows",
        "Building an intuitive CLI UX with helpful error messages and progress indicators",
      ],
      learned: [
        "How to design extensible CLI architectures using the command pattern",
        "Techniques for cross-platform file system operations in Python",
        "The importance of clear error messaging and user feedback in CLI tools",
      ],
    },
  },
  {
    slug: "project-three",
    title: "Project Three",
    description:
      "A mobile-first e-commerce storefront with Stripe integration, inventory management, and order tracking.",
    repoUrl: "https://github.com/gregwoodside/project-three",
    liveUrl: "https://project-three.example.com",
    tags: ["React", "Stripe", "Firebase"],
    documentation: {
      overview:
        "A mobile-first e-commerce application that provides a complete shopping experience from product browsing through checkout and order tracking. Integrated with Stripe for secure payment processing.",
      features: [
        "Stripe checkout integration with support for multiple payment methods",
        "Real-time inventory management with stock level alerts",
        "Order tracking with status updates and email notifications",
        "Responsive product catalog with filtering and search",
      ],
      challenges: [
        "Implementing idempotent payment processing to prevent double charges",
        "Managing inventory consistency during concurrent purchases",
        "Optimizing image loading and product catalog performance on mobile networks",
      ],
      learned: [
        "How to build secure payment flows with Stripe's API and webhooks",
        "Strategies for handling eventual consistency in distributed systems",
        "Mobile performance optimization techniques including lazy loading and image compression",
      ],
    },
  },
];
