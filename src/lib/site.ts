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
  messenger: "https://www.messenger.com/t/Biendongmedia.net",
  zaloLink: "https://zalo.me/0327345555",
};

export const NAV = [
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

export const SERVICES = [
  {
    slug: "thue-tai-khoan-quang-cao",
    title: "Thuê tài khoản Quảng cáo",
    short: "Facebook: Phí quản lý tài khoản: Chỉ từ 6%. Với sự phát triển mạnh mẽ…",
    price: "Từ 6% phí quản lý",
    image: "/images/services/banner-dv1.jpg",
  },
  {
    slug: "tich-xanh-thuong-hieu",
    title: "Tích Xanh thương hiệu",
    short: "Mức giá: Chỉ từ 50tr. Tiktok, Instagram, Facebook. Đi kèm với dịch vụ này…",
    price: "Chỉ từ 50tr",
    image: "/images/services/tich-xanh-banner.png",
  },
  {
    slug: "booking-bao-pr",
    title: "Booking báo / Viết bài PR",
    short: "Là đối tác cao cấp của các đầu báo lớn như: VNExpress, Vtv, Zing, Thanh Niên…",
    price: "Liên hệ báo giá",
    image: "/images/services/banner-dv3.jpg",
  },
  {
    slug: "dich-vu-bo-sung",
    title: "Dịch vụ bổ sung",
    short: "Liên hệ với chúng tôi để được tư vấn và gửi báo giá cụ thể.",
    price: "Liên hệ báo giá",
    image: "/images/services/truyenthong.jpg",
  },
];
