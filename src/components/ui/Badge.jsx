import { Icon } from './Icon';

export const Badge = ({ theme, children, variant = 'default', icon }) => {
  const v = {
    default: { background: 'transparent', color: theme.muted, border: `1px solid ${theme.line}` },
    brand:   { background: theme.brand, color: theme.brandInk, border: 'none' },
    accent:  { background: theme.accent, color: theme.accentInk, border: 'none' },
    soft:    { background: theme.bg === '#0E0F12' ? theme.line : '#EDE8DB', color: theme.ink, border: 'none' },
  }[variant];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap',
      padding: '5px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600,
      fontFamily: theme.monoFont, letterSpacing: '0.06em', textTransform: 'uppercase',
      ...v,
    }}>
      {icon && <Icon name={icon} size={12} />}
      {children}
    </span>
  );
};
