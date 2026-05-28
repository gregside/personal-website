export interface Job {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights: string[];
}

export const jobs: Job[] = [
  {
    company: "Backstop Solutions Group",
    title: "Software Test Engineer I",
    startDate: "Feb 2022",
    endDate: "Present",
    location: "Chicago, IL",
    highlights: [
      "Maintain automated test suites in Ruby using Selenium and RSpec, providing regression coverage across core application workflows.",
      "Design and execute API load tests with Postman to validate endpoint stability and performance under concurrent load.",
      "Author manual test plans for features outside automated coverage, coordinating with engineering to close coverage gaps.",
    ],
  },
  {
    company: "Backstop Solutions Group",
    title: "Client Care Specialist / Team Lead",
    startDate: "May 2021",
    endDate: "Feb 2022",
    location: "Chicago, IL",
    highlights: [
      "Managed ticket routing and workload distribution for a Tier 1 support team, improving resolution accuracy and response times.",
      "Authored support procedure documentation that was adopted org-wide by the Client Care department.",
    ],
  },
  {
    company: "Accuity",
    title: "Government Services Support Specialist",
    startDate: "May 2019",
    endDate: "Oct 2021",
    location: "Evanston, IL",
    highlights: [
      "Facilitated Asset Verification Requests between State/Federal agencies and financial institutions to support benefit eligibility determinations.",
      "Maintained accuracy standards on a high-volume regulatory data workflow requiring close attention to compliance requirements.",
    ],
  },
  {
    company: "Marcus Theatres",
    title: "Assistant Manager",
    startDate: "Oct 2016",
    endDate: "May 2019",
    location: "Gurnee, IL",
    highlights: [
      "Assisted GM with hiring, training, and associate development.",
      "Supervised, motivated, and coached theatre associates to sustain exceptional levels of performance and appropriately counseled associates when they did not meet expectations.",
    ],
  },
];

export interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
}

export const education: Education[] = [
  {
    school: "College of Lake County",
    degree: "Associate's Degree",
    startDate: "Aug 2015",
    endDate: "May 2019",
    location: "Grayslake, IL",
  },
];
