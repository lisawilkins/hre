import { useNavigate } from 'react-router-dom';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { BookForm } from '../forms/BookForm';
import { useBreakpoint } from '../../hooks/useBreakpoint';

export const HowItWorks = ({ theme }) => {
  const { isTabletDown } = useBreakpoint();
  const navigate = useNavigate();

  const steps = [
    { n: '01', t: 'Call or request', d: "Tell us what's going on. Short form or a phone call — whichever you like." },
    { n: '02', t: 'Real callback', d: 'A licensed electrician calls within the hour during business hours. Upfront pricing.' },
    { n: '03', t: 'On-site', d: 'We show up in the arrival window. Fully licensed, bonded, insured, and background-checked.' },
    { n: '04', t: 'Wired right', d: 'Permitted when required, tested before we leave, and warrantied for a full year.' },
  ];
  return (
    <Section theme={theme} eyebrow="How it works" style={{ background: theme.surface }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isTabletDown ? '1fr' : '1.1fr 1fr',
        gap: isTabletDown ? 40 : 64,
        alignItems: 'center',
      }}>
        <div>
          <h2 style={{
            fontFamily: theme.displayFont, fontWeight: theme.displayWeight,
            fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1, margin: 0,
            color: theme.ink, letterSpacing: '-0.03em', textWrap: 'balance', marginBottom: 28,
          }}>
            Four steps.<br/>One clean job.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((s, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 28,
                padding: '22px 0', borderTop: i === 0 ? 'none' : `1px solid ${theme.line}`,
              }}>
                <div style={{ fontFamily: theme.monoFont, fontSize: 14, color: theme.accent === '#FFC629' || theme.accent === '#EEFF41' ? theme.ink : theme.accent, fontWeight: 700, letterSpacing: '0.04em' }}>
                  {s.n}
                </div>
                <div>
                  <div style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 22, letterSpacing: '-0.02em', color: theme.ink, marginBottom: 6 }}>{s.t}</div>
                  <p style={{ fontFamily: theme.bodyFont, fontSize: 15, lineHeight: 1.5, color: theme.ink2, margin: 0 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Button theme={theme} variant="primary" iconRight="arrow" onClick={() => navigate('/book')}>Request a callback</Button>
          </div>
        </div>
        <div>
          <BookForm theme={theme} />
        </div>
      </div>
    </Section>
  );
};
