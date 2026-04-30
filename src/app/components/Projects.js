'use client';
import { useState } from 'react';
import AnimateIn from './AnimateIn';
import { projects } from '../data';

const categories = ['All', 'E-commerce', 'Dashboard', 'Community App'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" style={{ padding: '100px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <AnimateIn>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="tag">Works</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.2 }}>
              Three portfolio-ready case studies<br />with their own detail pages.
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: 16, maxWidth: 520, margin: '16px auto 0' }}>
              Each card and project page is generated from the same data model so your future updates stay consistent.
            </p>
          </div>
        </AnimateIn>

        {/* Filter tabs */}
        <AnimateIn delay={100}>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '9px 22px',
                  borderRadius: 999,
                  border: '1.5px solid',
                  borderColor: active === cat ? 'var(--accent)' : 'var(--border)',
                  background: active === cat ? 'var(--accent)' : 'transparent',
                  color: active === cat ? '#fff' : 'var(--text-muted)',
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'var(--font-plus-jakarta)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }} className="projects-grid">
          {filtered.map((project, i) => (
            <AnimateIn key={project.id} delay={i * 120} direction="up">
              <div
                className="card-hover"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 20,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Project image placeholder */}
                <div style={{
                  height: 200,
                  background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at 50% 50%, ${project.color}30 0%, transparent 70%)`,
                  }} />
                  <span style={{ fontSize: 64, position: 'relative' }}>{project.icon}</span>

                  {/* Category badge */}
                  <span style={{
                    position: 'absolute',
                    top: 16, left: 16,
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: 999,
                    background: project.color,
                    color: '#fff',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}>{project.category}</span>
                </div>

                {/* Content */}
                <div style={{ padding: 28, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontWeight: 700, fontSize: 20,
                    color: 'var(--text)', marginBottom: 10,
                  }}>{project.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                    {project.tags.map((tag, j) => (
                      <span key={j} style={{
                        fontSize: 12, fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: 6,
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border)',
                      }}>{tag}</span>
                    ))}
                  </div>

                  <a
                    href={`/projects/${project.id}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 14,
                      fontWeight: 700,
                      color: project.color,
                      textDecoration: 'none',
                      fontFamily: 'var(--font-plus-jakarta)',
                      transition: 'gap 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.gap = '10px'; }}
                    onMouseLeave={e => { e.currentTarget.style.gap = '6px'; }}
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .projects-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
