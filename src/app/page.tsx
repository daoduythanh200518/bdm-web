import HeroSlider from "@/components/sections/HeroSlider";
import AboutSection from "@/components/sections/AboutSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ContactBanner from "@/components/sections/ContactBanner";
import StatsCounter from "@/components/sections/StatsCounter";
import PartnersCarousel from "@/components/sections/PartnersCarousel";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServicesGrid />
      <Testimonials />
      <FAQ />
      <ProcessSteps />
      <ContactBanner />
      <StatsCounter />
      <PartnersCarousel />
    </>
  );
}
