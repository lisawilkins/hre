import { useBreakpoint } from '../../hooks/useBreakpoint';

export const Section = ({ theme, children, style, eyebrow, id }) => {
  const { isMobile, isTablet } = useBreakpoint();
  const padding = isMobile ? '60px 16px' : isTablet ? '70px 24px' : '90px 48px';

  return (
    <section id={id} style={{ padding, borderTop: `1px solid ${theme.line}`, ...style }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {eyebrow && (
          <div style={{
            fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: theme.monoColor, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 24, height: 1, background: theme.monoColor }} /> {eyebrow}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
