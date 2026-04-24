import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { THEMES, TONE_COPY } from './data/themes';
import { EmergencyBar } from './components/layout/EmergencyBar';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ResidentialPage } from './pages/ResidentialPage';
import { CommercialPage } from './pages/CommercialPage';
import { AboutPage } from './pages/AboutPage';
import { LocationsPage } from './pages/LocationsPage';
import { BookPage } from './pages/BookPage';
import { CityPage } from './pages/CityPage';

const DEFAULT_TWEAKS = {
  theme: 'tradeClassic',
  tone: 'neighborly',
  emergencyBar: true,
  showTeam: true,
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const [tweaks] = useState(DEFAULT_TWEAKS);
  const theme = THEMES[tweaks.theme];
  const tone = TONE_COPY[tweaks.tone];

  useEffect(() => {
    document.body.style.background = theme.bg;
    document.body.style.color = theme.ink;
  }, [theme]);

  return (
    <div style={{ background: theme.bg, color: theme.ink, minHeight: '100vh' }}>
      <ScrollToTop />
      <EmergencyBar theme={theme} show={tweaks.emergencyBar} tone={tone} />
      <Nav theme={theme} />
      <Routes>
        <Route path="/" element={<HomePage theme={theme} tone={tone} />} />
        <Route path="/residential" element={<ResidentialPage theme={theme} tone={tone} />} />
        <Route path="/commercial" element={<CommercialPage theme={theme} tone={tone} />} />
        <Route path="/about" element={<AboutPage theme={theme} tone={tone} />} />
        <Route path="/service-areas" element={<LocationsPage theme={theme} tone={tone} />} />
        <Route path="/service-areas/:citySlug" element={<CityPage theme={theme} tone={tone} />} />
        <Route path="/book" element={<BookPage theme={theme} tone={tone} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer theme={theme} />
    </div>
  );
}
