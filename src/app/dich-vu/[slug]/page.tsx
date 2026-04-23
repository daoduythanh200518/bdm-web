import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailView from "@/components/sections/ServiceDetail";
import { SERVICE_DETAILS } from "@/data/services";

export function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/dich-vu/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const data = SERVICE_DETAILS[slug];
  if (!data) return { title: "Không tìm thấy" };
  return {
    title: data.title,
    description: data.subtitle,
  };
}

export default async function ServiceSlugPage(
  props: PageProps<"/dich-vu/[slug]">
) {
  const { slug } = await props.params;
  const data = SERVICE_DETAILS[slug];
  if (!data) notFound();
  return <ServiceDetailView data={data} />;
}
