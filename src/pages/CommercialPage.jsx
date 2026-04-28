import { useNavigate } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { PageMeta } from '../components/ui/PageMeta';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { BookForm } from '../components/forms/BookForm';
import { PageHero } from './shared';
import { COMMERCIAL_SERVICES, COMMERCIAL_CLIENTS, PHONE_TEL } from '../data/content';

export const CommercialPage = ({ theme, tone }) => {
  const navigate = useNavigate();
  return (
  <div>
    <PageMeta title="Commercial Electrical Services · Home Run Electric" description="Licensed commercial electrician in Western Washington. Tenant improvements, service upgrades, ground-up construction, and 24/7 emergency response." />
    <PageHero theme={theme} eyebrow="Commercial" title="Twenty-plus years keeping Western Washington's businesses running." lede={tone.commercialLede} />
    <Section theme={theme}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {COMMERCIAL_SERVICES.map((s, i) => (
          <div key={i} style={{
            background: theme.surface, border: `1px solid ${theme.line}`,
            borderRadius: theme.radius, padding: 28, minHeight: 200,
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.monoColor }}>
              {String(i + 1).padStart(2, '0')} / {String(COMMERCIAL_SERVICES.length).padStart(2, '0')}
            </div>
            <div style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 24, color: theme.ink, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              {s.t}
            </div>
            <p style={{ fontFamily: theme.bodyFont, fontSize: 14, color: theme.ink2, lineHeight: 1.5, margin: 0 }}>{s.d}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section theme={theme} eyebrow="Commercial clients" style={{ background: theme.surface }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 48, alignItems: 'start' }}>
        <h2 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1, margin: 0, letterSpacing: '-0.03em', color: theme.ink }}>
          We&apos;ve worked with.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, border: `1px solid ${theme.line}`, background: theme.line }}>
          {COMMERCIAL_CLIENTS.map((c, i) => (
            <div key={i} style={{
              background: theme.bg, padding: '28px 20px',
              fontFamily: theme.displayFont, fontSize: 14, fontWeight: 600, color: theme.ink2,
              letterSpacing: '0.08em', textAlign: 'center',
              display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 80,
            }}>{c}</div>
          ))}
        </div>
      </div>
    </Section>

    <Section theme={theme}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <Badge theme={theme} variant="brand">Bid request</Badge>
          <h2 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1, margin: '16px 0 20px', letterSpacing: '-0.03em', color: theme.ink }}>
            Have plans? We&apos;ll bid them.
          </h2>
          <p style={{ fontFamily: theme.bodyFont, fontSize: 17, lineHeight: 1.55, color: theme.ink2, margin: '0 0 28px', maxWidth: 480 }}>
            We do design-assist and design-build bids. Send us your plans or scope and we&apos;ll turn around a numbered estimate in 5–10 business days for most jobs.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button theme={theme} variant="primary" iconRight="arrow" onClick={() => navigate('/book')}>Request a bid</Button>
            <Button theme={theme} variant="ghost" icon="phone" onClick={() => window.location.href = `tel:${PHONE_TEL}`}>Talk to estimator</Button>
          </div>
        </div>
        <BookForm theme={theme} compact />
      </div>
    </Section>
  </div>
  );
};
