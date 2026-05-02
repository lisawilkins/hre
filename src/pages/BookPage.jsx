import { useLocation } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { PageMeta } from '../components/ui/PageMeta';
import { Icon, SERVICE_ICONS } from '../components/ui/Icon';
import { Badge } from '../components/ui/Badge';
import { BookForm } from '../components/forms/BookForm';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/content';
import { useBreakpoint } from '../hooks/useBreakpoint';

export const BookPage = ({ theme, tone }) => {
  const { state } = useLocation();
  const selectedService = state?.service ?? null;
  const { isTabletDown } = useBreakpoint();

  return (
    <div>
      <PageMeta title="Request Service · Home Run Electric" description="Request service from Home Run Electric in Western Washington. Short form — our team gets back to you right away during business hours." />
      <Section theme={theme} id="book" style={{ borderTop: 'none' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isTabletDown ? '1fr' : '1fr 1fr', gap: isTabletDown ? 40 : 64 }}>
          <div>
            <Badge theme={theme} variant="soft">Request Service</Badge>
            <h1 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1, margin: '18px 0 20px', letterSpacing: '-0.035em', color: theme.ink, textWrap: 'balance' }}>
              Tell us what&apos;s going on. Our team gets back to you.
            </h1>
            <p style={{ fontFamily: theme.bodyFont, fontSize: 17, lineHeight: 1.55, color: theme.ink2, margin: 0, maxWidth: 440 }}>
              Short form — about a minute. During business hours we&apos;ll get back to you right away. For emergencies, call us directly at{' '}
              <a href={`tel:${PHONE_TEL}`} style={{ color: theme.ink, fontWeight: 600 }}>{PHONE_DISPLAY}</a>.
            </p>
            {selectedService && (
              <div style={{ marginTop: 32, padding: 20, border: `1px solid ${theme.line}`, borderRadius: theme.radius, background: theme.surface, display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: theme.radius, background: theme.brand, color: theme.brandInk, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={SERVICE_ICONS[selectedService.id]} size={22} />
                </div>
                <div>
                  <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.monoColor, marginBottom: 4 }}>Service selected</div>
                  <div style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 18, color: theme.ink, letterSpacing: '-0.015em' }}>{selectedService.title}</div>
                </div>
              </div>
            )}
            <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
              {[
                { i: 'phone', t: 'Or call us', d: PHONE_DISPLAY },
                { i: 'clock', t: 'Hours', d: 'Mon–Sat · 7a–6p' },
                { i: 'shield', t: 'Licensed', d: 'WA Lic. HOMERRE974K2' },
                { i: 'pin', t: 'HQ', d: 'Lynnwood, WA' },
              ].map((it, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 32, height: 32, borderRadius: theme.radius, background: theme.surface, border: `1px solid ${theme.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.ink, flexShrink: 0 }}>
                    <Icon name={it.i} size={16}/>
                  </div>
                  <div>
                    <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.monoColor }}>{it.t}</div>
                    <div style={{ fontFamily: theme.bodyFont, fontSize: 14, color: theme.ink, fontWeight: 600, marginTop: 2 }}>{it.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <BookForm theme={theme} />
        </div>
      </Section>
    </div>
  );
};
