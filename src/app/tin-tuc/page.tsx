import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import { NEWS } from "@/data/news";

export const metadata: Metadata = {
  title: "Tin tức mới",
  description:
    "Tin tức mới nhất về quảng cáo Facebook, TikTok, Google, Instagram. Cập nhật xu hướng Digital Marketing, case study và chia sẻ kinh nghiệm từ Biển Đông Media.",
};

export default function NewsIndexPage() {
  const [featured, ...rest] = NEWS;

  return (
    <>
      <PageHeader
        title="Tin tức mới"
        subtitle="Cập nhật xu hướng Digital Marketing, chiến lược quảng cáo và tin tức mới nhất từ Facebook, TikTok, Google, Instagram."
        crumbs={[{ label: "Tin tức" }]}
      />

      <section className="section-y bg-white">
        <div className="container-x">
          {/* Featured article */}
          <Link
            href={`/tin-tuc/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-stretch lg:items-center mb-10 md:mb-14 bg-[var(--muted-bg)] rounded-2xl overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="relative aspect-[16/9] lg:aspect-auto lg:h-full min-h-[220px] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 sm:p-6 md:p-8 lg:p-10">
              <div className="flex items-center flex-wrap gap-2 md:gap-3 text-[11.5px] md:text-[12px] text-[var(--muted)] mb-2 md:mb-3">
                <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-2.5 py-0.5 rounded font-semibold uppercase tracking-wider">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} /> {featured.date}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 md:mb-4 group-hover:text-[var(--primary)] transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed mb-4 md:mb-6">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 font-semibold text-[var(--primary)] text-[14px]">
                Đọc tiếp <ArrowRight size={16} />
              </span>
            </div>
          </Link>

          {/* Grid articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {rest.map((n) => (
              <Link
                key={n.slug}
                href={`/tin-tuc/${n.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-[11.5px] text-[var(--muted)] mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {n.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {n.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-[16.5px] mb-2 group-hover:text-[var(--primary)] transition-colors leading-snug">
                    {n.title}
                  </h3>
                  <p className="text-[13.5px] text-gray-600 line-clamp-3 mb-4 flex-1">
                    {n.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--primary)]">
                    Đọc tiếp <ArrowRight size={13} />
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
