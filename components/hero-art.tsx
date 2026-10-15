/**
 * Hero composition: the Auren mark drawn large with its construction lines,
 * on a hairline grid. Pure SVG, thin constant-width strokes.
 */
export function HeroArt() {
  const ring = { fill: "none", stroke: "currentColor", vectorEffect: "non-scaling-stroke" as const };
  return (
    <figure className="relative mx-auto aspect-square w-full max-w-[520px]">
      <svg
        viewBox="0 0 400 400"
        className="size-full text-black"
        role="img"
        aria-label="The Auren mark: a circle, half solid and half outline, drawn with construction lines."
      >
        {/* grid */}
        {[0, 100, 200, 300, 400].map((p) => (
          <g key={p} stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" vectorEffect="non-scaling-stroke">
            <line x1={p} y1="0" x2={p} y2="400" vectorEffect="non-scaling-stroke" />
            <line x1="0" y1={p} x2="400" y2={p} vectorEffect="non-scaling-stroke" />
          </g>
        ))}
        {/* construction */}
        <circle cx="200" cy="200" r="190" {...ring} strokeOpacity="0.18" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="150" {...ring} strokeWidth="1.5" />
        <path d="M200 50a150 150 0 0 0 0 300Z" fill="currentColor" />
        <line x1="200" y1="10" x2="200" y2="390" {...ring} strokeOpacity="0.5" strokeWidth="1" />
        <line x1="10" y1="200" x2="390" y2="200" {...ring} strokeOpacity="0.5" strokeWidth="1" />
        <circle cx="200" cy="200" r="3" fill="#fff" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
      <figcaption className="absolute -bottom-7 left-0 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-gray-600">
        Fig. 01 — The mark
      </figcaption>
    </figure>
  );
}
