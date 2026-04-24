import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesGrid() {
  return (
    <section className="section-y bg-[var(--background)]">
      <div className="container-x">
        <SectionHeading
          eyebrow="Đa dạng dịch vụ"
          title="Giải pháp Digital Marketing hiệu quả"
          subtitle="Với các nền tảng quảng cáo hàng đầu — Facebook, Google, TikTok, Instagram"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/dich-vu/${s.slug}`}
              className="group bg-[var(--card)] text-[var(--card-foreground)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden ${
                  s.imageFit === "contain" ? "bg-[#0a1930]" : ""
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`${
                    s.imageFit === "contain" ? "object-contain" : "object-cover"
                  } group-hover:scale-105 transition-transform duration-500`}
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[17px] mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {s.title}
                </h3>
                <div className="text-[13px] font-semibold text-[var(--primary)] mb-2">
                  {s.price}
                </div>
                <p className="text-[13.5px] text-[var(--muted)] line-clamp-3 mb-4">
                  {s.short}
                </p>
                <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--primary)]">
                  Xem thêm <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
