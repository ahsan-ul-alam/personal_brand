"use client";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("Home");
  const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <header style={styles.header} className="max-w-7xl mx-auto">
      {/* Logo */}
      <div style={styles.logo}>
        <div style={styles.logoIcon}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="#00BFFF" strokeWidth="2.5" />
            <path
              d="M18 9.5C16.5 8.5 14.5 8 12.5 8.5C9 9.5 7 13 8 16.5C9 20 12.5 22 16 21C18 20.3 19.5 19 20.3 17"
              stroke="#00BFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
        <span style={styles.logoText}>
          <span style={styles.logoHighlight}>r</span>eovate
        </span>
      </div>

      {/* Nav */}
      <nav style={styles.nav}>
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            onClick={() => setActive(link)}
            style={{
              ...styles.navLink,
              ...(active === link ? styles.navLinkActive : {}),
            }}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <button style={styles.hireBtn}>
        Hire Me
        <span style={styles.hireBtnArrow}>
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
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 60px",
    background: "transparent",
    position: "relative",
    zIndex: 10,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
  },
  logoIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#ffffff",
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "0.5px",
  },
  logoHighlight: {
    color: "#00BFFF",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "36px",
  },
  navLink: {
    color: "#d0d8e8",
    textDecoration: "none",
    fontSize: "15px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "400",
    transition: "color 0.2s",
    cursor: "pointer",
  },
  navLinkActive: {
    color: "#ffffff",
    fontWeight: "600",
  },
  hireBtn: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "linear-gradient(135deg, #00BFFF 0%, #1a6fff 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    padding: "12px 24px",
    fontSize: "15px",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(0,191,255,0.35)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  hireBtnArrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.2)",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
  },
};

export default Header;
