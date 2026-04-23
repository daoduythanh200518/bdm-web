"use client";

import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), {
  loading: () => <div className="h-96 animate-pulse bg-neutral-50" />,
});

const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => <div className="h-96 animate-pulse bg-neutral-50" />,
});

const ContactBanner = dynamic(() => import("@/components/sections/ContactBanner"), {
  loading: () => <div className="h-96 animate-pulse bg-neutral-50" />,
});

const StatsCounter = dynamic(() => import("@/components/sections/StatsCounter"), {
  loading: () => <div className="h-64 animate-pulse bg-neutral-50" />,
});

const PartnersCarousel = dynamic(() => import("@/components/sections/PartnersCarousel"), {
  loading: () => <div className="h-48 animate-pulse bg-neutral-50" />,
});

export default function LazyClientSections() {
  return (
    <>
      <Testimonials />
      <FAQ />
      <ContactBanner />
      <StatsCounter />
      <PartnersCarousel />
    </>
  );
}
