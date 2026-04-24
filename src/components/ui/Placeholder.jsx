import { adjust } from './utils';

export const Placeholder = ({ theme, label, aspect = '4/3', tint, rounded, style }) => {
  const base = tint || (theme.bg === '#0E0F12' ? '#23262D' : '#D9D3C5');
  return (
    <div style={{
      aspectRatio: aspect, width: '100%',
      background: `repeating-linear-gradient(135deg, ${base}, ${base} 10px, ${adjust(base, 8)} 10px, ${adjust(base, 8)} 20px)`,
      borderRadius: rounded ?? theme.radius,
      display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
      padding: 14, color: theme.ink2, fontFamily: theme.monoFont, fontSize: 10,
      letterSpacing: '0.08em', textTransform: 'uppercase',
      border: `1px solid ${theme.line}`,
      position: 'relative', overflow: 'hidden',
      ...style,
    }}>
      <span style={{ background: theme.surface, padding: '3px 7px', borderRadius: 3, border: `1px solid ${theme.line}` }}>
        {label}
      </span>
    </div>
  );
};

export const Portrait = ({ theme, name, tint, aspect = '3/4' }) => {
  const base = tint || '#C9BFA8';
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('');
  return (
    <div style={{
      aspectRatio: aspect, width: '100%',
      background: `linear-gradient(160deg, ${adjust(base, 14)}, ${base} 50%, ${adjust(base, -14)})`,
      borderRadius: theme.radius,
      position: 'relative', overflow: 'hidden',
      border: `1px solid ${theme.line}`,
    }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.14,
        background: 'repeating-linear-gradient(45deg, transparent, transparent 8px, #000 8px, #000 9px)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'rgba(255,255,255,0.9)', fontFamily: theme.displayFont,
        fontSize: 56, fontWeight: theme.displayWeight, letterSpacing: '-0.03em',
        textShadow: '0 2px 12px rgba(0,0,0,0.2)',
      }}>{initials}</div>
      <div style={{
        position: 'absolute', bottom: 10, left: 10, right: 10,
        fontFamily: theme.monoFont, fontSize: 9, letterSpacing: '0.1em',
        color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase',
        display: 'flex', justifyContent: 'space-between',
      }}>
        <span>Team photo</span><span>HRE</span>
      </div>
    </div>
  );
};
