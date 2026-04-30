"use client";
import { useEffect, useRef, useState } from "react";
import { personalInfo } from "../data";

function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid var(--accent)",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "transform 0.12s ease",
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "var(--accent)",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "transform 0.06s ease",
        }}
      />
    </>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 1000,
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "var(--accent)",
        border: "none",
        cursor: "pointer",
        color: "#fff",
        fontSize: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-3px)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      ↑
    </button>
  ) : null;
}

const socialIcons = {
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  twitter: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
};

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const handleMouse = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const lines = personalInfo.tagline.split("\n");

  return (
    <>
      <CustomCursor />
      <ScrollToTop />

      <section
        ref={heroRef}
        id="home"
        className="mesh-bg"
        style={{
          minHeight: "100vh",
          paddingTop: 70,
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          cursor: "none",
        }}
      >
        {/* Animated background orbs */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            top: "-10%",
            left: "-10%",
            transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
            transition: "transform 0.6s ease",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)",
            bottom: "5%",
            right: "5%",
            transform: `translate(${-mousePos.x * 20}px, ${-mousePos.y * 20}px)`,
            transition: "transform 0.8s ease",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "60px 24px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 420px",
              gap: 60,
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* LEFT */}
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--accent)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.6s ease 0.1s",
                  fontFamily: "var(--font-plus-jakarta)",
                }}
              >
                Frontend Developer
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontWeight: 800,
                  fontSize: "clamp(36px, 4.5vw, 62px)",
                  lineHeight: 1.08,
                  marginBottom: 24,
                  color: "var(--text)",
                }}
              >
                {lines.map((line, i) => (
                  <span
                    key={i}
                    style={{
                      display: "block",
                      opacity: visible ? 1 : 0,
                      transform: visible
                        ? "translateX(0)"
                        : "translateX(-30px)",
                      transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.1}s`,
                    }}
                  >
                    {line}
                  </span>
                ))}
              </h1>

              <p
                style={{
                  fontSize: 15,
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  marginBottom: 36,
                  maxWidth: 480,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.7s ease 0.65s",
                }}
              >
                This portfolio is set up with polished placeholders so you can
                launch the structure now and replace the story, photo, resume,
                and project details when they are ready.
              </p>

              {/* Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  marginBottom: 36,
                  flexWrap: "wrap",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.7s ease 0.8s",
                }}
              >
                <a
                  href="#"
                  style={{
                    padding: "13px 28px",
                    borderRadius: 999,
                    background: "var(--text)",
                    color: "var(--bg)",
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                    fontFamily: "var(--font-plus-jakarta)",
                    transition: "transform 0.2s, opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.target.style.opacity = "1")}
                >
                  View Resume
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    padding: "13px 28px",
                    borderRadius: 999,
                    border: "1.5px solid var(--border)",
                    color: "var(--text)",
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                    fontFamily: "var(--font-plus-jakarta)",
                    transition: "all 0.2s",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "var(--text)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "var(--border)";
                  }}
                >
                  Let's Connect
                </a>
              </div>

              {/* Social links */}
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.7s ease 0.95s",
                }}
              >
                {Object.entries(personalInfo.social).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      padding: "7px 14px",
                      borderRadius: 999,
                      border: "1px solid var(--border)",
                      background: "var(--bg-card)",
                      transition: "all 0.2s",
                      textTransform: "capitalize",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--text-muted)";
                    }}
                  >
                    {socialIcons[key]}
                    {key.charAt(0).toUpperCase() + key.slice(1)} →
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT - Photo + Cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(40px)",
                transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s",
              }}
            >
              {/* Floating wrapper — পুরো photo card box-সহ ভাসবে */}
              <div style={{ animation: "floatBox 6s ease-in-out infinite" }}>
                {/* Photo card — overflow hidden নেই, তাই clip হবে না */}
                <div
                  style={{
                    borderRadius: 24,
                    border: "1px solid var(--border)",
                    background:
                      "linear-gradient(160deg, var(--bg-card), var(--bg-secondary))",
                    aspectRatio: "3/3.5",
                    position: "relative",
                    display: "flex",
                    alignItems: "flex-end",
                    overflow: "hidden",
                  }}
                >
                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(160deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 50%, rgba(236,72,153,0.08) 100%)",
                      zIndex: 1,
                    }}
                  />

                  {/* Profile image — full box cover */}
                  <img
                    src="/arafathossensabbir.jpg"
                    alt="Arafat Hossen Sabbir"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      zIndex: 0,
                    }}
                  />

                  {/* Bottom gradient fade যাতে নিচের cards ভালো দেখায় */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "45%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
                      zIndex: 2,
                    }}
                  />

                  {/* Bottom two info cards */}
                  
                </div>
              </div>

              {/* Stats row below photo */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: 10,
                  marginTop: 12,
                }}
              >
                {personalInfo.stats.map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      textAlign: "center",
                      padding: "16px 10px",
                      borderRadius: 14,
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-plus-jakarta)",
                        fontWeight: 800,
                        fontSize: 26,
                        color: "var(--text)",
                        lineHeight: 1,
                        marginBottom: 4,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--text-muted)",
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes floatBox {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
