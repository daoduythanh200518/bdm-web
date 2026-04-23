export default function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse bg-[var(--muted-bg)] rounded-lg ${className}`}
    />
  );
}
