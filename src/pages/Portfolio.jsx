
// import { useState } from "react";
// import { Eye } from "lucide-react";
// import SectionTitle from "../components/ui/SectionTitle";
// import portfolioData from "../data/portfolioData";

// const categories = [
//   "All",
//   "Applications",
//   "Web development",
//   "UI/UX",
//   "Certificates",
// ];

// const Portfolio = () => {
//   const [filter, setFilter] = useState("All");

//   const filtered =
//     filter === "All"
//       ? portfolioData
//       : portfolioData.filter((item) => item.category === filter);

//   return (
//     <div className="max-w-6xl mx-auto">
//       <SectionTitle title="Portfolio" />

//       {/* FILTER TABS */}
//       <div className="
//         flex
//         gap-4
//         sm:gap-6
//         mb-8
//         text-xs sm:text-sm
//         px-3 sm:px-4
//         py-2
//         bg-slate-900
//         border border-gray-500
//         rounded-full
//         overflow-x-auto
//         max-w-full
//       ">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setFilter(cat)}
//             className={`whitespace-nowrap transition ${
//               filter === cat
//                 ? "text-yellow-400"
//                 : "text-gray-400 hover:text-white"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* RESPONSIVE GRID */}
//       <div className="
//         grid
//         grid-cols-1
//         sm:grid-cols-1
//         md:grid-cols-2
//         lg:grid-cols-3
//         gap-6
//         md:gap-8
//       ">
//         {filtered.map((item) => (
//           <div key={item.id} className="group flex flex-col">

//             {/* IMAGE CARD */}
//             <div className="relative overflow-hidden rounded-xl">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="
//                   w-full
//                   h-[200px]
//                   sm:h-[220px]
//                   md:h-[200px]
//                   object-cover
//                   rounded-xl
//                 "
//               />

//               <div
//                 onClick={() =>
//                   item.live && window.open(item.live, "_blank")
//                 }
//                 className="
//                   absolute inset-0
//                   bg-black/60
//                   opacity-0
//                   group-hover:opacity-100
//                   transition
//                   flex items-center justify-center
//                   cursor-pointer
//                 "
//               >
//                 <div className="
//                   w-12 h-12 sm:w-14 sm:h-14
//                   bg-[#2a2a2e]
//                   rounded-xl
//                   flex items-center justify-center
//                 ">
//                   <Eye size={20} className="text-yellow-400" />
//                 </div>
//               </div>
//             </div>

//             {/* TITLE */}
//             <h3 className="mt-4 text-base sm:text-lg font-semibold">
//               {item.title}
//             </h3>

//             <p className="text-gray-400 text-xs sm:text-sm">
//               {item.category}
//             </p>

//             {/* DESCRIPTION */}
//             <p className="text-gray-400 text-xs sm:text-sm mt-3 line-clamp-2 min-h-[40px]">
//               {item.description}
//             </p>

//             {/* BUTTONS */}
//             <div className="flex gap-3 mt-auto pt-4 flex-wrap">
//               <a
//                 href={item.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   border border-yellow-400
//                   text-yellow-400
//                   px-3 sm:px-4
//                   py-1
//                   rounded-lg
//                   text-xs sm:text-sm
//                   font-medium
//                 "
//               >
//                 {item.category === "Certificates" ? "View" : "Live"}
//               </a>

//               {item.github && (
//                 <a
//                   href={item.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="
//                     border border-gray-600
//                     px-3 sm:px-4
//                     py-1
//                     rounded-lg
//                     text-xs sm:text-sm
//                     hover:border-yellow-400
//                     transition
//                   "
//                 >
//                   GitHub
//                 </a>
//               )}
//             </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;



import { useState } from "react";
import { Eye } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { FaCertificate, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import SectionTitle from "../components/ui/SectionTitle";
import portfolioData from "../data/portfolioData";

const categories = [
  "All",
  "Web development",
  "UI/UX",
  "Certificates",
];

const techIcons = {
  React: <SiReact className="text-cyan-400" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  Express: <SiExpress className="text-gray-300" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  Tailwind: <SiTailwindcss className="text-sky-400" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  "MERN Stack": <FaCertificate className="text-yellow-400" />,
};

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === filter);

  return (
    <div className="max-w-6xl mx-auto">
      <SectionTitle title="Portfolio" />

      {/* FILTER TABS (UNCHANGED) */}
      <div className="flex gap-4 sm:gap-6 mb-8 text-xs sm:text-sm px-3 sm:px-4 py-2 bg-slate-900 border border-gray-500 rounded-full overflow-x-auto max-w-full">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`whitespace-nowrap transition ${
              filter === cat
                ? "text-yellow-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID (UNCHANGED STRUCTURE) */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filtered.map((item) => (
          <div key={item.id} className="group flex flex-col">

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] sm:h-[220px] md:h-[200px] object-cover rounded-xl"
              />

              <div
                onClick={() =>
                  item.live && window.open(item.live, "_blank")
                }
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2a2a2e] rounded-xl flex items-center justify-center">
                  <Eye size={20} className="text-yellow-400" />
                </div>
              </div>
            </div>

            {/* TITLE + CATEGORY ICON */}
            <h3 className="mt-4 text-base sm:text-lg font-semibold flex items-center gap-2">
              {item.category === "Certificates" && (
                <FaCertificate className="text-yellow-400" />
              )}
              {item.title}
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm">
              {item.category}
            </p>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-xs sm:text-sm mt-3 line-clamp-2 min-h-[40px]">
              {item.description}
            </p>

            {/* TECH STACK */}
            {item.tech && (
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 bg-[#1f1f23] border border-gray-700 px-2 py-1 rounded-md text-xs text-gray-300"
                  >
                    {techIcons[tech]}
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* BUTTONS */}
            <div className="flex gap-3 mt-auto pt-4 flex-wrap">
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 border border-yellow-400 text-yellow-400 px-3 sm:px-4 py-1 rounded-lg text-xs sm:text-sm font-medium"
              >
                <FiExternalLink size={14} />
                {item.category === "Certificates" ? "View" : "Live"}
              </a>

              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 border border-gray-600 px-3 sm:px-4 py-1 rounded-lg text-xs sm:text-sm hover:border-yellow-400 transition"
                >
                  <FaGithub size={14} />
                  GitHub
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;