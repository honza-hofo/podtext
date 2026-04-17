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
      ? "bg-[#E8B84B] text-white hover:bg-[#d4a63e] shadow-lg shadow-[#E8B84B]/20"
      : "border border-gray-300 text-gray-700 hover:border-gray-900 hover:bg-gray-50";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
