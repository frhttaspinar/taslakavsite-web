"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Handshake,
  Gavel,
  HeartHandshake,
  Building2,
  Landmark,
  Briefcase,
  KeyRound,
  Scale,
  ScrollText,
  FileSignature,
  ShoppingBag,
  Banknote,
  ShieldCheck,
} from "lucide-react";
import { siteData } from "@/config/siteData";
import SectionHeading from "@/components/SectionHeading";
import useCanHover from "@/hooks/useCanHover";

// siteData.practiceAreas içindeki "icon" adlarının karşılıkları
const ICONS = {
  Handshake,
  Gavel,
  HeartHandshake,
  Building2,
  Landmark,
  Briefcase,
  KeyRound,
  Scale,
  ScrollText,
  FileSignature,
  ShoppingBag,
  Banknote,
  ShieldCheck,
};

function AreaCard({ area, delay = 0 }) {
  const reduce = useReducedMotion();
  const canHover = useCanHover();
  const Icon = ICONS[area.icon] ?? Scale;

  return (
    <motion.div
      className={area.featured ? "md:col-span-2 lg:col-span-3" : ""}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: reduce ? 0 : delay,
        ease: "easeOut",
      }}
    >
      <motion.article
        whileHover={
          !reduce && canHover
            ? {
              y: -8,
              scale: 1.02,
              boxShadow: "0 30px 70px -34px rgba(216, 184, 120, 0.48)",
            }
            : {}
        }
        whileTap={reduce ? {} : { scale: 0.97 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`surface-card group relative h-full transform-gpu overflow-hidden rounded-2xl p-6 transition-colors duration-300 will-change-transform hover-fine:hover:border-gold/40 sm:p-8 ${area.featured
          ? "border-gold/30 md:flex md:items-center md:gap-10 lg:px-10"
          : ""
          }`}
      >
        <div
          className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/[0.08] text-gold transition-colors duration-300 hover-fine:group-hover:border-gold/60 ${area.featured ? "md:h-16 md:w-16" : ""
            }`}
        >
          <Icon
            size={area.featured ? 26 : 22}
            strokeWidth={1.4}
            aria-hidden="true"
          />
        </div>

        <div className={`relative mt-5 ${area.featured ? "md:mt-0" : ""}`}>
          {area.badge ? (
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
              {area.badge}
            </p>
          ) : null}
          <h3
            className={`font-sans font-semibold tracking-tight text-mist transition-colors duration-300 hover-fine:group-hover:text-gold-300 ${area.featured ? "text-2xl sm:text-3xl" : "text-xl"
              }`}
          >
            {area.title}
          </h3>
          <p
            className={`mt-2.5 font-normal leading-relaxed text-mist-400 ${area.featured ? "max-w-3xl text-[15px]" : "text-sm"
              }`}
          >
            {area.description}
          </p>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function PracticeAreas() {
  const featured = siteData.practiceAreas.filter((a) => a.featured);
  const rest = siteData.practiceAreas.filter((a) => !a.featured);

  return (
    <section
      id="faaliyet-alanlari"
      className="section-space relative border-t border-white/[0.06] bg-night-800/40"
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="Faaliyet Alanlarımız"
          title="Her Alanda Aynı Titizlik, Aynı Özen"
          lead="Şirketler ve ticaret hukuku başta olmak üzere, aşağıdaki alanlarda danışmanlık ve dava takibi yürütüyoruz."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {featured.map((area) => (
            <AreaCard key={area.title} area={area} />
          ))}
          {rest.map((area, i) => (
            <AreaCard key={area.title} area={area} delay={0.05 * (i % 3)} />
          ))}
        </div>
      </div>
    </section>
  );
}
