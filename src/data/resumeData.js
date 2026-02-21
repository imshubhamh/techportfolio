// src/data/resumeData.js

import allheartweb from "../assets/favicon.png";
import connect4 from "../assets/c4d-logo.jpeg";
import bell from "../assets/Bell-logo.jpg";

export const educationData = [
  {
    title: "B.Tech - Computer Science",
    institute: "Dr. A.P.J Abdul Kalam Technical University",
    duration: "2020 — 2023",
    description: "Completed Bachelor of Technology in Computer Science.",
  },
  {
    title: "Diploma - Computer Science",
    institute: "Government Polytechnic College, Mawana Khurd, Meerut",
    duration: "2017 — 2020",
    description: "3-Year Diploma in Computer Science Engineering.",
  },
  {
    title: "Intermediate (12th)",
    institute: "KP Inter College, Allahabad",
    duration: "2015 — 2017",
    description: "Completed 12th with Science stream.",
  },
  {
    title: "High School (10th)",
    institute: "KP Inter College, Allahabad",
    duration: "2015",
    description: "Completed High School education.",
  },
];

export const experienceData = [
  {
    role: "MERN Stack Developer",
    company: "AllHeartWeb",
    logo: allheartweb,
    website: "https://allheartweb.com",
    location: "On-Site",
    duration: "March 2025 — Present",
    type: "Full-Time",
    responsibilities: [
      "Developing scalable MERN stack applications.",
      "Designing REST APIs and authentication systems.",
      "Implementing role-based authorization.",
      "Optimizing performance and database queries.",
      "Mentoring junior developers.",
      "Conducted 350+ technical interviews.",
      "Deployment using VPS and cloud hosting.",
      "CI/CD pipeline integration.",
    ],
  },
  {
    role: "MERN Developer",
    company: "Connect4 Digital",
    logo: connect4,
    website: "https://c4g.co.uk/",
    location: "On-Site",
    duration: "2024 — 2025",
    type: "Internship + Full-Time (1 Year)",
    responsibilities: [
      "Built full-stack web applications using MERN.",
      "Integrated third-party APIs and payment gateways.",
      "Developed admin dashboards and CMS systems.",
      "Improved performance by 30%.",
      "Client communication and requirement analysis.",
      "Authentication & authorization systems.",
    ],
  },
  {
    role: "Frontend Intern",
    company: "Bell Company, Kotdwar",
    logo: bell,
    website: "https://bel-india.in/homepage/",
    location: "Kotdwar",
    duration: "45 Days Internship",
    type: "Internship",
    responsibilities: [
      "Worked on UI improvements and responsive layouts.",
      "Collaborated with backend team.",
      "API integration tasks.",
      "Testing and bug fixing.",
      "Basic deployment support.",
    ],
  },
];