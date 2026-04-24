import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/sections/PageHeader";
import StatsCounter from "@/components/sections/StatsCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Biển Đông Media — công ty truyền thông mạng xã hội số 1 Việt Nam, đối tác cao cấp nhất của Facebook. Hơn 1000 đối tác doanh nghiệp tin dùng.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Giới thiệu Biển Đông Media"
        subtitle="Công ty truyền thông mạng xã hội số 1 Việt Nam — đối tác cao cấp nhất của Facebook"
        crumbs={[{ label: "Giới thiệu" }]}
      />

      <section className="section-y bg-[var(--background)]">
        <div className="container-x grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="max-w-[520px] mx-auto lg:max-w-none w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#0a1930]">
              <Image
                src="/images/team/hanh-trinh-15.png"
                alt="Hành trình 15+ năm kinh nghiệm của Biển Đông Media"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <div className="text-[var(--primary)] font-semibold text-[12.5px] md:text-[13px] tracking-wider uppercase mb-2">
              Về chúng tôi
            </div>
            <h2 className="text-[24px] md:text-3xl lg:text-4xl font-extrabold mb-4 md:mb-5">
              Hành trình của Biển Đông Media
            </h2>
            <div className="space-y-3 md:space-y-4 text-[14.5px] md:text-[15px] text-[var(--foreground)]/80 leading-relaxed">
              <p>
                <strong>Biển Đông Media</strong> là công ty có vị thế vô cùng vững chắc trong lĩnh vực truyền thông, quảng cáo. Chúng tôi cung cấp toàn bộ các dịch vụ liên quan đến Facebook, Facebook Ads, Google Ads, Tiktok Ads.
              </p>
              <p>
                Với hơn 15 năm kinh nghiệm trong ngành, chúng tôi tự hào đã đồng hành cùng hơn <strong>1000 doanh nghiệp</strong> lớn nhỏ trong và ngoài nước, hoạt động trong các lĩnh vực tài chính, ngân hàng, bảo hiểm, viễn thông, giáo dục, bất động sản.
              </p>
              <p>
                Với định hướng: <strong>ổn định, lâu dài, tối ưu</strong>, khách hàng có thể hoàn toàn tin tưởng và yên tâm khi sử dụng các dịch vụ của Biển Đông Media.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-[var(--soft-bg)]">
        <div className="container-x">
          <SectionHeading
            title="Giá trị cốt lõi"
            subtitle="Những nguyên tắc định hình cách chúng tôi phục vụ khách hàng mỗi ngày"
            size="md"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { icon: Award, title: "Uy tín", text: "Đối tác cao cấp nhất của Facebook tại Việt Nam." },
              { icon: Users, title: "Tận tâm", text: "Hỗ trợ 24/7, đồng hành với mọi chiến dịch của khách hàng." },
              { icon: TrendingUp, title: "Hiệu quả", text: "Tối ưu ngân sách, cam kết ROAS vượt trội." },
              { icon: CheckCircle2, title: "Minh bạch", text: "Báo cáo rõ ràng, giá cả công khai, không phát sinh." },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-[var(--card)] p-4 md:p-6 rounded-2xl border border-[var(--border)] text-center hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <v.icon size={22} />
                </div>
                <h3 className="font-bold text-[15px] md:text-[17px] mb-1.5 md:mb-2">{v.title}</h3>
                <p className="text-[12.5px] md:text-[13.5px] text-[var(--muted)] leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />

      <section className="section-y bg-[var(--background)]">
        <div className="container-x max-w-4xl">
          <h2 className="text-[24px] md:text-3xl font-extrabold mb-5 md:mb-6 text-center">
            Tầm nhìn & Sứ mệnh
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div className="bg-[var(--muted-bg)] rounded-2xl p-5 md:p-7 border border-[var(--border)]">
              <div className="text-[var(--primary)] font-bold mb-2 text-[12px] md:text-[13px] tracking-wider uppercase">
                Tầm nhìn
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3">
                Công ty truyền thông #1 Đông Nam Á
              </h3>
              <p className="text-[14px] md:text-[14.5px] text-[var(--foreground)]/80 leading-relaxed">
                Trở thành công ty truyền thông mạng xã hội hàng đầu khu vực Đông Nam Á, mang giải pháp Digital Marketing tối ưu đến mọi doanh nghiệp Việt.
              </p>
            </div>
            <div className="bg-[var(--muted-bg)] rounded-2xl p-5 md:p-7 border border-[var(--border)]">
              <div className="text-[var(--primary)] font-bold mb-2 text-[12px] md:text-[13px] tracking-wider uppercase">
                Sứ mệnh
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3">
                Nâng tầm thương hiệu Việt
              </h3>
              <p className="text-[14px] md:text-[14.5px] text-[var(--foreground)]/80 leading-relaxed">
                Đồng hành cùng doanh nghiệp Việt Nam trên hành trình số hoá, cung cấp công cụ quảng cáo bền bỉ, uy tín với mức phí tối ưu nhất thị trường.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
