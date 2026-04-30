'use client';
import AnimateIn from './AnimateIn';
import { education, experience } from '../data';

export default function Education() {
  return (
    <section id="education" style={{ padding: '100px 24px', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <AnimateIn>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="tag">Resume</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.2 }}>
              Your academic foundation,<br />presented with useful detail.
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: 16, maxWidth: 520, margin: '16px auto 0' }}>
              The placeholders below assume education beyond HSC and can be edited directly from the central data file.
            </p>
          </div>
        </AnimateIn>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }} className="edu-grid">
          {/* Education */}
          <div>
            <AnimateIn direction="left">
              <h3 style={{
                fontFamily: 'var(--font-plus-jakarta)',
                fontWeight: 700,
                fontSize: 20,
                marginBottom: 24,
                color: 'var(--text)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'linear-gradient(135deg, var(--accent), #ec4899)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18,
                }}>🎓</span>
                Education
              </h3>
            </AnimateIn>

            {education.map((item, i) => (
              <AnimateIn key={i} direction="left" delay={i * 100}>
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: 28,
                  marginBottom: 20,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0,
                    width: 4,
                    background: 'linear-gradient(180deg, var(--accent), #ec4899)',
                    borderRadius: '4px 0 0 4px',
                  }} />
                  <div style={{ paddingLeft: 12 }}>
                    <span style={{
                      display: 'inline-block',
                      fontSize: 11, fontWeight: 700,
                      color: 'var(--accent)',
                      background: 'var(--accent-glow)',
                      padding: '3px 10px',
                      borderRadius: 999,
                      marginBottom: 10,
                      letterSpacing: '0.06em',
                    }}>{item.period}</span>
                    <h4 style={{ fontFamily: 'var(--font-plus-jakarta)', fontWeight: 700, fontSize: 17, color: 'var(--text)', marginBottom: 4 }}>
                      {item.degree}
                    </h4>
                    <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600, marginBottom: 14 }}>{item.institution}</p>
                    <ul style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {item.details.map((d, j) => (
                        <li key={j} style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Experience */}
          <div id="experience">
            <AnimateIn direction="right">
              <h3 style={{
                fontFamily: 'var(--font-plus-jakarta)',
                fontWeight: 700,
                fontSize: 20,
                marginBottom: 24,
                color: 'var(--text)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18,
                }}>💼</span>
                Experience
              </h3>
            </AnimateIn>

            <AnimateIn direction="right" delay={50}>
              <div style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '14px 20px',
                marginBottom: 20,
                fontSize: 13,
                color: 'var(--text-muted)',
                lineHeight: 1.6,
              }}>
                Relevant work, internships, or leadership experience. This block is data-driven, so you can keep placeholder entries for now or remove the array later to hide the section entirely.
              </div>
            </AnimateIn>

            {experience.map((item, i) => (
              <AnimateIn key={i} direction="right" delay={i * 100 + 100}>
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: 28,
                  marginBottom: 20,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0,
                    width: 4,
                    background: 'linear-gradient(180deg, #06b6d4, #3b82f6)',
                    borderRadius: '4px 0 0 4px',
                  }} />
                  <div style={{ paddingLeft: 12 }}>
                    <span style={{
                      display: 'inline-block',
                      fontSize: 11, fontWeight: 700,
                      color: '#06b6d4',
                      background: 'rgba(6,182,212,0.1)',
                      padding: '3px 10px',
                      borderRadius: 999,
                      marginBottom: 10,
                      letterSpacing: '0.06em',
                    }}>{item.period}</span>
                    <h4 style={{ fontFamily: 'var(--font-plus-jakarta)', fontWeight: 700, fontSize: 17, color: 'var(--text)', marginBottom: 4 }}>
                      {item.role}
                    </h4>
                    <p style={{ fontSize: 13, color: '#06b6d4', fontWeight: 600, marginBottom: 14 }}>{item.company}</p>
                    <ul style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {item.details.map((d, j) => (
                        <li key={j} style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .edu-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
