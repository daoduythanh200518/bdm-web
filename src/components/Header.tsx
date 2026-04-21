"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
          : "bg-white/95 backdrop-blur"
      }`}
    >
      <div className="container-x flex items-center justify-between h-[60px] md:h-[68px] gap-3">
        {/* Logo (text only) */}
        <Link href="/" className="flex flex-col leading-tight shrink-0" aria-label="Biển Đông Media">
          <span className="font-extrabold text-[16px] md:text-[19px] tracking-tight text-[var(--primary)]">
            BIỂN ĐÔNG MEDIA
          </span>
          <span className="hidden sm:block text-[10px] md:text-[11px] text-[var(--muted)] uppercase tracking-[0.18em]">
            Agency Marketing
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {NAV.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className="px-2.5 xl:px-3 py-2 text-[13.5px] xl:text-[14px] font-medium text-[var(--foreground)] hover:text-[var(--primary)] flex items-center gap-1 transition-colors whitespace-nowrap"
              >
                {item.label}
                {item.children && <ChevronDown size={14} />}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 min-w-[260px] bg-white shadow-xl rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-3 text-[14px] hover:bg-[var(--muted-bg)] hover:text-[var(--primary)] transition-colors"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Hotline + mobile toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${SITE.hotlineRaw}`}
            className="hidden md:inline-flex items-center gap-2 btn btn-primary !py-2 !px-3.5 !min-h-0 !text-[13px] lg:!text-[13.5px]"
          >
            <Phone size={15} />
            <span className="hidden lg:inline">{SITE.hotline}</span>
            <span className="lg:hidden">Gọi</span>
          </a>
          <a
            href={`tel:${SITE.hotlineRaw}`}
            aria-label="Gọi hotline"
            className="md:hidden w-9 h-9 rounded-full bg-[var(--primary)] text-white flex items-center justify-center"
          >
            <Phone size={16} />
          </a>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-1.5 -mr-1.5"
            aria-label="Mở menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Đóng"
                className="p-1.5 -mr-1.5"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-2">
              {NAV.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 font-medium border-b border-gray-100"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="bg-[var(--muted-bg)]">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block px-8 py-2.5 text-[13px] text-[var(--muted)]"
                        >
                          → {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="p-4 border-t">
              <a
                href={`tel:${SITE.hotlineRaw}`}
                className="btn btn-primary w-full"
              >
                <Phone size={16} /> {SITE.hotline}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
