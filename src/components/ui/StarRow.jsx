import { Icon } from './Icon';

export const StarRow = ({ theme, n = 5, size = 14 }) => (
  <div style={{ display: 'inline-flex', gap: 2, color: theme.accent }}>
    {Array.from({ length: n }).map((_, i) => <Icon key={i} name="star" size={size} />)}
  </div>
);
