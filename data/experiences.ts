export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  type: string; // Full-time, Internship, Freelance
  description: string;
  tech: string[];
  logo: string; // company logo URL
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Khan Bank",
    role: "DevOps Engineer Intern",
    period: "2025-06 → 2025-08",
    type: "Intern",
    description: "Worked on Kubernetes, Jenkins pipelines, Prometheus + Grafana dashboards, and CI/CD best practices.",
    tech: ["Kubernetes", "Jenkins", "ArgoCD"],
    logo: "/logos/khanbank.png",
  },
  {
    id: 2,
    company: "Erxes inc",
    role: "QA Tester",
    period: "2023-09 → 2023-11",
    type: "Part-time",
    description:
      "Created and executed test cases, reported bugs, and collaborated with developers to improve product stability and user experience.",
    tech: ["Qase.io", "Cypress"],
    logo: "/logos/erxes.webp",
  },
  {
    id: 3,
    company: "New work",
    role: "Software Engineer",
    period: "2025",
    type: "NaN",
    description: "Searching....",
    tech: ["searching..."],
    logo: "/logos/search.webp",
  },
];
