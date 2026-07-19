"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteData } from "@/config/siteData";
import FadeIn from "@/components/FadeIn";

function RevealCard({ children }) {
  const reduce = useReducedMotion();

  // Lüks scroll reveal: kart hafif aşağıdan yukarı süzülür,
  // şeffaftan nete gelir. Altın çerçeve ve gölge kartla birlikte belirir.
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative will-change-transform"
    >
      {/* Altın çerçeve */}
      <div
        aria-hidden="true"
        className="absolute -left-3 -top-3 h-full w-full rounded-tl-[3.5rem] rounded-br-[3.5rem] border border-gold/40 transition-colors duration-500 hover-fine:group-hover:border-gold/70 sm:-left-5 sm:-top-5"
      />

      <div className="relative overflow-hidden rounded-tl-[3.5rem] rounded-br-[3.5rem] shadow-[0_30px_80px_-20px_rgba(15,23,42,0.8)] transition-shadow duration-700 hover-fine:group-hover:shadow-[0_35px_130px_-25px_rgba(216,184,120,0.55)]">
        <div className="transition-transform duration-700 ease-out hover-fine:group-hover:scale-105">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const { about, lawyers, experience, media } = siteData;

  return (
    <section
      id="hakkimizda"
      className="site-container section-space relative"
    >
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-14 lg:gap-20">
        {/* Fotoğraf — maskeli scroll reveal + hover glow */}
        <div className="relative mx-auto w-full max-w-lg md:max-w-none">
          <RevealCard>
            <div className="relative">
              <Image
                src={media.aboutImage}
                alt={`${siteData.officeName} avukatları`}
                width={1448}
                height={1086}
                sizes="(min-width: 768px) 45vw, 92vw"
                className="h-auto w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-night/45 via-transparent to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[24%] w-[43%] bg-gradient-to-r from-[#0b0a09] via-[#0b0a09]/95 to-transparent"
              />
              <p className="absolute bottom-[5.5%] left-[6.5%] z-10 max-w-[32%] font-sans text-[clamp(0.45rem,1.15vw,0.72rem)] font-medium uppercase leading-tight tracking-[0.12em] text-mist">
                OVA HUKUK
                <span className="mt-1 block text-[0.78em] tracking-[0.18em] text-gold-300">
                  ve DANIŞMANLIK
                </span>
              </p>
            </div>
          </RevealCard>
        </div>

        {/* Metin */}
        <div className="flex flex-col gap-7">
          <FadeIn className="flex flex-col gap-4">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              <span aria-hidden="true" className="font-sans text-base leading-none">
                §
              </span>
              {about.eyebrow}
              <span aria-hidden="true" className="h-px w-10 bg-gold/50" />
            </p>
            <h2 className="max-w-xl font-sans text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-white">
              {about.title}
            </h2>
            <p className="font-sans text-lg font-light italic text-gold-300 sm:text-xl">
              {experience}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col gap-4">
            {about.paragraphs.map((p) => (
              <p
                key={p}
                className="max-w-2xl text-[15px] font-normal leading-7 text-mist-400"
              >
                {p}
              </p>
            ))}
          </FadeIn>

          {/* Avukatlar */}
          <FadeIn delay={0.18} className="mt-2 flex flex-col">
            {lawyers.map((lawyer) => (
              <div
                key={lawyer.name}
                className="group flex flex-col gap-1.5 border-t border-white/10 py-5 transition-colors duration-200 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <h3 className="font-sans text-xl font-semibold tracking-tight text-white transition-colors duration-300 hover-fine:group-hover:text-gold-300 sm:text-2xl">
                  {lawyer.name}
                </h3>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mist-500">
                  {lawyer.bar}
                  <span aria-hidden="true" className="mx-2 text-gold/70">
                    ·
                  </span>
                  Sicil No: {lawyer.registryNo}
                </p>
              </div>
            ))}
            <div aria-hidden="true" className="h-px w-full bg-white/10" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
