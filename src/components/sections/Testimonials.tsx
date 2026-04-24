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
      "Bài PR của bên mình lên top báo rất nhanh, nội dung chuẩn SEO và đúng tinh thần thương hiệu. Đội Biển Đông Media làm việc cực kỳ chuyên nghiệp!",
    name: "Nguyễn Phương Linh",
    role: "Marketing Manager – Thời trang Laven",
    avatar: "/images/testimonials/avatar-1.jpg",
  },
  {
    quote:
      "Thuê tài khoản quảng cáo bên Biển Đông gần 2 năm, chưa bao giờ bị gián đoạn chiến dịch. Tư vấn ngân sách rất thật, không vẽ vời.",
    name: "Trần Minh Tuấn",
    role: "CEO Startup TMĐT",
    avatar: "/images/testimonials/avatar-4.jpg",
  },
  {
    quote:
      "Mình book nguyên combo báo PR cho đợt ra mắt sản phẩm mới, ROI vượt kỳ vọng. Đặc biệt là đội support trả lời rất nhanh, kể cả ngoài giờ.",
    name: "Lê Thị Hồng Nhung",
    role: "Founder – Mỹ phẩm Hạ An",
    avatar: "/images/testimonials/avatar-5.jpg",
  },
  {
    quote:
      "Trước mình tự chạy ads mãi không ra đơn. Sau khi chuyển qua dịch vụ của Biển Đông, CPA giảm gần một nửa. Quá đáng đồng tiền bát gạo!",
    name: "Phạm Quốc Huy",
    role: "Chủ chuỗi F&B Hà Nội",
    avatar: "/images/testimonials/avatar-2.jpg",
  },
  {
    quote:
      "Fanpage của shop được chăm sóc đều đặn, tương tác tăng rõ rệt chỉ sau 1 tháng. Các bạn nhiệt tình và có gu content lắm!",
    name: "Đỗ Thuỳ Dương",
    role: "Chủ shop Mẹ & Bé",
    avatar: "/images/testimonials/avatar-6.jpg",
  },
  {
    quote:
      "Từ lúc hợp tác với Biển Đông Media, mọi chiến dịch truyền thông của công ty đều trơn tru. Một đối tác đáng tin cậy cho doanh nghiệp vừa và nhỏ.",
    name: "Hoàng Anh Dũng",
    role: "Giám đốc – Nội thất Minh Đức",
    avatar: "/images/testimonials/avatar-3.jpg",
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
