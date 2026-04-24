export const HeroPattern = ({ theme, kind }) => {
  if (kind === 'grid') {
    return (
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.08 }}>
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0 L0 0 L0 48" fill="none" stroke={theme.ink} strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    );
  }
  if (kind === 'topo') {
    return (
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.10 }} preserveAspectRatio="none">
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse key={i} cx="50%" cy="50%" rx={`${40 + i * 8}%`} ry={`${25 + i * 6}%`} fill="none" stroke={theme.ink} strokeWidth="1" />
        ))}
      </svg>
    );
  }
  if (kind === 'circuit') {
    return (
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.22 }}>
        <defs>
          <pattern id="circuit" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M0 60 L40 60 L40 20 L80 20 L80 100 L120 100" fill="none" stroke={theme.brand} strokeWidth="1"/>
            <circle cx="40" cy="60" r="3" fill={theme.brand}/>
            <circle cx="80" cy="20" r="3" fill={theme.brand}/>
            <circle cx="80" cy="100" r="3" fill={theme.brand}/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    );
  }
  return null;
};
