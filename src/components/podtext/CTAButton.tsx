import Link from "next/link";

export default function CTAButton({
  variant = "primary",
  children,
  href,
}: {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  href: string;
}) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium text-sm transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-[#E8B84B] text-[#0F0F0F] hover:bg-[#d4a63e] shadow-lg shadow-[#E8B84B]/20"
      : "border border-white/30 text-white hover:border-white hover:bg-white/5";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
