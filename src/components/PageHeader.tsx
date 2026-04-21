import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function PageHeader({
  title,
  subtitle,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative bg-gradient-to-br from-[var(--primary)] via-[#e0901a] to-[#c57100] text-white py-10 md:py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-10 w-60 md:w-72 h-60 md:h-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-60 md:w-72 h-60 md:h-72 rounded-full bg-black/20 blur-3xl" />
      </div>
      <div className="container-x relative z-10">
        <nav className="flex items-center flex-wrap gap-x-1.5 gap-y-1 text-[12px] md:text-[13px] mb-3 md:mb-4 opacity-95">
          <Link href="/" className="flex items-center gap-1 hover:underline">
            <Home size={13} /> Trang chủ
          </Link>
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1 md:gap-1.5 min-w-0">
              <ChevronRight size={13} className="shrink-0" />
              {c.href ? (
                <Link href={c.href} className="hover:underline truncate">
                  {c.label}
                </Link>
              ) : (
                <span className="font-semibold truncate">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow mb-3 leading-[1.2]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[14px] md:text-[15px] lg:text-lg opacity-95 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
