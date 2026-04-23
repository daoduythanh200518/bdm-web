"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const PARTNERS = [
  { src: "/images/partners/doitac-01.png", alt: "Đối tác 1" },
  { src: "/images/partners/doitac-02.png", alt: "Đối tác 2" },
  { src: "/images/partners/doitac-03.png", alt: "Đối tác 3" },
  { src: "/images/partners/doitac-04.png", alt: "Đối tác 4" },
  { src: "/images/partners/doitac-05.png", alt: "Đối tác 5" },
  { src: "/images/partners/doitac-06.png", alt: "Đối tác 6" },
];

export default function PartnersCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  );

  return (
    <section className="py-10 md:py-14 bg-[var(--background)] border-y border-[var(--border)]">
      <div className="container-x">
        <div className="text-center mb-6 md:mb-8">
          <div className="text-[var(--primary)] font-semibold text-[12px] md:text-[13px] tracking-wider uppercase mb-2">
            Đối tác báo chí
          </div>
          <h3 className="text-[22px] md:text-2xl lg:text-3xl font-bold">
            Các đầu báo lớn đồng hành
          </h3>
        </div>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div
                className="embla__slide !flex-[0_0_50%] sm:!flex-[0_0_33.333%] md:!flex-[0_0_25%] lg:!flex-[0_0_16.666%] px-2 md:px-3"
                key={i}
              >
                <div className="h-20 md:h-24 rounded-xl border border-[var(--border)] bg-[var(--card)] flex items-center justify-center p-3 md:p-4 hover:shadow-md hover:border-[var(--primary)]/30 transition-all">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={160}
                    height={80}
                    className="max-h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
