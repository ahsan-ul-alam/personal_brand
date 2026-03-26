"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white min-h-[80vh] flex items-center overflow-hidden relative">
      <div className="max-w-screen-xl mx-auto px-8 md:px-0 w-full py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* ── Left Content ── */}
          <div className="flex-1 relative">
            {/* Decoration */}
            <span className="absolute -left-6 -top-10 text-[#F5A623] text-3xl font-light select-none">
              +
            </span>

            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="border border-[#6C63FF] text-[#6C63FF] text-xs font-semibold px-3 py-1 rotate-[-6deg] inline-block tracking-wide">
                Portfolio
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Hi, I'm Ahsan
              <br />
              Full Stack
              <br />
              Web Developer
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-base leading-relaxed max-w-sm mb-10">
              I build modern, scalable, and high-performance websites and web
              applications using technologies like React, Next.js, php and
              Laravel. I help businesses turn ideas into powerful digital
              solutions.
            </p>

            {/* CTA */}
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-block bg-[#6C63FF] text-white text-sm font-semibold px-7 py-3.5 hover:bg-[#574fd6] transition-colors duration-200 no-underline"
              >
                Let's Work Together
              </Link>

              <Link
                href="/projects"
                className="inline-block border border-gray-900 text-gray-900 text-sm font-semibold px-7 py-3.5 hover:bg-gray-900 hover:text-white transition"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* ── Right Image ── */}
          <div className="flex-1 flex justify-center items-center relative">
            {/* Arrow decoration */}
            <svg
              className="absolute -right-8 top-4 w-16 h-16 text-[#6C63FF]"
              viewBox="0 0 60 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="10,50 40,20 40,40" />
              <polyline points="22,20 40,20" />
            </svg>

            {/* Frame */}
            <div className="border-2 border-gray-900 w-full max-w-md relative">
              {/* Top bar */}
              <div className="flex items-center justify-end gap-1.5 px-3 py-2 border-b-2 border-gray-900">
                <span className="w-3 h-3 rounded-full bg-[#6C63FF]" />
                <span className="w-3 h-3 rounded-full bg-[#F5A623]" />
              </div>

              {/* Image */}
              <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden p-4">
                <Image
                  src="https://res.cloudinary.com/dpijcljrw/image/upload/v1774540267/ahsan_pucrvn_ny0ajo.jpg"
                  alt="Ahsan - Full Stack Developer"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Decoration */}
            <span className="absolute right-0 -bottom-6 text-[#F5A623] text-2xl font-light select-none">
              +
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
