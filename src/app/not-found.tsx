import Link from "next/link";
import { Home } from "lucide-react";
import HotlineButton from "@/components/ui/HotlineButton";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center bg-[var(--soft-bg)]">
      <div className="container-x text-center py-16">
        <div className="text-[var(--primary)] text-[140px] md:text-[180px] font-extrabold leading-none">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold mt-2 mb-4">
          Không tìm thấy trang
        </h1>
        <p className="text-[var(--muted)] max-w-xl mx-auto mb-8">
          Rất tiếc, trang bạn tìm không tồn tại hoặc đã được chuyển. Bạn có thể
          quay về trang chủ hoặc liên hệ với chúng tôi để được hỗ trợ.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn btn-primary">
            <Home size={18} /> Về trang chủ
          </Link>
          <HotlineButton variant="outline" />
        </div>
      </div>
    </section>
  );
}
