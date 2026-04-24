import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';
import { PHONE_DISPLAY, PHONE_TEL } from '../../data/content';
import { useBreakpoint } from '../../hooks/useBreakpoint';

export const Nav = ({ theme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isMobile, isTablet } = useBreakpoint();
  const isCompact = isMobile || isTablet;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const links = [
    { label: 'Home', path: '/' },
    { label: 'Residential', path: '/residential' },
    { label: 'Commercial', path: '/commercial' },
    { label: 'Service area', path: '/service-areas' },
    { label: 'About', path: '/about' },
  ];

  const handleNav = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const isActive = (path) =>
    path === '/' ? pathname === '/' : pathname === path || pathname.startsWith(path + '/');

  return (
    <>
      <header style={{
        background: theme.surface,
        borderBottom: `1px solid ${theme.line}`,
        position: 'sticky', top: 0, zIndex: 50,
        backdropFilter: 'blur(8px)',
      }}>
        <div style={{
          maxWidth: 1400, margin: '0 auto',
          padding: isCompact ? (isMobile ? '14px 16px' : '14px 24px') : '18px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        }}>
          <div style={{ cursor: 'pointer' }} onClick={() => handleNav('/')}>
            <Logo theme={theme} size={isMobile ? 28 : 34} />
          </div>

          {isCompact ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <a href={`tel:${PHONE_TEL}`} style={{
                color: theme.ink, textDecoration: 'none',
                fontFamily: theme.bodyFont, fontSize: 14, fontWeight: 600,
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <Icon name="phone" size={16} />
                {!isMobile && PHONE_DISPLAY}
              </a>
              <button
                onClick={() => setMobileOpen(o => !o)}
                style={{
                  background: 'transparent', border: `1px solid ${theme.line}`,
                  borderRadius: theme.radius, padding: '8px 10px',
                  cursor: 'pointer', color: theme.ink,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                aria-label="Toggle menu"
              >
                <Icon name={mobileOpen ? 'close' : 'menu'} size={20} />
              </button>
            </div>
          ) : (
            <>
              <nav style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {links.map(l => {
                  const active = isActive(l.path);
                  return (
                    <button key={l.path} onClick={() => handleNav(l.path)} style={{
                      background: active ? (theme.bg === '#0E0F12' ? theme.line : '#EDE8DB') : 'transparent',
                      color: theme.ink, border: 'none',
                      padding: '9px 14px', borderRadius: theme.radius,
                      fontFamily: theme.bodyFont, fontSize: 14, fontWeight: active ? 600 : 500,
                      cursor: 'pointer', letterSpacing: '-0.005em',
                    }}>{l.label}</button>
                  );
                })}
              </nav>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <a href={`tel:${PHONE_TEL}`} style={{
                  color: theme.ink, textDecoration: 'none', fontFamily: theme.bodyFont, fontSize: 14, fontWeight: 600,
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}>
                  <Icon name="phone" size={16} /> {PHONE_DISPLAY}
                </a>
                <Button theme={theme} variant="accent" size="sm" icon="calendar" onClick={() => handleNav('/book')}>Book</Button>
              </div>
            </>
          )}
        </div>
      </header>

      {mobileOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 49, background: 'rgba(0,0,0,0.4)' }}
          onClick={() => setMobileOpen(false)}
        />
      )}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: isMobile ? '100%' : 320,
        background: theme.surface,
        borderLeft: `1px solid ${theme.line}`,
        zIndex: 60,
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.25s ease',
        display: 'flex', flexDirection: 'column',
        overflowY: 'auto',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: isMobile ? '14px 16px' : '14px 24px',
          borderBottom: `1px solid ${theme.line}`,
        }}>
          <Logo theme={theme} size={28} />
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              background: 'transparent', border: `1px solid ${theme.line}`,
              borderRadius: theme.radius, padding: '8px 10px',
              cursor: 'pointer', color: theme.ink,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <nav style={{ padding: '16px 0', flex: 1 }}>
          {links.map(l => {
            const active = isActive(l.path);
            return (
              <button key={l.path} onClick={() => handleNav(l.path)} style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: active ? (theme.bg === '#0E0F12' ? theme.line : `${theme.accent}22`) : 'transparent',
                color: active ? theme.ink : theme.ink2,
                border: 'none', borderLeft: active ? `3px solid ${theme.accent}` : '3px solid transparent',
                padding: '14px 20px',
                fontFamily: theme.bodyFont, fontSize: 16, fontWeight: active ? 600 : 500,
                cursor: 'pointer', letterSpacing: '-0.005em',
              }}>{l.label}</button>
            );
          })}
        </nav>

        <div style={{ padding: '16px 20px 32px', borderTop: `1px solid ${theme.line}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a href={`tel:${PHONE_TEL}`} style={{
            color: theme.ink, textDecoration: 'none', fontFamily: theme.bodyFont, fontSize: 15, fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '12px 0',
          }}>
            <Icon name="phone" size={18} /> {PHONE_DISPLAY}
          </a>
          <Button theme={theme} variant="accent" size="md" icon="calendar" onClick={() => handleNav('/book')} full>Book a visit</Button>
        </div>
      </div>
    </>
  );
};
