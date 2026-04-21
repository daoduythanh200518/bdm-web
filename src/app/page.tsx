import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ProcessSteps from "@/components/ProcessSteps";
import ContactBanner from "@/components/ContactBanner";
import StatsCounter from "@/components/StatsCounter";
import PartnersCarousel from "@/components/PartnersCarousel";

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
