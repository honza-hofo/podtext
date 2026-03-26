"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/podtext/SectionHeader";
import CTAButton from "@/components/podtext/CTAButton";
import { teamMembers } from "@/lib/data";
import { Heart, Eye, Zap } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Autenticita",
    description:
      "Nevymýšlíme příběhy. Hledáme je. Každý člověk, firma a projekt má svůj unikátní příběh — my ho jen pomáháme vyprávět.",
  },
  {
    icon: Eye,
    title: "Kvalita",
    description:
      "Od první schůzky po finální výstup — dbáme na každý detail. Protože kvalita není luxus, je to standard.",
  },
  {
    icon: Zap,
    title: "Odvaha",
    description:
      "Nebojíme se nových formátů, neotřelých úhlů pohledu a experimentů. Nejlepší obsah vzniká tam, kde se ostatní zastaví.",
  },
];

export default function ONasPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Manifest */}
      <section className="px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Věříme, že každý příběh
            <br />
            stojí za vyprávění<span className="text-[#E8B84B]">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Podtext vznikl z přesvědčení, že obsah nemusí být nudný, prázdný
            nebo generický. Spojujeme video produkci s redakční tvorbou, protože
            věříme, že nejlepší příběhy žijí napříč formáty — od kamery po klávesnici.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Nejsme velká agentura s desítkami lidí a procesů. Jsme malý tým
            lidí, kteří milují svou práci — a je to na výsledcích vidět.
          </motion.p>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader title="Náš tým" subtitle="Lidé, kteří stojí za Podtextem." />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#2A2A2A]"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[#E8B84B] text-sm mt-1">{member.role}</p>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader title="Naše hodnoty" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-[#1A1A1A] rounded-xl p-8 border border-[#2A2A2A]"
              >
                <div className="w-12 h-12 rounded-lg bg-[#E8B84B]/10 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-[#E8B84B]" />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              Chcete s námi spolupracovat?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Ozvěte se nám a společně najdeme příběh, který stojí za vyprávění.
            </p>
            <CTAButton href="/kontakt" variant="primary">
              Napište nám
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
