import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kundan DR — AI & Machine Learning Engineer, Researcher, Author';
export const size = {
  width: 1200,
  height: 630,
};
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
          justifyContent: 'space-between',
          backgroundColor: '#faf8f5',
          padding: '80px',
          fontFamily: 'serif',
          border: '16px solid #e7e4df',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#c2410c',
              fontWeight: 700,
              fontFamily: 'monospace',
            }}
          >
            Engineering Portfolio &bull; 2026
          </div>
          <div
            style={{
              fontSize: 20,
              color: '#78716c',
              fontFamily: 'monospace',
            }}
          >
            kundandr-portfolio.vercel.app
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#1c1917',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Kundan DR
          </div>
          <div
            style={{
              fontSize: 32,
              fontStyle: 'italic',
              color: '#57534e',
              lineHeight: 1.3,
            }}
          >
            AI &amp; Machine Learning Engineer &bull; Published Researcher &bull; Author
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '2px solid #e7e4df',
            paddingTop: '32px',
          }}
        >
          <div style={{ display: 'flex', gap: '32px', fontSize: 20, color: '#44403c', fontFamily: 'monospace' }}>
            <span>&bull; DispatchGrid</span>
            <span>&bull; Zeno AI</span>
            <span>&bull; IJCRT Paper</span>
            <span>&bull; 2 Amazon Books</span>
          </div>
          <div style={{ fontSize: 20, color: '#78716c', fontFamily: 'monospace' }}>
            MIT Mysuru &apos;27
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
