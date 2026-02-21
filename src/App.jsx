
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import About from "./pages/About";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-darkBg flex">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Main Section */}
      <div className="flex-1 lg:ml-[320px] p-4 sm:p-6">
        <div className="relative min-h-screen bg-card rounded-3xl border border-gray-700">
          {/* Navbar */}
          <Navbar setSidebarOpen={setSidebarOpen} />
          {/* Scrollable Content */}
          <div className="pt-20 px-4 sm:px-8 pb-8 overflow-y-auto">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;