import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { Section } from '../components/ui/Section';
import { Icon } from '../components/ui/Icon';
import { Badge } from '../components/ui/Badge';
import { PageHero, CTABand } from './shared';
import { PageMeta } from '../components/ui/PageMeta';
import { LOCATIONS } from '../data/content';
import { JsonLd } from '../components/seo/JsonLd';
import { breadcrumbSchema, SITE_URL } from '../data/schemas';
import serviceAreaMap from '../assets/service-area-map.svg';

const ServiceAreaMap = () => (
  <img src={serviceAreaMap} alt="Service area map — Western Washington" style={{ width: '100%', display: 'block' }} />
);

export const LocationsPage = ({ theme, tone }) => {
  const counties = Array.from(new Set(LOCATIONS.map(l => l.county)));
  const [activeCounty, setActiveCounty] = useState('All');
  const navigate = useNavigate();
  const { isMobile } = useBreakpoint();
  const shown = (activeCounty === 'All' ? LOCATIONS : LOCATIONS.filter(l => l.county === activeCounty))
    .slice()
    .sort((a, b) => {
      if (a.hq) return -1;
      if (b.hq) return 1;
      return a.city.localeCompare(b.city);
    });

  return (
    <div>
      <PageMeta
        title="Electrician Service Areas — Snohomish, King, Pierce & Thurston County | HRE"
        description="Home Run Electric serves Snohomish, King, Thurston, and Pierce counties. Find your city for ETA, job history, and availability."
        ogImage={`${SITE_URL}/og-areas.jpg`}
      />
      <JsonLd schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Service Areas', path: '/service-areas' }])} />
      <PageHero theme={theme} id="hero" eyebrow="Service areas" title="Serving Snohomish, King, Thurston & Pierce counties." lede="Full service from our Lynnwood headquarters across four counties. Emergency and after-hours service available in King and Snohomish counties. If your area isn't listed give us a call!" />
      <Section theme={theme} id="locations">
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr', gap: isMobile ? 32 : 48 }}>
          <div>
            <ServiceAreaMap />
          </div>
          <div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
              {['All', ...counties].map(c => (
                <button key={c} onClick={() => setActiveCounty(c)} style={{
                  padding: '8px 14px', border: `1px solid ${activeCounty === c ? theme.ink : theme.line}`,
                  background: activeCounty === c ? theme.ink : 'transparent', color: activeCounty === c ? theme.surface : theme.ink,
                  borderRadius: 100, fontFamily: theme.bodyFont, fontSize: 13, fontWeight: 500, cursor: 'pointer',
                }}>{c}</button>
              ))}
            </div>
            <div style={{ border: `1px solid ${theme.line}`, borderRadius: theme.radius, overflow: 'hidden' }}>
              {shown.map((l, i) => (
                <div
                  key={l.city}
                  onClick={() => navigate(`/service-areas/${l.slug}`)}
                  style={{
                    padding: '18px 20px', background: theme.surface,
                    display: 'grid', gridTemplateColumns: isMobile ? '1fr auto' : '1fr auto auto', gap: isMobile ? 12 : 20, alignItems: 'center',
                    borderBottom: i < shown.length - 1 ? `1px solid ${theme.line}` : 'none',
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = theme.bg}
                  onMouseLeave={e => e.currentTarget.style.background = theme.surface}
                >
                  <div>
                    <h2 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 20, color: theme.ink, letterSpacing: '-0.015em', display: 'flex', alignItems: 'center', gap: 10, margin: 0 }}>
                      {l.city}
                      {l.hq && <Badge theme={theme} variant="accent">HQ</Badge>}
                    </h2>
                    <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.monoColor, marginTop: 4 }}>
                      {l.county}
                      {isMobile && l.emergency && <span style={{ color: theme.emergency, fontWeight: 700, marginLeft: 8 }}>· Emergency</span>}
                    </div>
                  </div>
                  {!isMobile && (l.emergency ? (
                    <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.emergency, fontWeight: 700 }}>• Emergency Service Area</div>
                  ) : <div/>)}
                  <div style={{ color: theme.ink, display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: theme.bodyFont, fontSize: 13, fontWeight: 600 }}>
                    View <Icon name="arrow" size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <CTABand theme={theme} tone={tone} id="cta" />
    </div>
  );
};
