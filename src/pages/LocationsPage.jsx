import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Icon } from '../components/ui/Icon';
import { Badge } from '../components/ui/Badge';
import { PageHero, CTABand } from './shared';
import { PageMeta } from '../components/ui/PageMeta';
import { LOCATIONS } from '../data/content';

const MapPlaceholder = ({ theme }) => (
  <div style={{
    aspectRatio: '1/1', width: '100%',
    background: theme.surface, border: `1px solid ${theme.line}`,
    borderRadius: theme.radius, position: 'relative', overflow: 'hidden',
  }}>
    <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <pattern id="mapgrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0 L0 0 L0 20" fill="none" stroke={theme.line} strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#mapgrid)" />
      <path d="M100 50 Q130 100 120 150 Q80 200 130 250 Q90 300 140 360 L180 360 Q160 300 200 250 Q170 200 210 150 Q180 100 210 50 Z" fill={theme.bg === '#0E0F12' ? '#1a1f2b' : '#D9E4EC'} opacity="0.6" />
      {[
        { x: 180, y: 120, label: 'Lynnwood', hq: true },
        { x: 155, y: 135, label: 'Edmonds' },
        { x: 185, y: 100, label: 'Mill Creek' },
        { x: 200, y: 75, label: 'Everett' },
        { x: 220, y: 140, label: 'Bothell' },
        { x: 255, y: 160, label: 'Kirkland' },
        { x: 170, y: 170, label: 'Shoreline' },
        { x: 240, y: 200, label: 'Seattle' },
        { x: 230, y: 320, label: 'Olympia' },
        { x: 120, y: 190, label: 'Bremerton' },
        { x: 275, y: 190, label: 'Bellevue' },
        { x: 295, y: 170, label: 'Redmond' },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={p.hq ? 7 : 4} fill={p.hq ? theme.accent : theme.brand} stroke={theme.surface} strokeWidth="2" />
          {p.hq && <circle cx={p.x} cy={p.y} r="14" fill="none" stroke={theme.accent} strokeWidth="1" opacity="0.5" />}
          <text x={p.x + 10} y={p.y + 4} fontFamily={theme.monoFont} fontSize="9" fill={theme.ink} letterSpacing="0.06em">{p.label.toUpperCase()}</text>
        </g>
      ))}
    </svg>
    <div style={{ position: 'absolute', top: 16, left: 16, fontFamily: theme.monoFont, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.muted, background: theme.surface, padding: '4px 8px', borderRadius: 3, border: `1px solid ${theme.line}` }}>
      Service area · Western WA
    </div>
  </div>
);

export const LocationsPage = ({ theme, tone }) => {
  const counties = Array.from(new Set(LOCATIONS.map(l => l.county)));
  const [activeCounty, setActiveCounty] = useState('All');
  const navigate = useNavigate();
  const shown = activeCounty === 'All' ? LOCATIONS : LOCATIONS.filter(l => l.county === activeCounty);

  return (
    <div>
      <PageMeta
        title="Service Areas · Home Run Electric — Western Washington"
        description="Home Run Electric serves Snohomish, King, Thurston, and Kitsap counties. Find your city for ETA, job history, and availability."
      />
      <PageHero theme={theme} eyebrow="Service area" title="Serving Snohomish, King, Thurston & Kitsap counties." lede="Full service from our Lynnwood headquarters across four counties. Emergency and after-hours service is limited to King County. If your city isn't listed — call us anyway. We've probably been there." />
      <Section theme={theme}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48 }}>
          <div>
            <MapPlaceholder theme={theme} />
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
                    display: 'grid', gridTemplateColumns: '1fr auto auto auto auto', gap: 20, alignItems: 'center',
                    borderBottom: i < shown.length - 1 ? `1px solid ${theme.line}` : 'none',
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = theme.bg}
                  onMouseLeave={e => e.currentTarget.style.background = theme.surface}
                >
                  <div>
                    <div style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 20, color: theme.ink, letterSpacing: '-0.015em', display: 'flex', alignItems: 'center', gap: 10 }}>
                      {l.city}
                      {l.hq && <Badge theme={theme} variant="accent">HQ</Badge>}
                    </div>
                    <div style={{ fontFamily: theme.monoFont, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.muted, marginTop: 4 }}>{l.county}</div>
                  </div>
                  {l.emergency ? (
                    <div style={{ fontFamily: theme.monoFont, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.emergency, fontWeight: 700 }}>• 24hr available</div>
                  ) : <div/>}
                  <div style={{ fontFamily: theme.monoFont, fontSize: 11, color: theme.ink2, letterSpacing: '0.06em' }}><Icon name="clock" size={11}/> {l.eta}</div>
                  <div style={{ fontFamily: theme.monoFont, fontSize: 11, color: theme.muted, letterSpacing: '0.06em' }}>{l.jobs} jobs</div>
                  <div style={{ color: theme.ink, display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: theme.bodyFont, fontSize: 13, fontWeight: 600 }}>
                    View <Icon name="arrow" size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <CTABand theme={theme} tone={tone} />
    </div>
  );
};
