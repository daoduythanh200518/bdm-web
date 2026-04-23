"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const FAQS = [
  {
    q: "Những sản phẩm nào có thể thuê tài khoản quảng cáo ở Biển Đông Media?",
    a: (
      <div className="space-y-2">
        <p>
          <strong>Ngành hàng sạch:</strong> Gia dụng, Thời trang, Nông nghiệp, Nhà hàng, khách sạn, cafe, ăn uống, dịch vụ,…
        </p>
        <p>
          <strong>Ngành hàng VPCS:</strong> Thẩm mỹ viện, Spa, Giảm cân, Giảm béo (không phẫu thuật), VPCS nhẹ.
        </p>
        <p>
          <strong>Ngành hàng KHÔNG nhận:</strong> Vi phạm pháp luật Việt Nam, sản phẩm Y tế và Gia dụng liên quan COVID 19, vũ khí, hàng cháy nổ, lừa đảo, bài bạc.
        </p>
      </div>
    ),
  },
  {
    q: "Tôi muốn thuê tài khoản riêng có được không? Có mất cọc không?",
    a: "Bạn có thể thuê tài khoản riêng, tuy nhiên phải đảm bảo được lượng ngân sách để duy trì tài khoản. Bạn sẽ KHÔNG mất cọc cho tài khoản khi thuê tài khoản riêng. Cụ thể xin liên hệ để chúng tôi tư vấn.",
  },
  {
    q: "Biển Đông Media share tài khoản quảng cáo như thế nào?",
    a: "Bạn phải chuẩn bị sẵn một tài khoản facebook (hoặc via). Chúng tôi sẽ cung cấp quyền sử dụng tài khoản quảng cáo sang tài khoản đó. Bạn tạo chiến dịch quảng cáo phải tuân thủ quy định của Biển Đông Media.",
  },
  {
    q: "Tôi muốn trở thành đối tác lâu dài của Biển Đông Media thì sẽ nhận được ưu đãi gì không?",
    a: "Chúng tôi có chính sách tri ân đặc biệt cho các đối tác, khách hàng. Một mối quan hệ hợp tác phát triển bền vững, cùng nhau đi lên cũng là hướng đi dài lâu của Biển Đông Media. Và chúng tôi cũng mong muốn mang đến nhiều giá trị cho đối tác của mình.",
  },
  {
    q: "Tôi có thể tham khảo bảng giá dịch vụ cụ thể tại đâu?",
    a: "Bạn hãy tham khảo giá của chúng tôi tại trang Báo giá. Hoặc liên hệ trực tiếp với nhân viên CSKH qua hotline, zalo hoặc facebook nhé!",
  },
  {
    q: "Có những dịch vụ tôi muốn đề xuất nhưng không được liệt kê sẵn? Bên bạn có thể đưa ra giải pháp và cung cấp dịch vụ bổ sung cho tôi?",
    a: "Với văn hoá luôn cố gắng giải quyết mọi vấn đề dù là nhỏ nhất! Chúng tôi luôn sẵn sàng lắng nghe và tư vấn cho Quý Khách Hàng. Nếu bạn có bất cứ nhu cầu gì liên quan đến Truyền Thông Mạng Xã Hội, chúng tôi đều có thể đưa ra giải pháp và giúp bạn giải quyết một cách nhanh nhất.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-y bg-[var(--muted-bg)]">
      <div className="container-x max-w-4xl">
        <SectionHeading title="Những câu hỏi thường gặp?" />
        <div className="space-y-2.5 md:space-y-3">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className="bg-[var(--card)] text-[var(--card-foreground)] rounded-xl border border-[var(--border)] overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 p-4 md:p-5 text-left font-semibold hover:bg-[var(--soft-bg)] transition-colors"
              >
                <span className="text-[13.5px] md:text-[15px] leading-snug">{f.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-[var(--primary)] transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-4 md:px-5 pb-4 md:pb-5 text-[13.5px] md:text-[14.5px] text-[var(--foreground)]/80 leading-relaxed border-t border-[var(--border)] pt-3 md:pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
