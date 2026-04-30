"use client";
import AnimateIn from "./AnimateIn";
import { education, experience } from "../data";

function TimelineCard({ item, index, accentColor, isEducation }) {
  return (
    <AnimateIn direction={isEducation ? "left" : "right"} delay={index * 120}>
      <div style={{ display: "flex", gap: 16, marginBottom: 28 }}>
        {/* Dot + line */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 6,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: accentColor,
              boxShadow: `0 0 0 3px rgba(${isEducation ? "132,204,22" : "6,182,212"}, 0.15)`,
              flexShrink: 0,
            }}
          />
          <div
            style={{
              width: 1,
              flex: 1,
              marginTop: 6,
              background: `linear-gradient(180deg, ${accentColor}40, transparent)`,
            }}
          />
        </div>

        {/* Card */}
        <div
          style={{
            flex: 1,
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: "20px 24px",
            position: "relative",
            overflow: "hidden",
            transition: "border-color 0.25s, transform 0.25s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = accentColor + "60";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {/* Top accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: `linear-gradient(90deg, ${accentColor}80, transparent)`,
            }}
          />

          {/* Badge */}
          {isEducation ? (
            item.period && (
              <span
                style={{
                  display: "inline-block",
                  fontSize: 11,
                  fontWeight: 600,
                  color: accentColor,
                  background: `${accentColor}18`,
                  padding: "3px 10px",
                  borderRadius: 999,
                  marginBottom: 10,
                  letterSpacing: "0.05em",
                }}
              >
                {item.period}
              </span>
            )
          ) : (
            <span
              style={{
                display: "inline-block",
                fontSize: 11,
                fontWeight: 600,
                color: accentColor,
                background: `${accentColor}18`,
                padding: "3px 10px",
                borderRadius: 999,
                marginBottom: 10,
                letterSpacing: "0.05em",
              }}
            >
              {item.current ? "Current" : item.period}
            </span>
          )}

          {/* Title */}
          <h4
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: "var(--text)",
              marginBottom: 4,
            }}
          >
            {isEducation ? item.degree : item.role}
          </h4>

          {/* Institution / Company */}
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: accentColor,
              marginBottom: 12,
            }}
          >
            {isEducation ? item.institution : item.company}
          </p>

          {/* Meta row: date + location */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 14,
            }}
          >
            {(item.period || item.dateRange) && (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 12,
                  color: "var(--text-muted)",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {item.dateRange || item.period}
              </span>
            )}
            {item.location && (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 12,
                  color: "var(--text-muted)",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {item.location}
              </span>
            )}
          </div>

          {/* Details list */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {item.details.map((d, j) => (
              <li
                key={j}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  fontSize: 13,
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                }}
              >
                <svg
                  style={{ marginTop: 2, flexShrink: 0 }}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={accentColor}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimateIn>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      style={{ padding: "26px 24px", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Heading */}
        <AnimateIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="tag">Resume</span>
            <h2
              className="section-title mx-auto max-w-sm sm:max-w-xl md:max-w-2xl text-center"
              style={{ fontSize: "clamp(23px, 5vw, 44px)", lineHeight: 1.25 }}
            >
              Your academic foundation, presented with useful detail.
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                marginTop: 16,
                maxWidth: 420,
                margin: "16px auto 0",
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              Education and experience side by side,
              <br />
              designed to be clean, readable, and data-driven.
            </p>
          </div>
        </AnimateIn>

        {/* Two column grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}
          className="edu-grid"
        >
          {/* Education column */}
          <div>
            <AnimateIn direction="left">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 32,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(132,204,22,0.12)",
                    border: "1px solid rgba(132,204,22,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                  }}
                >
                  🎓
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "var(--text)",
                  }}
                >
                  Education
                </h3>
              </div>
            </AnimateIn>

            {education.map((item, i) => (
              <TimelineCard
                key={i}
                item={item}
                index={i}
                accentColor="#84cc16"
                isEducation={true}
              />
            ))}
          </div>

          {/* Experience column */}
          <div id="experience">
            <AnimateIn direction="right">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 32,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(6,182,212,0.12)",
                    border: "1px solid rgba(6,182,212,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                  }}
                >
                  💼
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "var(--text)",
                  }}
                >
                  Experience
                </h3>
              </div>
            </AnimateIn>

            {experience.map((item, i) => (
              <TimelineCard
                key={i}
                item={item}
                index={i}
                accentColor="#06b6d4"
                isEducation={false}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
