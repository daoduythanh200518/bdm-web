import { Loader2 } from "lucide-react";

export default function Spinner({
  size = 20,
  className = "",
  label,
}: {
  size?: number;
  className?: string;
  label?: string;
}) {
  return (
    <span
      role="status"
      aria-live="polite"
      aria-label={label ?? "Đang tải"}
      className={`inline-flex items-center gap-2 text-[var(--muted)] ${className}`}
    >
      <Loader2 size={size} className="animate-spin text-[var(--primary)]" />
      {label && <span className="text-[14px]">{label}</span>}
    </span>
  );
}
