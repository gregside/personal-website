import { useState } from "react";
import "./About.css";

export default function About() {
  const skillCategories: Record<string, string[]> = {
    "Languages": ["Ruby", "JS/TypeScript", "Bash/Shell", "Python"],
    "Frontend": ["React", "React Native", "HTML/CSS", "Tailwind"],
    "Testing & QA": ["Selenium", "RSpec", "Postman", "Gatling"],
    "Tooling": ["JIRA", "Git/GitHub", "Jenkins", "AI Prompt Engineering", "Vim"],
    "Infrastructure": ["Docker", "Node.js", "REST APIs", "PostgreSQL"],
  };

  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggle = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
          I am a lifelong learner and builder who loves exploring new technologies. I am currently employed as a Software Test Engineer and have 4+ years of professional experience in QA Automation, API testing.
          </p>
          <p>
          In my free time, I enjoy building web applications for personal use and to develop my skills as a frontend developer, repairing old iPods, tinkering with Raspberry Pis, and toying with my Linux config. 
          </p>
        </div>
        <div className="about-skills">
          <h3>Technologies I work with</h3>
          <div className="skills-categories">
            {Object.entries(skillCategories).map(([category, skills]) => {
              const isOpen = openCategory === category;
              return (
                <div key={category} className="skill-category-wrapper">
                  <button
                    className={`skill-btn${isOpen ? " skill-btn--active" : ""}`}
                    onClick={() => toggle(category)}
                    aria-expanded={isOpen}
                  >
                    <span className="skill-btn-label">{category}</span>
                    <span className="skill-btn-count">{skills.length}</span>
                    <span className="skill-btn-chevron" />
                  </button>
                  <div
                    className={`skill-panel${isOpen ? " skill-panel--open" : ""}`}
                  >
                    <div className="skill-panel-inner">
                      <ul className="skills-list">
                        {skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
