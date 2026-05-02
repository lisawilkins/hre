import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { LOCATIONS, SERVICES, PHONE_TEL, PHONE_DISPLAY } from '../data/content';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ServiceCard } from '../components/home/ServiceCard';
import { PageMeta } from '../components/ui/PageMeta';
import { HeroPattern } from '../components/ui/HeroPattern';
import { useBreakpoint } from '../hooks/useBreakpoint';

export const CityPage = ({ theme }) => {
  const { citySlug } = useParams();
  const navigate = useNavigate();
  const { isMobile, isTablet } = useBreakpoint();
  const location = LOCATIONS.find(l => l.slug === citySlug);

  if (!location) return <Navigate to="/service-areas" replace />;

  const { city, county, jobs, emergency, blurb } = location;
  const heroPadding = isMobile ? '48px 16px 40px' : isTablet ? '60px 24px 52px' : '72px 48px 64px';

  return (
    <div>
      <PageMeta
        title={`Electrical Services in ${city}, WA · Home Run Electric`}
        description={`Licensed electrician serving ${city}, WA. EV chargers, panel upgrades, generators, and more.${emergency ? ' After hours emergency service available.' : ''}`}
      />

      <div id="hero" style={{ background: theme.bg, position: 'relative', overflow: 'hidden' }}>
        <HeroPattern theme={theme} kind={theme.heroPattern} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: heroPadding, position: 'relative' }}>
          <Badge theme={theme} variant="soft">{county}</Badge>
          <h1 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: isMobile ? 'clamp(36px, 9vw, 52px)' : 'clamp(44px, 6vw, 84px)', lineHeight: 0.98, margin: '20px 0 0', letterSpacing: '-0.035em', color: theme.ink, textWrap: 'balance', maxWidth: 1000 }}>
            Electrical services in {city}.
          </h1>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <Button theme={theme} variant="primary" iconRight="arrow" onClick={() => navigate('/book')}>Request Estimate</Button>
            <Button theme={theme} variant="ghost" icon="phone" onClick={() => window.location.href = `tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</Button>
          </div>
          {blurb && (
            <p style={{ fontFamily: theme.bodyFont, fontSize: isMobile ? 16 : 19, lineHeight: 1.5, color: theme.ink2, marginTop: 28, maxWidth: 640 }}>{blurb}</p>
          )}
        </div>
      </div>

      {emergency && (
        <div id="emergency" style={{ background: theme.emergency, color: theme.emergencyInk, padding: '16px 48px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 12, fontFamily: theme.monoFont, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
            <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: theme.emergencyInk, animation: 'hrepulse 1.4s ease-in-out infinite' }} />
            Emergency service available in {city}, Mon–Sat, 7a–6p — call <a href={`tel:${PHONE_TEL}`} style={{ color: 'inherit' }}>(425) 489-0791</a>
          </div>
        </div>
      )}

      <Section theme={theme} id="services" eyebrow="Services available">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 32 }}>
          <h2 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1, margin: 0, letterSpacing: '-0.03em', color: theme.ink }}>
            What we do in {city}.
          </h2>
          <div style={{ fontFamily: theme.monoFont, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: theme.monoColor }}>
            +{jobs} jobs completed
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: 16 }}>
          {SERVICES.map(s => (
            <ServiceCard key={s.id} theme={theme} service={s} onClick={() => navigate('/book', { state: { service: s } })} />
          ))}
        </div>
      </Section>
    </div>
  );
};
