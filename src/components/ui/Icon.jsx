export const Icon = ({ name, size = 20, stroke = 1.8 }) => {
  const s = { width: size, height: size, fill: 'none', stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'bolt':     return <svg viewBox="0 0 24 24" {...s}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>;
    case 'phone':    return <svg viewBox="0 0 24 24" {...s}><path d="M5 3h4l2 5-2.5 1.5a11 11 0 005.5 5.5L15 12.5l5 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z"/></svg>;
    case 'arrow':    return <svg viewBox="0 0 24 24" {...s}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case 'check':    return <svg viewBox="0 0 24 24" {...s}><path d="M4 12l5 5L20 6"/></svg>;
    case 'shield':   return <svg viewBox="0 0 24 24" {...s}><path d="M12 2l8 3v7a10 10 0 01-8 10 10 10 0 01-8-10V5l8-3z"/></svg>;
    case 'clock':    return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case 'pin':      return <svg viewBox="0 0 24 24" {...s}><path d="M12 22s8-7 8-13a8 8 0 00-16 0c0 6 8 13 8 13z"/><circle cx="12" cy="9" r="3"/></svg>;
    case 'calendar': return <svg viewBox="0 0 24 24" {...s}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>;
    case 'menu':     return <svg viewBox="0 0 24 24" {...s}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
    case 'close':    return <svg viewBox="0 0 24 24" {...s}><path d="M6 6l12 12M18 6l-12 12"/></svg>;
    case 'star':     return <svg viewBox="0 0 24 24" {...s} fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5L18 21l-6-4-6 4 1.5-7L2 9.5 9 9z"/></svg>;
    case 'house':    return <svg viewBox="0 0 24 24" {...s}><path d="M3 11l9-8 9 8M5 10v10h14V10"/></svg>;
    case 'building': return <svg viewBox="0 0 24 24" {...s}><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/></svg>;
    case 'wrench':   return <svg viewBox="0 0 24 24" {...s}><path d="M14 6a4 4 0 105.66 5.66L22 14l-8 8-2.34-2.34A4 4 0 016 14L14 6z"/></svg>;
    case 'plug':     return <svg viewBox="0 0 24 24" {...s}><path d="M9 3v6M15 3v6M7 9h10v4a5 5 0 01-10 0V9zM12 18v3"/></svg>;
    case 'car':      return <svg viewBox="0 0 24 24" {...s}><path d="M5 16V11l2-5h10l2 5v5M5 16h14M7 16v2M17 16v2"/><circle cx="8" cy="16" r="1.5"/><circle cx="16" cy="16" r="1.5"/></svg>;
    case 'lightbulb':return <svg viewBox="0 0 24 24" {...s}><path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c1 1 1.5 2 1.5 3.5h5c0-1.5.5-2.5 1.5-3.5A6 6 0 0012 3z"/></svg>;
    case 'battery':  return <svg viewBox="0 0 24 24" {...s}><rect x="3" y="8" width="16" height="10" rx="1"/><path d="M19 11v4h2v-4z"/><path d="M7 11v4M11 11v4"/></svg>;
    case 'droplet':  return <svg viewBox="0 0 24 24" {...s}><path d="M12 3s7 7 7 12a7 7 0 01-14 0c0-5 7-12 7-12z"/></svg>;
    case 'home-gear':return <svg viewBox="0 0 24 24" {...s}><path d="M3 11l9-8 9 8M5 10v10h14V10"/><circle cx="12" cy="14" r="2"/></svg>;
    default: return null;
  }
};

export const SERVICE_ICONS = {
  panel: 'plug',
  ev: 'car',
  generator: 'battery',
  smart: 'home-gear',
  repair: 'wrench',
  lighting: 'lightbulb',
  pool: 'droplet',
};
