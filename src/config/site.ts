import type { NavItem } from "@/types";

export const SITE = {
  name: "Biển Đông Media",
  tagline: "Agency Marketing",
  description:
    "Cung cấp tài khoản quảng cáo: Facebook, TikTok, Google… Dịch vụ Facebook, Google, TikTok, Instagram, Booking truyền thông, KOLs.",
  url: "https://biendongmedia.vn",
  domain: "biendongmedia.vn",
  hotline: "0327 345 555",
  hotlineRaw: "0327345555",
  zalo: "0327345555",
  zaloName: "Mrs. Hồng Loan",
  email: "info@biendongmedia.vn",
  supportEmail: "hotro@biendongmedia.vn",
  address: "Số 121 Đê La Thành, phường Văn Miếu - Quốc Tử Giám, thành phố Hà Nội",
  messenger: "https://www.facebook.com/Biendongmediaa",
  zaloLink: "https://zalo.me/0327345555",
};

export const NAV: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  {
    label: "Dịch vụ",
    href: "/dich-vu",
    children: [
      { label: "Thuê tài khoản Quảng cáo", href: "/dich-vu/thue-tai-khoan-quang-cao" },
      { label: "Tích Xanh thương hiệu", href: "/dich-vu/tich-xanh-thuong-hieu" },
      { label: "Booking báo / Viết bài PR", href: "/dich-vu/booking-bao-pr" },
      { label: "Dịch vụ bổ sung", href: "/dich-vu/dich-vu-bo-sung" },
    ],
  },
  {
    label: "Báo giá",
    href: "/bao-gia",
    children: [
      { label: "Báo giá", href: "/bao-gia" },
      { label: "Báo giá Báo", href: "/bao-gia/bao" },
    ],
  },
  { label: "Tin tức mới", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];
