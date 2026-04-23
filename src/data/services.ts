import type { ServiceDetail, ServiceSummary } from "@/types";

export const SERVICES: ServiceSummary[] = [
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
    image: "/images/services/tich-xanh-banner.jpg",
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

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "thue-tai-khoan-quang-cao": {
    slug: "thue-tai-khoan-quang-cao",
    title: "Thuê tài khoản Quảng cáo",
    subtitle: "Facebook, TikTok, Google — phí quản lý chỉ từ 6%",
    price: "Từ 6% phí quản lý",
    heroVariant: "orange",
    image: "/images/services/banner-dv1.jpg",
    intro:
      "Với sự phát triển mạnh mẽ của thị trường quảng cáo trực tuyến, việc sở hữu tài khoản quảng cáo ổn định, bền bỉ là yếu tố sống còn của mọi doanh nghiệp. Biển Đông Media cung cấp dịch vụ thuê tài khoản quảng cáo Facebook, TikTok, Google với giá cạnh tranh nhất thị trường.",
    highlights: [
      {
        title: "Tài khoản bền bỉ",
        text: "Tài khoản được tuyển chọn kỹ, có lịch sử chi tiêu tốt, ít bị khoá.",
      },
      {
        title: "Phí quản lý từ 6%",
        text: "Mức phí cạnh tranh nhất thị trường. Ngân sách càng cao phí càng thấp.",
      },
      {
        title: "Hỗ trợ 24/7",
        text: "Nhân viên Support Facebook đồng hành cùng bạn mọi lúc.",
      },
      {
        title: "Đối tác cao cấp nhất",
        text: "Biển Đông Media là đối tác cao cấp nhất của Facebook tại Việt Nam.",
      },
    ],
    benefits: [
      "Tài khoản Facebook BM, Via, Agency được tuyển chọn kỹ",
      "Hỗ trợ kháng tài khoản nhanh chóng khi gặp sự cố",
      "Tư vấn chiến lược chạy quảng cáo miễn phí",
      "Ưu đãi riêng cho khách hàng dài hạn",
      "Thanh toán linh hoạt, minh bạch",
    ],
    details: [
      {
        heading: "Các loại tài khoản quảng cáo",
        paragraphs: [
          "Tài khoản quảng cáo Facebook BM (Business Manager) — phù hợp doanh nghiệp vừa và lớn.",
          "Tài khoản VIA Facebook — phù hợp các chiến dịch ngắn hạn, ngân sách vừa.",
          "Tài khoản TikTok Ads — đón đầu xu hướng video ngắn.",
          "Tài khoản Google Ads — Search, Display, Shopping, YouTube Ads.",
        ],
      },
      {
        heading: "Ngành hàng nhận chạy",
        paragraphs: [
          "Ngành hàng sạch: Gia dụng, Thời trang, Nông nghiệp, Nhà hàng, Khách sạn, Cafe, Dịch vụ.",
          "Ngành hàng VPCS: Thẩm mỹ viện, Spa, Giảm cân, Giảm béo không phẫu thuật.",
          "KHÔNG nhận: sản phẩm vi phạm pháp luật, vũ khí cháy nổ, lừa đảo, bài bạc.",
        ],
      },
    ],
  },
  "tich-xanh-thuong-hieu": {
    slug: "tich-xanh-thuong-hieu",
    title: "Tích Xanh thương hiệu",
    subtitle: "Xác minh tích xanh Facebook, TikTok, Instagram",
    price: "Chỉ từ 50 triệu",
    heroVariant: "blue",
    image: "/images/services/tich-xanh-banner.jpg",
    imageFit: "contain",
    intro:
      "Tích xanh là dấu xác thực quan trọng giúp nâng tầm thương hiệu, tăng uy tín và niềm tin với khách hàng. Biển Đông Media hỗ trợ xác minh tích xanh trên Facebook, TikTok, Instagram cho cả cá nhân và doanh nghiệp.",
    highlights: [
      { title: "Tỷ lệ thành công cao", text: "Đội ngũ chuyên gia hỗ trợ hồ sơ từ A đến Z." },
      { title: "Đa nền tảng", text: "Facebook, TikTok, Instagram — tích xanh trọn gói." },
      { title: "Mức giá cạnh tranh", text: "Chỉ từ 50 triệu, minh bạch, không phát sinh." },
      { title: "Bảo hành dịch vụ", text: "Cam kết hoàn phí nếu không đạt kết quả." },
    ],
    benefits: [
      "Tăng uy tín thương hiệu, định vị cao cấp",
      "Tăng tỷ lệ chuyển đổi và độ tin cậy",
      "Tăng reach tự nhiên, ưu tiên hiển thị",
      "Bảo vệ tài khoản khỏi giả mạo, fake",
      "Hỗ trợ xử lý hồ sơ trong 5-10 ngày làm việc",
    ],
  },
  "booking-bao-pr": {
    slug: "booking-bao-pr",
    title: "Booking báo / Viết bài PR",
    subtitle: "Đối tác cao cấp của VNExpress, VTV, Zing, Thanh Niên",
    price: "Liên hệ báo giá",
    heroVariant: "purple",
    image: "/images/services/banner-dv3.jpg",
    intro:
      "Biển Đông Media là đối tác cao cấp của các đầu báo lớn hàng đầu Việt Nam. Chúng tôi nhận booking đăng bài PR, viết bài chuyên sâu, quảng cáo thương hiệu trên các tờ báo uy tín với mức giá ưu đãi nhất.",
    highlights: [
      { title: "Đối tác Top báo lớn", text: "VNExpress, VTV, Zing, Thanh Niên, Dân Trí..." },
      { title: "Content chất lượng", text: "Đội ngũ copywriter chuyên nghiệp, SEO tối ưu." },
      { title: "Duyệt bài nhanh", text: "Từ 24-48h có bài lên sóng." },
      { title: "Báo giá minh bạch", text: "Giá list công khai, chiết khấu theo khối lượng." },
    ],
    benefits: [
      "Nâng cao nhận diện thương hiệu trên truyền thông đại chúng",
      "Tăng độ uy tín, chỉ mục backlink chất lượng cho SEO",
      "Hỗ trợ viết bài PR theo yêu cầu, định hướng thông điệp",
      "Đa dạng chuyên mục: Kinh doanh, Công nghệ, Sức khoẻ, Giáo dục...",
      "Báo cáo hiệu quả sau khi bài đăng",
    ],
  },
  "dich-vu-bo-sung": {
    slug: "dich-vu-bo-sung",
    title: "Dịch vụ bổ sung",
    subtitle: "KOLs, truyền thông tổng hợp, giải pháp chuyên biệt",
    price: "Liên hệ báo giá",
    heroVariant: "dark",
    image: "/images/services/truyenthong.jpg",
    intro:
      "Bên cạnh các dịch vụ chính, Biển Đông Media còn cung cấp nhiều giải pháp truyền thông bổ sung theo yêu cầu: Booking KOLs/KOCs, quản lý fanpage, sáng tạo nội dung, livestream. Hãy liên hệ để chúng tôi tư vấn gói dịch vụ phù hợp.",
    highlights: [
      { title: "Booking KOLs / KOCs", text: "Mạng lưới influencer đa ngành, đa mức giá." },
      { title: "Quản lý Fanpage", text: "Chăm sóc fanpage, trả lời khách hàng, content hàng ngày." },
      { title: "Content Marketing", text: "Sáng tạo video, hình ảnh, landing page." },
      { title: "Livestream bán hàng", text: "Host MC chuyên nghiệp, kịch bản tối ưu chuyển đổi." },
    ],
    benefits: [
      "Giải pháp truyền thông trọn gói, một đầu mối duy nhất",
      "Đội ngũ chuyên gia nhiều năm kinh nghiệm",
      "Cam kết KPI theo từng gói dịch vụ",
      "Báo cáo định kỳ minh bạch",
      "Linh hoạt tuỳ chỉnh theo nhu cầu doanh nghiệp",
    ],
  },
};
