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
            <svg viewBox="0 0 204 72" width={34} height={12} fill="none" style={{ flexShrink: 0, color: '#c2b9a3' }}>
              <path d="M12 36H47" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M47 36L67 6L87 66L107 6L127 66L147 6L167 36" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M167 36H192" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 42C15.31 42 18 39.31 18 36C18 32.69 15.31 30 12 30C8.69 30 6 32.69 6 36C6 39.31 8.69 42 12 42Z" fill="currentColor"/>
              <path d="M192 42C195.31 42 198 39.31 198 36C198 32.69 195.31 30 192 30C188.69 30 186 32.69 186 36C186 39.31 188.69 42 192 42Z" fill="currentColor"/>
            </svg>
            {eyebrow}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
