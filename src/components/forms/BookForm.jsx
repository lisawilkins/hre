import { useState } from 'react';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { PHONE_DISPLAY, PHONE_TEL } from '../../data/content';

export const BookForm = ({ theme, compact, onDone }) => {
  const [state, setState] = useState({ name: '', phone: '', zip: '', issue: '', urgency: 'Within a week' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const field = (key, label, type = 'text', placeholder) => (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.monoColor }}>{label}</span>
      <input
        type={type}
        value={state[key]}
        placeholder={placeholder}
        onChange={e => setState(s => ({ ...s, [key]: e.target.value }))}
        style={{
          width: '100%', padding: '12px 14px', border: `1px solid ${theme.line}`, borderRadius: theme.radius,
          background: theme.surface, color: theme.ink, fontFamily: theme.bodyFont, fontSize: 15, outline: 'none', boxSizing: 'border-box',
        }}
      />
    </label>
  );

  if (submitted) {
    return (
      <div style={{
        padding: 32, background: theme.surface, borderRadius: theme.radius,
        border: `1px solid ${theme.line}`, textAlign: 'center', color: theme.ink,
      }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', background: theme.accent, color: theme.accentInk, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
          <Icon name="check" size={24} stroke={2.5} />
        </div>
        <div style={{ fontFamily: theme.displayFont, fontSize: 22, fontWeight: theme.displayWeight, marginBottom: 6 }}>
          Got it, {state.name.split(' ')[0] || 'friend'}.
        </div>
        <p style={{ fontFamily: theme.bodyFont, fontSize: 15, color: theme.ink2, margin: 0 }}>
          A real person will call you at <strong>{state.phone || 'your number'}</strong> within the hour during business hours.
        </p>
        {onDone && <div style={{ marginTop: 20 }}><Button theme={theme} variant="ghost" onClick={onDone}>Close</Button></div>}
      </div>
    );
  }

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        try {
          await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ 'form-name': 'service-request', ...state }).toString(),
          });
          setSubmitted(true);
        } catch {
          setError(true);
        } finally {
          setLoading(false);
        }
      }}
      style={{
        padding: compact ? 24 : 32, background: theme.surface, borderRadius: theme.radius,
        border: `1px solid ${theme.line}`, display: 'flex', flexDirection: 'column', gap: 14,
        boxShadow: `0 20px 60px ${theme.bg === '#0E0F12' ? '#0007' : '#0B1F3A12'}`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <div style={{ fontFamily: theme.displayFont, fontSize: 22, fontWeight: theme.displayWeight, color: theme.ink, letterSpacing: '-0.02em' }}>
          Request service
        </div>
      </div>
      <div style={{ color: theme.muted, fontFamily: theme.bodyFont, fontSize: 13, marginBottom: 4 }}>
        Give us the details. We&rsquo;ll call you back — usually within the hour.
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {field('name', 'Your name', 'text', 'Jane Smith')}
        {field('phone', 'Phone', 'tel', '(425) 555-0123')}
      </div>
      {field('zip', 'ZIP code', 'text', '98443')}
      <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.monoColor }}>How can we help you?</span>
        <textarea
          value={state.issue}
          onChange={e => setState(s => ({ ...s, issue: e.target.value }))}
          placeholder="Kitchen outlets not working, want a quote on a panel upgrade, need an EV charger, etc."
          rows={3}
          style={{
            padding: '12px 14px', border: `1px solid ${theme.line}`, borderRadius: theme.radius,
            width: '100%', boxSizing: 'border-box', background: theme.surface, color: theme.ink, fontFamily: theme.bodyFont, fontSize: 15, outline: 'none', resize: 'vertical',
          }}
        />
      </label>
      <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.monoColor }}>How soon?</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
          {['Within a week', 'This month', 'Getting estimates'].map(u => (
            <button key={u} type="button" onClick={() => setState(s => ({ ...s, urgency: u }))} style={{
              padding: '10px 8px', border: `1px solid ${state.urgency === u ? theme.ink : theme.line}`,
              background: state.urgency === u ? theme.ink : 'transparent', color: state.urgency === u ? theme.surface : theme.ink,
              borderRadius: theme.radius, fontFamily: theme.bodyFont, fontSize: 12, fontWeight: 500, cursor: 'pointer',
            }}>{u}</button>
          ))}
        </div>
      </label>
      {error && (
        <div style={{ padding: '10px 14px', background: '#FEE2E2', borderRadius: theme.radius, color: '#991B1B', fontFamily: theme.bodyFont, fontSize: 13 }}>
          Something went wrong. Please call us directly or try again.
        </div>
      )}
      <Button theme={theme} variant="accent" size="lg" iconRight="arrow" full disabled={loading}>
        {loading ? 'Sending…' : 'Request a call back'}
      </Button>
      <div style={{ textAlign: 'center', fontFamily: theme.bodyFont, fontSize: 12, color: theme.muted }}>
        Emergency? Call us directly at <a href={`tel:${PHONE_TEL}`} style={{ color: theme.ink, fontWeight: 600 }}>{PHONE_DISPLAY}</a>
      </div>
    </form>
  );
};
//'Today — emergency', "How soon?" option