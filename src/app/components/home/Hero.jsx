"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white min-h-[80vh] flex items-center overflow-hidden relative">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0 w-full py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
          {/* ── Right Image — order-1 on mobile, order-2 on md+ ── */}
          <div className="w-full md:flex-1 flex justify-center items-center relative order-1 md:order-2">
            {/* Arrow decoration — hidden on small screens */}
            <svg
              className="hidden md:block absolute -right-8 top-4 w-16 h-16 text-[#6C63FF]"
              viewBox="0 0 60 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="10,50 40,20 40,40" />
              <polyline points="22,20 40,20" />
            </svg>

            {/* Browser Frame */}
            <div className="border-2 border-gray-900 w-full max-w-[320px] sm:max-w-sm md:max-w-md relative">
              {/* Top bar */}
              <div className="flex items-center justify-end gap-1.5 px-3 py-2 border-b-2 border-gray-900">
                <span className="w-3 h-3 rounded-full bg-[#6C63FF]" />
                <span className="w-3 h-3 rounded-full bg-[#F5A623]" />
              </div>

              {/* Image */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                <Image
                  src="https://res.cloudinary.com/dpijcljrw/image/upload/v1774540267/ahsan_pucrvn_ny0ajo.jpg"
                  alt="Ahsan - Full Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Gold + decoration */}
            <span className="absolute right-0 -bottom-4 text-[#F5A623] text-2xl font-light select-none">
              +
            </span>
          </div>

          {/* ── Left Content — order-2 on mobile, order-1 on md+ ── */}
          <div className="w-full md:flex-1 relative order-2 md:order-1">
            {/* Gold + decoration — hidden on mobile */}
            <span className="hidden md:block absolute -left-6 -top-10 text-[#F5A623] text-3xl font-light select-none">
              +
            </span>

            {/* Badge */}
            <div className="inline-block mb-5">
              <span className="border border-[#6C63FF] text-[#6C63FF] text-xs font-semibold px-3 py-1 -rotate-3 inline-block tracking-wide">
                Portfolio
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5">
              Hi, I'm Ahsan,
              <br />
              A Full Stack
              <br />
              Web app Developer
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-sm mb-8">
              I build modern, scalable, and high-performance websites and web
              applications using technologies like React, Next.js, PHP and
              Laravel. I help businesses turn ideas into powerful digital
              solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="#contact"
                className="inline-block text-center bg-[#6C63FF] text-white text-sm font-semibold px-7 py-3.5 hover:bg-[#574fd6] transition-colors duration-200 no-underline"
              >
                Let's Work Together
              </Link>
              <Link
                href="#projects"
                className="inline-block text-center border border-gray-900 text-gray-900 text-sm font-semibold px-7 py-3.5 hover:bg-gray-900 hover:text-white transition-colors duration-200 no-underline"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
