import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { SERVICES, COMMERCIAL_SERVICES, PHONE_TEL, PHONE_DISPLAY } from '../data/content';
import { Button } from '../components/ui/Button';
import { Icon } from '../components/ui/Icon';
import { Section } from '../components/ui/Section';
import { PageMeta } from '../components/ui/PageMeta';
import { HeroPattern } from '../components/ui/HeroPattern';
import { JsonLd } from '../components/seo/JsonLd';
import { serviceSchema, breadcrumbSchema } from '../data/schemas';
import { CTABand } from './shared';
import { useBreakpoint } from '../hooks/useBreakpoint';

export const ServicePage = ({ theme, tone, type }) => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { isMobile, isTablet } = useBreakpoint();

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
          {isResidential && (
            <div style={{ display: 'flex', gap: 20, marginTop: 20, fontFamily: theme.monoFont, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.monoColor, flexWrap: 'wrap' }}>
              {service.eta ? (
                <>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <Icon name="clock" size={13} /> {service.eta}
                  </span>
                  <span>From {service.from}</span>
                </>
              ) : (
                <span>Project-based pricing</span>
              )}
            </div>
          )}
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <Button theme={theme} variant="primary" iconRight="arrow" onClick={() => navigate('/book', { state: bookState })}>
              {isResidential ? 'Request Service' : 'Request a Bid'}
            </Button>
            <Button theme={theme} variant="ghost" icon="phone" onClick={() => window.location.href = `tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </Button>
          </div>
        </div>
      </div>

      {service.body && (
        <Section theme={theme}>
          <div style={{ maxWidth: 680 }}>
            {service.body.split(/\n\s*\n/).map((para, i) => (
              <p key={i} style={{ fontFamily: theme.bodyFont, fontSize: 17, lineHeight: 1.7, color: theme.ink2, margin: '0 0 20px' }}>
                {para.trim()}
              </p>
            ))}
          </div>
        </Section>
      )}

      <CTABand theme={theme} tone={tone} />
    </div>
  );
};
