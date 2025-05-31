import ContactSection from "@/components/ContactSection";
import Disclaimer from "@/components/Disclaimer";
import FeatureCards from "@/components/FeatureCards";
import HeroBanner from "@/components/HeroBanner";
import LeadershipTeam from "@/components/LeadershipTeam";
import OngoingStudies from "@/components/OngoingStudies";
import SvgIcons from "@/components/SvgIcons";
import WorkWith from "@/components/WorkWith";
import Image from "next/image";
{/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}

export default function Home() {
  return (
    <div className="rejuvome-mobile-view">
      <HeroBanner />
      <FeatureCards />
      <OngoingStudies />
      <LeadershipTeam />
      <WorkWith />
      <ContactSection />
      <Disclaimer />
      <SvgIcons />
    </div>
  );
}
