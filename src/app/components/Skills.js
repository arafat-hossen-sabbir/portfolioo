"use client";

import { useEffect, useRef, useState } from "react";
import AnimateIn from "./AnimateIn";
import { skills } from "../data";

const ACCENTS = [
  "rgba(99,153,34,0.5)",
  "rgba(55,138,221,0.45)",
  "rgba(186,117,23,0.45)",
  "rgba(160,107,200,0.4)",
  "rgba(29,158,117,0.4)",
  "rgba(210,83,126,0.4)",
];

const BAR_COLORS = [
  "rgba(99,153,34,0.65)",
  "rgba(55,138,221,0.6)",
  "rgba(186,117,23,0.6)",
  "rgba(160,107,200,0.55)",
  "rgba(29,158,117,0.55)",
  "rgba(210,83,126,0.55)",
];

function SkillBar({ name, level, delay = 0, barColor }) {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-[var(--text-muted)]">{name}</span>
        <span className="text-sm font-medium text-[var(--text)]">{level}%</span>
      </div>
      <div className="h-[4px] rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: animated ? `${level}%` : "0%",
            background: barColor,
            transition: `width 1.1s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-10 px-6 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="tag">Skills</span>
            <h2 className="section-title text-[clamp(28px,3.5vw,44px)] leading-tight">
              A graphical skills layout
              <br />
              that stays readable.
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-md mx-auto text-sm">
              Clean, modern and scalable skill presentation using a consistent
              design system.
            </p>
          </div>
        </AnimateIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, gi) => (
            <AnimateIn key={gi} delay={gi * 80} direction="up">
              <div
                className="
                  relative overflow-hidden rounded-2xl p-9
                  bg-white/[0.04] border border-white/[0.08]
                  hover:bg-white/[0.07] hover:border-white/[0.14]
                  transition-all duration-300 hover:-translate-y-1
                "
              >
                {/* Accent top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, ${ACCENTS[gi % ACCENTS.length]}, transparent)`,
                  }}
                />

                {/* Header */}
                <div className="mb-7">
                  <div className="text-3xl mb-3">{group.icon}</div>
                  <div className="text-[11px] font-medium tracking-widest uppercase text-[var(--text-muted)] mb-1">
                    {group.category}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    {group.subtitle}
                  </h3>
                </div>

                {/* Skill bars */}
                {group.items.map((item, i) => (
                  <SkillBar
                    key={i}
                    name={item.name}
                    level={item.level}
                    delay={i * 120 + gi * 60}
                    barColor={BAR_COLORS[gi % BAR_COLORS.length]}
                  />
                ))}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
