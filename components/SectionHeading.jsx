"use client";

import FadeIn from "@/components/FadeIn";

/**
 * Bölüm başlığı: § işaretli altın eyebrow + serif başlık + opsiyonel açıklama.
 * § (paragraf işareti) hukuk metinlerinin kendi dilidir — sitenin imza motifi.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
}) {
  const alignCls =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <FadeIn className={`flex flex-col ${alignCls} gap-4 sm:gap-5`}>
      <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
        <span aria-hidden="true" className="font-sans text-base leading-none">
          §
        </span>
        {eyebrow}
        <span
          aria-hidden="true"
          className="hidden h-px w-10 bg-gold/40 sm:block"
        />
      </p>
      <h2 className="max-w-2xl font-sans text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-mist">
        {title}
      </h2>
      {lead ? (
        <p className="max-w-xl text-[15px] font-normal leading-7 text-mist-400">
          {lead}
        </p>
      ) : null}
    </FadeIn>
  );
}
