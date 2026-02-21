
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, X } from "lucide-react";
// import avatar from "../assets/avatar.png";
import avatar from "../assets/portfolio/profile-1.jpeg";


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}

      <div
        className={`
          fixed z-40
          top-0 left-0
          h-full
          w-[280px]
          bg-card
          border-r border-gray-700
          p-6
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          lg:top-1/2 lg:-translate-y-1/2
          lg:h-[85vh]
          lg:rounded-3xl
          lg:left-6
          lg:border
        `}
      >

        {/* Close Button (Mobile) */}
        <div className="flex justify-end lg:hidden">
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mt-6">

          <div className="relative">
            <div className="w-32 h-32 rounded-3xl bg-[#2a2a2e] flex items-center justify-center">
              <img
                src={avatar}
                alt="Profile"
                className="w-28 h-28 object-cover rounded-2xl"
              />
            </div>

            <span className="absolute bottom-3 right-3 w-4 h-4 bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
          </div>

          <h2 className="text-xl font-semibold mt-6 text-center">
            Subhash Sagar
          </h2>

          <span className="mt-2 px-3 py-1 bg-[#2a2a2e] text-gray-300 rounded-full text-xs">
            MERN Stack Developer
          </span>

          <div className="w-full h-px bg-gray-700/60 my-6" />

          <div className="space-y-5 w-full text-sm">

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-yellow-400" />
              <span className="text-gray-300">sseffort@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-yellow-400" />
              <span className="text-gray-300">+91 7317303692</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-yellow-400" />
              <span className="text-gray-300">India</span>
            </div>

          </div>

          {/* <div className="flex gap-5 mt-8 text-gray-400">
            <Linkedin size={20} className="hover:text-white cursor-pointer" />
            <Github size={20} className="hover:text-white cursor-pointer" />
            <Twitter size={20} className="hover:text-white cursor-pointer" />
          </div> */}

          <div className="flex justify-center gap-4 mt-8">

  <a
    href="https://www.linkedin.com/in/subhash-sagar-817882321/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center 
               bg-[#2a2a2e] rounded-full border border-yellow-400 
               transition duration-300"
  >
    <Linkedin size={16} className="text-gray-300 hover:text-white" />
  </a>

  <a
    href="https://github.com/imshubhamh"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center 
               bg-[#2a2a2e] rounded-full border border-yellow-400
               transition duration-300"
  >
    <Github size={16} className="text-gray-300 hover:text-white" />
  </a>

  <a
    href="https://twitter.com/iamsinghsubhash"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center 
               bg-[#2a2a2e] rounded-full 
               border border-yellow-400
               transition duration-300"
  >
    <Twitter size={16} className="text-gray-300 hover:text-white" />
  </a>

</div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;