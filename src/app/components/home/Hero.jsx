"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { value: "4", label: "Years Experience" },
    { value: "200+", label: "Projects Completed" },
    { value: "300+", label: "Happy Clients" },
  ];

  const handleCVDownload = () => window.open("/ahsan_ul_alam.pdf", "_blank");
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <>
      {/* ── Section ── */}
      <section className="relative flex flex-col overflow-hidden px-[60px] pt-[40px] pb-[60px] min-h-[calc(100vh-80px)] max-w-7xl mx-auto">
        {/* Decorative crosshairs */}
        <span className="absolute top-[18px] left-[80px] text-[#2a4a6a] text-[22px] font-light select-none">
          +
        </span>
        <span className="absolute top-[18px] right-[80px] text-[#2a4a6a] text-[22px] font-light select-none">
          +
        </span>

        {/* ── Content row ── */}
        <div className="flex flex-1 items-center justify-between gap-10 mt-5">
          {/* ── Left ── */}
          <div className="flex-1 max-w-[580px]">
            <h1 className="text-[clamp(42px,5vw,68px)] font-extrabold text-white leading-[1.1] mb-6 font-[Poppins,sans-serif]">
              Hello, I&apos;m
              <span className="block text-[#00BFFF]">Ahsan Ul Alam</span>
            </h1>

            <p className="text-base text-[#a0b0c8] leading-[1.8] font-[Poppins,sans-serif] mb-9 max-w-[520px]">
              I&apos;m a Freelance{" "}
              <span className="text-[#00BFFF] font-medium">
                Software Architect
              </span>{" "}
              and{" "}
              <span className="text-[#00BFFF] font-medium">
                Full Stack Developer
              </span>{" "}
              based in Dhaka, Bangladesh. I strive to build immersive and
              beautiful web applications through carefully crafted code and
              user-centric design.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-[52px]">
              <button
                onClick={handleCVDownload}
                className="flex items-center gap-[10px] bg-gradient-to-br from-[#00BFFF] to-[#1a6fff] text-white border-none rounded-full px-7 py-[14px] text-[15px] font-semibold font-[Poppins,sans-serif] cursor-pointer shadow-[0_4px_24px_rgba(0,191,255,0.4)]"
              >
                Download CV
                <span className="flex items-center justify-center bg-white/25 rounded-full w-[30px] h-[30px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 3v7M5 7l3 3 3-3M3 13h10"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <button
                onClick={openModal}
                className="flex items-center gap-[10px] bg-transparent text-white border-2 border-white/30 rounded-full px-7 py-[14px] text-[15px] font-semibold font-[Poppins,sans-serif] cursor-pointer"
              >
                Get a Quote
                <span className="flex items-center justify-center bg-white/15 rounded-full w-[30px] h-[30px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="relative flex flex-col items-center gap-1 bg-white/5 rounded-xl px-8 py-5 mr-[2px] min-w-[140px]"
                >
                  <span className="text-[36px] font-extrabold text-white leading-[1.1] font-[Poppins,sans-serif]">
                    {stat.value}
                  </span>
                  <span className="text-[13px] text-[#8090a8] font-[Poppins,sans-serif] text-center">
                    {stat.label}
                  </span>
                  {i < stats.length - 1 && (
                    <div className="absolute right-[-1px] top-[20%] h-[60%] w-px bg-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — Image Card ── */}
          <div className="flex-none flex items-center justify-center">
            <div className="w-[400px] h-[520px] border-2 border-[rgba(0,191,255,0.3)] rounded-[20px] overflow-hidden bg-gradient-to-br from-[#0d1929] to-[#0a1220] shadow-[0_0_60px_rgba(0,100,255,0.1)]">
              <Image
                src="https://res.cloudinary.com/dpijcljrw/image/upload/v1772135029/ahsan_pucrvn.png"
                alt="Ahsan Ul Alam — Software Architect & Full Stack Developer"
                width={400}
                height={520}
                priority
                unoptimized
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal (outside section to avoid overflow:hidden clipping) ── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/55 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
        >
          <div className="relative bg-white rounded-2xl p-9 w-full max-w-[440px] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-[14px] right-[18px] bg-transparent border-none text-2xl font-bold text-gray-500 cursor-pointer leading-none hover:text-gray-800 transition-colors"
            >
              ×
            </button>

            <h2
              id="quote-modal-title"
              className="text-[22px] font-bold text-[#1a1a2e] font-[Poppins,sans-serif] mb-5"
            >
              Get a Quote
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="border border-[#e0e0e0] rounded-lg px-[14px] py-[10px] text-sm font-[Poppins,sans-serif] outline-none w-full text-[#333] focus:border-[#00BFFF] transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="border border-[#e0e0e0] rounded-lg px-[14px] py-[10px] text-sm font-[Poppins,sans-serif] outline-none w-full text-[#333] focus:border-[#00BFFF] transition-colors"
              />
              <textarea
                placeholder="Project Details"
                rows={4}
                required
                className="border border-[#e0e0e0] rounded-lg px-[14px] py-[10px] text-sm font-[Poppins,sans-serif] outline-none w-full text-[#333] resize-y focus:border-[#00BFFF] transition-colors"
              />
              <button
                type="submit"
                className="bg-gradient-to-br from-[#00BFFF] to-[#1a6fff] text-white border-none rounded-lg py-3 text-[15px] font-semibold font-[Poppins,sans-serif] cursor-pointer shadow-[0_4px_16px_rgba(0,191,255,0.35)] hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
