import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Báo giá Báo chí",
  description:
    "Bảng giá booking đăng bài PR trên các đầu báo lớn: VNExpress, VTV, Zing, Thanh Niên, Dân Trí. Giá ưu đãi cho đối tác của Biển Đông Media.",
};

const PRESS_PRICES = [
  { outlet: "VNExpress", category: "Kinh doanh / Khởi nghiệp", price: "20.000.000 đ", turn: "24-48h" },
  { outlet: "VNExpress", category: "Đời sống / Sức khoẻ", price: "18.000.000 đ", turn: "24-48h" },
  { outlet: "VTV.vn", category: "Thương hiệu / Công nghệ", price: "22.000.000 đ", turn: "48h" },
  { outlet: "Zing.vn", category: "Life / Business", price: "15.000.000 đ", turn: "24h" },
  { outlet: "Thanh Niên", category: "Kinh doanh", price: "16.000.000 đ", turn: "24-48h" },
  { outlet: "Dân Trí", category: "Doanh nghiệp", price: "14.000.000 đ", turn: "24h" },
  { outlet: "Tuổi Trẻ", category: "Kinh tế", price: "15.000.000 đ", turn: "24-48h" },
  { outlet: "Kenh14", category: "Lifestyle / Trend", price: "12.000.000 đ", turn: "24h" },
  { outlet: "CafeF", category: "Tài chính", price: "10.000.000 đ", turn: "24h" },
  { outlet: "Vietnamnet", category: "Tin tức", price: "12.000.000 đ", turn: "24-48h" },
];

export default function PressPricingPage() {
  return (
    <>
      <PageHeader
        title="Báo giá Báo chí"
        subtitle="Đối tác cao cấp của các đầu báo hàng đầu Việt Nam. Giá niêm yết dưới đây là giá khởi điểm, ưu đãi theo khối lượng bài."
        crumbs={[
          { label: "Báo giá", href: "/bao-gia" },
          { label: "Báo giá Báo" },
        ]}
      />

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="bg-[var(--muted-bg)] rounded-2xl p-4 md:p-5 mb-6 md:mb-8 text-[13px] md:text-[13.5px] text-gray-700 border-l-4 border-[var(--primary)] leading-relaxed">
            <strong>Lưu ý:</strong> Giá trên là giá list công khai, chưa bao gồm chiết khấu. Đặt combo 3+ bài sẽ được ưu đãi từ 10-25%. Bài dài hơn 1500 từ, bài có ảnh/video phụ sẽ tính phụ thu. Liên hệ hotline để được báo giá chi tiết và ưu đãi tốt nhất.
          </div>

          {/* Mobile: card stack */}
          <div className="md:hidden space-y-3">
            {PRESS_PRICES.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-4"
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div className="font-bold text-[15px] min-w-0 flex-1">{p.outlet}</div>
                  <div className="text-[var(--primary)] font-bold text-[14px] whitespace-nowrap">
                    {p.price}
                  </div>
                </div>
                <div className="text-[13px] text-gray-600 mb-1.5">{p.category}</div>
                <div className="text-[12px] text-[var(--muted)] flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                  Thời gian: {p.turn}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop / tablet: table */}
          <div className="hidden md:block table-scroll bg-white rounded-2xl shadow-sm border border-gray-100">
            <table className="w-full text-[14px]">
              <thead className="bg-[var(--primary)] text-white">
                <tr>
                  <th className="text-left p-4 font-semibold whitespace-nowrap">Đầu báo</th>
                  <th className="text-left p-4 font-semibold">Chuyên mục</th>
                  <th className="text-right p-4 font-semibold whitespace-nowrap">Giá niêm yết</th>
                  <th className="text-center p-4 font-semibold whitespace-nowrap">Thời gian</th>
                </tr>
              </thead>
              <tbody>
                {PRESS_PRICES.map((p, i) => (
                  <tr
                    key={i}
                    className={`border-t border-gray-100 ${i % 2 ? "bg-[var(--soft-bg)]" : ""}`}
                  >
                    <td className="p-4 font-bold whitespace-nowrap">{p.outlet}</td>
                    <td className="p-4 text-gray-700">{p.category}</td>
                    <td className="p-4 text-right font-bold text-[var(--primary)] whitespace-nowrap">{p.price}</td>
                    <td className="p-4 text-center text-[var(--muted)] whitespace-nowrap">{p.turn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-y bg-[var(--soft-bg)]">
        <div className="container-x text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Muốn báo giá đầu báo chưa có trong danh sách?
          </h2>
          <p className="text-[var(--muted)] mb-7 max-w-2xl mx-auto">
            Biển Đông Media có quan hệ với hơn 50 đầu báo lớn nhỏ. Liên hệ để nhận báo giá cho bất kỳ đầu báo nào bạn cần.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={`tel:${SITE.hotlineRaw}`} className="btn btn-primary">
              <Phone size={18} /> {SITE.hotline}
            </a>
            <Link href="/lien-he" className="btn btn-outline">
              Gửi yêu cầu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
