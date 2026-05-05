import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { PHONE_DISPLAY, PHONE_TEL } from '../../data/content';
import { useBreakpoint } from '../../hooks/useBreakpoint';

const TURNSTILE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA';

export const BookForm = ({ theme, compact, onDone }) => {
  const { isMobile } = useBreakpoint();
  const [state, setState] = useState({ name: '', phone: '', email: '', zip: '', issue: '', urgency: 'Within a week' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});
  const [turnstileToken, setTurnstileToken] = useState(null);

  const validate = () => {
    const e = {};
    if (!state.name.trim()) e.name = true;
    if (!state.zip.trim()) e.zip = true;
    if (!state.issue.trim()) e.issue = true;
    const hasPhone = state.phone.trim();
    const hasEmail = state.email.trim();
    if (!hasPhone && !hasEmail) e.contact = true;
    if (hasPhone && state.phone.replace(/\D/g, '').length !== 10) e.phone = true;
    return e;
  };

  const change = (key, val) => {
    setState(s => ({ ...s, [key]: val }));
    setErrors(e => {
      const next = { ...e };
      delete next[key];
      if (key === 'phone' || key === 'email') delete next.contact;
      return next;
    });
  };

  const field = (key, label, type = 'text', placeholder) => (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: errors[key] ? '#DC2626' : theme.monoColor }}>{label}</span>
      <input
        type={type}
        value={state[key]}
        placeholder={placeholder}
        onChange={e => change(key, e.target.value)}
        style={{
          width: '100%', padding: '12px 14px', borderRadius: theme.radius,
          border: `1px solid ${errors[key] || (errors.contact && (key === 'phone' || key === 'email')) ? '#DC2626' : theme.line}`,
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
          One of our experts will get in touch with you shortly during business hours.
        </p>
        {onDone && <div style={{ marginTop: 20 }}><Button theme={theme} variant="ghost" onClick={onDone}>Close</Button></div>}
      </div>
    );
  }

  return (
    <form
      name="service-request"
      onSubmit={async e => {
        e.preventDefault();
        const e2 = validate();
        if (Object.keys(e2).length) { setErrors(e2); return; }
        setLoading(true);
        setError(false);
        try {
          await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
            'form-name': 'service-request',
            'bot-field': '',
            'cf-turnstile-response': turnstileToken || '',
            ...state,
            phone: state.phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'),
          }).toString(),
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
      <input type="text" name="bot-field" style={{ display: 'none' }} aria-hidden="true" tabIndex={-1} autoComplete="off" readOnly />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <div style={{ fontFamily: theme.displayFont, fontSize: 22, fontWeight: theme.displayWeight, color: theme.ink, letterSpacing: '-0.02em' }}>
          How can we help you?
        </div>
      </div>
      <div style={{ color: theme.muted, fontFamily: theme.bodyFont, fontSize: 13, marginBottom: 4 }}>
        Give us the details. Our team will reach out right away during business hours.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
          {field('name', 'Your name', 'text', 'Jane Smith')}
          {field('phone', 'Phone', 'tel', '(425) 555-0123')}
        </div>
        {errors.phone && (
          <span style={{ fontFamily: theme.bodyFont, fontSize: 12, color: '#DC2626' }}>Please enter a 10-digit US phone number.</span>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
          {field('email', 'Email', 'email', 'jane@example.com')}
          {field('zip', 'ZIP code', 'text', '98443')}
        </div>
        {errors.contact && (
          <span style={{ fontFamily: theme.bodyFont, fontSize: 12, color: '#DC2626' }}>Please provide a phone number or email address.</span>
        )}
      </div>
      <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: errors.issue ? '#DC2626' : theme.monoColor }}>Describe your project</span>
        <textarea
          value={state.issue}
          onChange={e => change('issue', e.target.value)}
          placeholder="Kitchen outlets not working, want a quote on a panel upgrade, need an EV charger, etc."
          rows={3}
          maxLength={400}
          style={{
            padding: '12px 14px', border: `1px solid ${errors.issue ? '#DC2626' : theme.line}`, borderRadius: theme.radius,
            width: '100%', boxSizing: 'border-box', background: theme.surface, color: theme.ink, fontFamily: theme.bodyFont, fontSize: 15, outline: 'none', resize: 'vertical',
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {errors.issue
            ? <span style={{ fontFamily: theme.bodyFont, fontSize: 12, color: '#DC2626' }}>Please briefly describe your project.</span>
            : <span />}
          <span style={{ fontFamily: theme.monoFont, fontSize: 11, color: theme.muted, marginLeft: 'auto' }}>{state.issue.length}/400</span>
        </div>
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
      <Turnstile
        siteKey={TURNSTILE_KEY}
        onSuccess={setTurnstileToken}
        onError={() => setTurnstileToken(null)}
        onExpire={() => setTurnstileToken(null)}
        options={{ theme: theme.bg === '#0E0F12' ? 'dark' : 'light' }}
      />
      {error && (
        <div style={{ padding: '10px 14px', background: '#FEE2E2', borderRadius: theme.radius, color: '#991B1B', fontFamily: theme.bodyFont, fontSize: 13 }}>
          Something went wrong. Please call us directly or try again.
        </div>
      )}
      <Button theme={theme} variant="accent" size="lg" iconRight="arrow" full disabled={loading || !turnstileToken}>
        {loading ? 'Sending…' : 'Request a call back'}
      </Button>
      <div style={{ textAlign: 'center', fontFamily: theme.bodyFont, fontSize: 12, color: theme.muted }}>
        Emergency? Call us directly at <a href={`tel:${PHONE_TEL}`} style={{ color: theme.ink, fontWeight: 600 }}>{PHONE_DISPLAY}</a>
      </div>
    </form>
  );
};
//'Today — emergency', "How soon?" option