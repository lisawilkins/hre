import { Section } from '../ui/Section';
import { PHONE_DISPLAY, PHONE_TEL } from '../../data/content';

export const EmergencyBand = ({ theme, tone }) => (
  <Section theme={theme} style={{ background: theme.emergency, color: theme.emergencyInk, borderTop: 'none' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center' }}>
      <div>
        <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: theme.emergencyInk, animation: 'hrepulse 1.4s ease-in-out infinite' }} />
          Emergency electrical services
        </div>
        <h2 style={{
          fontFamily: theme.displayFont, fontWeight: theme.displayWeight,
          fontSize: 'clamp(40px, 5.5vw, 76px)', lineHeight: 0.95, margin: 0, letterSpacing: '-0.035em',
        }}>
          When it can&apos;t wait, we answer.
        </h2>
        <p style={{ fontFamily: theme.bodyFont, fontSize: 17, lineHeight: 1.55, opacity: 0.92, marginTop: 22, maxWidth: 560 }}>
          {tone.emergencyLede} Common emergencies: panel smoking or buzzing, breakers that won&apos;t reset, burning-plastic smell, sparks at outlets, power loss in rain or windstorms. After-hours emergency service is currently available in King County only.
        </p>
      </div>
      <a href={`tel:${PHONE_TEL}`} style={{
        display: 'block', background: theme.emergencyInk, color: theme.emergency, textDecoration: 'none',
        padding: 36, borderRadius: theme.radius,
      }}>
        <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 10 }}>Dispatch line</div>
        <div style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 50, letterSpacing: '-0.03em', lineHeight: 1 }}>{PHONE_DISPLAY}</div>
        <div style={{ marginTop: 18, fontFamily: theme.bodyFont, fontSize: 14, display: 'flex', justifyContent: 'space-between', opacity: 0.8 }}>
          <span>Tap to call</span>
          <span>A real electrician →</span>
        </div>
      </a>
    </div>
  </Section>
);
