import { useNavigate } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { PageMeta } from '../components/ui/PageMeta';
import { Badge } from '../components/ui/Badge';
import { Placeholder } from '../components/ui/Placeholder';
import { ServiceCard } from '../components/home/ServiceCard';
import { Testimonials } from '../components/home/Testimonials';
import { PageHero, CTABand } from './shared';
import { SERVICES } from '../data/content';

const ProjectGallery = ({ theme }) => {
  const projects = [
    { t: '200A panel upgrade', where: 'Edmonds · 1951 Craftsman', tint: '#7FA0B8' },
    { t: 'Tesla Wall Connector', where: 'Mill Creek · detached garage', tint: '#C38B6E' },
    { t: 'Generac 22kW standby', where: 'Lynnwood · whole-home', tint: '#A7BFA0' },
    { t: 'Kitchen remodel rewire', where: 'Bothell · 1980s split', tint: '#D6B468' },
  ];
  return (
    <Section theme={theme} eyebrow="Recent projects" style={{ background: theme.surface }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 32 }}>
        <h2 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1, margin: 0, letterSpacing: '-0.03em', color: theme.ink }}>
          Some jobs from this month.
        </h2>
        <Badge theme={theme} variant="soft">Photos — user to replace</Badge>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {projects.map((p, i) => (
          <div key={i}>
            <Placeholder theme={theme} label={p.t} aspect="4/5" tint={p.tint} />
            <div style={{ marginTop: 12 }}>
              <div style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 17, color: theme.ink, letterSpacing: '-0.015em' }}>{p.t}</div>
              <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.monoColor, marginTop: 4 }}>{p.where}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ProcessBand = ({ theme }) => {
  const items = [
    { n: '$185', l: 'Flat diagnostic fee', d: 'Waived if you hire us for the fix.' },
    { n: '1yr', l: 'Workmanship warranty', d: 'On everything we install.' },
    { n: '100%', l: 'Permitted when required', d: 'We pull permits and handle inspection.' },
    { n: '2hr', l: 'Arrival window', d: 'Not "sometime today." A real window.' },
  ];
  return (
    <Section theme={theme} eyebrow="What you can count on">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: `1px solid ${theme.line}`, borderRadius: theme.radius, overflow: 'hidden' }}>
        {items.map((it, i) => (
          <div key={i} style={{
            padding: 32, borderRight: i < items.length - 1 ? `1px solid ${theme.line}` : 'none',
            background: theme.surface,
          }}>
            <div style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 54, color: theme.ink, letterSpacing: '-0.03em', lineHeight: 1 }}>{it.n}</div>
            <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.monoColor, margin: '16px 0 8px' }}>{it.l}</div>
            <div style={{ fontFamily: theme.bodyFont, fontSize: 14, color: theme.ink2, lineHeight: 1.4 }}>{it.d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export const ResidentialPage = ({ theme, tone }) => {
  const navigate = useNavigate();
  return (
    <div>
      <PageMeta title="Residential Electrical Services · Home Run Electric" description="Licensed residential electrician in Western Washington. Panel upgrades, EV chargers, generators, smart home wiring, and more." />
      <PageHero theme={theme} eyebrow="Residential" title="Your home, wired to commercial standards." lede={tone.residentialLede} />
      <Section theme={theme}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {SERVICES.map(s => <ServiceCard key={s.id} theme={theme} service={s} onClick={() => navigate('/book', { state: { service: s } })} />)}
        </div>
      </Section>
      <ProjectGallery theme={theme} />
      <ProcessBand theme={theme} />
      <Testimonials theme={theme} />
      <CTABand theme={theme} tone={tone} />
    </div>
  );
};
