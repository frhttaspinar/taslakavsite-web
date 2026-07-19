"use client";

import {
  Globe,
  FileSearch,
  Scale,
  Landmark,
  Gavel,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { siteData } from "@/config/siteData";
import SectionHeading from "@/components/SectionHeading";
import useCanHover from "@/hooks/useCanHover";

const ICONS = { Globe, FileSearch, Scale, Landmark, Gavel, Instagram };

function LinkPill({ link, index }) {
  const reduce = useReducedMotion();
  const canHover = useCanHover();
  const Icon = ICONS[link.icon] ?? Globe;

  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={reduce ? false : { opacity: 0, scale: 0.97, y: 14 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={
        reduce || !canHover
          ? {}
          : {
            y: -2,
            boxShadow: `0 12px 28px -18px ${link.color}70`,
            borderColor: `${link.color}70`,
          }
      }
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 22,
        delay: reduce ? 0 : index * 0.05,
      }}
      className="surface-card group flex min-h-14 w-full transform-gpu items-center gap-3 rounded-full py-2.5 pl-3 pr-4 text-sm font-medium text-mist-400 transition-colors duration-200 will-change-transform hover-fine:hover:text-mist sm:pr-5"
    >
      {/* Kurum rengiyle boyanmış ikon rozeti */}
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 hover-fine:group-hover:scale-110"
        style={{
          backgroundColor: `${link.color}24`,
          color: link.color,
          boxShadow: `inset 0 0 0 1px ${link.color}55`,
        }}
      >
        <Icon size={17} strokeWidth={1.75} />
      </span>
      <span className="min-w-0 flex-1 sm:flex-none">{link.label}</span>
      <ArrowUpRight
        size={13}
        strokeWidth={1.5}
        aria-hidden="true"
        className="text-mist-500/70 transition-all duration-300 hover-fine:group-hover:-translate-y-0.5 hover-fine:group-hover:translate-x-0.5"
      />
    </motion.a>
  );
}

export default function QuickLinks() {
  return (
    <section id="baglantilar" className="section-space">
      <div className="site-container max-w-5xl">
        <SectionHeading
          eyebrow="Resmî & Hızlı Bağlantılar"
          title="Sık Kullanılan Kurum ve Portallar"
          lead="Dosya sorgulama, resmî kurumlar ve sosyal medya hesaplarımıza tek dokunuşla ulaşın."
        />

        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {siteData.quickLinks.map((link, i) => (
            <LinkPill key={link.label} link={link} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
