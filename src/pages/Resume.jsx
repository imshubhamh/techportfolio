

import { useState } from "react";
import { BookOpen, ArrowUpRight } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import { educationData, experienceData } from "../data/resumeData";

const Resume = () => {
  const [showAllEdu, setShowAllEdu] = useState(false);
  const [showAllExp, setShowAllExp] = useState(false);
  const [expandedJobs, setExpandedJobs] = useState({});

  const displayedEducation = showAllEdu
    ? educationData
    : educationData.slice(0, 2);

  const displayedExperience = showAllExp
    ? experienceData
    : experienceData.slice(0, 2);

  const toggleJob = (index) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-5xl xl:max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center">
        <SectionTitle title="Resume" />
        <button className="px-2 py-1 border border-yellow-500 rounded-md bg-yellow-500 text-black text-sm">View Resume</button>
      </div>

      {/* ================= EDUCATION ================= */}
      <div className="relative pl-8 sm:pl-12 mt-10 sm:mt-12">
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2a2a2e] rounded-xl flex items-center justify-center">
            <BookOpen className="text-yellow-400" size={18} />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold">Education</h2>
        </div>

        <div className="absolute left-3 sm:left-5 top-14 sm:top-16 bottom-0 w-[2px] bg-gray-700"></div>

        {displayedEducation.map((edu, index) => (
          <div key={index} className="relative mb-8 sm:mb-10">
            <div className="absolute -left-[18px] sm:-left-[30px] top-2 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full border-4 border-[#1a1a1d]"></div>

            <h3 className="text-white font-semibold text-base sm:text-lg">
              {edu.title}
            </h3>

            {/* <p className="text-gray-300 mt-1 text-sm sm:text-base">
              {edu.institute}
            </p> */}
            <a
              href={edu.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-300 hover:text-yellow-400 transition text-sm sm:text-base mt-1"
            >
              {edu.institute}
              <ArrowUpRight size={14} />
            </a>

            <p className="text-yellow-400 mt-1 font-medium text-sm sm:text-base">
              {edu.duration}
            </p>

            <p className="text-gray-400 mt-2 text-sm">
              {edu.description}
            </p>
          </div>
        ))}

        <button
          onClick={() => setShowAllEdu(!showAllEdu)}
          className="text-yellow-400 text-sm border border-yellow-500 px-3 py-1 rounded-md"
        >
          {showAllEdu ? "View Less" : "View More"}
        </button>
      </div>

      {/* ================= EXPERIENCE ================= */}
      <div className="relative pl-8 sm:pl-12 mt-14 sm:mt-16">
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2a2a2e] rounded-xl flex items-center justify-center">
            <BookOpen className="text-yellow-400" size={18} />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold">Experience</h2>
        </div>

        <div className="absolute left-3 sm:left-5 top-14 sm:top-16 bottom-0 w-[2px] bg-gray-700"></div>

        {displayedExperience.map((job, index) => {
          const showAllTasks = expandedJobs[index];
          const tasks = showAllTasks
            ? job.responsibilities
            : job.responsibilities.slice(0, 5);

          return (
            <div key={index} className="relative mb-10 sm:mb-12">
              <div className="absolute -left-[18px] sm:-left-[30px] top-2 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full border-4 border-[#1a1a1d]"></div>

              <h3 className="text-white font-semibold text-base sm:text-lg">
                {job.role}
              </h3>

              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-5 h-5 object-cover rounded-sm"
                />

                <a
                  href={job.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-yellow-400 transition text-sm sm:text-base"
                >
                  {job.company}
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <p className="text-yellow-400 mt-1 font-medium text-sm sm:text-base">
                {job.duration} • {job.type}
              </p>

              <p className="italic text-gray-400 mt-1 text-sm">
                {job.location}
              </p>

              <ul className="mt-3 sm:mt-4 space-y-2 text-gray-400 text-sm sm:text-base list-disc list-inside marker:text-yellow-400">
                {tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>

              {job.responsibilities.length > 5 && (
                <button
                  onClick={() => toggleJob(index)}
                  className="text-yellow-400 text-sm mt-2"
                >
                  {showAllTasks ? "View Less" : "View More"}
                </button>
              )}
            </div>
          );
        })}

        <button
          onClick={() => setShowAllExp(!showAllExp)}
          className="text-yellow-400 text-sm border border-yellow-500 px-3 py-1 rounded-md"
        >
          {showAllExp ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default Resume;