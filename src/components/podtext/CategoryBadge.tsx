const categoryColors: Record<string, string> = {
  "Rozhovor": "#E8B84B",
  "Reportáž": "#C0392B",
  "Profil": "#3498DB",
  "Komerční": "#27AE60",
  "Za kamerou": "#9B59B6",
  "Podcast": "#E67E22",
  "Firemní video": "#1ABC9C",
  "Redakce": "#E8B84B",
  "Medailonek": "#3498DB",
  "Sociální sítě": "#E67E22",
  "Komerční sdělení": "#27AE60",
};

export default function CategoryBadge({ category }: { category: string }) {
  const color = categoryColors[category] || "#E8B84B";

  return (
    <span
      className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
      style={{
        backgroundColor: `${color}20`,
        color: color,
      }}
    >
      {category}
    </span>
  );
}
