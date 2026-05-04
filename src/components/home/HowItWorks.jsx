import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { BookForm } from '../forms/BookForm';
import { useBreakpoint } from '../../hooks/useBreakpoint';

export const HowItWorks = ({ theme, id }) => {
  const { isTabletDown } = useBreakpoint();

  const steps = [
    { n: '01', t: 'Call or request', d: "Tell us what's going on. Short form or a phone call — whichever you like. Our skilled staff will call right back during business hours. Upfront pricing available on standard jobs." },
    //{ n: '02', t: 'Real callback', d: 'A licensed electrician calls within the hour during business hours. Upfront pricing.' },
    { n: '02', t: 'On-site', d: 'We show up in the arrival window. Fully licensed, bonded, insured, and background-checked.' },
    { n: '03', t: 'Wired right', d: 'Permitted when required, tested before we leave, and warrantied for a full year.' },
  ];
  return (
    <Section theme={theme} id={id} eyebrow={isTabletDown ? undefined : 'How it works'} style={{ background: theme.surface }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isTabletDown ? '1fr' : '1.1fr 1fr',
        gap: isTabletDown ? 40 : 64,
        alignItems: 'center',
        minWidth: 0,
        maxWidth: isTabletDown ? 650 : undefined,
        margin: isTabletDown ? '0 auto' : undefined,
        width: '100%',
      }}>
        <div style={{ minWidth: 0 }}>
          {isTabletDown && (
            <div style={{
              fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: theme.monoColor, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <svg viewBox="0 0 204 72" width={34} height={12} fill="none" style={{ flexShrink: 0, color: '#c2b9a3' }}>
                <path d="M12 36H47" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M47 36L67 6L87 66L107 6L127 66L147 6L167 36" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M167 36H192" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 42C15.31 42 18 39.31 18 36C18 32.69 15.31 30 12 30C8.69 30 6 32.69 6 36C6 39.31 8.69 42 12 42Z" fill="currentColor"/>
                <path d="M192 42C195.31 42 198 39.31 198 36C198 32.69 195.31 30 192 30C188.69 30 186 32.69 186 36C186 39.31 188.69 42 192 42Z" fill="currentColor"/>
              </svg>
              How it works
            </div>
          )}
          <h2 style={{
            fontFamily: theme.displayFont, fontWeight: theme.displayWeight,
            fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1, margin: 0,
            color: theme.ink, letterSpacing: '-0.03em', textWrap: 'balance', marginBottom: 28,
          }}>
            Three steps.<br/>One clean job.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, minWidth: 0 }}>
            {steps.map((s, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 28,
                padding: '22px 0', borderTop: i === 0 ? 'none' : `1px solid ${theme.line}`,
                alignItems: 'baseline', minWidth: 0,
              }}>
                <div style={{ fontFamily: theme.monoFont, fontSize: 14, color: theme.accent === '#FFC629' || theme.accent === '#EEFF41' ? theme.ink : theme.accent, fontWeight: 700, letterSpacing: '0.04em' }}>
                  {s.n}
                </div>
                <div style={{ minWidth: 0 }}>
                  <h3 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 22, letterSpacing: '-0.02em', color: theme.ink, margin: '0 0 6px' }}>{s.t}</h3>
                  <p style={{ fontFamily: theme.bodyFont, fontSize: 15, lineHeight: 1.5, color: theme.ink2, margin: 0 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ minWidth: 0 }}>
          <BookForm theme={theme} />
        </div>
      </div>
    </Section>
  );
};
