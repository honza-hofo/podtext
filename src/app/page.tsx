"use client";

import { motion } from "framer-motion";
import { Video, PenLine, Smartphone } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/podtext/SectionHeader";
import CTAButton from "@/components/podtext/CTAButton";
import ProjectCard from "@/components/podtext/ProjectCard";
import ArticleCard from "@/components/podtext/ArticleCard";
import { articles, projects, workflowSteps } from "@/lib/data";

const heroWords = ["Točíme", "příběhy.", "Píšeme", "příběhy."];

const pillars = [
  {
    icon: Video,
    title: "Produkce",
    description:
      "Reportáže, medailonky, firemní videa, podcasty. Od scénáře po finální střih — vše pod jednou střechou.",
  },
  {
    icon: PenLine,
    title: "Redakce",
    description:
      "Články, PR texty, content marketing, rozhovory. Slova, která prodávají, informují a inspirují.",
  },
  {
    icon: Smartphone,
    title: "Sociální sítě",
    description:
      "Obsah pro Instagram, LinkedIn, Facebook, YouTube. Strategie, tvorba a správa — kompletně.",
  },
];

const featuredArticle = articles[0];
const sideArticles = articles.slice(1, 4);
const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=1920&h=1080&fit=crop&q=80"
            alt="Film production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            {heroWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`inline-block mr-4 ${
                  word === "příběhy." ? "text-[#E8B84B]" : "text-white"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Video produkce, redakční tvorba a správa sociálních sítí. Pomáháme
            firmám vyprávět příběhy, které lidi zajímají.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CTAButton href="/kontakt" variant="primary">
              Začněme spolupráci
            </CTAButton>
            <CTAButton href="/produkce" variant="secondary">
              Naše projekty
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Co děláme */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              title="Co děláme"
              subtitle="Tři pilíře, jeden cíl — vyprávět příběhy, které rezonují."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#E8B84B]/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#E8B84B]/10 flex items-center justify-center mb-6">
                  <pillar.icon className="w-6 h-6 text-[#E8B84B]" />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vybrané projekty */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-12"
          >
            <SectionHeader
              title="Vybrané projekty"
              subtitle="Ukázka naší práce — od firemních videí po podcasty."
            />
            <Link
              href="/produkce"
              className="hidden md:inline-flex text-sm text-[#E8B84B] hover:underline"
            >
              Všechny projekty &rarr;
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jak pracujeme */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              title="Jak pracujeme"
              subtitle="Pět kroků od nápadu k výsledku."
            />
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-12">
              {workflowSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-8 items-start"
                >
                  <div
                    className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-white border border-gray-200 items-center justify-center text-[#E8B84B] font-bold text-xl z-10"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    {step.number}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="md:hidden text-[#E8B84B] font-bold"
                        style={{ fontFamily: "var(--font-heading), serif" }}
                      >
                        {step.number}.
                      </span>
                      <h3
                        className="text-lg font-bold"
                        style={{ fontFamily: "var(--font-heading), serif" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Redakce */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-12"
          >
            <SectionHeader
              title="Z redakce"
              subtitle="Články, rozhovory a postřehy z naší tvorby."
            />
            <Link
              href="/redakce"
              className="hidden md:inline-flex text-sm text-[#E8B84B] hover:underline"
            >
              Všechny články &rarr;
            </Link>
          </motion.div>

          {/* Featured article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <ArticleCard
              variant="featured"
              {...featuredArticle}
              href={`/clanky/${featuredArticle.slug}`}
            />
          </motion.div>

          {/* Side articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sideArticles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <ArticleCard
                  variant="standard"
                  {...article}
                  href={`/clanky/${article.slug}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reference */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader title="Důvěřují nám" />
          </motion.div>

          {/* Logo strip */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {["Vitana", "PID", "Deloitte", "Mall.cz", "ČS", "T-Mobile"].map(
              (name) => (
                <div
                  key={name}
                  className="w-32 h-16 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 text-sm font-medium"
                >
                  {name}
                </div>
              )
            )}
          </div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p
              className="text-xl md:text-2xl text-gray-600 italic leading-relaxed"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              &ldquo;Podtext pro nás není dodavatel — je to partner, který
              rozumí naší značce lépe než my sami. Jejich reportáže a videa
              posunuly naši komunikaci na úplně jinou úroveň.&rdquo;
            </p>
            <footer className="mt-6 text-sm text-gray-500">
              — Markéta Hájková, Head of Marketing, Vitana
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Máte příběh k vyprávění?
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Rádi se s vámi potkáme, poslechneme si váš nápad a navrhneme, jak ho
            proměnit v obsah, který zabere.
          </p>
          <CTAButton href="/kontakt" variant="primary">
            Pojďme se potkat
          </CTAButton>
        </motion.div>
      </section>
    </>
  );
}
