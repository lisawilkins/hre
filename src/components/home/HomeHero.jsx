import { useNavigate } from 'react-router-dom';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';
import { HeroPattern } from '../ui/HeroPattern';
import { Logo } from '../ui/Logo';
import { STATS, PHONE_DISPLAY, PHONE_TEL } from '../../data/content';
import { useBreakpoint } from '../../hooks/useBreakpoint';

export const HomeHero = ({ theme, tone, id }) => {
  const { isNarrow, isMobile, isTabletDown } = useBreakpoint();
  const navigate = useNavigate();

  return (
    <div id={id} style={{ position: 'relative', background: theme.bg, overflow: 'hidden' }}>
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
          <div style={{ marginBottom: 24 }}>
            <Logo theme={theme} size={isMobile ? 45 : isTabletDown ? 55 : 65} />
          </div>
          <h1 style={{
            fontFamily: theme.displayFont, fontWeight: theme.displayWeight,
            fontSize: isMobile ? 'clamp(32px, 9vw, 48px)' : isTabletDown ? 'clamp(40px, 6vw, 54px)' : 'clamp(44px, 5vw, 60px)',
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
          <svg width="100%" height="20" style={{ marginTop: 48, display: 'block' }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hre-bg-icons" x="0" y="0" width="610" height="20" patternUnits="userSpaceOnUse">
                <rect y="8.78589" width="60.5923" height="2.42369" fill={theme.surfaceAlt}/>
                <circle cx="63.6218" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
                <rect x="71.4989" y="0.908936" width="2.42369" height="18.1777" rx="1.21185" fill={theme.surfaceAlt}/>
                <rect x="78.77" y="3.33264" width="2.42369" height="13.3303" rx="1.21185" fill={theme.surfaceAlt}/>
                <rect x="86.041" y="0.908936" width="2.42369" height="18.1777" rx="1.21185" fill={theme.surfaceAlt}/>
                <rect x="93.3121" y="3.33264" width="2.42369" height="13.3303" rx="1.21185" fill={theme.surfaceAlt}/>
                <rect x="100.583" y="0.908936" width="2.42369" height="18.1777" rx="1.21185" fill={theme.surfaceAlt}/>
                <circle cx="110.884" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
                <rect x="113.913" y="8.78589" width="60.5923" height="2.42369" fill={theme.surfaceAlt}/>
                <circle cx="177.535" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
                <path d="M212.073 13.6332V16.0569H188.442V13.6332H212.073ZM212.679 13.0273V6.96809C212.679 6.63345 212.408 6.36217 212.073 6.36217H188.442C188.107 6.36217 187.836 6.63345 187.836 6.96809V13.0273C187.836 13.362 188.107 13.6332 188.442 13.6332V16.0569C186.769 16.0569 185.412 14.7005 185.412 13.0273V6.96809C185.412 5.34717 186.685 4.02347 188.286 3.94232L188.442 3.93848H212.073L212.229 3.94232C213.83 4.02347 215.103 5.34717 215.103 6.96809V13.0273L215.099 13.1832C215.018 14.784 213.694 16.0569 212.073 16.0569V13.6332C212.408 13.6332 212.679 13.362 212.679 13.0273Z" fill={theme.surfaceAlt}/>
                <circle cx="222.98" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
                <rect x="226.009" y="8.78589" width="60.5923" height="2.42369" fill={theme.surfaceAlt}/>
                <circle cx="289.631" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
                <path d="M331.697 1.12764C332.083 -0.0457582 333.621 -0.276047 334.343 0.686513L334.41 0.78326L339.844 9.24783H346.264V11.6715H339.347C338.831 11.6715 338.351 11.4091 338.072 10.9751L333.402 3.69867L328.406 18.868C327.949 20.256 325.986 20.256 325.529 18.868L320.889 4.77679L316.248 18.868C315.791 20.256 313.828 20.256 313.371 18.868L308.384 3.72471L303.821 10.9644C303.544 11.4046 303.06 11.6715 302.54 11.6715H292.055V9.24783H302.039L307.362 0.800419L307.429 0.70249C308.124 -0.238442 309.595 -0.0577584 310.041 1.0232L310.082 1.13445L314.809 15.4881L319.45 1.39717C319.907 0.00931925 321.87 0.00932459 322.327 1.39717L326.968 15.4881L331.697 1.12764Z" fill={theme.surfaceAlt}/>
                <circle cx="348.688" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
                <rect x="351.718" y="8.78589" width="60.5923" height="2.42369" fill={theme.surfaceAlt}/>
                <circle cx="415.34" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
                <rect x="423.217" y="5.75635" width="2.42369" height="8.48292" rx="1.21185" fill={theme.surfaceAlt}/>
                <rect x="430.488" y="3.33264" width="2.42369" height="13.3303" rx="1.21185" fill={theme.surfaceAlt}/>
                <rect x="437.759" y="0.908936" width="2.42369" height="18.1777" rx="1.21185" fill={theme.surfaceAlt}/>
                <circle cx="448.059" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
                <rect x="451.089" y="8.78589" width="60.5923" height="2.42369" fill={theme.surfaceAlt}/>
                <circle cx="514.711" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
                <rect x="522.588" y="0.908936" width="2.42369" height="18.1777" rx="1.21185" fill={theme.surfaceAlt}/>
                <path d="M529.859 1.63323C529.859 0.858767 530.562 0.267533 531.296 0.512714C535.265 1.8374 538.127 5.58322 538.127 9.99774C538.127 14.4122 535.266 18.158 531.297 19.4827C530.562 19.7279 529.859 19.1366 529.859 18.3621C529.859 17.7826 530.263 17.2896 530.805 17.0848C533.667 16.0036 535.703 13.2386 535.703 9.99774C535.703 6.75679 533.667 3.99153 530.805 2.91031C530.263 2.70556 529.859 2.21267 529.859 1.63323Z" fill={theme.surfaceAlt}/>
                <circle cx="546.004" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
                <rect x="549.033" y="8.78589" width="60.5923" height="2.42369" fill={theme.surfaceAlt}/>
              </pattern>
            </defs>
            <rect width="100%" height="20" fill="url(#hre-bg-icons)" />
          </svg>
          <div style={{
            marginTop: 0, display: 'grid',
            gridTemplateColumns: isNarrow ? 'repeat(2, 46%)' : `repeat(${4}, auto)`,
            gap: isNarrow ? '20px 0' : isMobile ? 24 : 36,
            paddingTop: 32,
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: isMobile ? 26 : 32, color: theme.ink, letterSpacing: '-0.02em', lineHeight: 1 }}>{s.n}</div>
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
            Our company and crew are local to Western Washington, so we treat every job like it's on our own block.
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
            <div>6+ counties<br/><span style={{ opacity: 0.65 }}>Including King, Snohomish, Pierce, Thurston</span></div>
            {!isMobile && <div>Local crew<br/><span style={{ opacity: 0.65 }}>Our employees, no franchise</span></div>}
          </div>
        </div>
      </div>
    </div>
  );
};
