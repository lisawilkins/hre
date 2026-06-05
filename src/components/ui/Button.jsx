import { useState } from 'react';
import { Icon } from './Icon';

export const Button = ({ theme, variant = 'primary', size = 'md', children, onClick, icon, iconRight, style, full }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const pad = size === 'lg' ? '16px 26px' : size === 'sm' ? '8px 14px' : '12px 20px';
  const fs = size === 'lg' ? 16 : size === 'sm' ? 13 : 15;
  const variants = {
    primary:   { background: theme.brand, color: theme.brandInk, border: `1px solid ${theme.brand}` },
    accent:    { background: theme.accent, color: theme.accentInk, border: `1px solid ${theme.accent}` },
    emergency: { background: theme.emergency, color: theme.emergencyInk, border: `1px solid ${theme.emergency}` },
    outline:   { background: 'transparent', color: theme.ink, border: `1px solid ${theme.ink}` },
    ghost:     { background: 'transparent', color: theme.ink, border: `1px solid ${theme.line}` },
  };
  const hoverStyles = {
    primary:   { filter: 'brightness(1.14)', boxShadow: '0 6px 20px rgba(0,0,0,0.20)', transform: 'translateY(-1px)' },
    accent:    { filter: 'brightness(1.10)', boxShadow: '0 6px 20px rgba(0,0,0,0.15)', transform: 'translateY(-1px)' },
    emergency: { filter: 'brightness(1.10)', boxShadow: '0 6px 20px rgba(0,0,0,0.18)', transform: 'translateY(-1px)' },
    outline:   { background: theme.surfaceAlt },
    ghost:     { background: theme.surfaceAlt },
  };
  const pressedStyles = {
    primary:   { filter: 'brightness(0.82)', transform: 'translateY(1px)', boxShadow: 'none' },
    accent:    { filter: 'brightness(0.85)', transform: 'translateY(1px)', boxShadow: 'none' },
    emergency: { filter: 'brightness(0.85)', transform: 'translateY(1px)', boxShadow: 'none' },
    outline:   { background: theme.line, transform: 'translateY(1px)' },
    ghost:     { background: theme.line, transform: 'translateY(1px)' },
  };
  const interactionStyle = isPressed ? pressedStyles[variant] : isHovered ? hoverStyles[variant] : {};

  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        padding: pad, fontSize: fs, fontFamily: theme.bodyFont, fontWeight: 600,
        borderRadius: theme.radius, cursor: 'pointer', letterSpacing: '-0.005em',
        width: full ? '100%' : 'auto',
        transition: 'background 0.15s, border-color 0.15s, box-shadow 0.15s, transform 0.1s, filter 0.15s',
        ...variants[variant], ...interactionStyle, ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsPressed(false); }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      {icon && <Icon name={icon} size={fs + 2} />}
      {children}
      {iconRight && <Icon name={iconRight} size={fs + 2} />}
    </button>
  );
};
