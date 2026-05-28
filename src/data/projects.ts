export interface Project {
  title: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A full-stack web application built with React and Node.js. Features user authentication, real-time updates, and a responsive dashboard.",
    repoUrl: "https://github.com/gregwoodside/project-one",
    liveUrl: "https://project-one.example.com",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Project Two",
    description:
      "A CLI tool that automates common development workflows including scaffolding, testing, and deployment pipelines.",
    repoUrl: "https://github.com/gregwoodside/project-two",
    tags: ["Python", "CLI", "Automation"],
  },
  {
    title: "Project Three",
    description:
      "A mobile-first e-commerce storefront with Stripe integration, inventory management, and order tracking.",
    repoUrl: "https://github.com/gregwoodside/project-three",
    liveUrl: "https://project-three.example.com",
    tags: ["React", "Stripe", "Firebase"],
  },
];
