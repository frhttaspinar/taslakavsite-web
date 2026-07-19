"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { siteData } from "@/config/siteData";
import SectionHeading from "@/components/SectionHeading";

function CardCover({ article }) {
  if (article.image) {
    return (
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={article.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 hover-fine:group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-night-700 via-night/25 to-night/35"
        />
      </div>
    );
  }

  // Görselsiz makaleler için tipografik kapak — § motifi
  return (
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-night-600/70 to-night-800">
      <span
        aria-hidden="true"
        className="font-sans text-[7rem] leading-none text-gold/15 transition-all duration-500 hover-fine:group-hover:scale-105 hover-fine:group-hover:text-gold/25"
      >
        §
      </span>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-night-700 to-transparent"
      />
    </div>
  );
}

/** Makale içeriğini gösteren, ESC / arka plan / X ile kapanan modal */
function ArticleModal({ article, onClose, opener }) {
  const reduce = useReducedMotion();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const getFocusable = () =>
      dialog?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ) ?? [];

    const onKey = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      opener?.focus();
    };
  }, [onClose, opener]);

  // Portal: sayfa yüzeyinin (page-surface, z-20) stacking context'inden çıkar;
  // aksi halde z-[999] bile navbar'ın (z-60) altında kalır.
  return createPortal(
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="makale-dialog-baslik"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-night/90 px-[max(0.75rem,env(safe-area-inset-left))] pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-sm sm:px-6 sm:py-6"
    >
      {/* Kapat — makale kartının transform bağlamının DIŞINDA, ekrana sabit */}
      <button
        ref={closeButtonRef}
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        aria-label="Pencereyi kapat"
        className="fixed top-4 right-4 z-[9999] w-12 h-12 bg-white text-black flex items-center justify-center rounded-full shadow-2xl"
      >
        <X size={24} strokeWidth={2} />
      </button>

      <motion.article
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 42, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        onClick={(event) => event.stopPropagation()}
        className="dynamic-dialog-height relative flex w-full max-w-2xl transform-gpu flex-col overflow-hidden rounded-2xl border border-gold/30 bg-night-800 shadow-[0_32px_80px_-24px_rgba(15,23,42,0.95)] will-change-transform"
      >
        <div className="overflow-y-auto">
          {/* Kapak */}
          {article.image ? (
            <div className="relative aspect-[21/9] shrink-0 overflow-hidden">
              <Image
                src={article.image}
                alt=""
                fill
                sizes="(min-width: 640px) 42rem, 92vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-night-800 via-night-800/30 to-transparent"
              />
            </div>
          ) : (
            <div
              aria-hidden="true"
              className="relative flex aspect-[21/6] shrink-0 items-center justify-center bg-gradient-to-br from-night-600/70 to-night-800"
            >
              <span className="font-sans text-7xl text-gold/15">§</span>
            </div>
          )}

          {/* İçerik */}
          <div className="flex flex-col gap-4 px-5 pb-8 pt-5 sm:px-9">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
              {article.tag}
              <span aria-hidden="true" className="h-px w-6 bg-gold/50" />
              <span className="font-normal normal-case tracking-wide text-mist-500">
                {article.date}
              </span>
            </p>
            <h3
              id="makale-dialog-baslik"
              className="font-sans text-2xl font-semibold leading-snug tracking-tight text-mist sm:text-3xl"
            >
              {article.title}
            </h3>
            <div aria-hidden="true" className="h-px w-16 bg-gold/40" />
            {article.content.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-[15px] font-normal leading-7 text-mist-400"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </motion.article>
    </motion.div>,
    document.body
  );
}

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const reduce = useReducedMotion();
  const closeModal = useCallback(() => {
    setSelectedPost(null);
    // Kapanışta scroll kilidini anında bırak; effect temizliği çıkış
    // animasyonu bitene dek beklediği için burada da sıfırlanır.
    document.body.style.overflow = "";
  }, []);

  return (
    <section id="makaleler" className="section-space">
      <div className="site-container">
        <SectionHeading
          eyebrow="Makaleler"
          title="Hukuki bilgilendirme yazıları"
          lead="Merak edilen güncel hukuki konuları, anlaşılır bir dille kaleme alıyoruz."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {siteData.articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileTap={reduce ? {} : { scale: 0.97 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                opacity: {
                  duration: 0.5,
                  delay: reduce ? 0 : 0.04 * (i % 4),
                  ease: "easeOut",
                },
                y: {
                  duration: 0.5,
                  delay: reduce ? 0 : 0.04 * (i % 4),
                  ease: "easeOut",
                },
                scale: { duration: 0.18, ease: "easeOut" },
              }}
              className="h-full will-change-transform"
            >
              <article className="surface-card group relative flex h-full w-full transform-gpu flex-col overflow-hidden rounded-2xl text-left transition-[transform,border-color] duration-300 hover-fine:hover:-translate-y-1 hover-fine:hover:border-gold/40">
                <button
                  type="button"
                  onClick={(event) =>
                    setSelectedPost({ article, opener: event.currentTarget })
                  }
                  aria-haspopup="dialog"
                  aria-label={`${article.title} makalesini aç`}
                  className="absolute inset-0 z-10 rounded-2xl"
                />
                <CardCover article={article} />
                <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
                  <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                    {article.tag}
                    <span aria-hidden="true" className="h-px w-6 bg-gold/50" />
                    <span className="font-normal normal-case tracking-wide text-mist-500">
                      {article.date}
                    </span>
                  </p>
                  <h3 className="font-sans text-xl font-semibold leading-snug tracking-tight text-mist transition-colors duration-300 hover-fine:group-hover:text-gold-300">
                    {article.title}
                  </h3>
                  <p className="text-sm font-normal leading-6 text-mist-400">
                    {article.excerpt}
                  </p>
                  <span className="mt-auto flex items-center gap-2 pt-3 text-[12px] font-medium uppercase tracking-[0.18em] text-gold transition-colors duration-300 hover-fine:group-hover:text-gold-300">
                    Devamını Oku
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="transition-transform duration-300 hover-fine:group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <ArticleModal
            article={selectedPost.article}
            opener={selectedPost.opener}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
