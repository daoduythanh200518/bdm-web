import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { SITE, NAV } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 mt-0">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4">
            <Image
              src="/images/logo/logo.png"
              alt="Biển Đông Media"
              width={300}
              height={269}
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="text-[13px] leading-relaxed text-gray-400">
            Cung cấp tài khoản quảng cáo Facebook, TikTok, Google. Dịch vụ
            booking truyền thông, KOLs chuyên nghiệp.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-[16px] tracking-wide text-[var(--primary)]">
            Liên kết nhanh
          </h4>
          <ul className="space-y-2 text-[13px]">
            {NAV.slice(0, 5).map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-[16px] tracking-wide text-[var(--primary)]">
            Dịch vụ
          </h4>
          <ul className="space-y-2 text-[13px]">
            <li>
              <Link
                href="/dich-vu/thue-tai-khoan-quang-cao"
                className="hover:text-[var(--primary)]"
              >
                Thuê tài khoản Quảng cáo
              </Link>
            </li>
            <li>
              <Link
                href="/dich-vu/tich-xanh-thuong-hieu"
                className="hover:text-[var(--primary)]"
              >
                Tích Xanh thương hiệu
              </Link>
            </li>
            <li>
              <Link
                href="/dich-vu/booking-bao-pr"
                className="hover:text-[var(--primary)]"
              >
                Booking báo / Viết bài PR
              </Link>
            </li>
            <li>
              <Link
                href="/dich-vu/dich-vu-bo-sung"
                className="hover:text-[var(--primary)]"
              >
                Dịch vụ bổ sung
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-[16px] tracking-wide text-[var(--primary)]">Liên hệ</h4>
          <ul className="space-y-3 text-[13px]">
            <li className="flex gap-2">
              <MapPin size={16} className="shrink-0 mt-0.5 text-[var(--primary)]" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-2 items-center">
              <Phone size={16} className="text-[var(--primary)]" />
              <a href={`tel:${SITE.hotlineRaw}`} className="hover:text-white">
                {SITE.hotline}
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <MessageCircle size={16} className="text-[var(--primary)]" />
              <a href={SITE.zaloLink} className="hover:text-white">
                Zalo: {SITE.zalo} ({SITE.zaloName})
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <Mail size={16} className="text-[var(--primary)]" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-[12px] text-gray-500 flex flex-col md:flex-row justify-between gap-2">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span>Designed with care for Vietnamese businesses.</span>
        </div>
      </div>
    </footer>
  );
}
