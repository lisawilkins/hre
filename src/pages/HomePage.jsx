import { HomeHero } from '../components/home/HomeHero';
import { TrustStrip } from '../components/home/TrustStrip';
import { TwoLanes } from '../components/home/TwoLanes';
import { ResidentialServices } from '../components/home/ResidentialServices';
import { WhyUs } from '../components/home/WhyUs';
import { HowItWorks } from '../components/home/HowItWorks';
import { EmergencyBand } from '../components/home/EmergencyBand';
import { Testimonials } from '../components/home/Testimonials';
import { PageMeta } from '../components/ui/PageMeta';

export const HomePage = ({ theme, tone }) => (
  <>
    <PageMeta
      title="Home Run Electric — Licensed Electrical Contractor · Western Washington"
      description="Licensed, bonded, and insured electrical contractor serving Western Washington since 2003. Commercial-grade work for homes and businesses."
    />
    <HomeHero theme={theme} tone={tone} id="hero" />
    <TrustStrip theme={theme} id="trust" />
    <TwoLanes theme={theme} id="lanes" />
    <ResidentialServices theme={theme} id="residential" />
    <WhyUs theme={theme} id="why-us" />
    <HowItWorks theme={theme} id="how-it-works" />
    <EmergencyBand theme={theme} tone={tone} id="emergency" />
    <Testimonials theme={theme} id="testimonials" />
  </>
);
