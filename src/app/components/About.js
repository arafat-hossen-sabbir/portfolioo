"use client";
import { useEffect, useState } from "react";
import AnimateIn from "./AnimateIn";
import { personalInfo } from "../data";

const words = [
  "Junior Web Developer",
  "Arafat Hossen Sabbir"

];

function TypingText() {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setDisplayed(current.substring(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      }, 90);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(current.substring(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((w) => (w + 1) % words.length);
        }
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="flex items-center justify-center md:justify-start gap-2 text-2xl md:text-3xl text-center md:text-left">
      <span className="text-gray-400 font-semibold">{displayed}</span>
      <span className="inline-block w-[2px] h-[1.1em] bg-sky-400 animate-pulse" />
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="mesh-bg py-10 px-6 text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="text-xs text-gray-400 tracking-widest uppercase">
              About Me
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-3 leading-snug max-w-xl md:max-w-2xl mx-auto text-center">
              A personal intro with space for both craft and character.
            </h2>
          </div>
        </AnimateIn>

        {/* Grid */}
        <div className="grid md:grid-cols-[380px_1fr] gap-14 items-center">
          {/* LEFT CARD */}
          <AnimateIn direction="left">
            <div className="floating-card relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-lg p-7 flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="relative mb-5">
                <div className="w-40 h-40 rounded-full overflow-hidden border border-white/10">
                  <img
                    src="/arafathossensabbir.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <h3 className="text-lg font-medium">{personalInfo.name}</h3>

              <p className="text-sm text-gray-400 mb-5">Junior Web Developer</p>

              <div className="w-full h-px bg-white/10 mb-5"></div>

              <div className="w-full space-y-2 text-left">
                {[
                  "Dhaka, Bangladesh",
                  "B.Sc. in CSE, Premier University",
                  "Laravel • Vue.js • PHP • MySQL",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="text-sm text-gray-400 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-5 text-xs text-gray-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Open to opportunities
              </div>
            </div>
          </AnimateIn>

          {/* RIGHT CONTENT */}
          <AnimateIn direction="right">
            <div className="space-y-6">
              {/* ✦ Typing Animation */}
              <TypingText />

              {[personalInfo.bio1, personalInfo.bio2, personalInfo.bio3].map(
                (para, i) => (
                  <p
                    key={i}
                    className={`text-[15px] leading-relaxed ${
                      i === 0 ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {para}
                  </p>
                ),
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                {["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-300"
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

      {/* Floating Animation */}
      <style jsx>{`
        .floating-card {
          animation: floatSmooth 5s ease-in-out infinite;
        }

        @keyframes floatSmooth {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
}
