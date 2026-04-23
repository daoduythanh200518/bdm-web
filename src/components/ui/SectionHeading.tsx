type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "default" | "primary" | "white";
  size?: "md" | "lg";
  className?: string;
};

const TONES = {
  default: "",
  primary: "text-[var(--primary)]",
  white: "!text-white",
};

const SIZES = {
  md: "text-[24px] md:text-3xl",
  lg: "text-[26px] md:text-3xl lg:text-4xl",
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "default",
  size = "lg",
  className = "",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`${align === "center" ? "text-center mb-8 md:mb-12" : "mb-6 md:mb-8"} ${className}`}>
      {eyebrow && (
        <div className="text-[var(--primary)] font-semibold text-[12.5px] md:text-[13px] tracking-wider uppercase mb-2">
          {eyebrow}
        </div>
      )}
      <h2 className={`${SIZES[size]} font-extrabold mb-3 ${TONES[tone]}`}>{title}</h2>
      {subtitle && (
        <p className={`text-[var(--muted)] text-[14px] md:text-[15px] max-w-2xl leading-relaxed ${alignClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
