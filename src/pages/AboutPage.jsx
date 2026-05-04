import { Section } from '../components/ui/Section';
import { PageMeta } from '../components/ui/PageMeta';
import { Icon } from '../components/ui/Icon';
import { Badge } from '../components/ui/Badge';
import { Placeholder, Portrait } from '../components/ui/Placeholder';
import { PageHero, CTABand } from './shared';
import { TEAM } from '../data/content';
import { JsonLd } from '../components/seo/JsonLd';
import { breadcrumbSchema } from '../data/schemas';
import { useBreakpoint } from '../hooks/useBreakpoint';

export const AboutPage = ({ theme, tone }) => {
  const { isMobile, isTablet, isTabletDown } = useBreakpoint();
  const teamCols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
  const credCols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)';

  return (
    <div>
      <PageMeta title="About Us · Home Run Electric" description="Home Run Electric — licensed electrical contractor in Lynnwood, WA since 2003. Family-owned, IBEW-trained crew serving Western Washington." />
      <JsonLd schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }])} />
      <PageHero theme={theme} id="hero" eyebrow="About HRE" title="Over 23 years of local, reliable electrical work" lede={tone.aboutLede} />

      {/* Story */}
      <Section theme={theme} id="story" style={{ background: theme.surface }}>
        <div style={{ display: 'grid', gridTemplateColumns: isTabletDown ? '1fr' : '1fr 1fr', gap: isTabletDown ? 40 : 64, alignItems: 'center' }}>
          <Placeholder theme={theme} label="Crew photo · Lynnwood shop · 2024" aspect="4/5" tint="#8A8570" />
          <div>
            <h2 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05, margin: 0, letterSpacing: '-0.03em', color: theme.ink, marginBottom: 24 }}>
              Started in 2003. Still family run.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, fontFamily: theme.bodyFont, fontSize: 17, lineHeight: 1.55, color: theme.ink2 }}>
              <p style={{ margin: 0 }}>
                Michael & Jessica Smith started Home Run Electric in Lynnwood with two tool bags and a reputation for showing up on time and delivering quality service.
              </p>
              <p style={{ margin: 0 }}>
                Twenty-three years later, we employ our own local crew of thirteen licensed electricians. Dozens of exceptional and talented young men have been trained through our apprenticeship program. We've had thousands of satisfied clients ranging from stores, offices, restaurants, and residential properties.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section theme={theme} id="team" eyebrow="The crew">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', flexDirection: isMobile ? 'column' : 'row', gap: 12, marginBottom: 32 }}>
          <h2 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1, margin: 0, letterSpacing: '-0.03em', color: theme.ink }}>
            The people on your job.
          </h2>
          <Badge theme={theme} variant="soft">Headshots — user to replace</Badge>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: teamCols, gap: 20 }}>
          {TEAM.map((m, i) => (
            <div key={i} style={{ background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: theme.radius, padding: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Portrait theme={theme} name={m.name} tint={m.tint} aspect="1/1" />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <div style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 22, color: theme.ink, letterSpacing: '-0.02em' }}>{m.name}</div>
                  <Badge theme={theme}>{m.since}</Badge>
                </div>
                <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.accent === '#FFC629' || theme.accent === '#EEFF41' ? theme.ink2 : theme.accent, marginBottom: 10 }}>
                  {m.role}
                </div>
                <p style={{ fontFamily: theme.bodyFont, fontSize: 14, color: theme.ink2, lineHeight: 1.5, margin: 0 }}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Credentials */}
      <Section theme={theme} id="credentials" eyebrow="Credentials" style={{ background: theme.surface }}>
        <div style={{ display: 'grid', gridTemplateColumns: credCols, gap: 16 }}>
          {[
            { t: 'Licensed in WA', d: 'Electrical contractor lic. HOMERRE974K2' },
            { t: 'Bonded & insured', d: '$2M general liability, $1M auto' },
            { t: 'IBEW trained', d: 'Every journeyman is union-trained' },
            { t: 'OSHA 30 certified', d: 'Safety-first, for your home and ours' },
          ].map((c, i) => (
            <div key={i} style={{ background: theme.bg, border: `1px solid ${theme.line}`, borderRadius: theme.radius, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: theme.radius, background: theme.brand, color: theme.brandInk, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="shield" size={20} />
              </div>
              <div style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 18, color: theme.ink, letterSpacing: '-0.015em' }}>{c.t}</div>
              <div style={{ fontFamily: theme.bodyFont, fontSize: 13, color: theme.ink2, lineHeight: 1.5 }}>{c.d}</div>
            </div>
          ))}
        </div>
      </Section>

      <CTABand theme={theme} tone={tone} id="cta" />
    </div>
  );
};
