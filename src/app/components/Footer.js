"use client";

import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--bg-secondary)] text-slate-400 pt-16 pb-8 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Profile */}
          <div>
            <h2 className="text-white text-lg font-bold mb-2">
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
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-emerald-500 hover:text-white transition cursor-pointer"
                >
                  <Icon size={13} />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">LINKS</h4>
            {["About", "Skills", "Projects", "Services", "Contact"].map(
              (item) => (
                <p
                  key={item}
                  onClick={(e) => handleNav(e, `#${item.toLowerCase()}`)}
                  className="text-xs mb-2 cursor-pointer hover:text-emerald-400 transition"
                >
                  {item}
                </p>
              ),
            )}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">SERVICES</h4>
            {[
              "Web Development",
              "API Development",
              "Database Design",
              "UI/UX Implementation",
            ].map((service) => (
              <p key={service} className="text-xs mb-2">
                <span className="text-emerald-400 mr-1">•</span>
                {service}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">CONTACT</h4>
            <p className="text-xs mb-2">📧 ahsabbir476@gmail.com</p>
            <p className="text-xs mb-2">📞 +880 1645-435656</p>
            <p className="text-xs">📍 Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-5 flex flex-col sm:flex-row justify-between items-center text-xs">
          <p>© 2026 Arafat Hossen Sabbir. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Developed with <span className="text-red-500">♥</span> by Sabbir
          </p>
        </div>
      </div>

      
    </footer>
  );
}