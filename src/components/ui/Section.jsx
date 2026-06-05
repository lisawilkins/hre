import { useBreakpoint } from '../../hooks/useBreakpoint';

const BgIconsDivider = ({ theme, bg }) => (
  <svg width="100%" height="20" style={{ display: 'block', background: bg || 'transparent' }} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="hre-bg-icons-section" x="0" y="0" width="610" height="20" patternUnits="userSpaceOnUse">
        <rect y="8.78589" width="60.5923" height="2.42369" fill={theme.surfaceAlt}/>
        <circle cx="63.6218" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
        <rect x="71.4989" y="0.908936" width="2.42369" height="18.1777" rx="1.21185" fill={theme.surfaceAlt}/>
        <rect x="78.77" y="3.33264" width="2.42369" height="13.3303" rx="1.21185" fill={theme.surfaceAlt}/>
        <rect x="86.041" y="0.908936" width="2.42369" height="18.1777" rx="1.21185" fill={theme.surfaceAlt}/>
        <rect x="93.3121" y="3.33264" width="2.42369" height="13.3303" rx="1.21185" fill={theme.surfaceAlt}/>
        <rect x="100.583" y="0.908936" width="2.42369" height="18.1777" rx="1.21185" fill={theme.surfaceAlt}/>
        <circle cx="110.884" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
        <rect x="113.913" y="8.78589" width="60.5923" height="2.42369" fill={theme.surfaceAlt}/>
        <circle cx="177.535" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
        <path d="M212.073 13.6332V16.0569H188.442V13.6332H212.073ZM212.679 13.0273V6.96809C212.679 6.63345 212.408 6.36217 212.073 6.36217H188.442C188.107 6.36217 187.836 6.63345 187.836 6.96809V13.0273C187.836 13.362 188.107 13.6332 188.442 13.6332V16.0569C186.769 16.0569 185.412 14.7005 185.412 13.0273V6.96809C185.412 5.34717 186.685 4.02347 188.286 3.94232L188.442 3.93848H212.073L212.229 3.94232C213.83 4.02347 215.103 5.34717 215.103 6.96809V13.0273L215.099 13.1832C215.018 14.784 213.694 16.0569 212.073 16.0569V13.6332C212.408 13.6332 212.679 13.362 212.679 13.0273Z" fill={theme.surfaceAlt}/>
        <circle cx="222.98" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
        <rect x="226.009" y="8.78589" width="60.5923" height="2.42369" fill={theme.surfaceAlt}/>
        <circle cx="289.631" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
        <path d="M331.697 1.12764C332.083 -0.0457582 333.621 -0.276047 334.343 0.686513L334.41 0.78326L339.844 9.24783H346.264V11.6715H339.347C338.831 11.6715 338.351 11.4091 338.072 10.9751L333.402 3.69867L328.406 18.868C327.949 20.256 325.986 20.256 325.529 18.868L320.889 4.77679L316.248 18.868C315.791 20.256 313.828 20.256 313.371 18.868L308.384 3.72471L303.821 10.9644C303.544 11.4046 303.06 11.6715 302.54 11.6715H292.055V9.24783H302.039L307.362 0.800419L307.429 0.70249C308.124 -0.238442 309.595 -0.0577584 310.041 1.0232L310.082 1.13445L314.809 15.4881L319.45 1.39717C319.907 0.00931925 321.87 0.00932459 322.327 1.39717L326.968 15.4881L331.697 1.12764Z" fill={theme.surfaceAlt}/>
        <circle cx="348.688" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
        <rect x="351.718" y="8.78589" width="60.5923" height="2.42369" fill={theme.surfaceAlt}/>
        <circle cx="415.34" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
        <rect x="423.217" y="5.75635" width="2.42369" height="8.48292" rx="1.21185" fill={theme.surfaceAlt}/>
        <rect x="430.488" y="3.33264" width="2.42369" height="13.3303" rx="1.21185" fill={theme.surfaceAlt}/>
        <rect x="437.759" y="0.908936" width="2.42369" height="18.1777" rx="1.21185" fill={theme.surfaceAlt}/>
        <circle cx="448.059" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
        <rect x="451.089" y="8.78589" width="60.5923" height="2.42369" fill={theme.surfaceAlt}/>
        <circle cx="514.711" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
        <rect x="522.588" y="0.908936" width="2.42369" height="18.1777" rx="1.21185" fill={theme.surfaceAlt}/>
        <path d="M529.859 1.63323C529.859 0.858767 530.562 0.267533 531.296 0.512714C535.265 1.8374 538.127 5.58322 538.127 9.99774C538.127 14.4122 535.266 18.158 531.297 19.4827C530.562 19.7279 529.859 19.1366 529.859 18.3621C529.859 17.7826 530.263 17.2896 530.805 17.0848C533.667 16.0036 535.703 13.2386 535.703 9.99774C535.703 6.75679 533.667 3.99153 530.805 2.91031C530.263 2.70556 529.859 2.21267 529.859 1.63323Z" fill={theme.surfaceAlt}/>
        <circle cx="546.004" cy="9.99781" r="3.02961" fill={theme.surfaceAlt}/>
        <rect x="549.033" y="8.78589" width="60.5923" height="2.42369" fill={theme.surfaceAlt}/>
      </pattern>
    </defs>
    <rect width="100%" height="20" fill="url(#hre-bg-icons-section)" />
  </svg>
);

export const Section = ({ theme, children, style, eyebrow, id, topDivider, dividerBg }) => {
  const { isMobile, isTablet } = useBreakpoint();
  const padding = isMobile ? '60px 16px' : isTablet ? '70px 24px' : '90px 48px';

  return (
    <>
      {topDivider === 'bgIcons' ? <BgIconsDivider theme={theme} bg={dividerBg} /> : null}
      <section id={id} style={{ padding, borderTop: topDivider === 'bgIcons' ? 'none' : `1px solid ${theme.line}`, ...style }}>
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
    </>
  );
};
