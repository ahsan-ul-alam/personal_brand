"use client";

import {
  ClipboardList,
  Blocks,
  PencilRuler,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const developmentProcess = [
  {
    number: "01",
    title: "Requirement Gathering",
    description:
      "I begin by understanding your business goals, target audience, core features, and project expectations to define a clear development roadmap.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Software Architecture & System Design",
    description:
      "I plan the application structure, database flow, scalability strategy, and technical architecture to ensure a solid foundation for development.",
    icon: Blocks,
  },
  {
    number: "03",
    title: "UI/UX Planning",
    description:
      "I organize the interface, user journey, and content structure to create a clean, intuitive, and engaging experience before development begins.",
    icon: PencilRuler,
  },
  {
    number: "04",
    title: "Development",
    description:
      "I build the frontend, backend, and core functionalities using modern technologies with clean, maintainable, and scalable code practices.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Testing & Optimization",
    description:
      "I test features, fix issues, improve responsiveness, and optimize performance to make sure the final product is stable and user-friendly.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Deployment & Maintenance",
    description:
      "After deployment, I ensure the project runs smoothly in production and provide ongoing updates, support, and improvements when needed.",
    icon: Rocket,
  },
];

function ProcessCard({ step }) {
  const Icon = step.icon;

  return (
    <article className="group h-full border border-gray-900 bg-[#FAF6EC] p-6 sm:p-7 lg:p-8 transition-colors duration-300 hover:bg-white">
      <div className="flex h-full flex-col gap-4 sm:gap-5">
        <span className="text-3xl font-extrabold leading-none text-gray-900 sm:text-4xl">
          {step.number}
        </span>

        <h3 className="text-lg font-bold leading-snug text-gray-900 sm:text-xl">
          {step.title}
        </h3>

        <p className="flex-1 text-sm leading-7 text-gray-600 sm:text-[15px]">
          {step.description}
        </p>

        <div className="pt-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5A623] transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
            <Icon
              className="h-5 w-5 text-gray-900 sm:h-6 sm:w-6"
              strokeWidth={1.8}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function DevelopmentProcess() {
  return (
    <section className="bg-[#FAF6EC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-screen-xl px-6 sm:px-8 lg:px-10 xl:px-0">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl sm:mb-14">
          <div className="relative inline-block">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              My Development <span className="text-gray-900">Process</span>
            </h2>

            <svg
              viewBox="0 0 120 12"
              className="absolute -bottom-3 left-0 w-28 text-[#F5A623] sm:w-32"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M2 8 Q30 2 60 8 Q90 14 118 8" />
            </svg>
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base">
            From idea validation to deployment, I follow a structured and
            reliable workflow to build scalable, modern, and high-performing
            digital products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {developmentProcess.map((step) => (
            <ProcessCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
