import { useNavigate } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { PageMeta } from '../components/ui/PageMeta';
import imgPanel from '../assets/res-panel.jpg';
import imgEV from '../assets/res-ev-charger.jpg';
import imgGenerator from '../assets/res-generator.jpg';
import imgLighting from '../assets/res-lighting.jpg';
import { ServiceCard } from '../components/home/ServiceCard';
import { Testimonials } from '../components/home/Testimonials';
import { FAQ } from '../components/home/FAQ';
import { PageHero, CTABand } from './shared';
import { SERVICES, FAQ_ITEMS } from '../data/content';
import { JsonLd } from '../components/seo/JsonLd';
import { breadcrumbSchema, faqSchema } from '../data/schemas';
import { useBreakpoint } from '../hooks/useBreakpoint';

const ProjectGallery = ({ theme, id }) => {
  const { isMobile, isTablet } = useBreakpoint();
  const projects = [
    { t: 'An open electrical panel revealing a 200A residential panel', where: 'Edmonds · 1951 Craftsman', img: imgPanel },
    { t: 'An EV charger installed on a residential detached garage', where: 'Mill Creek · detached garage', img: imgEV },
    { t: 'A backup generator installed in a residential home', where: 'Lynnwood · whole-home', img: imgGenerator },
    { t: 'A kitchen beautifully well lit with warm light', where: 'Bothell · 1980s split', img: imgLighting },
  ];
  return (
    <Section theme={theme} id={id} eyebrow="Recent projects" style={{ background: theme.surface }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', flexDirection: isMobile ? 'column' : 'row', gap: 12, marginBottom: 32 }}>
        <h2 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1, margin: 0, letterSpacing: '-0.03em', color: theme.ink }}>
          Projects from around the Sound.
        </h2>
        {/* <Badge theme={theme} variant="soft">Photos — user to replace</Badge> */}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)', gap: 16 }}>
        {projects.map((p, i) => (
          <div key={i}>
            <img src={p.img} alt={p.t} style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: theme.radius, display: 'block' }} />
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

const ProcessBand = ({ theme, id }) => {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? 1 : isTablet ? 2 : 4;
  const items = [
    { n: '$185', l: 'Flat diagnostic fee', d: 'Waived if you hire us for the fix.' },
    { n: '1yr', l: 'Workmanship warranty', d: 'On everything we install.' },
    { n: '100%', l: 'Permitted when required', d: 'We pull permits and handle inspection.' },
    { n: '2hr', l: 'Arrival window', d: 'Not "sometime today." A real window.' },
  ];
  return (
    <Section theme={theme} id={id} eyebrow="What you can count on">
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 0, border: `1px solid ${theme.line}`, borderRadius: theme.radius, overflow: 'hidden' }}>
        {items.map((it, i) => (
          <div key={i} style={{
            padding: 32,
            borderRight: (i + 1) % cols !== 0 ? `1px solid ${theme.line}` : 'none',
            borderBottom: i < items.length - cols ? `1px solid ${theme.line}` : 'none',
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
  const { isTabletDown } = useBreakpoint();
  const desktopCols = 4;
  const lastRowCount = SERVICES.length % desktopCols || desktopCols;
  const lastRowSpan = Math.min(2, Math.floor(desktopCols / lastRowCount));
  const lastRowStart = SERVICES.length - lastRowCount;
  return (
    <div>
      <PageMeta title="Residential Electrician — Western Washington | Home Run Electric" description="Residential electrician serving Snohomish, King, Pierce & Thurston County. Panel upgrades, EV charger installs, whole-home generators — licensed, bonded, warrantied." />
      <JsonLd schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Residential Services', path: '/residential' }])} />
      <JsonLd schema={faqSchema(FAQ_ITEMS)} />
      <PageHero theme={theme} id="hero" eyebrow="Residential" title="Your home, wired to commercial standards." lede={tone.residentialLede} />
      <Section theme={theme} id="services">
        <div style={{ display: 'grid', gridTemplateColumns: isTabletDown ? 'repeat(auto-fill, minmax(200px, 1fr))' : 'repeat(4, minmax(200px, 1fr))', gap: 16 }}>
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={s.id} theme={theme} service={s}
              onClick={() => navigate(`/residential/${s.id}`)}
              style={!isTabletDown && i >= lastRowStart ? { gridColumn: `span ${lastRowSpan}` } : undefined}
            />
          ))}
        </div>
      </Section>
      <ProjectGallery theme={theme} id="projects" />
      <ProcessBand theme={theme} id="guarantees" />
      <FAQ theme={theme} id="faq" />
      <Testimonials theme={theme} id="testimonials" />
      <CTABand theme={theme} tone={tone} id="cta" />
    </div>
  );
};
