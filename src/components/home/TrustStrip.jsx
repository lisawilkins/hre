import { Icon } from '../ui/Icon';
import { COMMERCIAL_CLIENTS } from '../../data/content';

export const TrustStrip = ({ theme }) => {
  return (
    <div style={{
      background: theme.surface,
      borderTop: `1px solid ${theme.line}`,
      borderBottom: `1px solid ${theme.line}`,
      padding: '18px 16px',
      overflowX: 'auto',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, minWidth: 'max-content' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.monoColor, flexShrink: 0 }}>
          <Icon name="shield" size={14} /> Commercial Clients Trust Home Run Electric
        </div>
        <div style={{ width: 1, height: 16, background: theme.line, flexShrink: 0 }} />
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {COMMERCIAL_CLIENTS.map((c, i) => (
            <div key={i} style={{ fontFamily: theme.displayFont, fontSize: 13, fontWeight: 600, color: theme.ink2, letterSpacing: '0.08em', opacity: 0.65, whiteSpace: 'nowrap' }}>{c}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
