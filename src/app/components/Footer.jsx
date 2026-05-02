"use client";

import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  const footerRef = useRef(null);

  const handleNav = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatables = footer.querySelectorAll("[data-animate]");
            animatables.forEach((el) => {
              el.classList.add("footer-visible");
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[var(--bg-secondary)] text-slate-400 pt-16 pb-8 px-6 relative overflow-hidden"
    >
      {/* Subtle background glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(52,211,153,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(52,211,153,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Profile */}
          <div data-animate data-animate-delay="1">
            <div className="footer-floating w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
              <span className="text-emerald-400 font-bold text-sm">AS</span>
            </div>

            <h2 className="footer-name-shimmer text-lg font-bold mb-1">
              Arafat Hossen Sabbir
            </h2>
            <p className="text-emerald-400 mb-2 text-xs">
              Junior Web Developer
            </p>
            <p className="text-xs leading-relaxed">
              Passionate about building scalable web applications with clean
              code and modern technologies.
            </p>

            {/* Social */}
            <div className="flex gap-2 mt-4">
              {[FaGithub, FaLinkedin, FaFacebookF].map((Icon, i) => (
                <div
                  key={i}
                  className="footer-social-icon w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-emerald-500 hover:text-white cursor-pointer"
                >
                  <Icon size={13} />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div data-animate data-animate-delay="2">
            <h4 className="text-white font-semibold mb-3 text-sm">LINKS</h4>
            {["About", "Skills", "Projects", "Services", "Contact"].map(
              (item) => (
                <p
                  key={item}
                  onClick={(e) => handleNav(e, `#${item.toLowerCase()}`)}
                  className="footer-nav-link text-xs mb-2 cursor-pointer"
                >
                  {item}
                </p>
              ),
            )}
          </div>

          {/* Services */}
          <div data-animate data-animate-delay="3">
            <h4 className="text-white font-semibold mb-3 text-sm">SERVICES</h4>
            {[
              "Web Development",
              "API Development",
              "Database Design",
              "UI/UX Implementation",
            ].map((service, i) => (
              <p key={service} className="text-xs mb-2">
                <span
                  className="footer-service-dot text-emerald-400 mr-1"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  •
                </span>
                {service}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div data-animate data-animate-delay="4">
            <h4 className="text-white font-semibold mb-3 text-sm">CONTACT</h4>
            {[
              { icon: "📧", text: "ahsabbir476@gmail.com" },
              { icon: "📞", text: "+880 1645-435656" },
              { icon: "📍", text: "Dhaka, Bangladesh" },
            ].map(({ icon, text }, i) => (
              <p
                key={i}
                className="footer-contact-row text-xs mb-2 flex items-center gap-1"
              >
                <span style={{ fontSize: "12px" }}>{icon}</span>
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          data-animate
          data-animate-delay="5"
          className="footer-divider-line border-t border-white/10 mt-10 pt-5 flex flex-col sm:flex-row justify-between items-center text-xs"
        >
          <p>© 2026 Arafat Hossen Sabbir. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Developed with <span className="footer-heart text-red-500">♥</span>{" "}
            by Sabbir
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="footer-top-btn absolute bottom-8 right-6 w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500"
        aria-label="Scroll to top"
      >
        <span className="footer-arrow-up text-sm leading-none">↑</span>
      </button>
    </footer>
  );
}
