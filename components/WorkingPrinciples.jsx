"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Lock, Eye, Scale } from "lucide-react";
import { siteData } from "@/config/siteData";
import SectionHeading from "@/components/SectionHeading";
import useCanHover from "@/hooks/useCanHover";

// siteData.principles içindeki "icon" adlarının karşılıkları
const ICONS = {
  Lock,
  Eye,
  Scale,
};

function PrincipleCard({ principle, delay = 0 }) {
  const reduce = useReducedMotion();
  const canHover = useCanHover();
  const Icon = ICONS[principle.icon] ?? Scale;

  return (
    <motion.div
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
        className="surface-card group relative h-full transform-gpu overflow-hidden rounded-2xl p-6 transition-colors duration-300 will-change-transform hover-fine:hover:border-gold/40 sm:p-8"
      >
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/[0.08] text-gold transition-colors duration-300 hover-fine:group-hover:border-gold/60">
          <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
        </div>

        <div className="relative mt-5">
          <h3 className="font-sans text-xl font-semibold tracking-tight text-mist transition-colors duration-300 hover-fine:group-hover:text-gold-300">
            {principle.title}
          </h3>
          <p className="mt-2.5 text-sm font-normal leading-relaxed text-mist-400">
            {principle.text}
          </p>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function WorkingPrinciples() {
  return (
    <section
      id="prensipler"
      className="section-space border-t border-white/[0.06] bg-night-800/40"
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="Çalışma Prensiplerimiz"
          title="Her Dosyada Aynı Mesleki Sorumluluk"
          lead="Çalışmalarımızı gizlilik, şeffaflık ve hukuki etik ilkeleri çerçevesinde yürütürüz."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
          {siteData.principles.map((principle, i) => (
            <PrincipleCard
              key={principle.title}
              principle={principle}
              delay={0.05 * i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
