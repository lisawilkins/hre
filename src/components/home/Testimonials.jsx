import { Section } from '../ui/Section';
import { Icon } from '../ui/Icon';
import { StarRow } from '../ui/StarRow';
import { TESTIMONIALS } from '../../data/content';
import { useBreakpoint } from '../../hooks/useBreakpoint';

export const Testimonials = ({ theme }) => {
  const { isMobile, isTablet } = useBreakpoint();
  const cardCols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';

  return (
    <Section theme={theme} eyebrow="Testimonials">
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr',
        gap: isMobile ? 24 : 48,
        marginBottom: 40,
      }}>
        <h2 style={{
          fontFamily: theme.displayFont, fontWeight: theme.displayWeight,
          fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1, margin: 0,
          color: theme.ink, letterSpacing: '-0.03em', textWrap: 'balance',
        }}>
          Word of mouth,<br/>across Western WA.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'flex-end' }}>
          <StarRow theme={theme} size={20} />
          <p style={{ fontFamily: theme.bodyFont, fontSize: 16, color: theme.ink2, margin: 0, maxWidth: 500 }}>
            We ask every customer for feedback. Here&apos;s what they&apos;ve said lately.
          </p>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: cardCols, gap: 16 }}>
        {TESTIMONIALS.map((t, i) => (
          <div key={i} style={{
            background: theme.surface, border: `1px solid ${theme.line}`,
            borderRadius: theme.radius, padding: 28,
            display: 'flex', flexDirection: 'column', gap: 20,
          }}>
            <StarRow theme={theme} size={14} />
            <p style={{ fontFamily: theme.displayFont, fontWeight: 500, fontSize: 19, lineHeight: 1.35, color: theme.ink, margin: 0, letterSpacing: '-0.015em', flex: 1 }}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <div style={{
              paddingTop: 16, borderTop: `1px solid ${theme.line}`,
              display: 'flex', justifyContent: 'space-between', fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: theme.monoColor,
            }}>
              <span style={{ color: theme.ink, fontWeight: 600 }}>{t.name}</span>
              <span><Icon name="pin" size={11}/> {t.where}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
