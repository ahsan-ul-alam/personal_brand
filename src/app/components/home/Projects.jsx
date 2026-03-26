"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Agency Landing page",
    category: "Web/Next.js",
    image:
      "https://res.cloudinary.com/dpijcljrw/image/upload/v1774544097/switzer_it_jyvzdn.png",
    bg: "bg-gray-900",
    url: "https://www.switzerit.com",
  },
  {
    id: 2,
    title: "Home Service and Roofing",
    category: "Web/Laravel",
    image:
      "https://res.cloudinary.com/dpijcljrw/image/upload/v1774544097/roofiant_kvmhhv.png",
    bg: "bg-purple-900",
    url: "https://roofiant.sardarit.cloud/",
  },
  {
    id: 3,
    title: "Lawn and Garden Care",
    category: "Web/Laravel + React.js",
    image:
      "https://res.cloudinary.com/dpijcljrw/image/upload/v1774544095/sira_g8iggz.png",
    bg: "bg-slate-800",
    url: "https://sira.sardarit.cloud",
  },
  {
    id: 4,
    title: "Ecommerce Solution",
    category: "Web/Laravel",
    image:
      "https://res.cloudinary.com/dpijcljrw/image/upload/v1774544095/dalycart_zn7bm4.png",
    bg: "bg-indigo-950",
    url: "https://dalycart.com",
  },
  {
    id: 5,
    title: "Real Estate Solution",
    category: "Web/Laravel + React.js",
    image:
      "https://res.cloudinary.com/dpijcljrw/image/upload/v1774544095/Screenshot_1_tfa9lh.png",
    bg: "bg-blue-900",
    url: "https://real-estate-punta.vercel.app",
  },
  {
    id: 6,
    title: "Ai Assistant Advocacy",
    category: "Web/Laravel+inertia.js(react.js)",
    image:
      "https://res.cloudinary.com/dpijcljrw/image/upload/v1774544094/oxaxi_yfgilw.png",
    bg: "bg-sky-100",
    url: "https://oxaxie.vercel.app",
  },
];

export default function LatestProjects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className="w-full bg-[#faf6ee] py-14 px-4 sm:px-8 lg:px-16 scroll-mt-20"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 relative inline-block">
            Latest Projects
            <span className="absolute left-0 -bottom-2 w-20 h-1.5 rounded-full bg-yellow-400" />
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden h-48 sm:h-52 ${project.bg}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                />
                {/* Overlay on hover */}
                <div
                  className={`absolute inset-0 bg-indigo-600/20 transition-opacity duration-300 ${
                    hovered === project.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">
                    {project.title}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
                    {project.category}
                  </p>
                </div>

                {/* Arrow Button */}
                <a
                  href={project.url}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                    hovered === project.id
                      ? "bg-indigo-600 scale-110"
                      : "bg-indigo-500"
                  }`}
                  target="_blank"
                  aria-label="View project"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
