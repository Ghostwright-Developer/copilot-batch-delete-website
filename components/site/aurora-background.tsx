// Site-wide background: slow streams of aurora ribbons with drifting dry-ice mist.
// Pure CSS + SVG (no JS, no canvas). Each ribbon is blurred once and only its transform animates,
// so it stays cheap on the GPU. Respects prefers-reduced-motion.

type Ribbon = { d: string; from: string; via: string; to: string; width: number; blur: number; opacity: number; anim: string; dur: number; delay: number }

const RIBBONS: Ribbon[] = [
  { d: 'M -300 880 C 100 760, 380 420, 760 520 S 1300 220, 1900 120', from: '#19e6d0', via: '#2f9bff', to: '#7a5cff', width: 150, blur: 38, opacity: 0.55, anim: 'aurora-a', dur: 38, delay: 0 },
  { d: 'M -300 620 C 120 560, 420 760, 820 560 S 1320 360, 1900 440', from: '#2f7bff', via: '#8a5cff', to: '#e04bd9', width: 120, blur: 34, opacity: 0.5, anim: 'aurora-b', dur: 46, delay: -12 },
  { d: 'M -300 280 C 200 120, 520 380, 900 260 S 1400 40, 1900 200', from: '#a45cff', via: '#e04bd9', to: '#ff6fc8', width: 110, blur: 40, opacity: 0.42, anim: 'aurora-a', dur: 52, delay: -24 },
  { d: 'M -300 1000 C 200 920, 560 900, 900 760 S 1360 700, 1900 560', from: '#12c9e8', via: '#1fe3b5', to: '#2f9bff', width: 130, blur: 44, opacity: 0.4, anim: 'aurora-b', dur: 60, delay: -30 },
  { d: 'M -300 460 C 160 300, 460 560, 860 380 S 1380 520, 1900 320', from: '#4aa8ff', via: '#19e6d0', to: '#8a5cff', width: 90, blur: 30, opacity: 0.38, anim: 'aurora-c', dur: 42, delay: -6 },
]

const MIST = [
  { top: '8%', left: '-20%', w: '90vw', h: '38vh', dur: 70, delay: 0, o: 0.16 },
  { top: '42%', left: '-10%', w: '110vw', h: '34vh', dur: 90, delay: -35, o: 0.13 },
  { top: '70%', left: '-25%', w: '100vw', h: '36vh', dur: 80, delay: -18, o: 0.15 },
]

export default function AuroraBackground() {
  return (
    <div aria-hidden="true" className="aurora-bg">
      <div className="aurora-base" />
      {RIBBONS.map((r, i) => (
        <div
          key={i}
          className="aurora-ribbon"
          style={{ filter: `blur(${r.blur}px)`, opacity: r.opacity, animation: `${r.anim} ${r.dur}s ease-in-out ${r.delay}s infinite alternate` }}
        >
          <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
            <defs>
              <linearGradient id={`ar${i}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor={r.from} stopOpacity="0" />
                <stop offset="0.25" stopColor={r.from} />
                <stop offset="0.6" stopColor={r.via} />
                <stop offset="0.85" stopColor={r.to} />
                <stop offset="1" stopColor={r.to} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={r.d} fill="none" stroke={`url(#ar${i})`} strokeWidth={r.width} strokeLinecap="round" />
          </svg>
        </div>
      ))}
      {MIST.map((m, i) => (
        <div
          key={`m${i}`}
          className="aurora-mist"
          style={{ top: m.top, left: m.left, width: m.w, height: m.h, opacity: m.o, animation: `mist-drift ${m.dur}s ease-in-out ${m.delay}s infinite alternate` }}
        />
      ))}
      <div className="aurora-vignette" />
    </div>
  )
}
