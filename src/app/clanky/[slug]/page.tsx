import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug, articles, formatDate } from "@/lib/data";
import CategoryBadge from "@/components/podtext/CategoryBadge";
import ArticleCard from "@/components/podtext/ArticleCard";
import ShareButtons from "./ShareButtons";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  const paragraphs = article.content
    ? article.content.split("\n\n")
    : [
        article.excerpt,
        "Tento článek je ukázkou naší redakční tvorby. Celý text si můžete přečíst v plné verzi na našem webu.",
        "V Podtextu věříme, že kvalitní obsah je základem každé dobré komunikace. Ať už jde o reportáž, rozhovor nebo firemní článek — vždy hledáme příběh, který stojí za vyprávění.",
        "Zajímá vás, jak pracujeme? Podívejte se na naše další články nebo nás kontaktujte přímo.",
      ];

  return (
    <article className="pt-32 pb-24">
      {/* Hero image */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 -mt-32 relative z-10">
        <CategoryBadge category={article.category} />

        <h1
          className="mt-6 text-3xl md:text-5xl font-bold leading-tight"
          style={{ fontFamily: "var(--font-heading), serif" }}
        >
          {article.title}
        </h1>

        {/* Byline */}
        <div className="mt-6 flex items-center gap-4 text-sm text-gray-400 border-b border-[#2A2A2A] pb-6">
          <span className="font-medium text-white">{article.author}</span>
          <span>&middot;</span>
          <span>{formatDate(article.date)}</span>
          <span>&middot;</span>
          <span>{article.readingTime} čtení</span>
        </div>

        {/* Article body */}
        <div className="mt-10 space-y-6">
          {paragraphs.map((p, i) => {
            if (p.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold mt-12 mb-4"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  {p.replace("## ", "")}
                </h2>
              );
            }
            if (p.startsWith("> ")) {
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-[#E8B84B] pl-6 py-2 my-8 text-xl text-gray-300 italic"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  {p.replace("> ", "")}
                </blockquote>
              );
            }
            return (
              <p key={i} className="text-gray-300 leading-relaxed text-lg">
                {p}
              </p>
            );
          })}
        </div>

        {/* Share buttons */}
        <ShareButtons title={article.title} />
      </div>

      {/* Related articles */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <h2
          className="text-2xl font-bold mb-8"
          style={{ fontFamily: "var(--font-heading), serif" }}
        >
          Další články<span className="text-[#E8B84B]">.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedArticles.map((a) => (
            <ArticleCard
              key={a.slug}
              variant="standard"
              {...a}
              href={`/clanky/${a.slug}`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
