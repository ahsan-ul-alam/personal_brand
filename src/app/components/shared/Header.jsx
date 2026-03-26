"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "SKILLS", href: "/skills" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [active, setActive] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-900 sticky top-0 z-50">
      {/* Main Row */}
      <div className="max-w-screen-xl mx-auto px-8 md:px-0 h-[68px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0 no-underline"
        >
          <div className="w-8 h-8 rounded-full border-2 border-[#F5A623] flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full border-2 border-[#F5A623]" />
          </div>
          <span className="text-[22px] font-serif text-gray-900 tracking-tight">
            Ahsan Alam
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={[
                "text-[13px] font-semibold tracking-widest px-4 py-1.5 rounded-full transition-colors duration-200 no-underline",
                active === link.label
                  ? "bg-[#F5A623] text-gray-900"
                  : "text-gray-900 hover:text-[#F5A623]",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block flex-shrink-0 border-2 border-[#F5A623] text-gray-900 text-[13px] font-bold tracking-wider px-5 py-2.5 transition-colors duration-200 hover:bg-[#F5A623] no-underline"
        >
          Contact Now
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block w-[22px] h-0.5 bg-gray-900 transition-all duration-300 origin-center ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-0.5 bg-gray-900 transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-[22px] h-0.5 bg-gray-900 transition-all duration-300 origin-center ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-900 bg-white flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setMenuOpen(false);
              }}
              className={[
                "text-[13px] font-semibold tracking-widest px-8 py-3.5 border-b border-gray-100 no-underline transition-colors duration-150",
                active === link.label
                  ? "bg-[#F5A623] text-gray-900"
                  : "text-gray-900 hover:bg-[#F5A623]",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-8 py-5">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center border-2 border-[#F5A623] text-gray-900 text-[13px] font-bold tracking-wider px-5 py-2.5 hover:bg-[#F5A623] transition-colors duration-200 no-underline"
            >
              Contact Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
