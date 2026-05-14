import { useNavigate } from 'react-router-dom';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';
import { HeroPattern } from '../ui/HeroPattern';
import { STATS, PHONE_DISPLAY, PHONE_TEL } from '../../data/content';
import { useBreakpoint } from '../../hooks/useBreakpoint';

export const HomeHero = ({ theme, tone, id }) => {
  const { isNarrow, isMobile, isTabletDown } = useBreakpoint();
  const navigate = useNavigate();

  return (
    <div id={id} style={{ position: 'relative', background: theme.bg, overflow: 'hidden' }}>
      <HeroPattern theme={theme} kind={theme.heroPattern} />
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          height: '90%', width: 'auto',
          opacity: 0.25, pointerEvents: 'none', zIndex: 0,
        }}
      >
        <path d="M256 0C397.385 0.000131948 512 114.615 512 256C512 364.006 445.114 456.388 350.504 493.989H346.049L303.54 494.262C283.248 494.262 278.848 491.758 270.628 483.538L60.1465 274.344C51.9264 266.123 51.9263 252.795 60.1465 244.575L241.644 63.0771C249.864 54.8575 263.192 54.8574 271.412 63.0771L446.682 238.348C454.902 246.568 454.901 259.895 446.682 268.115L294.039 417.752C293.999 417.791 286.384 425.12 274.951 416.736C270.631 413.568 269.432 406.344 269.24 400.388V365.631H289.877C289.903 365.553 293.175 355.726 293.176 353.753C293.175 351.773 283.278 335.936 283.277 327.356C283.277 318.778 284.851 316.714 287.237 310.198C289.181 304.891 290.539 301.998 293.176 296.999C298.945 286.062 311.638 271.281 311.654 271.262V246.186H319.573V221.107H299.775V211.869C299.775 210.412 298.593 209.23 297.136 209.229V156.436C297.136 152.791 294.18 149.836 290.536 149.836C286.892 149.836 283.938 152.791 283.938 156.436V209.229C282.48 209.23 281.298 210.411 281.298 211.869V221.107H237.565V211.869C237.565 210.412 236.383 209.23 234.926 209.229V156.436C234.926 152.791 231.971 149.836 228.327 149.836C224.683 149.836 221.728 152.791 221.728 156.436V209.229C220.27 209.23 219.088 210.411 219.088 211.869V221.107H199.29V246.186H207.21V271.262C207.294 271.359 219.934 286.091 225.688 296.999C228.324 301.998 229.683 304.891 231.627 310.198C234.013 316.713 235.586 318.778 235.586 327.356C235.585 335.936 225.688 351.773 225.688 353.753C225.688 355.727 228.964 365.565 228.986 365.631H251.725V391.231C251.725 399.623 249.036 420.591 264.851 434.279C285.57 449.686 300.998 436.405 302.544 434.762C304.092 433.117 461.383 278.927 461.566 278.747C475.658 264.655 475.658 241.808 461.566 227.716L283.106 49.2559C269.015 35.1646 246.167 35.1644 232.075 49.2559L47.3887 233.942C33.2968 248.034 33.2971 270.883 47.3887 284.975L261.06 497.359C267.671 504.808 275.739 508.234 286.874 509.641C287.797 509.757 288.775 509.801 289.797 509.787C278.738 511.246 267.457 512 256 512C114.615 512 0.00013198 397.385 0 256C0 114.615 114.615 0 256 0ZM337.077 498.893C334.468 499.763 331.84 500.594 329.193 501.382C331.983 500.537 334.618 499.703 337.077 498.893Z" fill="#CCC5B3"/>
      </svg>
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
            <div>4 counties<br/><span style={{ opacity: 0.65 }}>Snohomish, King, Pierce, Thurston</span></div>
            {!isMobile && <div>Local crew<br/><span style={{ opacity: 0.65 }}>Our employees, no franchise</span></div>}
          </div>
        </div>
      </div>
    </div>
  );
};
