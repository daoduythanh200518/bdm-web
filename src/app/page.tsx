import type { Metadata } from "next";
import { SITE } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import HeroSlider from "@/components/sections/HeroSlider";
import AboutSection from "@/components/sections/AboutSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import LazyClientSections from "@/components/home/LazyClientSections";

export const metadata: Metadata = buildPageMetadata({
  description: SITE.description,
  path: "/",
});

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
