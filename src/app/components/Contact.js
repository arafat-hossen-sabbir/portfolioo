"use client";
import { useState } from "react";
import AnimateIn from "./AnimateIn";
import { personalInfo } from "../data";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: 10,
    border: "1.5px solid var(--border)",
    background: "var(--bg)",
    color: "var(--text)",
    fontSize: 14,
    fontFamily: "var(--font-inter)",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "var(--accent)";
    e.target.style.boxShadow = "0 0 0 3px var(--accent-glow)";
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = "var(--border)";
    e.target.style.boxShadow = "none";
  };

  return (
    <section
      id="contact"
      style={{ padding: "100px 24px", background: "var(--bg-secondary)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimateIn>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="tag">Contact</span>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.2 }}
            >
              Let's work together
            </h2>
          </div>
        </AnimateIn>

        <div className="contact-grid">
          <AnimateIn direction="left">
            <div>
              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  padding: 36,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    background:
                      "linear-gradient(135deg, var(--accent), #ec4899)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                    marginBottom: 20,
                  }}
                >
                  ✉️
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "var(--text)",
                    marginBottom: 6,
                  }}
                >
                  {personalInfo.name}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--accent)",
                    fontWeight: 600,
                    marginBottom: 20,
                  }}
                >
                  {personalInfo.role}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    marginBottom: 28,
                  }}
                >
                  I'm a skilled Frontend developer specializing in building
                  dynamic and responsive web applications using React, Next.js &
                  Tailwind CSS.
                </p>

                {[
                  {
                    icon: "📞",
                    label: "Phone",
                    value: personalInfo.phone,
                    href: `tel:${personalInfo.phone}`,
                  },
                  {
                    icon: "💬",
                    label: "WhatsApp",
                    value: personalInfo.phone,
                    href: `https://wa.me/${personalInfo.whatsapp}`,
                  },
                  {
                    icon: "📧",
                    label: "Email",
                    value: personalInfo.email,
                    href: `mailto:${personalInfo.email}`,
                  },
                ].map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "12px 0",
                      borderBottom: "1px solid var(--border)",
                      textDecoration: "none",
                      color: "var(--text)",
                      transition: "color 0.2s",
                      minWidth: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text)";
                    }}
                  >
                    <span style={{ fontSize: 20, flexShrink: 0 }}>
                      {c.icon}
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--text-muted)",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {c.label}
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          wordBreak: "break-word",
                        }}
                      >
                        {c.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: "20px 28px",
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 14,
                  }}
                >
                  Find Me In
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {[
                    {
                      label: "GitHub",
                      href: personalInfo.social.github,
                      color: "#333",
                    },
                    {
                      label: "LinkedIn",
                      href: personalInfo.social.linkedin,
                      color: "#0a66c2",
                    },
                    {
                      label: "Twitter",
                      href: personalInfo.social.twitter,
                      color: "#1da1f2",
                    },
                    {
                      label: "Fiverr",
                      href: personalInfo.fiverr,
                      color: "#1dbf73",
                    },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "8px 18px",
                        borderRadius: 8,
                        border: "1px solid var(--border)",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--text)",
                        textDecoration: "none",
                        transition: "all 0.2s",
                        background: "var(--bg)",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = s.color;
                        e.target.style.color = s.color;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = "var(--border)";
                        e.target.style.color = "var(--text)";
                      }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="right">
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: 40,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontWeight: 700,
                  fontSize: 22,
                  color: "var(--text)",
                  marginBottom: 28,
                }}
              >
                Send A Message
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="form-name-email">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <textarea
                    placeholder="Message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: 10,
                    background: sent ? "#10b981" : "var(--accent)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 15,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-plus-jakarta)",
                    transition: "all 0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  {sent ? "✓ Message Sent!" : "Send Message"}
                </button>
              </form>
            </div>
          </AnimateIn>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 48px;
          align-items: start;
        }

        .form-name-email {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        @media (max-width: 768px) {
          #contact {
            padding: 60px 16px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .form-name-email {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
