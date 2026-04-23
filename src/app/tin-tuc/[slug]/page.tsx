import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import { NEWS } from "@/data/news";

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata(
  props: PageProps<"/tin-tuc/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const item = NEWS.find((n) => n.slug === slug);
  if (!item) return { title: "Không tìm thấy bài viết" };
  return { title: item.title, description: item.excerpt };
}

export default async function NewsDetailPage(
  props: PageProps<"/tin-tuc/[slug]">
) {
  const { slug } = await props.params;
  const item = NEWS.find((n) => n.slug === slug);
  if (!item) notFound();

  const idx = NEWS.findIndex((n) => n.slug === slug);
  const related = NEWS.filter((_, i) => i !== idx).slice(0, 3);

  return (
    <>
      <PageHeader
        title={item.title}
        crumbs={[
          { label: "Tin tức", href: "/tin-tuc" },
          { label: item.category },
        ]}
      />

      <article className="section-y bg-[var(--background)]">
        <div className="container-x max-w-4xl">
          <div className="flex items-center flex-wrap gap-2 md:gap-4 text-[12px] md:text-[13px] text-[var(--muted)] mb-5 md:mb-6">
            <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full font-semibold uppercase tracking-wider text-[10.5px] md:text-[11px]">
              {item.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={13} /> {item.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={13} /> {item.readTime}
            </span>
          </div>

          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 md:mb-10 shadow-lg">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-base md:text-xl text-[var(--foreground)]/80 font-medium leading-relaxed mb-6 md:mb-8 border-l-4 border-[var(--primary)] pl-4 md:pl-5 italic">
              {item.excerpt}
            </p>
            <div className="space-y-4 md:space-y-5 text-[14.5px] md:text-[16px] text-[var(--foreground)] leading-relaxed">
              {item.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row gap-3 sm:justify-between">
            <Link href="/tin-tuc" className="btn btn-outline">
              <ArrowLeft size={16} /> Tất cả bài viết
            </Link>
            <Link href="/lien-he" className="btn btn-primary">
              Tư vấn cho doanh nghiệp của bạn <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>

      <section className="section-y bg-[var(--soft-bg)]">
        <div className="container-x">
          <h2 className="text-[22px] md:text-3xl font-extrabold mb-6 md:mb-8 text-center">
            Bài viết liên quan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/tin-tuc/${r.slug}`}
                className="group bg-[var(--card)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[15.5px] mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                    {r.title}
                  </h3>
                  <div className="text-[12px] text-[var(--muted)]">{r.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
