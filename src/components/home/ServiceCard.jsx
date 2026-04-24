import { Icon, SERVICE_ICONS } from '../ui/Icon';
import { Badge } from '../ui/Badge';

export const ServiceCard = ({ theme, service, onClick, compact }) => (
  <div
    onClick={onClick}
    style={{
      background: theme.surface, border: `1px solid ${theme.line}`,
      borderRadius: theme.radius, padding: 24, cursor: 'pointer',
      display: 'flex', flexDirection: 'column', gap: 14,
      transition: 'transform .15s, border-color .15s',
      minHeight: compact ? 'auto' : 220,
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = theme.ink; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = theme.line; }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{
        width: 42, height: 42, borderRadius: theme.radius,
        background: theme.brand, color: theme.brandInk,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon name={SERVICE_ICONS[service.id]} size={22} />
      </div>
      {service.tag && <Badge theme={theme} variant="accent">{service.tag}</Badge>}
    </div>
    <div>
      <div style={{ fontFamily: theme.displayFont, fontWeight: theme.displayWeight, fontSize: 19, color: theme.ink, letterSpacing: '-0.015em', lineHeight: 1.2, marginBottom: 6 }}>
        {service.title}
      </div>
      <p style={{ fontFamily: theme.bodyFont, fontSize: 13, color: theme.ink2, lineHeight: 1.5, margin: 0 }}>
        {service.blurb}
      </p>
    </div>
    <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: `1px solid ${theme.line}`, display: 'flex', justifyContent: 'space-between', fontFamily: theme.monoFont, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.muted }}>
      <span><Icon name="clock" size={11} /> {service.eta}</span>
      <span>From {service.from}</span>
    </div>
  </div>
);
