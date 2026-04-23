import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="section-y bg-[var(--background)]">
      <div className="container-x grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="max-w-[520px] mx-auto lg:max-w-none w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <Image
              src="/images/team/team.jpg"
              alt="Đội ngũ Biển Đông Media"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
              <div className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-90">Đội ngũ chuyên gia</div>
              <div className="text-lg md:text-2xl font-bold">15+ năm kinh nghiệm</div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[26px] md:text-3xl lg:text-4xl font-extrabold mb-2 text-[var(--primary)]">
            Biển Đông Media
          </h2>
          <p className="text-[var(--muted)] text-lg mb-5 font-medium">
            Đối tác cao cấp nhất của Facebook tại Việt Nam
          </p>
          <div className="space-y-4 text-[15px] leading-relaxed text-[var(--foreground)]/80">
            <p>
              <strong className="text-[var(--foreground)]">Biển Đông Media</strong> là công ty có vị thế vô cùng vững chắc trong lĩnh vực truyền thông, quảng cáo. Chúng tôi cung cấp toàn bộ các dịch vụ liên quan đến Facebook, Facebook Ads, Google Ads, Tiktok Ads,…
            </p>
            <p>
              Từ khi thành lập và hoạt động đến nay, Biển Đông Media luôn là cái tên được biết đến với sự uy tín, chuyên nghiệp, nhanh chóng, chính xác. Chúng tôi tự hào khi được công nhận là đối tác cao cấp nhất của Facebook.
            </p>
            <p>
              Với định hướng: <strong>ổn định, lâu dài, tối ưu</strong>, khách hàng có thể hoàn toàn tin tưởng và yên tâm khi sử dụng các dịch vụ của Biển Đông Media.
            </p>
          </div>
          <Link href="/gioi-thieu" className="btn btn-primary mt-8">
            Xem thêm
          </Link>
        </div>
      </div>
    </section>
  );
}
