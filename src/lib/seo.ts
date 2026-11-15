import type { Metadata } from "next";
import { SITE } from "@/config/site";
import type { NewsItem } from "@/types";

/** Ảnh chia sẻ mặc định (Facebook/Zalo) — chuẩn 1200x630 */
const DEFAULT_OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `${SITE.name} — ${SITE.tagline}`,
};

const MAX_DESCRIPTION_LENGTH = 160;

/** Rút gọn mô tả về ≤160 ký tự tại ranh giới từ để Google không tự cắt giữa câu */
export function toMetaDescription(text: string): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= MAX_DESCRIPTION_LENGTH) return clean;
  const cut = clean.slice(0, MAX_DESCRIPTION_LENGTH - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const head = lastSpace > 0 ? cut.slice(0, lastSpace) : cut;
  return `${head.replace(/[\s,.;:–—-]+$/, "")}…`;
}

/** "18/04/2026" → "2026-04-18" (ISO 8601 cho Open Graph & schema.org) */
export function toIsoDate(viDate: string): string | undefined {
  const m = viDate.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  return m ? `${m[3]}-${m[2]}-${m[1]}` : undefined;
}

/** Ảnh chia sẻ 1200x630 của bài viết (JPG nhẹ, tạo sẵn từ ảnh bìa bài) */
export function newsShareImage(slug: string): string {
  return `/images/news/og/${slug}.jpg`;
}

type PageMetadataInput = {
  /** Bỏ trống cho trang chủ (dùng title mặc định của layout) */
  title?: string;
  description: string;
  /** Đường dẫn tương đối, ví dụ "/dich-vu" — ghép với metadataBase */
  path: string;
  /** Ảnh chia sẻ riêng, BẮT BUỘC kích thước 1200x630; mặc định dùng og-image.jpg */
  image?: string;
  type?: "website" | "article";
  /** Ngày đăng (ISO 8601) — chỉ dùng cho type "article" */
  publishedTime?: string;
};

/**
 * Metadata đầy đủ cho một trang. Next merge metadata theo kiểu shallow nên
 * openGraph/twitter của trang con phải khai báo lại đủ trường, nếu không sẽ mất title/ảnh.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
}: PageMetadataInput): Metadata {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.tagline}`;
  const desc = toMetaDescription(description);
  const images = image
    ? [{ url: image, width: 1200, height: 630, alt: title ?? SITE.name }]
    : [DEFAULT_OG_IMAGE];

  return {
    ...(title && { title }),
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description: desc,
      url: path,
      siteName: SITE.name,
      locale: "vi_VN",
      type,
      images,
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: images.map((i) => i.url),
    },
  };
}

/** Schema.org Organization — giúp Google hiển thị thông tin doanh nghiệp */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/logo/logo.png`,
    image: `${SITE.url}${DEFAULT_OG_IMAGE.url}`,
    description: SITE.description,
    email: SITE.email,
    telephone: `+84${SITE.hotlineRaw.slice(1)}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: "Hà Nội",
      addressCountry: "VN",
    },
    sameAs: [SITE.messenger],
  };
}

/** Schema.org Article cho trang chi tiết tin tức */
export function articleJsonLd(item: NewsItem) {
  const url = `${SITE.url}/tin-tuc/${item.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: toMetaDescription(item.excerpt),
    image: [`${SITE.url}${newsShareImage(item.slug)}`, `${SITE.url}${item.image}`],
    datePublished: toIsoDate(item.date),
    mainEntityOfPage: url,
    url,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/images/logo/logo.png` },
    },
  };
}
