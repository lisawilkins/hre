import { useNavigate } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { PHONE_DISPLAY, PHONE_TEL } from '../../data/content';
import { useBreakpoint } from '../../hooks/useBreakpoint';

const FooterCol = ({ theme, title, items }) => (
  <div>
    <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.55, marginBottom: 18 }}>{title}</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((it, i) => {
        if (typeof it === 'string') return <div key={i} style={{ fontFamily: theme.bodyFont, fontSize: 14, opacity: 0.9 }}>{it}</div>;
        return <button key={i} onClick={it.go} style={{ background: 'transparent', border: 'none', padding: 0, textAlign: 'left', color: 'inherit', cursor: 'pointer', fontFamily: theme.bodyFont, fontSize: 14, opacity: 0.9 }}>{it.t}</button>;
      })}
    </div>
  </div>
);

export const Footer = ({ theme }) => {
  const { isMobile, isTablet } = useBreakpoint();
  const navigate = useNavigate();

  const gridCols = isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1.4fr 1fr 1fr 1fr';
  const padding = isMobile ? '48px 16px 32px' : isTablet ? '64px 24px 36px' : '80px 48px 40px';

  return (
    <footer style={{ background: theme.brand, color: theme.brandInk, padding }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: gridCols, gap: isMobile ? 36 : 48, marginBottom: isMobile ? 40 : 56 }}>
          <div style={{ gridColumn: isTablet ? '1 / -1' : undefined }}>
            <div style={{ marginBottom: 18, cursor: 'pointer', display: 'inline-block' }} onClick={() => navigate('/')}>
              <Logo theme={theme} size={64} variant="light" />
            </div>
            <p style={{ fontFamily: theme.bodyFont, fontSize: 14, lineHeight: 1.6, opacity: 0.75, maxWidth: 320, margin: 0 }}>
              Licensed, bonded, and insured electrical contractor serving Western Washington since 2003. Commercial-grade work, now for homes and small businesses.
            </p>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 8, fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.7 }}>
              <div>WA Lic. HOMERRE974K2 · Bonded & Insured</div>
            </div>
          </div>
          <FooterCol theme={theme} title="Services" items={[
            { t: 'Panel upgrades', go: () => navigate('/residential') },
            { t: 'EV chargers', go: () => navigate('/residential') },
            { t: 'Generators', go: () => navigate('/residential') },
            { t: 'Smart home', go: () => navigate('/residential') },
            { t: 'Troubleshooting', go: () => navigate('/residential') },
            { t: 'Lighting', go: () => navigate('/residential') },
            { t: 'Hot tub & pool', go: () => navigate('/residential') },
          ]} />
          <FooterCol theme={theme} title="Company" items={[
            { t: 'Residential', go: () => navigate('/residential') },
            { t: 'Commercial', go: () => navigate('/commercial') },
            { t: 'About & team', go: () => navigate('/about') },
            { t: 'Service area', go: () => navigate('/service-areas') },
            { t: 'Request Service', go: () => navigate('/book') },
          ]} />
          <FooterCol theme={theme} title="Contact" items={[
            PHONE_DISPLAY,
            'websupport@homerunelectricllc.com',
            'Mon–Sat · 7a–6p',
            'Emergency service — King County',
          ]} />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center',
          gap: isMobile ? 8 : 0,
          fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
          opacity: 0.5, paddingTop: 30, borderTop: `1px solid ${theme.brandInk}22`,
        }}>
          <div>© {new Date().getFullYear()} Home Run Electric LLC</div>
          <div>Covering the bases.</div>
        </div>
      </div>
    </footer>
  );
};
