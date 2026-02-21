// import SectionTitle from "../components/ui/SectionTitle";

// const skillsData = [
//   {
//     title: "Frontend Development",
//     skills: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"],
//   },
//   {
//     title: "Backend Development",
//     skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Role-Based Authorization"],
//   },
//   {
//     title: "Database",
//     skills: ["MongoDB", "Mongoose", "CRUD Operations", "Schema Design"],
//   },
//   {
//     title: "Tools & Technologies",
//     skills: ["Git & GitHub", "Postman", "Docker (Basic)", "VS Code"],
//   },
// ];

// const Skills = () => {
//   return (
//     <div className="max-w-4xl relative">
//       <SectionTitle title="Skills" />

//       {/* Vertical Line */}
//       <div className="absolute left-4 top-24 bottom-0 w-[2px] bg-gray-700"></div>

//       <div className="space-y-10 mt-12 pl-12">

//         {skillsData.map((section, index) => (
//           <div key={index} className="relative">

//             {/* Dot */}
//             <div className="absolute -left-[38px] top-6 w-4 h-4 bg-yellow-400 rounded-full border-4 border-[#1a1a1d]"></div>

//             {/* Card */}
//             <div className="bg-[#1f1f23] p-6 rounded-2xl border border-gray-700/50">
//               <h3 className="text-white font-semibold text-lg mb-4">
//                 {section.title}
//               </h3>

//               <ul className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
//                 {section.skills.map((skill, i) => (
//                   <li key={i} className="flex items-center gap-2">
//                     <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
//                     {skill}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//           </div>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default Skills;



import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiPostman,
  SiGit,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";
import SectionTitle from "../components/ui/SectionTitle";

const skillsData = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "REST APIs", icon: <SiExpress className="text-gray-400" /> },
      { name: "JWT Authentication", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Role-Based Authorization", icon: <SiJavascript className="text-yellow-400" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "CRUD Operations", icon: <SiMongodb className="text-green-500" /> },
      { name: "Schema Design", icon: <SiMongodb className="text-green-400" /> },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", icon: <SiGit className="text-orange-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Docker (Basic)", icon: <SiDocker className="text-blue-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="max-w-4xl relative">
      <SectionTitle title="Skills" />

      {/* Vertical Line */}
      <div className="absolute left-4 top-24 bottom-0 w-[2px] bg-gray-700"></div>

      <div className="space-y-10 mt-12 pl-12">
        {skillsData.map((section, index) => (
          <div key={index} className="relative">

            {/* Dot */}
            <div className="absolute -left-[38px] top-6 w-4 h-4 bg-yellow-400 rounded-full border-4 border-[#1a1a1d]"></div>

            {/* Card */}
            <div className="bg-[#1f1f23] p-6 rounded-2xl border border-gray-700/50">
              <h3 className="text-white font-semibold text-lg mb-4">
                {section.title}
              </h3>

              <ul className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
                {section.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-lg">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </li>
                ))}
              </ul>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;



// import {
//   Code2,
//   Server,
//   Database,
//   Wrench,
// } from "lucide-react";
// import SectionTitle from "../components/ui/SectionTitle";

// const skillsData = [
//   {
//     title: "Frontend Development",
//     icon: Code2,
//     color: "text-blue-400",
//     skills: [
//       "React.js",
//       "Next.js",
//       "JavaScript (ES6+)",
//       "Tailwind CSS",
//       "HTML5 & CSS3",
//     ],
//   },
//   {
//     title: "Backend Development",
//     icon: Server,
//     color: "text-green-400",
//     skills: [
//       "Node.js",
//       "Express.js",
//       "REST APIs",
//       "JWT Authentication",
//       "Role-Based Authorization",
//     ],
//   },
//   {
//     title: "Database",
//     icon: Database,
//     color: "text-emerald-400",
//     skills: [
//       "MongoDB",
//       "Mongoose",
//       "CRUD Operations",
//       "Schema Design",
//     ],
//   },
//   {
//     title: "Tools & Technologies",
//     icon: Wrench,
//     color: "text-orange-400",
//     skills: [
//       "Git & GitHub",
//       "Postman",
//       "Docker (Basic)",
//       "VS Code",
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <div className="max-w-4xl mx-auto relative px-4">
//       <SectionTitle title="Skills" />

//       {/* Vertical Line */}
//       <div className="absolute left-4 sm:left-6 top-28 bottom-0 w-[2px] bg-gray-700"></div>

//       <div className="space-y-10 mt-12 pl-10 sm:pl-14">

//         {skillsData.map((section, index) => {
//           const Icon = section.icon;

//           return (
//             <div key={index} className="relative">

//               {/* Dot */}
//               <div className="absolute -left-[26px] sm:-left-[40px] top-6 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full border-4 border-[#1a1a1d]"></div>

//               {/* Card */}
//               <div className="bg-[#1f1f23] p-5 sm:p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition">

//                 {/* Title + Icon */}
//                 <div className="flex items-center gap-3 mb-4">
//                   <Icon className={`${section.color}`} size={22} />
//                   <h3 className="text-white font-semibold text-base sm:text-lg">
//                     {section.title}
//                   </h3>
//                 </div>

//                 {/* Skills Grid */}
//                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300 text-sm sm:text-base">
//                   {section.skills.map((skill, i) => (
//                     <li key={i} className="flex items-center gap-2">
//                       <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>

//               </div>

//             </div>
//           );
//         })}

//       </div>
//     </div>
//   );
// };

// export default Skills;


