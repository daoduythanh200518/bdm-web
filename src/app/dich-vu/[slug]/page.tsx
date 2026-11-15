import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailView from "@/components/sections/ServiceDetail";
import { SERVICE_DETAILS } from "@/data/services";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/dich-vu/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const data = SERVICE_DETAILS[slug];
  if (!data) return { title: "Không tìm thấy" };
  // subtitle quá ngắn (~50 ký tự) cho meta description → dùng đoạn intro, tự rút gọn ≤160 ký tự
  return buildPageMetadata({
    title: data.title,
    description: data.intro,
    // Ảnh dịch vụ là PNG 3:2 ~1.8MB — không hợp làm ảnh chia sẻ → dùng og-image mặc định
    path: `/dich-vu/${slug}`,
  });
}

export default async function ServiceSlugPage(
  props: PageProps<"/dich-vu/[slug]">
) {
  const { slug } = await props.params;
  const data = SERVICE_DETAILS[slug];
  if (!data) notFound();
  return <ServiceDetailView data={data} />;
}
