import { useNavigate } from 'react-router-dom';
import { Section } from '../ui/Section';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';
import { useBreakpoint } from '../../hooks/useBreakpoint';

const LaneCard = ({ theme, kind, eyebrow, title, lede, icon, go, isMobile }) => (
  <div style={{
    background: kind === 'Residential' ? theme.surface : theme.brand,
    color: kind === 'Residential' ? theme.ink : theme.brandInk,
    borderRadius: theme.radius, padding: isMobile ? 28 : 48,
    border: kind === 'Residential' ? `1px solid ${theme.line}` : 'none',
    minHeight: isMobile ? 260 : 360, position: 'relative', overflow: 'hidden',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
  }}>
    <div>
      <div style={{
        width: 56, height: 56, borderRadius: theme.radius,
        background: kind === 'Residential' ? theme.brand : theme.accent,
        color: kind === 'Residential' ? theme.brandInk : theme.accentInk,
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28,
      }}>
        <Icon name={icon} size={28} />
      </div>
      <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 12 }}>
        {eyebrow ?? kind}
      </div>
      <h2 style={{
        fontFamily: theme.displayFont, fontWeight: theme.displayWeight,
        fontSize: isMobile ? 'clamp(26px, 7vw, 36px)' : 'clamp(32px, 3.5vw, 46px)',
        lineHeight: 1, letterSpacing: '-0.03em', margin: 0, marginBottom: 16,
      }}>{title}</h2>
      <p style={{ fontFamily: theme.bodyFont, fontSize: 17, lineHeight: 1.5, opacity: 0.85, margin: 0, maxWidth: 420 }}>{lede}</p>
    </div>
    <div style={{ marginTop: 28 }}>
      <Button theme={theme}
        variant={kind === 'Residential' ? 'primary' : 'accent'}
        iconRight="arrow" onClick={go}>
        {kind === 'Residential' ? 'Explore residential' : 'Explore commercial'}
      </Button>
    </div>
  </div>
);

export const TwoLanes = ({ theme, id }) => {
  const { isMobile } = useBreakpoint();
  const navigate = useNavigate();
  return (
    <Section theme={theme} id={id}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: 16,
      }}>
        <LaneCard theme={theme} kind="Residential" eyebrow="For the home" title="Residential Electrical Services in Western Washington" lede="Panel swaps, EV chargers, smart home, and repairs — handled like it's our own house." icon="house" go={() => navigate('/residential')} isMobile={isMobile} />
        <LaneCard theme={theme} kind="Commercial" eyebrow="Commercial" title="Commercial Expertise Across Snohomish & King County" lede="Twenty-plus years of TIs, ground-up builds, and service upgrades across Western WA." icon="building" go={() => navigate('/commercial')} isMobile={isMobile} />
      </div>
    </Section>
  );
};
