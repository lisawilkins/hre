import { THEMES } from '../data/themes';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Logo } from '../components/ui/Logo';
import { Icon, SERVICE_ICONS } from '../components/ui/Icon';
import { StarRow } from '../components/ui/StarRow';
import { HeroPattern } from '../components/ui/HeroPattern';

const ALL_ICONS = [
  'bolt', 'phone', 'arrow', 'check', 'shield', 'clock', 'pin', 'calendar',
  'menu', 'close', 'star', 'house', 'building', 'wrench', 'plug', 'car',
  'lightbulb', 'battery', 'droplet', 'home-gear',
];

const BUTTON_VARIANTS = ['primary', 'accent', 'emergency', 'outline', 'ghost'];
const BADGE_VARIANTS = ['default', 'brand', 'accent', 'soft'];
const SIZES = ['sm', 'md', 'lg'];

function Block({ label, children, style }) {
  return (
    <div style={{ marginBottom: 48, ...style }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#6B7280',
        marginBottom: 16,
        paddingBottom: 8,
        borderBottom: '1px solid #E3DFD5',
      }}>
        {label}
      </div>
      {children}
    </div>
  );
}

function ColorSwatch({ name, value, ink = '#0B1F3A' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 100 }}>
      <div style={{
        width: '100%', height: 56, borderRadius: 6,
        background: value, border: '1px solid rgba(0,0,0,0.08)',
      }} />
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B7280' }}>{name}</div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#0B1F3A', fontWeight: 600 }}>{value}</div>
    </div>
  );
}

function ThemeCard({ theme }) {
  const colorTokens = [
    { name: 'bg', value: theme.bg },
    { name: 'surface', value: theme.surface },
    { name: 'ink', value: theme.ink },
    { name: 'ink2', value: theme.ink2 },
    { name: 'muted', value: theme.muted },
    { name: 'line', value: theme.line },
    { name: 'brand', value: theme.brand },
    { name: 'brandInk', value: theme.brandInk },
    { name: 'accent', value: theme.accent },
    { name: 'accentInk', value: theme.accentInk },
    { name: 'emergency', value: theme.emergency },
    { name: 'emergencyInk', value: theme.emergencyInk },
  ];

  return (
    <div style={{
      background: theme.surface,
      border: `1px solid ${theme.line}`,
      borderRadius: 12,
      padding: 32,
      marginBottom: 40,
    }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{
          fontFamily: theme.displayFont,
          fontSize: 22,
          fontWeight: theme.displayWeight,
          color: theme.ink,
          marginBottom: 4,
        }}>
          {theme.name}
        </div>
        <div style={{ fontFamily: theme.bodyFont, fontSize: 14, color: theme.muted }}>
          {theme.description}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: 16, marginBottom: 28 }}>
        {colorTokens.map(t => <ColorSwatch key={t.name} {...t} />)}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
        {BUTTON_VARIANTS.map(v => (
          <Button key={v} theme={theme} variant={v} size="sm">{v}</Button>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
        {BADGE_VARIANTS.map(v => (
          <Badge key={v} theme={theme} variant={v}>{v}</Badge>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: theme.displayFont, fontSize: 36, fontWeight: theme.displayWeight, color: theme.ink, lineHeight: 1.1 }}>
            Display / H1
          </div>
          <div style={{ fontFamily: theme.displayFont, fontSize: 24, fontWeight: theme.displayWeight, color: theme.ink, lineHeight: 1.2 }}>
            Heading / H2
          </div>
          <div style={{ fontFamily: theme.bodyFont, fontSize: 16, color: theme.ink, lineHeight: 1.6, marginTop: 8 }}>
            Body — Inter, 16px. For readable running text.
          </div>
          <div style={{ fontFamily: theme.bodyFont, fontSize: 14, color: theme.muted, lineHeight: 1.6 }}>
            Muted / secondary — 14px, lighter weight.
          </div>
          <div style={{ fontFamily: theme.monoFont, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.muted, marginTop: 8 }}>
            Mono eyebrow / label / badge
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Logo theme={theme} size={34} />
          <Logo theme={theme} size={34} lockup="stacked" />
        </div>
      </div>
    </div>
  );
}

export function DesignSystemPage() {
  const theme = THEMES.tradeClassic;

  return (
    <div style={{ background: '#F8F7F3', minHeight: '100vh', fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#6B7280', marginBottom: 12,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 24, height: 1, background: '#6B7280', display: 'inline-block' }} />
            Home Run Electric
          </div>
          <h1 style={{
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            fontSize: 48, fontWeight: 700, color: '#0B1F3A',
            margin: 0, lineHeight: 1.05, letterSpacing: '-0.02em',
          }}>
            Design System
          </h1>
          <p style={{ fontSize: 16, color: '#6B7280', marginTop: 12, maxWidth: 520 }}>
            Visual reference for all themes, tokens, components, and typography used across the HRE website.
          </p>
        </div>

        {/* Themes */}
        <Block label="Themes">
          {Object.values(THEMES).map(t => <ThemeCard key={t.name} theme={t} />)}
        </Block>

        {/* Button variants + sizes */}
        <Block label="Buttons — all variants × sizes">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {SIZES.map(size => (
              <div key={size} style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, color: '#6B7280', width: 28, flexShrink: 0,
                }}>{size}</div>
                {BUTTON_VARIANTS.map(v => (
                  <Button key={v} theme={theme} variant={v} size={size}>{v}</Button>
                ))}
                <Button theme={theme} variant="accent" size={size} icon="bolt">With icon</Button>
                <Button theme={theme} variant="primary" size={size} iconRight="arrow">Icon right</Button>
              </div>
            ))}
          </div>
        </Block>

        {/* Badges */}
        <Block label="Badges — all variants">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {BADGE_VARIANTS.map(v => (
              <Badge key={v} theme={theme} variant={v}>{v}</Badge>
            ))}
            {BADGE_VARIANTS.map(v => (
              <Badge key={`${v}-icon`} theme={theme} variant={v} icon="bolt">{v} + icon</Badge>
            ))}
          </div>
        </Block>

        {/* Typography */}
        <Block label="Typography scale">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { label: 'Display / H1', size: 48, font: theme.displayFont, weight: theme.displayWeight, text: 'Trusted Electrical' },
              { label: 'H2', size: 36, font: theme.displayFont, weight: theme.displayWeight, text: 'Western Washington' },
              { label: 'H3', size: 24, font: theme.displayFont, weight: theme.displayWeight, text: 'Residential Services' },
              { label: 'H4', size: 20, font: theme.displayFont, weight: theme.displayWeight, text: 'Panel Upgrades & Rewiring' },
              { label: 'Body — 16', size: 16, font: theme.bodyFont, weight: 400, text: 'Home Run Electric has powered Western Washington for over 20 years.' },
              { label: 'Body — 14', size: 14, font: theme.bodyFont, weight: 400, text: 'Licensed, bonded, and insured. Family-owned since 2003.' },
              { label: 'Body — 13 / Small', size: 13, font: theme.bodyFont, weight: 400, text: 'Secondary caption or meta text' },
              { label: 'Mono / Eyebrow', size: 11, font: theme.monoFont, weight: 600, text: 'YOUR LOCAL ELECTRICIAN — SINCE 2003', letter: '0.12em', upper: true },
            ].map(({ label, size, font, weight, text, letter, upper }) => (
              <div key={label} style={{ display: 'flex', gap: 24, alignItems: 'baseline' }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, color: '#6B7280', width: 130, flexShrink: 0, paddingTop: 4,
                }}>{label}</div>
                <div style={{
                  fontFamily: font, fontSize: size, fontWeight: weight, color: '#0B1F3A',
                  lineHeight: 1.2,
                  letterSpacing: letter || 'inherit',
                  textTransform: upper ? 'uppercase' : 'none',
                }}>
                  {text}
                </div>
              </div>
            ))}
          </div>
        </Block>

        {/* Icon set */}
        <Block label="Icon set">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {ALL_ICONS.map(name => (
              <div key={name} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                padding: '16px 14px',
                background: '#FFFFFF', border: '1px solid #E3DFD5', borderRadius: 8,
                minWidth: 80, color: '#0B1F3A',
              }}>
                <Icon name={name} size={22} />
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: '#6B7280', textAlign: 'center' }}>
                  {name}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B7280', marginBottom: 12 }}>
              SERVICE_ICONS mapping
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {Object.entries(SERVICE_ICONS).map(([service, icon]) => (
                <div key={service} style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                  padding: '16px 14px',
                  background: '#0B1F3A', borderRadius: 8, color: '#FFC629',
                  minWidth: 80,
                }}>
                  <Icon name={icon} size={22} />
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: '#FFC629', opacity: 0.7, textAlign: 'center' }}>
                    {service}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Block>

        {/* Star ratings */}
        <Block label="StarRow">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[14, 18, 22].map(size => (
              <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <StarRow theme={theme} size={size} />
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B7280' }}>{size}px</div>
              </div>
            ))}
          </div>
        </Block>

        {/* Logo variants */}
        <Block label="Logo variants">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
            {[
              { bg: '#F5F3EE', label: 'On bg (horizontal)', lockup: 'horizontal', themeKey: 'tradeClassic' },
              { bg: '#0B1F3A', label: 'On brand (horizontal)', lockup: 'horizontal', themeKey: 'tradeClassic', invert: true },
              { bg: '#F5F3EE', label: 'On bg (stacked)', lockup: 'stacked', themeKey: 'tradeClassic' },
              { bg: '#0B1F3A', label: 'On brand (stacked)', lockup: 'stacked', themeKey: 'tradeClassic', invert: true },
              { bg: '#F4EFE6', label: 'PNW Modern', lockup: 'horizontal', themeKey: 'pnwModern' },
              { bg: '#1F3A2A', label: 'PNW Modern (dark)', lockup: 'horizontal', themeKey: 'pnwModern', invert: true },
              { bg: '#0E0F12', label: 'High Voltage', lockup: 'horizontal', themeKey: 'highVoltage' },
            ].map(({ bg, label, lockup, themeKey, invert }) => (
              <div key={label} style={{
                background: bg, padding: '28px 32px',
                display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start',
                borderRadius: 8, border: '1px solid rgba(0,0,0,0.06)',
                minWidth: 220,
              }}>
                <Logo theme={THEMES[themeKey]} lockup={lockup} size={32} inverted={invert} />
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: invert ? 'rgba(255,255,255,0.4)' : '#6B7280' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Block>

        {/* Hero patterns */}
        <Block label="Hero patterns">
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {[
              { pattern: 'grid', themeKey: 'tradeClassic' },
              { pattern: 'topo', themeKey: 'pnwModern' },
              { pattern: 'circuit', themeKey: 'highVoltage' },
            ].map(({ pattern, themeKey }) => {
              const t = THEMES[themeKey];
              return (
                <div key={pattern} style={{ flex: '1 1 280px', minHeight: 160, position: 'relative', borderRadius: 8, overflow: 'hidden', border: `1px solid ${t.line}`, background: t.bg }}>
                  <HeroPattern theme={t} />
                  <div style={{
                    position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', gap: 6,
                    pointerEvents: 'none',
                  }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: t.muted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {pattern}
                    </div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: t.muted }}>
                      {t.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Block>

        {/* Spacing & radius */}
        <Block label="Spacing & border radius">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B7280', marginBottom: 12 }}>Border radius by theme</div>
              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                {Object.values(THEMES).map(t => (
                  <div key={t.name} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
                    <div style={{
                      width: 64, height: 64, background: t.brand,
                      borderRadius: t.radius,
                    }} />
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B7280', textAlign: 'center' }}>
                      {t.name}<br />{t.radius}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B7280', marginBottom: 12 }}>Spacing scale (section padding)</div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'flex-end' }}>
                {[
                  { label: 'mobile', value: '60px 16px' },
                  { label: 'tablet', value: '70px 24px' },
                  { label: 'desktop', value: '90px 48px' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#0B1F3A', fontWeight: 600 }}>{value}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: '#6B7280' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Block>

        {/* Footer */}
        <div style={{
          marginTop: 80,
          paddingTop: 24,
          borderTop: '1px solid #E3DFD5',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          color: '#6B7280',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          Home Run Electric — Design System — Internal reference only
        </div>
      </div>
    </div>
  );
}
