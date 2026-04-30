import { ThemeProvider } from '../../components/ThemeProvider';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { projects } from '../../data';

export async function generateStaticParams() {
  return projects.map(p => ({ id: p.id }));
}

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return (
      <ThemeProvider>
        <Navbar />
        <main style={{ minHeight: '100vh', paddingTop: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'var(--font-plus-jakarta)', fontSize: 48, color: 'var(--text)' }}>404</h1>
            <p style={{ color: 'var(--text-muted)' }}>Project not found.</p>
          </div>
        </main>
        <Footer />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: 100 }}>
        {/* Hero */}
        <section style={{
          padding: '80px 24px',
          background: `linear-gradient(135deg, ${project.color}15, transparent)`,
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <a
              href="/"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 14, fontWeight: 600, color: 'var(--text-muted)',
                textDecoration: 'none', marginBottom: 32,
                transition: 'color 0.2s',
              }}
            >
              ← Back to Portfolio
            </a>

            <span style={{
              display: 'inline-block',
              fontSize: 12, fontWeight: 700,
              padding: '4px 14px', borderRadius: 999,
              background: project.color, color: '#fff',
              marginBottom: 20, letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>{project.category}</span>

            <h1 style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)',
              color: 'var(--text)', marginBottom: 20, lineHeight: 1.1,
            }}>{project.title}</h1>

            <p style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 650, marginBottom: 32 }}>
              {project.longDescription}
            </p>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 36 }}>
              {project.tags.map((tag, i) => (
                <span key={i} style={{
                  padding: '6px 16px', borderRadius: 8,
                  background: 'var(--bg-card)', color: 'var(--text)',
                  fontSize: 14, fontWeight: 600,
                  border: '1px solid var(--border)',
                }}>{tag}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 14 }}>
              <a
                href={project.liveUrl}
                style={{
                  padding: '12px 28px', borderRadius: 10,
                  background: project.color, color: '#fff',
                  fontWeight: 700, fontSize: 14, textDecoration: 'none',
                  fontFamily: 'var(--font-plus-jakarta)',
                }}
              >Live Demo →</a>
              <a
                href={project.githubUrl}
                style={{
                  padding: '12px 28px', borderRadius: 10,
                  border: '1.5px solid var(--border)',
                  color: 'var(--text)',
                  fontWeight: 700, fontSize: 14, textDecoration: 'none',
                  fontFamily: 'var(--font-plus-jakarta)',
                }}
              >View Code</a>
            </div>
          </div>
        </section>

        {/* Preview placeholder */}
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{
              width: '100%', aspectRatio: '16/9',
              borderRadius: 20, border: '1px solid var(--border)',
              background: `linear-gradient(135deg, ${project.color}20, ${project.color}08)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: 16,
            }}>
              <span style={{ fontSize: 80 }}>{project.icon}</span>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, fontWeight: 500 }}>
                Project Preview / Screenshots Here
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
