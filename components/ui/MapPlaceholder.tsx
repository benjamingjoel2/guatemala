/** Stylised route map placeholder — swap for Mapbox/Google Maps embed later. */
export function MapPlaceholder({ stops }: { stops: string[] }) {
  const points = stops.map((s, i) => {
    const t = stops.length === 1 ? 0.5 : i / (stops.length - 1);
    return { label: s, x: 12 + t * 76, y: 70 - Math.sin(t * Math.PI) * 38 - t * 10 };
  });
  return (
    <figure className="relative aspect-[4/3] w-full overflow-hidden border border-line bg-ink-2 md:aspect-[16/8]">
      <svg viewBox="0 0 100 75" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 size-full" role="img" aria-label={`Route map placeholder: ${stops.join(" to ")}`}>
        <defs>
          <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M5 0H0V5" fill="none" stroke="rgb(243 238 230 / 0.06)" strokeWidth="0.2" />
          </pattern>
        </defs>
        <rect width="100" height="75" fill="url(#grid)" />
        <path d="M8 60 C 20 40, 30 55, 42 30 S 70 20, 92 12" fill="none" stroke="rgb(243 238 230 / 0.08)" strokeWidth="6" />
        <polyline points={points.map((p) => `${p.x},${p.y}`).join(" ")} fill="none" stroke="var(--color-terra)" strokeWidth="0.5" strokeDasharray="1.4 1" />
        {points.map((p, i) => (
          <g key={p.label + i}>
            <circle cx={p.x} cy={p.y} r="1.6" fill="var(--color-ink)" stroke="var(--color-jade-light)" strokeWidth="0.5" />
            <text x={p.x} y={p.y - 3.2} textAnchor="middle" fontSize="2.3" fill="var(--color-bone)" fontWeight="600">
              {p.label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="t-xs absolute bottom-3 left-3 text-faint">Map placeholder · not to scale</figcaption>
    </figure>
  );
}
