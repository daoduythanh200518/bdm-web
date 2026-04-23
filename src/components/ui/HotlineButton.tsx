import { Phone } from "lucide-react";
import { SITE } from "@/config/site";

type Variant = "primary" | "white" | "outline" | "outline-white";

type Props = {
  variant?: Variant;
  showNumber?: boolean;
  label?: string;
  className?: string;
  iconSize?: number;
};

const VARIANT_CLASS: Record<Variant, string> = {
  primary: "btn btn-primary",
  white: "btn btn-white",
  outline: "btn btn-outline",
  "outline-white":
    "btn btn-outline !border-white !text-white hover:!bg-white hover:!text-[var(--primary)]",
};

export default function HotlineButton({
  variant = "primary",
  showNumber = true,
  label,
  className = "",
  iconSize = 18,
}: Props) {
  return (
    <a href={`tel:${SITE.hotlineRaw}`} className={`${VARIANT_CLASS[variant]} ${className}`}>
      <Phone size={iconSize} />
      {label ?? (showNumber ? SITE.hotline : "Gọi ngay")}
    </a>
  );
}
