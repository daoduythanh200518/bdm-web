type Props = {
  label?: string;
  className?: string;
  ratio?: string;
  variant?: "orange" | "blue" | "purple" | "dark" | "light";
  children?: React.ReactNode;
};

const VARIANTS = {
  orange:
    "from-[#f6a12a] via-[#ff8a00] to-[#e0901a] text-white",
  blue: "from-[#0093e3] via-[#1e6cd5] to-[#062f73] text-white",
  purple: "from-[#9b51e0] via-[#6d28d9] to-[#312e81] text-white",
  dark: "from-[#1a1a1a] via-[#2c2c2c] to-[#000] text-white",
  light: "from-[#fef3c7] via-[#fed7aa] to-[#fdba74] text-[#7c2d12]",
};

export default function Placeholder({
  label,
  className = "",
  ratio = "16/9",
  variant = "orange",
  children,
}: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-gradient-to-br ${VARIANTS[variant]} flex items-center justify-center ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-black/10 blur-2xl" />
      <div className="relative z-10 text-center px-6">
        {label && (
          <div className="text-2xl md:text-4xl font-bold drop-shadow-md">
            {label}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
