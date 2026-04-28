import logoHoriz from '../../assets/logos/logo-horizontal.svg';
import logoHorizReversed from '../../assets/logos/logo-horizontal-reversed.svg';
import logoStacked from '../../assets/logos/logo-stacked.svg';
import logoStackedReversed from '../../assets/logos/logo-stacked-reversed.svg';

export const Logo = ({ theme, size = 34, width: widthProp, variant = 'auto', lockup = 'horizontal', inverted = false }) => {
  const isDark = theme && (theme.bg === '#0E0F12' || inverted);
  const useReversed = variant === 'light' || (variant === 'auto' && isDark);

  const srcMap = {
    horizontal: useReversed ? logoHorizReversed : logoHoriz,
    stacked: useReversed ? logoStackedReversed : logoStacked,
  };

  const ratio = lockup === 'stacked' ? 1 : 1253 / 406;
  const height = size;
  const width = widthProp ?? height * ratio;

  return (
    <img
      src={srcMap[lockup]}
      alt="Home Run Electric"
      width={width}
      height={height}
      style={{ display: 'block', width, height, flexShrink: 0 }}
    />
  );
};
