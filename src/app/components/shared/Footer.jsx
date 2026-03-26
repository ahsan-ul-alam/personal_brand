"use client";

const links = ["Skills", "Portfolio", "Contact"];

const socials = [
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4.006-.816zm-11.62-2.073c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 12.4 2.343 12.34 1.956 12.33c-.006.2-.01.4-.01.6 0 2.8 1.063 5.355 2.8 7.247l-.362-.2zM1.487 10.5c.404.01 4.512.06 9.94-1.317C9.78 7.17 8.027 5.475 7.9 5.355 5.23 6.963 3.27 9.47 1.487 10.5zm8.02-7.44c.13.13 1.92 1.83 3.63 4.89 3.455-1.295 4.917-3.26 5.08-3.5C16.66 3.02 14.44 2.006 12 2.006c-.87 0-1.71.113-2.493.054zm9.82 2.87c-.193.26-1.82 2.35-5.413 3.824.225.46.436.93.627 1.406.065.162.13.325.19.488 3.39-.426 6.767.257 7.1.325-.05-2.354-.826-4.52-2.1-6.043z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-10 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <p className="text-white font-extrabold text-xl tracking-tight">
            Ahsan <span className="text-yellow-400">Alam</span>
          </p>
          <p className="text-xs mt-1 text-gray-500">
            Your Best Developer is Here
          </p>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link}
              href={`${link.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-8 h-8 rounded-full bg-gray-800 hover:bg-indigo-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} pxdraft Ltd. All rights reserved.
      </div>
    </footer>
  );
}
