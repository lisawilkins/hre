import { useNavigate } from 'react-router-dom';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ServiceCard } from './ServiceCard';
import { SERVICES } from '../../data/content';
import { useBreakpoint } from '../../hooks/useBreakpoint';

export const ResidentialServices = ({ theme, id }) => {
  const { isMobile } = useBreakpoint();
  const navigate = useNavigate();

  return (
    <Section theme={theme} id={id} eyebrow="Residential services">
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? 24 : 48,
        alignItems: 'end', marginBottom: 48,
      }}>
        <h2 style={{
          fontFamily: theme.displayFont, fontWeight: theme.displayWeight,
          fontSize: 'clamp(36px, 4.5vw, 60px)', lineHeight: 1, margin: 0,
          color: theme.ink, letterSpacing: '-0.03em', textWrap: 'balance',
        }}>
          Simple or complex, we deliver.
        </h2>
        <div>
          <p style={{ fontFamily: theme.bodyFont, fontSize: 16, lineHeight: 1.6, color: theme.ink2, margin: 0, maxWidth: 440 }}>
            Every project, large or small, is done with quality and efficiency.
          </p>
          <div style={{ marginTop: 18 }}>
            <Button theme={theme} variant="outline" iconRight="arrow" onClick={() => navigate('/residential')}>See all residential services</Button>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 16 }}>
        {SERVICES.slice(0, 4).map(s => (
          <ServiceCard key={s.id} theme={theme} service={s} onClick={() => navigate('/book', { state: { service: s } })} />
        ))}
      </div>
    </Section>
  );
};
