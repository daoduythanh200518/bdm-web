import SectionHeading from "@/components/ui/SectionHeading";

const STEPS = [
  { n: "01", text: "Anh chị gửi post demo / ladi / website / sản phẩm để bên em duyệt" },
  { n: "02", text: "Anh chị liên hệ trực tiếp qua Zalo / Facebook của Biển Đông Media." },
  { n: "03", text: "Thông báo ngân sách và thống nhất mức phí quản lý" },
  { n: "04", text: "Anh/chị tạo mã khách hàng gồm 5 kí tự (3 chữ + 2 số) Ví dụ: BDM33" },
  { n: "05", text: "Anh/chị nạp tiền theo đúng quy chuẩn vào thông tin chuyển khoản" },
  { n: "06", text: "Bên em cung cấp tài khoản quảng cáo theo quy trình cấp." },
];

export default function ProcessSteps() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <SectionHeading title="Quy trình thuê tài khoản quảng cáo" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="relative bg-[var(--soft-bg)] rounded-2xl p-5 md:p-7 hover:shadow-xl transition-all hover:bg-white border border-gray-100"
            >
              <div className="text-5xl md:text-6xl font-extrabold text-[var(--primary)]/20 absolute top-2 right-4 select-none">
                {s.n}
              </div>
              <div className="relative">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold text-base md:text-lg mb-3 md:mb-4">
                  {s.n}
                </div>
                <p className="text-[14px] md:text-[14.5px] text-gray-700 leading-relaxed">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
