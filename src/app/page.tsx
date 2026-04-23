import HeroSlider from "@/components/sections/HeroSlider";
import AboutSection from "@/components/sections/AboutSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import LazyClientSections from "@/components/home/LazyClientSections";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServicesGrid />
      <ProcessSteps />
      <LazyClientSections />
    </>
  );
}
