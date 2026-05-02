import { useNavigate } from 'react-router-dom';
import { HeroPattern } from '../components/ui/HeroPattern';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/content';
import { useBreakpoint } from '../hooks/useBreakpoint';

export const PageHero = ({ theme, eyebrow, title, lede, id }) => {
  const { isMobile, isTablet } = useBreakpoint();
  const padding = isMobile ? '48px 16px 40px' : isTablet ? '60px 24px 52px' : '72px 48px 64px';
  return (
    <div id={id} style={{ background: theme.bg, position: 'relative', overflow: 'hidden' }}>
      <HeroPattern theme={theme} kind={theme.heroPattern} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding, position: 'relative' }}>
        <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.monoColor, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg viewBox="0 0 204 72" width={34} height={12} fill="none" style={{ flexShrink: 0, color: '#c2b9a3' }}>
            <path d="M12 36H47" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M47 36L67 6L87 66L107 6L127 66L147 6L167 36" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M167 36H192" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 42C15.31 42 18 39.31 18 36C18 32.69 15.31 30 12 30C8.69 30 6 32.69 6 36C6 39.31 8.69 42 12 42Z" fill="currentColor"/>
            <path d="M192 42C195.31 42 198 39.31 198 36C198 32.69 195.31 30 192 30C188.69 30 186 32.69 186 36C186 39.31 188.69 42 192 42Z" fill="currentColor"/>
          </svg>
          {eyebrow}
        </div>
        <h1 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: isMobile ? 'clamp(36px, 9vw, 52px)' : 'clamp(44px, 6vw, 84px)', lineHeight: 0.98, margin: 0, letterSpacing: '-0.035em', color: theme.ink, textWrap: 'balance', maxWidth: 1000 }}>
          {title}
        </h1>
        <p style={{ fontFamily: theme.bodyFont, fontSize: isMobile ? 16 : 19, lineHeight: 1.5, color: theme.ink2, marginTop: 24, maxWidth: 640 }}>{lede}</p>
      </div>
    </div>
  );
};

export const CTABand = ({ theme, tone, id }) => {
  const navigate = useNavigate();
  const { isTabletDown } = useBreakpoint();
  return (
    <Section theme={theme} id={id} style={{ background: theme.brand, color: theme.brandInk, borderTop: 'none' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isTabletDown ? '1fr' : '1.4fr 1fr', gap: isTabletDown ? 32 : 48, alignItems: 'center' }}>
        <div>
          <h2 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1, margin: 0, letterSpacing: '-0.035em' }}>
            Ready when you are.
          </h2>
          <p style={{ fontFamily: theme.bodyFont, fontSize: 17, lineHeight: 1.55, opacity: 0.8, marginTop: 20, maxWidth: 480 }}>
            Short form, or a phone call. Either way, our team gets back to you right away during business hours.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Button theme={theme} variant="accent" size="lg" iconRight="arrow" onClick={() => navigate('/book')} full>{tone.bookCta}</Button>
          <Button theme={theme} variant="outline" size="lg" icon="phone" onClick={() => window.location.href = `tel:${PHONE_TEL}`} full style={{ color: theme.brandInk, borderColor: theme.brandInk }}>{PHONE_DISPLAY}</Button>
        </div>
      </div>
    </Section>
  );
};
