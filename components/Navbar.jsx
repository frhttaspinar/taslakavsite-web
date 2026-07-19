"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { siteData } from "@/config/siteData";
import BrandMark from "@/components/BrandMark";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const reduce = useReducedMotion();
  const menuButtonRef = useRef(null);
  const menuPanelRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = siteData.nav
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -62%", threshold: [0, 0.1, 0.35] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Menü açıkken odağı panel içinde tut, ESC ile kapat ve sayfayı kilitle.
  useEffect(() => {
    if (!isOpen) return;

    const panel = menuPanelRef.current;
    const focusable = panel?.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];

    document.body.style.overflow = "hidden";
    first?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }
      if (event.key !== "Tab" || !first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      menuButtonRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-night/95 shadow-[0_12px_30px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Ana menü"
        className="site-container flex h-20 items-center justify-between sm:h-[5.5rem]"
      >
        {/* Logo + isim */}
        <Link
          href="/"
          aria-label={`${siteData.officeName} ana sayfa`}
          className="relative z-10 flex min-h-11 items-center gap-3 sm:gap-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <BrandMark className="h-14 sm:h-16" priority />
          </div>
          <span className="hidden max-w-[13rem] text-balance font-sans text-base font-medium leading-tight tracking-[0.04em] text-mist min-[480px]:block sm:text-lg">
            {siteData.officeName}
          </span>
        </Link>

        {/* Masaüstü menü */}
        <div className="hidden items-center gap-8 xl:flex">
          <ul className="flex items-center gap-7">
            {siteData.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={activeSection === item.href ? "location" : undefined}
                  className={`flex min-h-11 items-center border-b text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                    activeSection === item.href
                      ? "border-gold text-gold-300"
                      : "border-transparent text-mist-400 hover-fine:hover:text-gold"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${siteData.contact.phones[0].tel}`}
            className="action-primary min-h-11 px-5 py-2.5 text-[13px]"
          >
            <Phone size={14} strokeWidth={1.75} aria-hidden="true" />
            İletişime Geçin
          </a>
        </div>

        {/* Mobil hamburger */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls="mobil-menu"
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          className="icon-button xl:hidden"
        >
          {isOpen ? (
            <X size={20} strokeWidth={1.5} />
          ) : (
            <Menu size={20} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobil menü paneli — portal: header'ın backdrop-filter'ı fixed
          konumlandırmanın referansını değiştirdiği için body'ye taşınır. */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={menuPanelRef}
            id="mobil-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil ana menü"
            key="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed inset-x-0 bottom-0 top-[calc(5rem+env(safe-area-inset-top))] z-[55] flex flex-col justify-between overflow-y-auto border-t border-white/[0.08] bg-night pb-[max(2.5rem,env(safe-area-inset-bottom))] pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))] pt-5 will-change-transform sm:top-[calc(5.5rem+env(safe-area-inset-top))] xl:hidden"
          >
            <ul className="mx-auto flex w-full max-w-2xl flex-col divide-y divide-white/[0.06]">
              {siteData.nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                  className="will-change-transform"
                >
                  <a
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      setIsOpen(false);
                      document.body.style.overflow = "";
                      window.setTimeout(() => {
                        document.querySelector(item.href)?.scrollIntoView({
                          behavior: reduce ? "auto" : "smooth",
                          block: "start",
                        });
                      }, 50);
                    }}
                    aria-current={activeSection === item.href ? "location" : undefined}
                    className={`flex min-h-14 items-center gap-4 py-4 font-sans text-2xl font-medium transition-colors ${
                      activeSection === item.href
                        ? "text-gold-300"
                        : "text-mist hover-fine:hover:text-gold"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="text-sm text-gold/70"
                    >
                      §
                    </span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.a
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.4 }}
              href={`tel:${siteData.contact.phones[0].tel}`}
              onClick={() => setIsOpen(false)}
              className="action-primary mx-auto mt-8 w-full max-w-2xl gap-2 will-change-transform"
            >
              <Phone size={16} strokeWidth={1.75} aria-hidden="true" />
              {siteData.contact.phones[0].label}
            </motion.a>
          </motion.div>
        )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
