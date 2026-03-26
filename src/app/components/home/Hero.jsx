import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-white md:min-h-[80vh]">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-12 md:py-16 lg:px-0">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
          {/* Right Image */}
          <div className="relative order-1 flex w-full items-center justify-center md:order-2 md:flex-1">
            {/* Arrow decoration */}
            <svg
              className="absolute -right-8 top-4 hidden h-16 w-16 text-[#6C63FF] md:block"
              viewBox="0 0 60 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="10,50 40,20 40,40" />
              <polyline points="22,20 40,20" />
            </svg>

            {/* Browser Frame */}
            <div className="relative w-full max-w-[220px] border-2 border-gray-900 sm:max-w-[280px] md:max-w-md">
              {/* Top bar */}
              <div className="flex items-center justify-end gap-1.5 border-b-2 border-gray-900 px-3 py-2">
                <span className="h-3 w-3 rounded-full bg-[#6C63FF]" />
                <span className="h-3 w-3 rounded-full bg-[#F5A623]" />
              </div>

              {/* Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                <Image
                  src="https://res.cloudinary.com/dpijcljrw/image/upload/f_auto,q_auto,w_700/v1774540267/ahsan_pucrvn_ny0ajo.jpg"
                  alt="Ahsan - Full Stack Developer"
                  fill
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Bottom decoration */}
            <span className="absolute right-2 -bottom-4 hidden select-none text-2xl font-light text-[#F5A623] sm:block">
              +
            </span>
          </div>

          {/* Left Content */}
          <div className="relative order-2 w-full max-w-xl text-center md:order-1 md:flex-1 md:text-left">
            {/* Top decoration */}
            <span className="absolute -left-6 -top-10 hidden select-none text-3xl font-light text-[#F5A623] md:block">
              +
            </span>

            {/* Badge */}
            <div className="mb-5 inline-block">
              <span className="inline-block -rotate-3 border border-[#6C63FF] px-3 py-1 text-xs font-semibold tracking-wide text-[#6C63FF]">
                Portfolio
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-5 text-3xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Hi, I&apos;m Ahsan,
              <br />
              A Full Stack
              <br />
              Web App Developer
            </h1>

            {/* Description */}
            <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-gray-500 sm:text-base md:mx-0">
              I build modern, scalable, and high-performance websites and web
              applications using technologies like React, Next.js, PHP, and
              Laravel. I help businesses turn ideas into powerful digital
              solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 md:justify-start">
              <Link
                href="#contact"
                className="inline-block bg-[#6C63FF] px-7 py-3.5 text-center text-sm font-semibold text-white no-underline transition-colors duration-200 hover:bg-[#574fd6]"
              >
                Let&apos;s Work Together
              </Link>

              <Link
                href="#projects"
                className="inline-block border border-gray-900 px-7 py-3.5 text-center text-sm font-semibold text-gray-900 no-underline transition-colors duration-200 hover:bg-gray-900 hover:text-white"
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
