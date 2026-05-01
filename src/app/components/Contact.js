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

  return (
    <section id="contact" className="py-14 px-4 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="tag">Contact</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Let's work together
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 items-stretch">
          {/* LEFT */}
          <div className="flex flex-col h-full">
            {/* CONTACT CARD */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur mb-6">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-2xl mb-4">
                ✉️
              </div>

              <h3 className="text-xl font-bold text-white">
                {personalInfo.name}
              </h3>

              <p className="text-indigo-400 text-sm mb-4">
                {personalInfo.role}
              </p>

              <p className="text-sm text-white/70 mb-6">
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
                    className="flex items-center gap-3 border-b border-white/10 pb-2 text-white/80 hover:text-indigo-400 transition"
                  >
                    <span>{c.icon}</span>
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

            {/* ✅ FIND ME IN (CENTERED FIX) */}
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 mt-6 md:mt-auto text-center flex flex-col items-center">
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
                    className="px-4 py-2 rounded-md border border-[var(--border)] text-sm font-medium hover:text-indigo-400 hover:border-indigo-400 transition"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 h-full">
            <h3 className="text-xl font-bold mb-6">Send A Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="input"
              />

              <textarea
                rows={5}
                placeholder="Message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input resize-none"
              />

              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  sent ? "bg-green-500" : "bg-[var(--accent)] hover:opacity-90"
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
          transition: 0.2s;
        }

        .input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }
      `}</style>
    </section>
  );
}
