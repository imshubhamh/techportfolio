import { NavLink,Link  } from "react-router-dom";
import {
  Menu,
  Images,
  Grid3X3 ,
  FileText,
  BarChart3,
  Settings,
  User,
  MessageCircle,
  Vote
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const navItems = [
  { name: "About", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

const products = [
  {
    name: "Docs",
    icon: FileText,
    link: "https://yourdocs.com",
  },
  {
    name: "Poll",
    icon: Vote,
    link: "https://yourpoll.com",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    link: "https://youranalytics.com",
  },
  {
    name: "Settings",
    icon: Settings,
    link: "https://yoursettings.com",
  },
  {
    name: "Profile",
    icon: User,
    link: "https://www.linkedin.com/in/subhash-sagar-817882321/",
  },
    {
    name: "Gallery",
    icon: Images,
    link: "/gallery",
  },
  {
    name: "Support",
    icon: MessageCircle,
    link: "https://yoursupport.com",
  },
];

const Navbar = ({ setSidebarOpen }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="absolute top-4 left-4 right-4 z-50">

      <div className="flex items-center justify-between">

        {/* Hamburger */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden text-white"
        >
          <Menu size={26} />
        </button>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4 w-full justify-end">

          {/* Nav Links (Scrollable on small screen) */}
          <div className="
            hidden sm:flex
            bg-darkBg
            rounded-full
            px-4
            py-2
            gap-6
            text-sm
            border border-gray-700
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

          {/* Mobile Nav Scroll Version */}
          <div className="
            sm:hidden
            flex
            overflow-x-auto
            max-w-[55vw]
            bg-darkBg
            rounded-full
            px-3
            py-2
            gap-4
            text-xs
            border border-gray-700
            scrollbar-hide
          ">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `whitespace-nowrap transition ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-gray-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* App Grid */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-full bg-darkBg border border-gray-700 hover:bg-gray-800 transition"
            >
              <Grid3X3 size={20} className="text-white" />
            </button>

            {/* Dropdown */}
            {open && (
              <div className="
                absolute right-0 mt-3
                w-[70vw] sm:w-72
                max-w-sm
                bg-card
                rounded-xl
                border border-gray-700
                shadow-xl
                p-5
                grid grid-cols-3 gap-4
              ">
            {/* {products.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-xs text-gray-300 hover:text-white transition group"
                >
                  <div className="
                    w-11 h-11 
                    bg-darkBg 
                    rounded-xl 
                    flex items-center justify-center 
                    mb-2
                    border border-gray-700
                    group-hover:border-primary
                    group-hover:bg-gray-800
                    transition
                  ">
                    <Icon size={18} />
                  </div>
                  {item.name}
                </a>
              );
            })} */}
            {products.map((item, index) => {
  const Icon = item.icon;
  const isInternal = item.link.startsWith("/");

  if (isInternal) {
    return (
      <Link
        key={index}
        to={item.link}
        onClick={() => setOpen(false)}
        className="flex flex-col items-center text-xs text-gray-300 hover:text-white transition group"
      >
        <div className="
          w-11 h-11 
          bg-darkBg 
          rounded-xl 
          flex items-center justify-center 
          mb-2
          border border-gray-700
          group-hover:border-primary
          group-hover:bg-gray-800
          transition
        ">
          <Icon size={18} />
        </div>
        {item.name}
      </Link>
    );
  }

  return (
    <a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-xs text-gray-300 hover:text-white transition group"
    >
      <div className="
        w-11 h-11 
        bg-darkBg 
        rounded-xl 
        flex items-center justify-center 
        mb-2
        border border-gray-700
        group-hover:border-primary
        group-hover:bg-gray-800
        transition
      ">
        <Icon size={18} />
      </div>
      {item.name}
    </a>
  );
})}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;