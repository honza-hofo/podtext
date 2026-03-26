export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <h2
        className="text-3xl md:text-4xl font-bold"
        style={{ fontFamily: "var(--font-heading), serif" }}
      >
        {title}
        <span className="text-[#E8B84B]">.</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-400 text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
