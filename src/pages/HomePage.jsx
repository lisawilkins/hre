import { HomeHero } from '../components/home/HomeHero';
import { TrustStrip } from '../components/home/TrustStrip';
import { TwoLanes } from '../components/home/TwoLanes';
import { ResidentialServices } from '../components/home/ResidentialServices';
import { TrustPoints } from '../components/ui/TrustPoints';
import { HowItWorks } from '../components/home/HowItWorks';
import { EmergencyBand } from '../components/home/EmergencyBand';
import { Testimonials } from '../components/home/Testimonials';
import { PageMeta } from '../components/ui/PageMeta';

export const HomePage = ({ theme, tone }) => (
  <>
    <PageMeta
      title="Electrician in Lynnwood, WA — Home Run Electric | Snohomish & King County"
      description="Licensed electrician in Lynnwood, WA — residential & commercial electrical services in Snohomish, King, Skagit, Thurston, Pierce and Whatcom Counties. Panel upgrades, EV chargers, generators. Call (425) 489-0791."
    />
    <HomeHero theme={theme} tone={tone} id="hero" />
    <TrustStrip theme={theme} id="trust" />
    <TwoLanes theme={theme} id="lanes" />
    <ResidentialServices theme={theme} id="residential" />
    <TrustPoints theme={theme} id="why-us" />
    <HowItWorks theme={theme} id="how-it-works" />
    <EmergencyBand theme={theme} tone={tone} id="emergency" />
    <Testimonials theme={theme} id="testimonials" />
  </>
);
