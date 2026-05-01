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
    case 'hammer':   return <svg viewBox="0 0 24 24" {...s} fill="currentColor" stroke="none"><path d="M14.7178 2.92804C14.8389 3.02517 14.9269 3.15746 14.9696 3.30668C15.0123 3.4559 15.0076 3.61469 14.9563 3.76116C14.9049 3.90763 14.8094 4.03456 14.6829 4.12445C14.5563 4.21434 14.4051 4.26276 14.2498 4.26304C11.7433 4.26304 9.97184 5.15704 8.82584 6.04054L7.28534 7.60954V9.31504C7.28552 9.4136 7.26627 9.51122 7.22869 9.60233C7.19111 9.69345 7.13594 9.77626 7.06634 9.84604L5.13734 11.7795C5.06767 11.8494 4.98491 11.9048 4.89379 11.9426C4.80267 11.9804 4.70499 11.9999 4.60634 11.9999C4.50769 11.9999 4.41001 11.9804 4.31889 11.9426C4.22777 11.9048 4.14501 11.8494 4.07534 11.7795L0.218841 7.91104C0.0786959 7.77046 0 7.58005 0 7.38154C0 7.18303 0.0786959 6.99262 0.218841 6.85204L2.14784 4.91704C2.21762 4.84744 2.30043 4.79227 2.39155 4.75469C2.48266 4.71711 2.58028 4.69786 2.67884 4.69804H4.25984C6.75734 1.84204 9.32384 1.29304 11.3353 1.56004C12.4485 1.71316 13.5131 2.114 14.4508 2.73304L14.7178 2.92654V2.92804Z"/><path fillRule="evenodd" clipRule="evenodd" d="M9.01773 5.25002C9.1196 5.25253 9.21988 5.27578 9.31247 5.31833C9.40505 5.36088 9.48799 5.42185 9.55623 5.49752L23.2752 18.4665C23.4044 18.6092 23.4737 18.796 23.469 18.9884C23.4643 19.1807 23.3858 19.3639 23.2497 19.5L20.9997 21.75C20.9235 21.8264 20.8316 21.8855 20.7304 21.9231C20.6292 21.9608 20.5211 21.9762 20.4135 21.9682C20.3058 21.9602 20.2011 21.9291 20.1066 21.8769C20.0121 21.8248 19.9299 21.7528 19.8657 21.666L6.89673 7.94552C6.79016 7.80125 6.73883 7.62356 6.75204 7.44468C6.76525 7.2658 6.84213 7.09758 6.96873 6.97052L8.46873 5.47052C8.54051 5.39847 8.62619 5.34176 8.72057 5.30385C8.81495 5.26595 8.91605 5.24763 9.01773 5.25002Z"/></svg>;
    case 'tree':     return <svg viewBox="0 0 24 24" {...s}><path d="M12 2l5 8h-3l4 7H6l4-7H7l5-8z"/><path d="M12 17v5M10 22h4"/></svg>;
    case 'resistor': return <svg viewBox="0 0 24 24" {...s}><path d="M2 12h4M18 12h4"/><rect x="6" y="9" width="12" height="6" rx="1"/></svg>;
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
  remodel: 'hammer',
  landscape: 'tree',
  security: 'shield',
  'three-phase': 'resistor',
};
