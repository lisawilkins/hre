import { Icon } from './Icon';

export const Button = ({ theme, variant = 'primary', size = 'md', children, onClick, icon, iconRight, style, full }) => {
  const pad = size === 'lg' ? '16px 26px' : size === 'sm' ? '8px 14px' : '12px 20px';
  const fs = size === 'lg' ? 16 : size === 'sm' ? 13 : 15;
  const variants = {
    primary:   { background: theme.brand, color: theme.brandInk, border: `1px solid ${theme.brand}` },
    accent:    { background: theme.accent, color: theme.accentInk, border: `1px solid ${theme.accent}` },
    emergency: { background: theme.emergency, color: theme.emergencyInk, border: `1px solid ${theme.emergency}` },
    outline:   { background: 'transparent', color: theme.ink, border: `1px solid ${theme.ink}` },
    ghost:     { background: 'transparent', color: theme.ink, border: `1px solid ${theme.ink}` },
  };
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        padding: pad, fontSize: fs, fontFamily: theme.bodyFont, fontWeight: 600,
        borderRadius: theme.radius, cursor: 'pointer', letterSpacing: '-0.005em',
        width: full ? '100%' : 'auto', transition: 'transform .1s, filter .15s',
        ...variants[variant], ...style,
      }}
      onMouseDown={e => e.currentTarget.style.transform = 'translateY(1px)'}
      onMouseUp={e => e.currentTarget.style.transform = ''}
      onMouseLeave={e => e.currentTarget.style.transform = ''}
    >
      {icon && <Icon name={icon} size={fs + 2} />}
      {children}
      {iconRight && <Icon name={iconRight} size={fs + 2} />}
    </button>
  );
};
