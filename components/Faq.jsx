"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteData } from "@/config/siteData";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

function FaqItem({ item, index, isOpen, onToggle }) {
  const reduce = useReducedMotion();
  const buttonId = `sss-soru-${index}`;
  const panelId = `sss-cevap-${index}`;

  return (
    <div
      className={`surface-card overflow-hidden rounded-2xl transition-colors duration-300 ${isOpen ? "border-gold/40" : "hover-fine:hover:border-gold/30"
        }`}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-7 sm:py-5"
        >
          <span
            className={`font-sans text-base font-medium tracking-tight transition-colors duration-300 sm:text-lg ${isOpen ? "text-gold-300" : "text-mist"
              }`}
          >
            {item.question}
          </span>
          <motion.span
            aria-hidden="true"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: reduce ? 0.01 : 0.3, ease: "easeOut" }}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${isOpen
                ? "border-gold/60 text-gold"
                : "border-gold/30 text-gold/70"
              }`}
          >
            <ChevronDown size={16} strokeWidth={1.75} />
          </motion.span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p className="border-t border-white/[0.06] px-5 pb-5 pt-4 text-[15px] font-normal leading-7 text-mist-400 sm:px-7 sm:pb-6">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  // Tek seferde tek soru açık kalır; mobilde listeyi kompakt tutar.
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="sss"
      className="section-space border-t border-white/[0.06] bg-night-800/40"
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="Sıkça Sorulan Sorular"
          title="Hukuki Süreçlere Dair Merak Edilenler"
          lead="Aşağıdaki yanıtlar yalnızca genel bilgilendirme amaçlıdır; somut durumunuza ilişkin değerlendirme için bizimle iletişime geçebilirsiniz."
        />

        <FadeIn
          delay={0.1}
          className="mx-auto mt-10 flex w-full max-w-3xl flex-col gap-3 sm:mt-12 sm:gap-4"
        >
          {siteData.faq.map((item, i) => (
            <FaqItem
              key={item.question}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
