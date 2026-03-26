"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SKILLS", href: "/skills" },
  { label: "PORTFOLIO", href: "/portfolio" },
];

export default function Header() {
  const [active, setActive] = useState("HOME");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Lock body scroll and blur content when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className="bg-white border-b border-gray-900 sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-0 h-[68px] flex items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0 no-underline"
          >
            <div className="w-8 h-8 rounded-full border-2 border-[#F5A623] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full border-2 border-[#F5A623]" />
            </div>
            <span className="text-lg sm:text-[22px] font-serif text-gray-900 tracking-tight">
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

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-block flex-shrink-0 border-2 border-[#F5A623] text-gray-900 text-[13px] font-bold tracking-wider px-5 py-2.5 transition-colors duration-200 hover:bg-[#F5A623] no-underline"
          >
            Contact Now
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] bg-transparent border-none cursor-pointer p-1 z-[60]"
            aria-label="Toggle menu"
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <span
              className={`block w-[22px] h-0.5 bg-gray-900 transition-all duration-300 origin-center ${
                drawerOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-0.5 bg-gray-900 transition-all duration-300 ${
                drawerOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-[22px] h-0.5 bg-gray-900 transition-all duration-300 origin-center ${
                drawerOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* ── Backdrop blur overlay ── */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 z-[55] backdrop-blur-sm bg-black/30 transition-opacity duration-300 md:hidden ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Slide-in Drawer ── */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-[60] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-[68px] border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full border-2 border-[#F5A623] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full border-2 border-[#F5A623]" />
            </div>
            <span className="text-base font-serif text-gray-900 tracking-tight">
              Ahsan Alam
            </span>
          </div>
          {/* Close button */}
          <button
            onClick={closeDrawer}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav className="flex flex-col flex-1 pt-4 overflow-y-auto">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                closeDrawer();
              }}
              style={{ transitionDelay: drawerOpen ? `${i * 40}ms` : "0ms" }}
              className={[
                "flex items-center gap-3 text-[13px] font-semibold tracking-widest px-6 py-4 border-b border-gray-100 no-underline transition-all duration-200",
                active === link.label
                  ? "bg-[#F5A623] text-gray-900"
                  : "text-gray-700 hover:bg-[#F5A623]/10 hover:text-gray-900",
              ].join(" ")}
            >
              {/* Active indicator bar */}
              <span
                className={`w-1 h-5 rounded-full flex-shrink-0 transition-all duration-200 ${
                  active === link.label ? "bg-gray-900" : "bg-transparent"
                }`}
              />
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Drawer Footer CTA */}
        <div className="p-6 border-t border-gray-100">
          <Link
            href="/contact"
            onClick={closeDrawer}
            className="block text-center bg-[#F5A623] text-gray-900 text-[13px] font-bold tracking-wider px-5 py-3.5 hover:bg-[#e09612] transition-colors duration-200 no-underline"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </>
  );
}
