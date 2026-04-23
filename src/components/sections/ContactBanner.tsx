"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { SITE } from "@/config/site";

const schema = z.object({
  name: z.string().min(2, "Vui lòng nhập họ tên"),
  phone: z
    .string()
    .min(9, "Số điện thoại không hợp lệ")
    .regex(/^[0-9+\-.\s]+$/, "Số điện thoại chỉ chứa số"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactBanner() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    const t = toast.loading("Đang gửi yêu cầu tư vấn...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Gửi thất bại");
      toast.success("Đã gửi yêu cầu!", {
        id: t,
        description: "Chúng tôi sẽ liên hệ trong vòng 15 phút.",
      });
      reset();
    } catch {
      toast.error("Gửi thất bại", {
        id: t,
        description: "Vui lòng thử lại hoặc gọi hotline.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative section-y bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617] text-white overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[var(--primary)]/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container-x grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center relative z-10">
        <div>
          <div className="inline-block bg-[var(--primary)]/20 text-[var(--primary)] px-3.5 py-1 md:px-4 md:py-1.5 rounded-full text-[11px] md:text-[12px] font-semibold tracking-wider uppercase mb-3 md:mb-4">
            Tư vấn miễn phí
          </div>
          <h2 className="text-[26px] md:text-3xl lg:text-4xl font-black mb-3 md:mb-4 !text-white">
            Bạn cần tư vấn dịch vụ?
          </h2>
          <p className="text-gray-100 text-[14px] md:text-[15px] mb-5 md:mb-6 leading-relaxed font-medium">
            Để lại thông tin, đội ngũ Biển Đông Media sẽ liên hệ tư vấn trong vòng 15 phút trong giờ hành chính.
          </p>
          <a
            href={`tel:${SITE.hotlineRaw}`}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-2.5 md:px-5 md:py-3 rounded-xl hover:bg-white/15 transition-all max-w-full"
          >
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[var(--primary)] flex items-center justify-center shrink-0">
              <Phone size={18} />
            </div>
            <div className="min-w-0">
              <div className="text-[11.5px] md:text-[12px] text-gray-300">Hotline tư vấn</div>
              <div className="font-bold text-lg md:text-xl text-[var(--primary)] whitespace-nowrap">
                {SITE.hotline}
              </div>
            </div>
          </a>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[var(--card)] text-[var(--card-foreground)] rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl"
        >
          <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-5">Tư vấn trực tuyến</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-[13px] font-semibold mb-1.5">
                Họ tên <span className="text-red-500">*</span>
              </label>
              <input
                {...register("name")}
                placeholder="Nguyễn Văn A"
                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-[14px] text-[var(--foreground)] placeholder:text-[var(--muted)]"
              />
              {errors.name && (
                <p className="text-red-500 text-[12px] mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-[13px] font-semibold mb-1.5">
                Điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                {...register("phone")}
                placeholder="0327 345 555"
                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-[14px] text-[var(--foreground)] placeholder:text-[var(--muted)]"
              />
              {errors.phone && (
                <p className="text-red-500 text-[12px] mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-[13px] font-semibold mb-1.5">
                Nhu cầu của bạn (tuỳ chọn)
              </label>
              <textarea
                {...register("message")}
                rows={3}
                placeholder="Mô tả ngắn gọn nhu cầu..."
                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-[14px] text-[var(--foreground)] placeholder:text-[var(--muted)] resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Đang gửi...
                </>
              ) : (
                "Gửi yêu cầu tư vấn"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
