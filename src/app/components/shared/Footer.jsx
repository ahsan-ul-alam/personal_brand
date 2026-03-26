"use client";

import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";

const links = ["Skills", "Portfolio", "Contact"];

const socials = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/ahsan-ul-alam/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/ahsan-ul-alam",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://www.facebook.com/ahsan.alam.official",
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
          <p className="text-xs mt-1 text-gray-500">Full Stack Web Developer</p>
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
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-indigo-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Ahsan Alam. All rights reserved.
      </div>
    </footer>
  );
}
