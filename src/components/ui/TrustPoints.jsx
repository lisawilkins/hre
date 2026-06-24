import { Section } from './Section';
import { Icon } from './Icon';
import { useBreakpoint } from '../../hooks/useBreakpoint';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const ITEMS = [
  {
    icon: 'shield',
    title: 'Licensed, Bonded, Insured',
    body: 'Every project is protected, serviced, and managed by experts. WA state electrical contractor licence HOMERRE974K2.',
  },
  {
    icon: 'clock',
    title: '40+ Yrs Experience',
    body: 'With over 40 years experience as an electrician, Michael and Jessica Smith have built a local business, for local communities, staffed by a local crew, that has served Western WA for the past 23+ years.',
  },
  {
    icon: 'star',
    title: 'A+ Rated',
    body: "Home Run Electric has been A+ rated by the Better Business Bureau. We've had thousands of satisfied customers whose referrals continue to grow our customer list.",
  },
  {
    icon: 'life-preserver',
    title: 'Life Safety & Fire Alarm Certified',
    body: 'Every project we touch meets the standard — yours included.',
  },
  {
    icon: 'check',
    title: 'Workmanship Warranty',
    body: 'If something we installed fails, we come back. No runaround. Every project is warrantied for 1 year.',
  },
];

export const TrustPoints = ({ theme, id, eyebrow = 'Why Trust Home Run Electric', style }) => {
  const { isMobile, isTablet } = useBreakpoint();
  const numCols = isMobile ? 2 : isTablet ? 3 : 5;
  const n = ITEMS.length;
  const inLastRow = n % numCols || numCols;
  const internalCols = (numCols * inLastRow) / gcd(numCols, inLastRow);
  const normalSpan = internalCols / numCols;
  const lastSpan = internalCols / inLastRow;

  return (
    <Section theme={theme} id={id} eyebrow={eyebrow} style={{ background: theme.surface, ...style }}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${internalCols}, 1fr)`, gap: 16 }}>
        {ITEMS.map((item, i) => {
          const isInLastRow = inLastRow < numCols && i >= n - inLastRow;
          return (
          <div key={i} style={{
            gridColumn: `span ${isInLastRow ? lastSpan : normalSpan}`,
            padding: isMobile ? 20 : 28,
            border: `1px solid ${theme.line}`,
            borderRadius: theme.radius,
            background: theme.bg,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: theme.radius,
              background: theme.accent, color: theme.accentInk,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon name={item.icon} size={22} />
            </div>
            <h3 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 18, letterSpacing: '-0.02em', color: theme.ink, margin: 0, lineHeight: 1.2 }}>{item.title}</h3>
            <p style={{ fontFamily: theme.bodyFont, fontSize: 13, color: theme.ink2, lineHeight: 1.5, margin: 0 }}>{item.body}</p>
          </div>
          );
        })}
      </div>
    </Section>
  );
};
