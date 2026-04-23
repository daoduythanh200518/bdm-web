import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { ServiceDetail as SD } from "@/types";
import PageHeader from "@/components/sections/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import HotlineButton from "@/components/ui/HotlineButton";
import CallToAction from "@/components/ui/CallToAction";

export default function ServiceDetailView({ data }: { data: SD }) {
  return (
    <>
      <PageHeader
        title={data.title}
        subtitle={data.subtitle}
        crumbs={[
          { label: "Dịch vụ", href: "/dich-vu" },
          { label: data.title },
        ]}
      />

      <section className="section-y bg-[var(--background)]">
        <div className="container-x grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="max-w-[520px] mx-auto lg:max-w-none w-full">
            <div
              className={`relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] ${
                data.imageFit === "contain" ? "bg-[#0a1930]" : ""
              }`}
            >
              <Image
                src={data.image}
                alt={data.title}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className={data.imageFit === "contain" ? "object-contain" : "object-cover"}
              />
              {data.imageFit !== "contain" && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <div className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-90">
                      {data.title}
                    </div>
                    <div className="text-base md:text-lg font-bold">{data.price}</div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div>
            <div className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full text-[11.5px] md:text-[12px] font-semibold uppercase tracking-wider mb-3">
              {data.price}
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3 md:mb-4">
              {data.title}
            </h2>
            <p className="text-[14.5px] md:text-[15px] text-[var(--foreground)]/80 leading-relaxed mb-5 md:mb-6">
              {data.intro}
            </p>
            <div className="flex flex-wrap gap-2.5 md:gap-3">
              <HotlineButton label="Tư vấn ngay" iconSize={16} />
              <Link href="/lien-he" className="btn btn-outline">
                Nhận báo giá
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-[var(--soft-bg)]">
        <div className="container-x">
          <SectionHeading
            title="Điểm nổi bật của dịch vụ"
            subtitle="Cam kết mang đến trải nghiệm tốt nhất cho khách hàng"
            size="md"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {data.highlights.map((h, i) => (
              <div
                key={i}
                className="bg-[var(--card)] text-[var(--card-foreground)] p-5 md:p-6 rounded-2xl border border-[var(--border)] hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-[15px] md:text-[16px] mb-2">{h.title}</h3>
                <p className="text-[13px] md:text-[13.5px] text-[var(--muted)] leading-relaxed">
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-[var(--background)]">
        <div className="container-x grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-[24px] md:text-3xl font-extrabold mb-4 md:mb-5">Quyền lợi khách hàng</h2>
            <ul className="space-y-3">
              {data.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="shrink-0 text-[var(--primary)] mt-0.5"
                  />
                  <span className="text-[15px] text-[var(--foreground)]/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {data.details && (
            <div className="space-y-6">
              {data.details.map((d, i) => (
                <div
                  key={i}
                  className="bg-[var(--muted-bg)] rounded-2xl p-6 border border-[var(--border)]"
                >
                  <h3 className="font-bold text-[17px] mb-3 text-[var(--primary)]">
                    {d.heading}
                  </h3>
                  <div className="space-y-2 text-[14.5px] text-[var(--foreground)]/80 leading-relaxed">
                    {d.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CallToAction
        title="Sẵn sàng bắt đầu?"
        description="Liên hệ ngay để được tư vấn gói dịch vụ phù hợp và nhận báo giá chi tiết."
      />
    </>
  );
}
