import { Icon } from '../ui/Icon';
import { PHONE_DISPLAY, PHONE_TEL } from '../../data/content';
import { useBreakpoint } from '../../hooks/useBreakpoint';

export const EmergencyBar = ({ theme, show, tone }) => {
  const { isMobile } = useBreakpoint();
  if (!show) return null;
  return (
    <div style={{
      background: theme.emergency, color: theme.emergencyInk,
      padding: isMobile ? '9px 16px' : '9px 48px',
      fontFamily: theme.bodyFont, fontSize: 13,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexWrap: 'wrap', gap: isMobile ? '4px 12px' : 16,
      position: 'sticky', top: 0, zIndex: 100, fontWeight: 500,
    }}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700,
      }}>
        <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: theme.emergencyInk, animation: 'hrepulse 1.4s ease-in-out infinite' }} />
        Emergency Electrician
      </span>
      {!isMobile && <span style={{ opacity: 0.75 }}>·</span>}
      <a href={`tel:${PHONE_TEL}`} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <Icon name="phone" size={14} /> {PHONE_DISPLAY}
      </a>
      {!isMobile && <span style={{ opacity: 0.75 }}>·</span>}
      <span style={isMobile ? { width: '100%', textAlign: 'center', fontSize: 11, opacity: 0.85 } : {}}>
        Monday – Saturday &nbsp;|&nbsp; 7:00AM – 6:00PM
      </span>
    </div>
  );
};
