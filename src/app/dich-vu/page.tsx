import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description:
    "Dịch vụ của Biển Đông Media: thuê tài khoản quảng cáo Facebook/TikTok/Google, tích xanh thương hiệu, booking báo PR, KOLs, truyền thông tổng hợp.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageHeader
        title="Dịch vụ của chúng tôi"
        subtitle="Giải pháp Digital Marketing toàn diện — từ tài khoản quảng cáo đến booking báo chí và KOLs"
        crumbs={[{ label: "Dịch vụ" }]}
      />
      <section className="section-y bg-[var(--background)]">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/dich-vu/${s.slug}`}
                className="group bg-[var(--card)] text-[var(--card-foreground)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col sm:flex-row"
              >
                <div className="sm:w-2/5 shrink-0 relative aspect-[16/10] sm:aspect-auto">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="sm:w-3/5 p-5 md:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-[var(--primary)] font-bold text-[12px] md:text-[13px] mb-1.5 md:mb-2 uppercase tracking-wider">
                      {s.price}
                    </div>
                    <h3 className="text-lg md:text-xl font-extrabold mb-2 md:mb-3 group-hover:text-[var(--primary)] transition-colors leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-[13.5px] md:text-[14px] text-[var(--muted)] leading-relaxed mb-3 md:mb-4">
                      {s.short}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[13px] md:text-[13.5px] font-semibold text-[var(--primary)]">
                    Xem chi tiết <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
