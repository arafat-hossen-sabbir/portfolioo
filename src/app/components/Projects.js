"use client";
import { useState, useEffect, useRef } from "react";
import AnimateIn from "./AnimateIn";
import { projects } from "../data";

const categories = ["All", "E-commerce", "Dashboard", "Community App"];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0px) scale(1)"
          : "translateY(48px) scale(0.97)",
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${index * 0.13}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${index * 0.13}s`,
      }}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setMousePos({ x: 0.5, y: 0.5 });
        }}
        onMouseMove={handleMouseMove}
        style={{
          position: "relative",
          borderRadius: 24,
          overflow: "hidden",
          background: hovered
            ? "rgba(255,255,255,0.06)"
            : "rgba(255,255,255,0.03)",
          border: `1px solid ${hovered ? project.color + "55" : "rgba(255,255,255,0.08)"}`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          transition:
            "border-color 0.4s ease, background 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease",
          transform: hovered
            ? `perspective(1000px) rotateX(${(mousePos.y - 0.5) * -6}deg) rotateY(${(mousePos.x - 0.5) * 6}deg) translateY(-6px)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
          boxShadow: hovered
            ? `0 24px 60px rgba(0,0,0,0.35), 0 0 0 1px ${project.color}33, inset 0 1px 0 rgba(255,255,255,0.1)`
            : "0 4px 24px rgba(0,0,0,0.15)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* Spotlight glow on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hovered
              ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${project.color}18 0%, transparent 65%)`
              : "transparent",
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Top image area */}
        <div
          style={{
            height: 190,
            position: "relative",
            overflow: "hidden",
            background: `linear-gradient(135deg, ${project.color}18 0%, ${project.color}08 50%, transparent 100%)`,
          }}
        >
          {/* Animated grid lines */}
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              opacity: 0.12,
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id={`grid-${project.id}`}
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 32 0 L 0 0 0 32"
                  fill="none"
                  stroke={project.color}
                  strokeWidth="0.8"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill={`url(#grid-${project.id})`}
            />
          </svg>

          {/* Radial glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at 50% 80%, ${project.color}30 0%, transparent 70%)`,
            }}
          />

          {/* Floating icon */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: 64,
                filter: `drop-shadow(0 0 24px ${project.color}88)`,
                transform: hovered
                  ? "scale(1.12) translateY(-4px)"
                  : "scale(1) translateY(0)",
                transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                animation: "iconFloat 4s ease-in-out infinite",
                animationDelay: `${index * 0.4}s`,
              }}
            >
              {project.icon}
            </div>
          </div>

          {/* Category badge */}

          {/* Bottom fade */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 60,
              background:
                "linear-gradient(to top, var(--bg-card, rgba(15,15,20,1)) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            padding: "24px 28px 28px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            position: "relative",
            zIndex: 1,
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontWeight: 800,
              fontSize: 19,
              color: "var(--text)",
              marginBottom: 10,
              lineHeight: 1.3,
              transition: "color 0.3s",
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontSize: 13.5,
              color: "var(--text-muted)",
              lineHeight: 1.75,
              marginBottom: 20,
              flex: 1,
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: 7,
              flexWrap: "wrap",
              marginBottom: 22,
            }}
          >
            {project.tags.map((tag, j) => (
              <span
                key={j}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "4px 11px",
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.04)",
                  color: "var(--text-muted)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  letterSpacing: "0.02em",
                  transition: "background 0.2s, color 0.2s",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={`/projects/${project.id}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              fontWeight: 700,
              color: project.color,
              textDecoration: "none",
              fontFamily: "var(--font-plus-jakarta)",
              padding: "10px 20px",
              borderRadius: 12,
              background: `${project.color}14`,
              border: `1px solid ${project.color}30`,
              transition: "all 0.3s ease",
              alignSelf: "flex-start",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${project.color}28`;
              e.currentTarget.style.borderColor = `${project.color}66`;
              e.currentTarget.style.gap = "12px";
              e.currentTarget.style.paddingRight = "16px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `${project.color}14`;
              e.currentTarget.style.borderColor = `${project.color}30`;
              e.currentTarget.style.gap = "8px";
              e.currentTarget.style.paddingRight = "20px";
            }}
          >
            View Details
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");
  const [headerRef, headerInView] = useInView();
  const [prevActive, setPrevActive] = useState("All");
  const [animating, setAnimating] = useState(false);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const handleFilter = (cat) => {
    if (cat === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(cat);
      setAnimating(false);
    }, 220);
  };

  return (
    <section
      id="projects"
      style={{
        padding: "30px 24px",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background orbs */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "",
          top: "-10%",
          right: "-5%",
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
            "radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)",
          bottom: "5%",
          left: "-5%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: 56,
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-xs text-gray-400 tracking-widest uppercase">
            projects
          </span>

          <h2
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontWeight: 800,
              fontSize: "clamp(24px, 5vw, 44px)",
              lineHeight: 1.2,
              color: "var(--text)",
              marginBottom: 14,
              letterSpacing: "-0.02em",
            }}
          >
            Three portfolio-ready case <br /> studies with detailed pages.
          </h2>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 14,
              lineHeight: 1.6,
              maxWidth: 420,
              margin: "0 auto",
            }}
          >
            Each card and project page uses the same data model, ensuring
            consistent updates.
          </p>
        </div>

        {/* Main Wrapper */}
        <div
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "center",
            marginBottom: 52,
            // Allows the entire section to handle narrow widths
            width: "100%",
            padding: "0 16px",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          {/* Background pill container */}
          <div
            className="hide-scrollbar" // Add a CSS class to hide scrollbar (see below)
            style={{
              display: "flex",
              gap: 6,
              padding: "6px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",

              // Responsive logic
              maxWidth: "100%",
              overflowX: "auto", // Enables horizontal swipe on mobile
              whiteSpace: "nowrap", // Prevents buttons from breaking to new lines
              msOverflowStyle: "none", // IE and Edge
              scrollbarWidth: "none", // Firefox
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                style={{
                  padding: "8px 20px",
                  borderRadius: 999,
                  border: "none",
                  background:
                    active === cat ? "rgba(99,102,241,0.85)" : "transparent",
                  color: active === cat ? "#fff" : "rgba(255,255,255,0.6)", // Fallback for var
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  boxShadow:
                    active === cat ? "0 4px 16px rgba(99,102,241,0.4)" : "none",
                  letterSpacing: "0.01em",
                  // Prevent text from shrinking on mobile
                  flexShrink: 0,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(10px)" : "translateY(0)",
            transition: "opacity 0.22s ease, transform 0.22s ease",
          }}
          className="projects-grid"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "80px 24px",
              color: "var(--text-muted)",
              fontSize: 15,
            }}
          >
            No projects in this category yet.
          </div>
        )}
      </div>

      <style>{`
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
