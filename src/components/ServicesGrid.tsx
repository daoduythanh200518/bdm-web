import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/site";

export default function ServicesGrid() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <div className="text-center mb-8 md:mb-12">
          <div className="text-[var(--primary)] font-semibold text-[13px] md:text-[14px] tracking-wider uppercase mb-2">
            Đa dạng dịch vụ
          </div>
          <h2 className="text-[26px] md:text-3xl lg:text-4xl font-extrabold mb-3">
            Giải pháp Digital Marketing hiệu quả
          </h2>
          <p className="text-[var(--muted)] text-[14px] md:text-[15px] max-w-2xl mx-auto">
            Với các nền tảng quảng cáo hàng đầu — Facebook, Google, TikTok, Instagram
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/dich-vu/${s.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
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
