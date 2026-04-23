"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const TESTIMONIALS = [
  {
    quote:
      "Thật tuyệt vời quý dị ạ, phong thái làm việc nhanh gọn lắm! Hằng tôi sẽ kết hợp lâu dài với Biển Đông Media!",
    name: "Phương Hằng",
    role: "Doanh nhân",
    avatar: "/images/testimonials/avatar-1.jpg",
  },
  {
    quote:
      "Chỉ một từ thôi các bạn ạ! Bố già tôi cảm thấy cách các bạn làm việc thật good!",
    name: "Trấn Thành",
    role: "Nghệ sỹ",
    avatar: "/images/testimonials/avatar-2.jpg",
  },
  {
    quote:
      "Còn chần chừ gì nữa mà không đưa tay ra cho Biển Đông nắm đi nàooooo !!!",
    name: "Sơn Tùng MTP",
    role: "Ca sĩ",
    avatar: "/images/testimonials/avatar-3.jpg",
  },
  {
    quote:
      "Đội ngũ chuyên nghiệp, nhiệt tình. Hỗ trợ 24/7 mỗi khi mình gặp vấn đề về quảng cáo. Recommend mạnh!",
    name: "Mr. Tuấn",
    role: "CEO Startup",
    avatar: "/images/testimonials/avatar-1.jpg",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="section-y bg-[var(--soft-bg)]">
      <div className="container-x">
        <SectionHeading
          title="Khách Hàng Nói Gì Về Biển Đông Media?"
          subtitle="Mong muốn của chúng tôi đó là xây dựng mối quan hệ lâu dài với khách hàng, không chỉ là đối tác tin cậy trong công việc mà còn là người bạn thân thiết trong cuộc sống."
        />

        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {TESTIMONIALS.map((t, i) => (
              <div
                className="embla__slide sm:!flex-[0_0_50%] lg:!flex-[0_0_33.333%] px-2 md:px-3"
                key={i}
              >
                <div className="bg-[var(--card)] text-[var(--card-foreground)] rounded-2xl p-5 md:p-7 shadow-sm border border-[var(--border)] h-full">
                  <Quote size={36} className="text-[var(--primary)] mb-4" />
                  <p className="text-[15px] text-[var(--foreground)]/80 italic leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[var(--primary)]/20"
                    />
                    <div>
                      <div className="font-bold text-[15px]">{t.name}</div>
                      <div className="text-[12px] text-[var(--muted)]">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === selected
                  ? "bg-[var(--primary)] w-8"
                  : "bg-[var(--border)] w-2.5"
              }`}
              aria-label={`Đến testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
