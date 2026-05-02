"use client";
import { useState, useEffect, useRef } from "react";
import AnimateIn from "./AnimateIn";
import { personalInfo } from "../data";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const [sectionRef, sectionInView] = useInView();
  const [headerRef, headerInView] = useInView(0.2);
  const [leftRef, leftInView] = useInView(0.1);
  const [rightRef, rightInView] = useInView(0.1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const fadeUp = (inView, delay = 0) =>
    `transition-all duration-700 ease-out ${delay} ${
      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-14 px-4 bg-[var(--bg)] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div
          ref={headerRef}
          className={`text-center mb-14 ${fadeUp(headerInView)}`}
        >
          <span
            className={`text-[13px] text-gray-400 tracking-widest uppercase mb-2 inline-block transition-all duration-500 delay-100 ${
              headerInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-3"
            }`}
          >
            contact
          </span>
          <h2
            className={`transition-all duration-700 delay-200 ${
              headerInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontWeight: 800,
              fontSize: "clamp(24px, 5vw, 44px)",
              lineHeight: 1.2,
              color: "var(--text)",
              marginBottom: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Let's work together and <br /> bring your ideas to life
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 items-stretch">
          {/* LEFT */}
          <div ref={leftRef} className="flex flex-col h-full">
            {/* CONTACT CARD */}
            <div
              className={`bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur mb-6
                transition-all duration-700 delay-[100ms]
                ${leftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              {/* Animated envelope icon */}
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-2xl mb-4 hover:scale-110 hover:bg-white/20 transition-all duration-300 cursor-default">
                ✉️
              </div>

              <h3
                className={`text-xl font-bold text-white transition-all duration-500 delay-200 ${
                  leftInView ? "opacity-100" : "opacity-0"
                }`}
              >
                {personalInfo.name}
              </h3>

              <p
                className={`text-indigo-400 text-sm mb-4 transition-all duration-500 delay-300 ${
                  leftInView ? "opacity-100" : "opacity-0"
                }`}
              >
                {personalInfo.role}
              </p>

              <p
                className={`text-sm text-white/70 mb-6 transition-all duration-500 delay-[350ms] ${
                  leftInView ? "opacity-100" : "opacity-0"
                }`}
              >
                I'm a skilled Frontend developer specializing in React, Next.js
                & Tailwind CSS.
              </p>

              <div className="space-y-3">
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
                    className={`flex items-center gap-3 border-b border-white/10 pb-2 text-white/80
                      hover:text-indigo-400 hover:translate-x-1 hover:border-indigo-400/30
                      transition-all duration-300
                      ${leftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                    style={{ transitionDelay: `${400 + i * 80}ms` }}
                  >
                    <span className="text-lg">{c.icon}</span>
                    <div>
                      <div className="text-[10px] uppercase opacity-50">
                        {c.label}
                      </div>
                      <div className="text-sm">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* FIND ME IN */}
            <div
              className={`bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 mt-6 md:mt-auto
                text-center flex flex-col items-center
                transition-all duration-700 delay-[500ms]
                ${leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <p className="text-xs uppercase tracking-wider mb-4 text-[var(--text-muted)] font-semibold">
                Find Me In
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "GitHub", href: personalInfo.social.github },
                  { label: "LinkedIn", href: personalInfo.social.linkedin },
                  { label: "Twitter", href: personalInfo.social.twitter },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-md border border-[var(--border)] text-sm font-medium
                      hover:text-indigo-400 hover:border-indigo-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/10
                      active:scale-95
                      transition-all duration-300
                      ${leftInView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                    style={{ transitionDelay: `${600 + i * 80}ms` }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div
            ref={rightRef}
            className={`bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 h-full
              transition-all duration-700 delay-[200ms]
              ${rightInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <h3
              className={`text-xl font-bold mb-6 transition-all duration-500 delay-300 ${
                rightInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Send A Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div
                className={`grid md:grid-cols-2 gap-4 transition-all duration-500 delay-[350ms] ${
                  rightInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {["name", "email"].map((field, i) => (
                  <input
                    key={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "name" ? "Your Name" : "Your Email"}
                    required
                    value={form[field]}
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                    onChange={(e) =>
                      setForm({ ...form, [field]: e.target.value })
                    }
                    className={`input transition-all duration-300 ${
                      focused === field ? "scale-[1.01]" : "scale-100"
                    }`}
                  />
                ))}
              </div>

              <input
                type="text"
                placeholder="Subject"
                required
                value={form.subject}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={`input transition-all duration-500 delay-[400ms] ${
                  rightInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                } ${focused === "subject" ? "scale-[1.01]" : "scale-100"}`}
              />

              <textarea
                rows={5}
                placeholder="Message"
                required
                value={form.message}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`input resize-none transition-all duration-500 delay-[450ms] ${
                  rightInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                } ${focused === "message" ? "scale-[1.005]" : "scale-100"}`}
              />

              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold
                  transition-all duration-500 delay-[500ms] active:scale-[0.98]
                  ${rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  ${
                    sent
                      ? "bg-green-500 scale-[1.02]"
                      : "bg-[var(--accent)] hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--accent)]/30"
                  } text-white`}
              >
                {sent ? "✓ Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: var(--bg);
          color: var(--text);
          font-size: 14px;
          outline: none;
          transition:
            border-color 0.2s,
            box-shadow 0.2s,
            transform 0.2s;
        }
        .input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }
      `}</style>
    </section>
  );
}
