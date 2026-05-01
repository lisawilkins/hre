import { useNavigate } from 'react-router-dom';
import { HeroPattern } from '../components/ui/HeroPattern';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/content';
import { useBreakpoint } from '../hooks/useBreakpoint';

export const PageHero = ({ theme, eyebrow, title, lede }) => {
  const { isMobile, isTablet } = useBreakpoint();
  const padding = isMobile ? '48px 16px 40px' : isTablet ? '60px 24px 52px' : '72px 48px 64px';
  return (
    <div style={{ background: theme.bg, position: 'relative', overflow: 'hidden' }}>
      <HeroPattern theme={theme} kind={theme.heroPattern} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding, position: 'relative' }}>
        <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.monoColor, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 24, height: 1, background: theme.monoColor }} /> {eyebrow}
        </div>
        <h1 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: isMobile ? 'clamp(36px, 9vw, 52px)' : 'clamp(44px, 6vw, 84px)', lineHeight: 0.98, margin: 0, letterSpacing: '-0.035em', color: theme.ink, textWrap: 'balance', maxWidth: 1000 }}>
          {title}
        </h1>
        <p style={{ fontFamily: theme.bodyFont, fontSize: isMobile ? 16 : 19, lineHeight: 1.5, color: theme.ink2, marginTop: 24, maxWidth: 640 }}>{lede}</p>
      </div>
    </div>
  );
};

export const CTABand = ({ theme, tone }) => {
  const navigate = useNavigate();
  const { isTabletDown } = useBreakpoint();
  return (
    <Section theme={theme} style={{ background: theme.brand, color: theme.brandInk, borderTop: 'none' }}>
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
