import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { SERVICES, COMMERCIAL_SERVICES, PHONE_TEL, PHONE_DISPLAY } from '../data/content';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';
import { PageMeta } from '../components/ui/PageMeta';
import { HeroPattern } from '../components/ui/HeroPattern';
import { JsonLd } from '../components/seo/JsonLd';
import { serviceSchema, breadcrumbSchema } from '../data/schemas';
import { CTABand } from './shared';
import { useBreakpoint } from '../hooks/useBreakpoint';

import resGeneratorImg from '../assets/res-generator.jpg';
import resPanelImg from '../assets/res-panel.jpg';
import resEvChargerImg from '../assets/res-ev-charger.jpg';
import resSmarthomeImg from '../assets/res-smarthome.jpg';
import resGfiImg from '../assets/ref-gfi.jpg';
import resLightingImg from '../assets/res-lighting.jpg';
import resHottubImg from '../assets/res-hottub.jpg';
import resInteriorImg from '../assets/res-interior-framedIn.jpg';
import resLandscapeImg from '../assets/res-landscape.jpg';
import resSecurityImg from '../assets/res-security-02.jpg';

import commNewConstructionImg from '../assets/commercial-newConstruction.jpg';
import commStorefrontImg from '../assets/comm-storefront.jpg';
import commPanelImg from '../assets/commerical-panel.jpg';
import commSecurityImg from '../assets/comm-security.jpg';
import comm3PhaseImg from '../assets/3-phase.jpg';
import commSafetyImg from '../assets/comm-safety.jpg';
import commCodeImg from '../assets/comm-code.jpg';

const RESIDENTIAL_HERO_IMAGES = {
  generator: resGeneratorImg,
  panel: resPanelImg,
  ev: resEvChargerImg,
  smart: resSmarthomeImg,
  repair: resGfiImg,
  lighting: resLightingImg,
  pool: resHottubImg,
  remodel: resInteriorImg,
  landscape: resLandscapeImg,
  security: resSecurityImg,
};

const COMMERCIAL_HERO_IMAGES = {
  'ground-up-construction': commNewConstructionImg,
  'tenant-improvements': commStorefrontImg,
  'service-upgrades': commPanelImg,
  'data-low-voltage': commSecurityImg,
  '3-phase-systems': comm3PhaseImg,
  'emergency-response': commSafetyImg,
  'code-compliance': commCodeImg,
};

function parseBody(bodyText) {
  return bodyText.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean).map(para => {
    const match = para.match(/^(Common .+? (?:electrical )?services) include (.+?)\.?\s*$/is);
    if (match) {
      const items = match[2]
        .split(/,\s*/)
        .map(s => s.replace(/^and\s+/i, '').trim())
        .filter(Boolean);
      return { type: 'list', heading: match[1], items };
    }
    return { type: 'p', text: para };
  });
}

export const ServicePage = ({ theme, tone, type }) => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { isMobile, isTablet, isDesktopUp } = useBreakpoint();

  const isResidential = type === 'residential';
  const backPath = isResidential ? '/residential' : '/commercial';
  const backLabel = isResidential ? 'Residential services' : 'Commercial services';

  const service = isResidential
    ? SERVICES.find(s => s.id === serviceId)
    : COMMERCIAL_SERVICES.find(s => s.id === serviceId);

  if (!service) return <Navigate to={backPath} replace />;

  const title = isResidential ? service.title : service.t;
  const description = isResidential ? service.blurb : service.d;
  const bookState = { service: isResidential ? service : { id: service.id, title: service.t } };
  const heroPadding = isMobile ? '48px 16px 40px' : isTablet ? '60px 24px 52px' : '72px 48px 64px';

  const pagePath = `/${isResidential ? 'residential' : 'commercial'}/${serviceId}`;
  const parentPath = isResidential ? '/residential' : '/commercial';
  const parentLabel = isResidential ? 'Residential Services' : 'Commercial Services';

  const heroImage = isResidential ? RESIDENTIAL_HERO_IMAGES[serviceId] : COMMERCIAL_HERO_IMAGES[serviceId];
  const heroBg = isResidential ? theme.ink : theme.ink2;

  return (
    <div>
      <PageMeta
        title={`${title} · Home Run Electric`}
        description={description}
      />
      <JsonLd schema={serviceSchema({ name: title, description, path: pagePath, fromPrice: isResidential ? service.from : undefined })} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: parentLabel, path: parentPath },
        { name: title, path: pagePath },
      ])} />

      {heroImage ? (
        <div style={{ background: heroBg, position: 'relative', overflow: 'hidden' }}>
          {isDesktopUp ? (
            <>
              <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '55%', backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '55%', background: `linear-gradient(to right, ${heroBg} 0%, ${heroBg}C0 18%, ${heroBg}60 48%, ${heroBg}00 80%)` }} />
            </>
          ) : (
            <>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ position: 'absolute', inset: 0, background: `${heroBg}B3` }} />
            </>
          )}
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: heroPadding, position: 'relative', zIndex: 1 }}>
            <button
              onClick={() => navigate(backPath)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: `${theme.brandInk}70`, marginBottom: 20 }}
            >
              ← {backLabel}
            </button>
            <h1 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: isMobile ? 'clamp(36px, 9vw, 52px)' : 'clamp(44px, 6vw, 84px)', lineHeight: 0.98, margin: 0, letterSpacing: '-0.035em', color: theme.brandInk, textWrap: 'balance', maxWidth: isDesktopUp ? 560 : 900 }}>
              {title}
            </h1>
            <p style={{ fontFamily: theme.bodyFont, fontSize: isMobile ? 16 : 19, lineHeight: 1.55, color: `${theme.brandInk}B0`, marginTop: 24, maxWidth: isDesktopUp ? 520 : 600, marginBottom: 0 }}>
              {description}
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <Button theme={theme} variant="primary" iconRight="arrow" onClick={() => navigate('/book', { state: bookState })}>
                {isResidential ? 'Request Service' : 'Request a Bid'}
              </Button>
              <Button theme={theme} variant="ghost" icon="phone" style={{ color: theme.brandInk, borderColor: `${theme.brandInk}50` }} onClick={() => window.location.href = `tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ background: theme.bg, position: 'relative', overflow: 'hidden' }}>
          <HeroPattern theme={theme} kind={theme.heroPattern} />
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: heroPadding, position: 'relative' }}>
            <button
              onClick={() => navigate(backPath)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.monoColor, marginBottom: 20 }}
            >
              ← {backLabel}
            </button>
            <h1 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: isMobile ? 'clamp(36px, 9vw, 52px)' : 'clamp(44px, 6vw, 84px)', lineHeight: 0.98, margin: 0, letterSpacing: '-0.035em', color: theme.ink, textWrap: 'balance', maxWidth: 900 }}>
              {title}
            </h1>
            <p style={{ fontFamily: theme.bodyFont, fontSize: isMobile ? 16 : 19, lineHeight: 1.55, color: theme.ink2, marginTop: 24, maxWidth: 600, marginBottom: 0 }}>
              {description}
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <Button theme={theme} variant="primary" iconRight="arrow" onClick={() => navigate('/book', { state: bookState })}>
                Request a Bid
              </Button>
              <Button theme={theme} variant="ghost" icon="phone" onClick={() => window.location.href = `tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </Button>
            </div>
          </div>
        </div>
      )}

      {service.body && (
        <Section theme={theme}>
          <div style={{ maxWidth: 680 }}>
            <h2 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 'clamp(24px, 3vw, 34px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: theme.ink, margin: '0 0 28px' }}>
              {title} in Western Washington
            </h2>
            {parseBody(service.body).map((block, i) => {
              if (block.type === 'list') return (
                <div key={i} style={{ margin: '28px 0 24px' }}>
                  <h3 style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 18, letterSpacing: '-0.015em', color: theme.ink, margin: '0 0 14px' }}>
                    {block.heading}
                  </h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {block.items.map((item, j) => (
                      <li key={j} style={{ fontFamily: theme.bodyFont, fontSize: 16, lineHeight: 1.5, color: theme.ink2, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0, marginTop: 5 }} xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 0L5.80553 3.45589L9.00969 1.93096L6.81 4.71546L10 6.2698L6.45151 6.28612L7.22521 9.74928L5 6.98513L2.77479 9.74928L3.54849 6.28612L0 6.2698L3.19 4.71546L0.990311 1.93096L4.19447 3.45589L5 0Z" fill={theme.emergency}/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
              return (
                <p key={i} style={{ fontFamily: theme.bodyFont, fontSize: 17, lineHeight: 1.7, color: theme.ink2, margin: '0 0 20px' }}>
                  {block.text}
                </p>
              );
            })}
          </div>
        </Section>
      )}

      <CTABand theme={theme} tone={tone} />
    </div>
  );
};
