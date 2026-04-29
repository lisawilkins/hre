import { Section } from '../ui/Section';
import { Icon } from '../ui/Icon';
import { useBreakpoint } from '../../hooks/useBreakpoint';

export const WhyUs = ({ theme }) => {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)';

  const items = [
    { i: 'shield', t: 'Licensed, bonded, insured', d: 'WA state electrical contractor lic. HOMERRE974K2. $2M general liability.' },
    { i: 'clock', t: '23+ years, Western WA', d: "We're not a franchise. Local crew, local owners, local area code since 2003." },
    { i: 'check', t: 'One-year workmanship warranty', d: 'If something we installed fails, we come back. No runaround.' },
    { i: 'bolt', t: 'Commercial-grade standards', d: 'The same crew that wires hospitals and schools is now on your porch light.' },
  ];
  return (
    <Section theme={theme} style={{ background: theme.surface }} eyebrow="Why Trust Home Run Electric">
      <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 16 }}>
        {items.map((it, i) => (
          <div key={i} style={{
            padding: 28, border: `1px solid ${theme.line}`, borderRadius: theme.radius,
            background: theme.bg, display: 'flex', flexDirection: 'column', gap: 16, minHeight: 220,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: theme.radius,
              background: theme.accent, color: theme.accentInk,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon name={it.i} size={22} />
            </div>
            <div style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 20, letterSpacing: '-0.02em', color: theme.ink }}>{it.t}</div>
            <p style={{ fontFamily: theme.bodyFont, fontSize: 14, color: theme.ink2, lineHeight: 1.5, margin: 0 }}>{it.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
