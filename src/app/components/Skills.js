'use client';
import { useEffect, useRef, useState } from 'react';
import AnimateIn from './AnimateIn';
import { skills } from '../data';

function SkillBar({ name, level, delay = 0 }) {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.unobserve(el); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)' }}>{name}</span>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)' }}>{level}%</span>
      </div>
      <div style={{ height: 6, borderRadius: 999, background: 'var(--bg-secondary)', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          borderRadius: 999,
          background: 'linear-gradient(90deg, var(--accent), #ec4899)',
          width: animated ? `${level}%` : '0%',
          transition: `width 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <AnimateIn>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="tag">Skills</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.2 }}>
              A graphical skills layout<br />that stays readable.
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: 16, maxWidth: 500, margin: '16px auto 0' }}>
              Each category is driven by local data, so replacing placeholder skills later is a content edit instead of a redesign.
            </p>
          </div>
        </AnimateIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }} className="skills-grid">
          {skills.map((group, gi) => (
            <AnimateIn key={gi} delay={gi * 120} direction="up">
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                padding: 32,
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
                className="card-hover"
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: 3,
                  background: gi === 0
                    ? 'linear-gradient(90deg, #6366f1, #818cf8)'
                    : gi === 1
                      ? 'linear-gradient(90deg, #06b6d4, #3b82f6)'
                      : 'linear-gradient(90deg, #f59e0b, #ef4444)',
                }} />

                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{group.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 2 }}>
                    {group.category}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-plus-jakarta)', fontWeight: 700, fontSize: 20, color: 'var(--text)' }}>
                    {group.subtitle}
                  </h3>
                </div>

                {group.items.map((item, i) => (
                  <SkillBar key={i} name={item.name} level={item.level} delay={i * 100 + gi * 80} />
                ))}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .skills-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
