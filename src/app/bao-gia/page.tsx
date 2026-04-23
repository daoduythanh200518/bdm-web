import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import CallToAction from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "Báo giá",
  description:
    "Bảng giá thuê tài khoản quảng cáo Facebook, TikTok, Google và các dịch vụ truyền thông của Biển Đông Media. Giá cạnh tranh, minh bạch.",
};

const PACKAGES = [
  {
    name: "Cơ bản",
    subtitle: "Phù hợp SME, shop online",
    price: "10%",
    priceNote: "Phí quản lý",
    features: [
      "Tài khoản Facebook VIA",
      "Ngân sách từ 5 triệu/tháng",
      "Hỗ trợ kỹ thuật giờ hành chính",
      "Tư vấn target cơ bản",
      "Báo cáo tuần",
    ],
    featured: false,
  },
  {
    name: "Chuyên nghiệp",
    subtitle: "Phù hợp doanh nghiệp vừa",
    price: "8%",
    priceNote: "Phí quản lý",
    features: [
      "Tài khoản Facebook BM / Agency",
      "Ngân sách từ 30 triệu/tháng",
      "Hỗ trợ 24/7",
      "Tư vấn chiến lược chuyên sâu",
      "Báo cáo ngày + phân tích",
      "Kháng tài khoản ưu tiên",
    ],
    featured: true,
  },
  {
    name: "Doanh nghiệp",
    subtitle: "Phù hợp tập đoàn, thương hiệu lớn",
    price: "6%",
    priceNote: "Phí quản lý",
    features: [
      "Tài khoản BM / Agency cao cấp",
      "Ngân sách không giới hạn",
      "Account Manager riêng",
      "Ưu tiên kháng tài khoản",
      "Báo cáo realtime + tuỳ biến",
      "Ưu đãi khi book combo dịch vụ",
    ],
    featured: false,
  },
];

const SERVICE_PRICES = [
  { name: "Tích xanh Facebook", price: "Từ 50.000.000 đ", note: "Thời gian: 5-10 ngày làm việc" },
  { name: "Tích xanh TikTok", price: "Từ 80.000.000 đ", note: "Thời gian: 7-14 ngày làm việc" },
  { name: "Tích xanh Instagram", price: "Từ 70.000.000 đ", note: "Thời gian: 7-14 ngày làm việc" },
  { name: "Booking báo PR", price: "Từ 2.000.000 đ / bài", note: "Tuỳ đầu báo & chuyên mục" },
  { name: "Viết bài PR chuẩn SEO", price: "Từ 500.000 đ / bài", note: "1000-2000 từ, kèm ảnh" },
  { name: "Booking KOLs / KOCs", price: "Liên hệ", note: "Giá theo từng KOL, kênh, nền tảng" },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Bảng giá dịch vụ"
        subtitle="Giá cạnh tranh nhất thị trường — minh bạch, không phát sinh. Liên hệ hotline để nhận báo giá chi tiết cho dự án của bạn."
        crumbs={[{ label: "Báo giá" }]}
      />

      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            title="Gói thuê tài khoản quảng cáo"
            subtitle="Phí quản lý tính trên ngân sách quảng cáo hàng tháng"
            size="md"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:pt-4">
            {PACKAGES.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl p-6 md:p-7 border-2 transition-all ${
                  p.featured
                    ? "bg-gradient-to-br from-[var(--primary)] to-[#c57100] text-white border-[var(--primary)] shadow-2xl lg:-translate-y-3 sm:col-span-2 lg:col-span-1"
                    : "bg-white border-gray-100 hover:border-[var(--primary)]/40 hover:shadow-xl"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[var(--primary)] px-4 py-1 rounded-full text-[11px] md:text-[12px] font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
                    Phổ biến nhất
                  </div>
                )}
                <h3 className={`font-extrabold text-xl md:text-2xl mb-1 ${p.featured ? "text-white" : ""}`}>
                  {p.name}
                </h3>
                <p className={`text-[12.5px] md:text-[13px] mb-5 md:mb-6 ${p.featured ? "text-white/90" : "text-[var(--muted)]"}`}>
                  {p.subtitle}
                </p>
                <div className="mb-5 md:mb-6 flex items-end gap-2 flex-wrap">
                  <span className="text-4xl md:text-5xl font-extrabold leading-none">{p.price}</span>
                  <span className={`text-[12.5px] md:text-[13px] pb-1 ${p.featured ? "text-white/85" : "text-[var(--muted)]"}`}>
                    {p.priceNote}
                  </span>
                </div>
                <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-7">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13.5px] md:text-[14px]">
                      <Check
                        size={18}
                        className={`shrink-0 mt-0.5 ${p.featured ? "text-white" : "text-[var(--primary)]"}`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/lien-he"
                  className={p.featured ? "btn btn-white w-full" : "btn btn-primary w-full"}
                >
                  Liên hệ tư vấn
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-[var(--soft-bg)]">
        <div className="container-x">
          <SectionHeading
            title="Giá các dịch vụ khác"
            subtitle="Tham khảo mức giá khởi điểm — liên hệ để nhận báo giá chi tiết"
            size="md"
          />

          {/* Mobile: card stack */}
          <div className="md:hidden space-y-3">
            {SERVICE_PRICES.map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <div className="font-bold text-[14.5px] min-w-0 flex-1">{s.name}</div>
                  <div className="text-[var(--primary)] font-bold text-[14px] whitespace-nowrap">
                    {s.price}
                  </div>
                </div>
                <div className="text-[12.5px] text-[var(--muted)] leading-relaxed">
                  {s.note}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="hidden md:block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="grid grid-cols-[2fr_1fr_1.2fr] bg-[var(--primary)] text-white font-semibold p-4 text-[14px]">
              <div>Dịch vụ</div>
              <div>Mức giá</div>
              <div>Ghi chú</div>
            </div>
            {SERVICE_PRICES.map((s, i) => (
              <div
                key={s.name}
                className={`grid grid-cols-[2fr_1fr_1.2fr] p-4 text-[14px] items-center ${
                  i % 2 ? "bg-[var(--soft-bg)]" : "bg-white"
                } border-t border-gray-100`}
              >
                <div className="font-semibold">{s.name}</div>
                <div className="text-[var(--primary)] font-bold">{s.price}</div>
                <div className="text-[13px] text-[var(--muted)]">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Cần báo giá chi tiết?"
        description="Mỗi doanh nghiệp có nhu cầu riêng. Liên hệ đội ngũ tư vấn để nhận báo giá tuỳ chỉnh và ưu đãi theo combo dịch vụ."
        secondaryLabel="Gửi yêu cầu báo giá"
      />
    </>
  );
}
