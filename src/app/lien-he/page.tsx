import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import ContactBanner from "@/components/sections/ContactBanner";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Liên hệ Biển Đông Media để được tư vấn miễn phí các dịch vụ thuê tài khoản quảng cáo, tích xanh, booking báo PR. Hotline 0327 345 555.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Liên hệ Biển Đông Media"
        subtitle="Đội ngũ tư vấn chuyên nghiệp luôn sẵn sàng hỗ trợ bạn 24/7"
        crumbs={[{ label: "Liên hệ" }]}
      />

      <section className="section-y bg-white">
        <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              icon: MapPin,
              title: "Địa chỉ",
              content: SITE.address,
              href: null,
            },
            {
              icon: Phone,
              title: "Hotline",
              content: SITE.hotline,
              href: `tel:${SITE.hotlineRaw}`,
            },
            {
              icon: MessageCircle,
              title: "Zalo",
              content: `${SITE.zalo} (${SITE.zaloName})`,
              href: SITE.zaloLink,
            },
            {
              icon: Mail,
              title: "Email",
              content: SITE.email,
              href: `mailto:${SITE.email}`,
            },
          ].map((c, i) => {
            const Body = (
              <>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <c.icon size={22} />
                </div>
                <div className="font-bold text-[14.5px] md:text-[15px] mb-2">{c.title}</div>
                <div className="text-[13px] md:text-[13.5px] text-gray-600 leading-relaxed break-words">
                  {c.content}
                </div>
              </>
            );
            return c.href ? (
              <a
                key={i}
                href={c.href}
                className="block text-center bg-[var(--soft-bg)] rounded-2xl p-5 md:p-6 border border-gray-100 hover:shadow-xl hover:border-[var(--primary)] transition-all"
              >
                {Body}
              </a>
            ) : (
              <div
                key={i}
                className="text-center bg-[var(--soft-bg)] rounded-2xl p-5 md:p-6 border border-gray-100"
              >
                {Body}
              </div>
            );
          })}
        </div>
      </section>

      <ContactBanner />

      <section className="py-10 md:py-12 bg-[var(--soft-bg)]">
        <div className="container-x">
          <div className="bg-white rounded-2xl p-5 sm:p-7 md:p-10 border border-gray-100 grid grid-cols-[auto_1fr] gap-4 md:gap-6 items-start md:items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-1.5 md:mb-2">Giờ làm việc</h3>
              <div className="text-[13.5px] md:text-[14.5px] text-gray-700 space-y-1">
                <p>Thứ Hai - Thứ Bảy: 08:00 - 18:00</p>
                <p>Chủ nhật: Nghỉ (hỗ trợ khẩn cấp qua hotline)</p>
                <p className="text-[var(--primary)] font-semibold mt-2">
                  ✓ Hỗ trợ kỹ thuật quảng cáo 24/7 qua Zalo & Messenger
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
