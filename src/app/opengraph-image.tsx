import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kundan DR · Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#faf7ee',
          backgroundImage: 'radial-gradient(#d4d4d8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#ef4444',
              borderRadius: '12px',
              border: '3px solid #18181b',
              boxShadow: '4px 4px 0px #18181b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '28px',
              fontWeight: 900,
            }}
          >
            K
          </div>
          <span
            style={{
              fontSize: '24px',
              fontWeight: 900,
              color: '#18181b',
              letterSpacing: '-0.5px',
            }}
          >
            kundan.dr
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              display: 'inline-flex',
              padding: '8px 16px',
              backgroundColor: '#fde047',
              border: '3px solid #18181b',
              borderRadius: '12px',
              boxShadow: '4px 4px 0px #18181b',
              fontSize: '20px',
              fontWeight: 900,
              color: '#18181b',
              transform: 'rotate(-1deg)',
            }}
          >
            AI &amp; Backend Engineer · Graduating 2027
          </div>

          <h1
            style={{
              fontSize: '64px',
              fontWeight: 900,
              color: '#18181b',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Practical autonomous AI <br />&amp; high-throughput backends.
          </h1>

          <p
            style={{
              fontSize: '24px',
              color: '#52525b',
              margin: 0,
            }}
          >
            MIT Mysuru · UI/UX Intern at WizzyBox · IJCRT Published Researcher · 2x Author
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '3px solid #18181b',
            paddingTop: '24px',
            fontSize: '18px',
            fontWeight: 700,
            color: '#18181b',
          }}
        >
          <span>kundandr-portfolio.vercel.app</span>
          <span>FastAPI · Next.js · Agentic AI · SQLite</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
