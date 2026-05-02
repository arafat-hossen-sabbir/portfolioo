"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#education" },
  { label: "Testimonials", href: "#experience" },
  { label: "Works", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "var(--bg)" : "transparent",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleNav(e, "body")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              overflow: "hidden",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
              transition: "all 0.3s ease",
              flexShrink: 0,
            }}
          >
            <img
              src="/arafathossensabbir.jpg"
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </div>
          <h2
            className="footer-name-shimmer"
            style={{ fontSize: 16, fontWeight: 900, margin: 0, lineHeight: 1 }}
          >
            Arafat Hossen Sabbir
          </h2>
        </a>

        {/* Desktop Nav */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 8 }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="nav-link"
              style={{
                padding: "8px 14px",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--text-muted)",
                textDecoration: "none",
                borderRadius: 8,
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "var(--text)";
                e.target.style.background = "var(--bg-card)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "var(--text-muted)";
                e.target.style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--text)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              transition: "all 0.2s",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Hire Me button */}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            style={{
              padding: "10px 22px",
              borderRadius: 8,
              background: "rgba(129, 140, 248, 0.15)",
              color: "rgba(255,255,255,0.9)",
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
              fontFamily: "var(--font-plus-jakarta)",
              border: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(129, 140, 248, 0.3)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(129, 140, 248, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(129, 140, 248, 0.15)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            className="hidden-mobile"
          >
            Hire Me
          </a>

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-only"
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--text)",
              cursor: "pointer",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(20, 20, 20, 0.6)", // transparent bg
            backdropFilter: "blur(16px)", // glass effect
            WebkitBackdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              style={{
                padding: "12px 16px",
                fontSize: 15,
                fontWeight: 500,
                color: "var(--text)",
                textDecoration: "none",
                borderRadius: 10,
                background: "rgba(255,255,255,0.05)", // transparent card
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            style={{
              padding: "12px 16px",
              borderRadius: 10,
              background: "linear-gradient(135deg, #6C63FF, #8B5CF6)", // gradient button
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
              textAlign: "center",
              marginTop: 10,
              boxShadow: "0 6px 20px rgba(108,99,255,0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Hire Me!
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
