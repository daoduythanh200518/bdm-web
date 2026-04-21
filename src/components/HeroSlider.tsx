"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

const SLIDES = [
  {
    eyebrow: "CÔNG TY TRUYỀN THÔNG MẠNG XÃ HỘI SỐ 1 VIỆT NAM",
    title: "Biển Đông Media",
    desc: "Cung cấp tài khoản quảng cáo: Facebook, TikTok, Google… Dịch vụ Facebook, Google, TikTok, Instagram, Booking truyền thông, KOLs.",
    image: "/images/hero-cover.png",
    overlay: "from-[#f6a12a]/85 via-[#ff8a00]/70 to-[#c57100]/85",
  },
  {
    eyebrow: "ĐỐI TÁC CAO CẤP NHẤT CỦA FACEBOOK",
    title: "Tài khoản quảng cáo\nbền bỉ",
    desc: "Đội ngũ Support Facebook đồng hành cùng bạn 24/7. Phí quản lý chỉ từ 3%.",
    image: "/images/services/banner-dv1.jpg",
    overlay: "from-[#0f7ac2]/85 via-[#1d98e8]/70 to-[#062f73]/90",
  },
  {
    eyebrow: "TÍCH XANH — BOOKING BÁO PR",
    title: "Định vị thương hiệu mọi nền tảng",
    desc: "Tích Xanh Facebook / TikTok / Instagram.\nĐăng bài VNExpress, VTV, Zing, Thanh Niên.",
    image: "/images/services/banner-dv2.jpg",
    overlay: "from-[#32373c]/85 via-[#1a1a1a]/75 to-[#000]/85",
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {SLIDES.map((s, i) => (
            <div className="embla__slide" key={i}>
              <div className="relative w-full text-white overflow-hidden min-h-[420px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[600px] flex items-center bg-[#32373c]">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${s.overlay} pointer-events-none`} />
                <div className="absolute -top-20 -right-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-black/20 blur-3xl pointer-events-none" />
                <div className="container-x relative z-10 py-14 md:py-20">
                  <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
                    <div className="hero-eyebrow">{s.eyebrow}</div>
                    <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-5 drop-shadow-lg leading-[1.15] whitespace-pre-line">
                      {s.title}
                    </h1>
                    <p className="text-[14px] sm:text-[15px] md:text-lg mb-6 md:mb-7 max-w-2xl mx-auto lg:mx-0 opacity-95 leading-relaxed whitespace-pre-line">
                      {s.desc}
                    </p>
                    <div className="flex flex-wrap gap-2.5 md:gap-3 justify-center lg:justify-start">
                      <a
                        href={`tel:${SITE.hotlineRaw}`}
                        className="btn btn-white !text-[var(--primary)]"
                      >
                        <Phone size={16} /> {SITE.hotline}
                      </a>
                      <a
                        href="/dich-vu"
                        className="btn btn-outline !border-white !text-white hover:!bg-white hover:!text-[var(--primary)]"
                      >
                        Xem dịch vụ
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows — hide on small to avoid cluttering */}
      <button
        onClick={scrollPrev}
        className="carousel-arrow absolute top-1/2 left-2 md:left-5 -translate-y-1/2 z-10 hidden sm:inline-flex"
        aria-label="Slide trước"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={scrollNext}
        className="carousel-arrow absolute top-1/2 right-2 md:right-5 -translate-y-1/2 z-10 hidden sm:inline-flex"
        aria-label="Slide kế"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 md:h-2.5 rounded-full transition-all ${
              i === selected
                ? "bg-white w-7 md:w-8"
                : "bg-white/50 w-2 md:w-2.5"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
