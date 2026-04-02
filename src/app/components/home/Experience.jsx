"use client";

import { useState } from "react";
import Image from "next/image";

const skills = [
  // Frontend
  { icon: "🌐", label: "HTML", color: "bg-orange-500" },
  { icon: "🎨", label: "CSS", color: "bg-blue-500" },
  { icon: "🟨", label: "JavaScript", color: "bg-yellow-400" },
  { icon: "🅱️", label: "Bootstrap", color: "bg-purple-600" },
  { icon: "💨", label: "Tailwind CSS", color: "bg-cyan-500" },
  { icon: "🔗", label: "jQuery", color: "bg-indigo-600" },

  // Frontend Frameworks
  { icon: "⚛️", label: "React.js", color: "bg-sky-500" },
  { icon: "▲", label: "Next.js", color: "bg-black" },

  // Backend
  { icon: "🐘", label: "PHP", color: "bg-indigo-500" },
  { icon: "🚀", label: "Laravel", color: "bg-red-500" },

  // Database
  { icon: "🗄️", label: "MySQL", color: "bg-blue-600" },
  { icon: "🐘", label: "PostgreSQL", color: "bg-indigo-700" },
  { icon: "📦", label: "SQLite", color: "bg-gray-600" },

  // Tools
  { icon: "🔧", label: "Git & Github", color: "bg-orange-600" },
];

const experiences = [
  {
    period: "Aug 2025 - Mar 2026",
    title: "Dept. Head - Full Stack Development",
    company: "Sardar IT",
  },
  {
    period: "Apr 2025 - Jun 2025",
    title: "Full Stack Laravel Developer",
    company: "Wazih Premium, Dhaka",
  },
  {
    period: "Jul 2024 - Apr 2025",
    title: "Web Development Trainer",
    company: "Skill And Technology Institute, Dhaka",
  },
  {
    period: "Apr 2024 - Mar 2025",
    title: "Sr. Backend Developer",
    company: "Soft Spark Solutions",
  },
  {
    period: "Jun 2023 - Feb 2024",
    title: "Web Developer",
    company: "AR SOFT BD, Dhaka",
  },
];

export default function Experience() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT COLUMN */}
        <div>
          {/* Badge */}
          <div className="inline-block border-2 border-indigo-400 text-indigo-500 text-xs font-semibold tracking-widest uppercase px-4 py-1 rotate-[-2deg] mb-6">
            Experience
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
            Skills and
            <br />
            <span className="relative inline-block">
              Experience
              <span className="absolute left-0 -bottom-1 w-16 h-1 rounded-full bg-yellow-400" />
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-500 text-sm sm:text-base max-w-sm leading-relaxed">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>

          {/* Skills */}
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-5">My Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={`flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 cursor-pointer transition-all duration-200 ${
                    hovered === i
                      ? "shadow-md border-indigo-300 bg-indigo-50 scale-[1.02]"
                      : "hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-lg shrink-0 ${skill.color}`}
                  >
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-8 md:mt-6">
          {/* Experience List */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience
            </h3>
            <div className="divide-y divide-gray-200">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-6 py-4 group transition-all duration-150"
                >
                  <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap pt-0.5 w-36 shrink-0">
                    {exp.period}
                  </span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-indigo-600 transition-colors">
                      {exp.title}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {exp.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Card */}
          <div className="relative flex flex-col items-center mt-4">
            {/* Decorative code tag */}
            <span className="absolute left-0 bottom-20 text-3xl font-mono text-indigo-200 select-none hidden sm:block">
              {"</>"}
            </span>

            {/* Zigzag deco */}
            <svg
              className="absolute right-0 top-0 text-indigo-300 opacity-60 hidden sm:block"
              width="50"
              height="70"
              viewBox="0 0 50 70"
              fill="none"
            >
              <polyline
                points="40,5 10,20 40,35 10,50 40,65"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Avatar */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg bg-yellow-100 flex items-center justify-center">
              {/* Placeholder avatar using initials */}
              <span className="text-4xl font-bold text-yellow-600">
                <Image
                  src="https://res.cloudinary.com/dpijcljrw/image/upload/v1774540267/ahsan_pucrvn_ny0ajo.jpg"
                  alt="Avatar"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </span>
            </div>

            {/* Hire Me button */}
            <a
              href="https://wa.me/+8801773766658"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-yellow-400 hover:bg-yellow-500 active:scale-95 transition-all duration-150 text-gray-900 font-bold text-sm sm:text-base px-10 py-3 rounded-md shadow-md tracking-wide"
            >
              Hire me
            </a>

            {/* Quote Card */}
            <div className="mt-6 w-full max-w-sm border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition-all duration-300">
              {/* Quote icon */}
              <span className="text-3xl text-[#F5A623] leading-none">“</span>

              {/* Text */}
              <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                I build scalable, high-performance web applications that solve
                real business problems and deliver measurable results.
              </p>

              {/* Author */}
              <p className="mt-4 text-xs text-gray-400 tracking-wide">
                — Ahsan, Full Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
