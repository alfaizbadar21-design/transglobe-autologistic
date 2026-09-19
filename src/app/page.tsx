import Image from "next/image";
import HeroSlider from '../components/HeroSlider'
// import FleetDiscovery from '../components/FleetDiscovery'
import HowItWorks from '../components/HowItWorks'
import ServicesSection from '../components/ServicesSection'
import TrustStrip from '../components/TrustStrip'
import CategoryShowcase from "../components/CategoryShowcase";
import LogisticsPowerhouse from "../components/LogisticsPowerhouse";
import RouteShowcase from "../components/RouteShowcase";
import FinalCta from "../components/FinalCta"
import AboutTeaser from "@/components/AboutTeaser";

export default function Home() {
  return (
    <>
    <HeroSlider />
     <TrustStrip />
     <AboutTeaser />
      <CategoryShowcase />
      <ServicesSection />
    {/* <FleetDiscovery /> */}
    <HowItWorks />
    <LogisticsPowerhouse />
    <RouteShowcase />
    <FinalCta />
    </>

  );
}
