"use client";
import { personalInfo } from "../data";

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "48px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
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
            <span
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontWeight: 700,
                fontSize: 17,
                color: "var(--text)",
              }}
            >
              Arafat Hossen Sabbir
            </span>
          </a>

          {/* Nav links */}
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Works", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                style={{
                  padding: "8px 14px",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  borderRadius: 8,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "var(--text-muted)";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} All rights reserved by{" "}
            <span style={{ color: "var(--accent)", fontWeight: 600 }}>
              Arafat Hossen Sabbir
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
