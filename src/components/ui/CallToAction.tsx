import Link from "next/link";
import HotlineButton from "./HotlineButton";

type Props = {
  title: string;
  description?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "gradient" | "soft";
};

export default function CallToAction({
  title,
  description,
  secondaryLabel = "Gửi yêu cầu tư vấn",
  secondaryHref = "/lien-he",
  variant = "gradient",
}: Props) {
  const isGradient = variant === "gradient";
  return (
    <section
      className={
        isGradient
          ? "section-y bg-gradient-to-br from-[var(--primary)] to-[#c57100] text-white"
          : "section-y bg-[var(--soft-bg)]"
      }
    >
      <div className="container-x text-center">
        <h2 className="text-[24px] md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-[14px] md:text-[15px] lg:text-lg opacity-95 mb-6 md:mb-7 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        <div className="flex flex-wrap gap-3 justify-center">
          <HotlineButton variant={isGradient ? "white" : "primary"} />
          <Link
            href={secondaryHref}
            className={
              isGradient
                ? "btn btn-outline !border-white !text-white hover:!bg-white hover:!text-[var(--primary)]"
                : "btn btn-outline"
            }
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
