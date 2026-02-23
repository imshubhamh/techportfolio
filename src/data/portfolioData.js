import nagarik from "../assets/portfolio/ttt.jpg";
import codewar from "../assets/uiux/codewar.png";
import swabworld from "../assets/uiux/swabworld.png"
import spyiweb from "../assets/uiux/spyiweb.png"
import nurosync from "../assets/uiux/neurosync.png"
import learn from "../assets/uiux/student.png"
import dweb from "../assets/uiux/dweb.png"
import bell from "../assets/portfolio/bell.jpeg"


const portfolioData = [
  {
    id: 1,
    title: "SPYIWEB",
    category: "Web development",
    image: spyiweb,
    description:
      "Education service web application built with full MERN stack and secure authentication system.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://spyiweb.vercel.app/",
    github: "https://github.com/imshubhamh?tab=repositories&q=&type=&language=&sort=",
  },

  {
    id: 2,
    title: "Neurosync Ventures",
    category: "Web development",
    image: nurosync,
    description:
      "Easily create unlimited virtual cards in seconds. Empower you or your business with secure, fast, and flexible payments.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
    live: "http://tech.neurosyncventures.com/",
    github: "https://github.com/imshubhamh?tab=repositories&q=&type=&language=&sort=",
  },

  {
    id: 3,
    title: "Learn SPYIWEB",
    category: "Web development",
    image: learn,
    description:
      "Modern real-time web application with responsive UI and API integration.",
    tech: ["React.js", "Tailwind", "Nodejs","Express", "MongoDB"],
    live: "https://example.com",
    github: "https://github.com/yourusername/socair",
  },

  {
    id: 4,
    title: "Tokma Website",
    category: "Web development",
    image: dweb,
    description:
      "Full-stack company website with admin panel and content management.",
    tech: ["React.js", "Tailwind", "Express", "Nodejs", "MongoDB"],
    live: "https://spywebdashboard-git-main-subhash-sagars-projects.vercel.app/",
    github: "https://github.com/yourusername/tokma",
  },

  {
    id: 5,
    title: "Code War UI Design (clone of codewar)",
    category: "UI/UX",
    image: codewar,
    description:
      "Modern UI/UX design project focused on clean interface and user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://codewar-eight.vercel.app/",
    github: null,
  },
   {
    id: 6,
    title: "Swab The World (clone of swabtheworld)",
    category: "UI/UX",
    image: swabworld,
    description:
      "Modern UI/UX design project focused on clean interface and user experience.",
    tech: ["HTML", "CSS", "JS"],
    live: "https://swabtheworld.vercel.app/",
    github: null,
  },

  // {
  //   id: 7,
  //   title: "Ifood App",
  //   category: "Web development",
  //   image: nagarik,
  //   description:
  //     "Food ordering application with secure login, cart system and payment integration.",
  //   tech: ["React", "Node.js", "MongoDB", "Stripe"],
  //   live: "https://example.com",
  //   github: "https://github.com/imshubhamh?tab=repositories&q=&type=&language=&sort=",
  // },

  // ================= CERTIFICATES =================

  {
    id: 100,
    title: "Bharat Electronic Limited (BEL)",
    category: "Certificates",
    image: bell,
    description:
      "Completed full MERN Stack development certification with real-world projects.",
    tech: ["Microprocessor"],
    live: "https://drive.google.com/file/d/1PkgsGEbeZjgTFiTXK0CrkEyjgce43xg8/view?usp=sharing",
    github: null,
  },

  // {
  //   id: 101,
  //   title: "Advanced React Certification",
  //   category: "Certificates",
  //   image: nagarik,
  //   description:
  //     "Advanced React concepts including performance optimization and hooks.",
  //   tech: ["React", "Hooks", "Performance"],
  //   live: "https://certificate-link.com",
  //   github: null,
  // },

  // {
  //   id: 102,
  //   title: "Backend Development Certificate",
  //   category: "Certificates",
  //   image: nagarik,
  //   description:
  //     "Backend architecture, API design, authentication and deployment training.",
  //   tech: ["Node.js", "Express", "MongoDB"],
  //   live: "https://certificate-link.com",
  //   github: null,
  // },
];

export default portfolioData;