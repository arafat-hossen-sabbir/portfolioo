'use client';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#education' },
  { label: 'Testimonials', href: '#experience' },
  { label: 'Works', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
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
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-plus-jakarta)",
              fontWeight: 800,
              color: "var(--text)",
              fontSize: 16,
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            A
          </div>
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
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s",
              fontFamily: "var(--font-plus-jakarta)",
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = "0.9";
              e.target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = "1";
              e.target.style.transform = "translateY(0)";
            }}
            className="hidden-mobile"
          >
            Hire Me!
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
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
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
                borderRadius: 8,
                background: "var(--bg-card)",
                marginBottom: 4,
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
              borderRadius: 8,
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
              textAlign: "center",
              marginTop: 8,
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
