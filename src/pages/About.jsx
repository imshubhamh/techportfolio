// import {
//     Smartphone,
//     Code2,
//     PenTool,
//     Server,
//   } from "lucide-react";
//   import SectionTitle from "../components/ui/SectionTitle";
  
//   const About = () => {
//     return (
//       <div className="max-w-5xl mx-auto">
  
//         <SectionTitle title="About Me" />
  
//         {/* Intro Paragraph */}
//         <div className="space-y-6 text-gray-400 leading-relaxed max-w-4xl text-sm sm:text-base">
//           <p>
//             I am a passionate MERN Stack Developer with strong expertise in
//             cross-platform applications, REST APIs, UI/UX design, widgets,
//             and scalable backend architecture.
//           </p>
  
//           <p>
//             I focus on delivering high-quality solutions including API
//             integration, third-party libraries, authentication systems,
//             and performance optimization.
//           </p>
//         </div>
  
//         {/* WHAT I'M DOING */}
//         <div className="mt-12 sm:mt-16">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
//             What I'm Doing
//           </h2>
  
//           <div className="
//             grid
//             grid-cols-1
//             sm:grid-cols-1
//             md:grid-cols-2
//             gap-6 sm:gap-8
//           ">
  
//             {/* Card 1 */}
//             <div className="bg-gradient-to-br from-[#1f1f23] to-[#17171a] p-6 sm:p-8 rounded-2xl border border-gray-700/50 hover:scale-[1.02] transition">
//               <Smartphone size={28} className="text-yellow-400 mb-4" />
//               <h3 className="text-base sm:text-lg font-semibold mb-2">
//                 Mobile Apps
//               </h3>
//               <p className="text-gray-400 text-sm sm:text-base">
//                 Professional development of applications for Android and iOS.
//               </p>
//             </div>
  
//             {/* Card 2 */}
//             <div className="bg-gradient-to-br from-[#1f1f23] to-[#17171a] p-6 sm:p-8 rounded-2xl border border-gray-700/50 hover:scale-[1.02] transition">
//               <Code2 size={28} className="text-yellow-400 mb-4" />
//               <h3 className="text-base sm:text-lg font-semibold mb-2">
//                 Web Development
//               </h3>
//               <p className="text-gray-400 text-sm sm:text-base">
//                 High-quality development of modern websites and web apps.
//               </p>
//             </div>
  
//             {/* Card 3 */}
//             <div className="bg-gradient-to-br from-[#1f1f23] to-[#17171a] p-6 sm:p-8 rounded-2xl border border-gray-700/50 hover:scale-[1.02] transition">
//               <PenTool size={28} className="text-yellow-400 mb-4" />
//               <h3 className="text-base sm:text-lg font-semibold mb-2">
//                 UI/UX Design
//               </h3>
//               <p className="text-gray-400 text-sm sm:text-base">
//                 Creating clean and modern user interface designs.
//               </p>
//             </div>
  
//             {/* Card 4 */}
//             <div className="bg-gradient-to-br from-[#1f1f23] to-[#17171a] p-6 sm:p-8 rounded-2xl border border-gray-700/50 hover:scale-[1.02] transition">
//               <Server size={28} className="text-yellow-400 mb-4" />
//               <h3 className="text-base sm:text-lg font-semibold mb-2">
//                 Backend Development
//               </h3>
//               <p className="text-gray-400 text-sm sm:text-base">
//                 Building scalable backend systems with high performance.
//               </p>
//             </div>
  
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default About;



import {
    Smartphone,
    Code2,
    PenTool,
    Server,
    ArrowUpRight,
    Briefcase,
    Users,
  } from "lucide-react";
  import SectionTitle from "../components/ui/SectionTitle";
  import companyLogo from "../assets/company-logo.jpeg"; 
  
  const About = () => {
    return (
      <div className="max-w-5xl mx-auto">
  
        <SectionTitle title="About Me" />
  
        {/* Intro Paragraph */}
        <div className="space-y-5 text-gray-400 leading-relaxed max-w-4xl text-sm sm:text-base">
          <p>
            I am a MERN Stack Developer with <span className="text-yellow-400 font-medium">1.5+ years of professional experience</span> building scalable full-stack web applications, secure authentication systems, REST APIs, and modern responsive user interfaces.
          </p>
  
          <p>
            I have conducted <span className="text-yellow-400 font-medium">350+ technical interviews</span>, mentoring and evaluating developers in JavaScript, React, Node.js, MongoDB, and system design fundamentals.
          </p>
        </div>
  
        {/* WHAT I'M DOING */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
            What I'm Doing
          </h2>
  
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-1
            md:grid-cols-2
            gap-5 sm:gap-6
          ">
  
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-[#1f1f23] to-[#17171a] p-5 sm:p-6 rounded-2xl border border-gray-700/50 hover:scale-[1.02] transition">
              <Smartphone size={26} className="text-yellow-400 mb-3" />
              <h3 className="text-sm sm:text-base font-semibold mb-1">
                Cross-Platform Applications
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Developing responsive web apps and mobile-friendly platforms using modern frameworks.
              </p>
            </div>
  
            {/* Card 2 */}
            <div className="bg-gradient-to-br from-[#1f1f23] to-[#17171a] p-5 sm:p-6 rounded-2xl border border-gray-700/50 hover:scale-[1.02] transition">
              <Code2 size={26} className="text-yellow-400 mb-3" />
              <h3 className="text-sm sm:text-base font-semibold mb-1">
                Frontend Development
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Building scalable React applications with optimized performance and reusable components.
              </p>
            </div>
  
            {/* Card 3 */}
            <div className="bg-gradient-to-br from-[#1f1f23] to-[#17171a] p-5 sm:p-6 rounded-2xl border border-gray-700/50 hover:scale-[1.02] transition">
              <Server size={26} className="text-yellow-400 mb-3" />
              <h3 className="text-sm sm:text-base font-semibold mb-1">
                Backend & APIs
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Designing RESTful APIs, authentication systems, and secure backend architectures.
              </p>
            </div>
  
            {/* Card 4 */}
            <div className="bg-gradient-to-br from-[#1f1f23] to-[#17171a] p-5 sm:p-6 rounded-2xl border border-gray-700/50 hover:scale-[1.02] transition">
              <Users size={26} className="text-yellow-400 mb-3" />
              <h3 className="text-sm sm:text-base font-semibold mb-1">
                Technical Interviews
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Conducted 350+ interviews evaluating JavaScript, MERN stack, and problem-solving skills.
              </p>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default About;