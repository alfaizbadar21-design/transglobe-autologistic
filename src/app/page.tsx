import Image from "next/image";
import HeroSlider from '../components/HeroSlider'
import FleetDiscovery from '../components/FleetDiscovery'
import HowItWorks from '../components/HowItWorks'
import ServicesSection from '../components/ServicesSection'
import TrustStrip from '../components/TrustStrip'
import CategoryShowcase from "../components/CategoryShowcase";
import LogisticsPowerhouse from "../components/LogisticsPowerhouse";
import RouteShowcase from "../components/RouteShowcase";
import FinalCta from "../components/FinalCta"

export default function Home() {
  return (
    <>
    <HeroSlider />
     <TrustStrip />
    <FleetDiscovery />
    <HowItWorks />
    <ServicesSection />
    <CategoryShowcase />
    <LogisticsPowerhouse />
    <RouteShowcase />
    <FinalCta />
    </>

  );
}
