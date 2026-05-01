import { useNavigate } from 'react-router-dom';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';
import { HeroPattern } from '../ui/HeroPattern';
import { STATS, PHONE_DISPLAY, PHONE_TEL } from '../../data/content';
import { useBreakpoint } from '../../hooks/useBreakpoint';

export const HomeHero = ({ theme, tone }) => {
  const { isNarrow, isMobile, isTabletDown } = useBreakpoint();
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', background: theme.bg, overflow: 'hidden' }}>
      <HeroPattern theme={theme} kind={theme.heroPattern} />
      <div style={{
        maxWidth: 1400, margin: '0 auto',
        padding: isMobile ? '48px 16px 64px' : isTabletDown ? '60px 24px 80px' : '80px 48px 100px',
        display: 'grid',
        gridTemplateColumns: isTabletDown ? '1fr' : '1.2fr 1fr',
        gap: isTabletDown ? 40 : 64,
        alignItems: 'center',
        position: 'relative',
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '6px 14px', border: `1px solid ${theme.line}`,
            borderRadius: 100, background: theme.surface,
            fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: theme.ink2, marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3DAA5E' }} />
            {tone.heroEyebrow}
          </div>
          <h1 style={{
            fontFamily: theme.displayFont, fontWeight: theme.displayWeight,
            fontSize: isMobile ? 'clamp(40px, 11vw, 60px)' : 'clamp(52px, 7vw, 96px)',
            lineHeight: 0.95, margin: 0,
            color: theme.ink, letterSpacing: '-0.035em', textWrap: 'balance',
          }}>
            {tone.heroTitle[0]}<br/>
            <span style={{ color: theme.accent === '#FFC629' || theme.accent === '#EEFF41' ? theme.ink : theme.accent }}>
              {tone.heroTitle[1]}
            </span>
          </h1>
          <p style={{
            fontFamily: theme.bodyFont, fontSize: isMobile ? 16 : 18, lineHeight: 1.5, color: theme.ink2,
            maxWidth: 540, marginTop: 26, textWrap: 'pretty',
          }}>{tone.heroSub}</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
            <Button theme={theme} variant="primary" size={isMobile ? 'md' : 'lg'} iconRight="arrow" onClick={() => navigate('/book')}>{tone.bookCta}</Button>
            <Button theme={theme} variant="ghost" size={isMobile ? 'md' : 'lg'} icon="phone" onClick={() => window.location.href = `tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</Button>
          </div>
          <div style={{
            marginTop: 48, display: 'grid',
            gridTemplateColumns: isNarrow ? 'repeat(2, 46%)' : `repeat(${4}, auto)`,
            gap: isNarrow ? '20px 0' : isMobile ? 24 : 36,
            paddingTop: 32, borderTop: `1px solid ${theme.line}`,
          }}>
            {STATS.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: isMobile ? 26 : 32, color: theme.ink, letterSpacing: '-0.02em', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.monoColor, marginTop: 8 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: theme.brand, color: theme.brandInk,
          borderRadius: theme.radius, padding: isMobile ? 24 : 32,
          boxShadow: `0 30px 80px ${theme.brand}40`,
          position: 'relative', overflow: 'hidden',
        }}>
          {!isMobile && (
            <div style={{
              position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
            }} />
          )}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.14em',
            textTransform: 'uppercase', fontWeight: 700, marginBottom: 20,
            position: 'relative', color: theme.accent,
          }}>
            <Icon name="pin" size={14} />
            Locally Owned & Operated
          </div>
          <div style={{
            fontFamily: theme.displayFont, fontWeight: theme.displayWeight,
            fontSize: isMobile ? 30 : 42, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 16, position: 'relative',
          }}>
            Your neighbors.<br/>Your electricians.
          </div>
          <p style={{ fontFamily: theme.bodyFont, fontSize: 15, lineHeight: 1.5, opacity: 0.92, margin: '0 0 24px', maxWidth: 360, position: 'relative' }}>
            Headquartered in Lynnwood and serving Snohomish, King, Pierce, and Thurston counties since 2003. We live here, our crew lives here, and we treat every job like it's on our own block.
          </p>
          <a href={`tel:${PHONE_TEL}`} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
            background: theme.accent, color: theme.accentInk, textDecoration: 'none',
            padding: '18px 22px', borderRadius: theme.radius, position: 'relative',
          }}>
            <div>
              <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.7 }}>Call us</div>
              <div style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 26, letterSpacing: '-0.02em' }}>{PHONE_DISPLAY}</div>
            </div>
            <Icon name="phone" size={28} stroke={2.2}/>
          </a>
          <div style={{
            marginTop: 18,
            display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)',
            gap: 10,
            fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.85, position: 'relative',
          }}>
            <div>Lynnwood HQ<br/><span style={{ opacity: 0.65 }}>since 2003</span></div>
            <div>Four counties<br/><span style={{ opacity: 0.65 }}>Snohomish, King, Pierce, Thurston</span></div>
            {!isMobile && <div>Local crew<br/><span style={{ opacity: 0.65 }}>no franchise</span></div>}
          </div>
        </div>
      </div>
    </div>
  );
};
