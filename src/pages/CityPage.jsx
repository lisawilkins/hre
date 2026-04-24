import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { LOCATIONS, SERVICES, PHONE_TEL } from '../data/content';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Icon } from '../components/ui/Icon';
import { Badge } from '../components/ui/Badge';
import { ServiceCard } from '../components/home/ServiceCard';
import { PageMeta } from '../components/ui/PageMeta';
import { PageHero } from './shared';

export const CityPage = ({ theme, tone }) => {
  const { citySlug } = useParams();
  const navigate = useNavigate();
  const location = LOCATIONS.find(l => l.slug === citySlug);

  if (!location) return <Navigate to="/service-areas" replace />;

  const { city, county, eta, jobs, emergency } = location;

  return (
    <div>
      <PageMeta
        title={`Electrical Services in ${city}, WA · Home Run Electric`}
        description={`Licensed electrician serving ${city}, WA. ~${eta} from our Lynnwood HQ. EV chargers, panel upgrades, generators, and more.${emergency ? ' 24/7 emergency service available.' : ''}`}
      />
      <PageHero
        theme={theme}
        eyebrow={county}
        title={`Electrical services in ${city}.`}
        lede={`Serving ${city} from our Lynnwood headquarters — about ${eta} away. ${jobs} jobs completed and counting.${emergency ? ' 24-hour emergency service available.' : ''}`}
      />

      {emergency && (
        <div style={{ background: theme.emergency, color: theme.emergencyInk, padding: '16px 48px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 12, fontFamily: theme.monoFont, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
            <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: theme.emergencyInk, animation: 'hrepulse 1.4s ease-in-out infinite' }} />
            24/7 emergency service available in {city} — call <a href={`tel:${PHONE_TEL}`} style={{ color: 'inherit' }}>(425) 489-0791</a>
          </div>
        </div>
      )}

      <Section theme={theme} eyebrow="Services available">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 32 }}>
          <h2 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1, margin: 0, letterSpacing: '-0.03em', color: theme.ink }}>
            What we do in {city}.
          </h2>
          <div style={{ display: 'flex', gap: 16, fontFamily: theme.monoFont, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: theme.muted }}>
            <span><Icon name="clock" size={12} style={{ display: 'inline', marginRight: 6 }} />~{eta} ETA</span>
            <span>{jobs} jobs completed</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {SERVICES.map(s => (
            <ServiceCard key={s.id} theme={theme} service={s} onClick={() => navigate('/book', { state: { service: s } })} />
          ))}
        </div>
      </Section>

      <Section theme={theme} style={{ background: theme.surface }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <Badge theme={theme} variant="brand">{county}</Badge>
            <h2 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1, margin: '16px 0 20px', letterSpacing: '-0.03em', color: theme.ink }}>
              Ready when you are in {city}.
            </h2>
            <p style={{ fontFamily: theme.bodyFont, fontSize: 17, lineHeight: 1.55, color: theme.ink2, margin: '0 0 28px', maxWidth: 480 }}>
              Short form, or a phone call. Either way you get a licensed electrician — usually within the hour during business hours. {emergency ? '24/7 emergency service available.' : ''}
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <Button theme={theme} variant="primary" iconRight="arrow" onClick={() => navigate('/book')}>{tone.bookCta}</Button>
              <Button theme={theme} variant="ghost" icon="phone" onClick={() => window.location.href = `tel:${PHONE_TEL}`}>(425) 489-0791</Button>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: 'clock', label: 'ETA from Lynnwood', value: `~${eta}` },
              { icon: 'shield', label: 'Jobs completed', value: `${jobs}+` },
              { icon: 'pin', label: 'County', value: county },
              emergency && { icon: 'phone', label: 'Emergency service', value: '24/7 available' },
            ].filter(Boolean).map((it, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '16px 20px', background: theme.bg, border: `1px solid ${theme.line}`, borderRadius: theme.radius }}>
                <div style={{ width: 36, height: 36, borderRadius: theme.radius, background: theme.brand, color: theme.brandInk, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={it.icon} size={18} />
                </div>
                <div>
                  <div style={{ fontFamily: theme.monoFont, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.muted }}>{it.label}</div>
                  <div style={{ fontFamily: theme.bodyFont, fontSize: 15, fontWeight: 600, color: theme.ink, marginTop: 2 }}>{it.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
