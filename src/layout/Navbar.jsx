

// import { NavLink } from "react-router-dom";

// const navItems = [
//   { name: "About", path: "/" },
//   { name: "Resume", path: "/resume" },
//   { name: "Portfolio", path: "/portfolio" },
//   { name: "Skills", path: "/skills" },
//   { name: "Contact", path: "/contact" },
// ];

// const Navbar = () => {
//   return (
//     <div className="
//       absolute top-6 right-8
//       bg-darkBg
//       rounded-full
//       px-6 py-3
//       flex gap-6
//       text-sm
//       border border-gray-700
//       z-10
//     ">
//       {navItems.map((item) => (
//         <NavLink
//           key={item.name}
//           to={item.path}
//           className={({ isActive }) =>
//             isActive
//               ? "text-primary font-medium"
//               : "text-gray-400 hover:text-white transition"
//           }
//         >
//           {item.name}
//         </NavLink>
//       ))}
//     </div>
//   );
// };

// export default Navbar;




// import { NavLink } from "react-router-dom";
// import { Menu } from "lucide-react";

// const navItems = [
//   { name: "About", path: "/" },
//   { name: "Resume", path: "/resume" },
//   { name: "Portfolio", path: "/portfolio" },
//   { name: "Skills", path: "/skills" },
//   { name: "Contact", path: "/contact" },
// ];

// const Navbar = ({ setSidebarOpen }) => {
//   return (
//     <div className="absolute top-4 right-4 left-4 flex justify-between items-center z-20">

//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setSidebarOpen(true)}
//         className="lg:hidden text-white"
//       >
//         <Menu size={26} />
//       </button>

//       {/* Desktop Nav */}
//       <div className="
//         hidden lg:flex
//         bg-darkBg
//         rounded-full
//         px-6 py-3
//         gap-6
//         text-sm
//         border border-gray-700
//       ">
//         {navItems.map((item) => (
//           <NavLink
//             key={item.name}
//             to={item.path}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-primary font-medium"
//                 : "text-gray-400 hover:text-white transition"
//             }
//           >
//             {item.name}
//           </NavLink>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// import { NavLink } from "react-router-dom";

// const navItems = [
//   { name: "About", path: "/" },
//   { name: "Resume", path: "/resume" },
//   { name: "Portfolio", path: "/portfolio" },
//   { name: "Skills", path: "/skills" },
//   { name: "Contact", path: "/contact" },
// ];

// const Navbar = () => {
//   return (
//     <div className="
//       absolute top-4 right-4
//       bg-darkBg
//       rounded-full
//       px-3 sm:px-5
//       py-2
//       flex
//       gap-3 sm:gap-6
//       text-xs sm:text-sm
//       border border-gray-700
//       z-20
//       overflow-x-auto
//       max-w-[90%]
//     ">
//       {navItems.map((item) => (
//         <NavLink
//           key={item.name}
//           to={item.path}
//           className={({ isActive }) =>
//             `whitespace-nowrap transition ${
//               isActive
//                 ? "text-primary font-medium"
//                 : "text-gray-400 hover:text-white"
//             }`
//           }
//         >
//           {item.name}
//         </NavLink>
//       ))}
//     </div>
//   );
// };

// export default Navbar;



import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

const navItems = [
  { name: "About", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

const Navbar = ({ setSidebarOpen }) => {
  return (
    <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">

      {/* Hamburger - Only Small & Medium */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden text-white"
      >
        <Menu size={26} />
      </button>

      {/* Right Side Nav - Always Visible */}
      <div className="
        bg-darkBg
        rounded-full
        px-3 sm:px-5
        py-2
        flex
        gap-3 sm:gap-6
        text-xs sm:text-sm
        border border-gray-700
        overflow-x-auto
        max-w-[80%]
      ">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `whitespace-nowrap transition ${
                isActive
                  ? "text-primary font-medium"
                  : "text-gray-400 hover:text-white"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

    </div>
  );
};

export default Navbar;