import { Icon } from '../ui/Icon';
import { COMMERCIAL_CLIENTS } from '../../data/content';
import { useBreakpoint } from '../../hooks/useBreakpoint';

export const TrustStrip = ({ theme }) => {
  const { isMobile, isTablet } = useBreakpoint();
  return (
    <div style={{
      background: theme.surface,
      borderTop: `1px solid ${theme.line}`,
      borderBottom: `1px solid ${theme.line}`,
      padding: isMobile ? '18px 16px' : isTablet ? '22px 24px' : '22px 48px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {isMobile ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.monoColor, marginBottom: 14 }}>
              <Icon name="shield" size={14} /> Commercial Clients Trust Home Run Electric
            </div>
            <div style={{ display: 'flex', gap: 28, overflowX: 'auto', paddingBottom: 4, scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {COMMERCIAL_CLIENTS.map((c, i) => (
                <div key={i} style={{ fontFamily: theme.displayFont, fontSize: 13, fontWeight: 600, color: theme.ink2, letterSpacing: '0.08em', opacity: 0.65, whiteSpace: 'nowrap', flexShrink: 0 }}>{c}</div>
              ))}
            </div>
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.monoColor }}>
              <Icon name="shield" size={14} /> Commercial Clients Trust Home Run Electric
            </div>
            <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'center' }}>
              {COMMERCIAL_CLIENTS.slice(0, isTablet ? 4 : 6).map((c, i) => (
                <div key={i} style={{ fontFamily: theme.displayFont, fontSize: 13, fontWeight: 600, color: theme.ink2, letterSpacing: '0.08em', opacity: 0.65 }}>{c}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
