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
    <HomeHero theme={theme} tone={tone} />
    <TrustStrip theme={theme} />
    <TwoLanes theme={theme} />
    <ResidentialServices theme={theme} />
    <WhyUs theme={theme} />
    <HowItWorks theme={theme} />
    <EmergencyBand theme={theme} tone={tone} />
    <Testimonials theme={theme} />
  </>
);
