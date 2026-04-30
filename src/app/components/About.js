'use client';
import AnimateIn from './AnimateIn';
import { personalInfo } from '../data';

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "100px 24px", background: "var(--bg-secondary)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimateIn>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="tag">About Me</span>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.2 }}
            >
              A personal intro with space for
              <br />
              both craft and character.
            </h2>
          </div>
        </AnimateIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
          className="about-grid"
        >
          <AnimateIn direction="left">
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(99, 179, 237, 0.2)",
                background: "var(--bg-card)",
                padding: 40,
                position: "relative",
              }}
            >
              {/* Decorative accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
                }}
              />

              <div style={{ marginBottom: 24 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    marginBottom: 20,
                    boxShadow: "0 8px 24px rgba(59, 130, 246, 0.35)",
                  }}
                >
                  🚀
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontWeight: 700,
                    fontSize: 22,
                    marginBottom: 8,
                    color: "var(--text)",
                  }}
                >
                  Frontend Developer
                </h3>
                <p
                  style={{
                    background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  Open to opportunities
                </p>
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {[
                  { icon: "📧", label: "Email", value: personalInfo.email },
                  { icon: "📱", label: "Phone", value: personalInfo.phone },
                  { icon: "📍", label: "Location", value: "Bangladesh" },
                  { icon: "🌐", label: "Available", value: "Remote & Hybrid" },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <span
                      style={{
                        fontSize: 20,
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "rgba(59, 130, 246, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "#60a5fa",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          color: "var(--text)",
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="right">
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[personalInfo.bio1, personalInfo.bio2, personalInfo.bio3].map(
                (para, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 16,
                      lineHeight: 1.8,
                      color: i === 0 ? "var(--text)" : "var(--text-muted)",
                      fontWeight: i === 0 ? 500 : 400,
                    }}
                  >
                    {para}
                  </p>
                ),
              )}

              <div
                style={{
                  display: "flex",
                  gap: 16,
                  marginTop: 8,
                  flexWrap: "wrap",
                }}
              >
                {["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "6px 14px",
                        borderRadius: 999,
                        background: "var(--accent-glow)",
                        color: "var(--accent)",
                        fontSize: 13,
                        fontWeight: 600,
                        border: "1px solid var(--accent)",
                        opacity: 0.8,
                      }}
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
