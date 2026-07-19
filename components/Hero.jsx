"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { siteData } from "@/config/siteData";

/** Kaydırmaya bağlı, geniş hareket alanlı video sahnesi. */
const SCRUB_END = 0.82;

export default function Hero() {
  const reduce = useReducedMotion();
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const lastApplied = useRef(-1);
  const pendingRatio = useRef(0);
  const seekFrame = useRef(null);

  // iOS Safari metadata'yı geç/isteksiz yükler; süre state'te tutulur ve
  // scroll → currentTime eşlemesi ancak süre bilindikten sonra çalışır.
  const [duration, setDuration] = useState(0);
  const durationRef = useRef(0);

  // Sahnenin kaydırma ilerlemesi (0 = tepe, 1 = dip)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Kaydırmanın son bölümünü içerik yüzeyinin gelişine ayır.
  const scrub = useTransform(scrollYProgress, [0, SCRUB_END], [0, 1]);

  // Tekerlek adımlarının sıçramasını yumuşatan sönümlü spring
  const smoothScrub = useSpring(scrub, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const seekTo = useCallback((ratio) => {
    const video = videoRef.current;
    const total = durationRef.current || video?.duration || 0;
    if (!video || !total) return;
    // Decoder hâlâ önceki kareyi arıyorsa yeni seek kuyruğu oluşturma.
    // `seeked` olayı en güncel oranı yeniden uygulayacak.
    if (video.seeking) return;
    // Scroll ilerlemesi × süre; 'ended' siyah karesinden kaçınmak için uçları kırp
    const t = Math.min(total - 0.05, Math.max(0.001, ratio * total));
    // Aynı kareye tekrar tekrar seek etmeyi önle
    if (Math.abs(t - lastApplied.current) < 0.02) return;
    lastApplied.current = t;
    video.currentTime = t;
  }, []);

  // Touch scroll sırasında arka arkaya gelen olayları tek animasyon karesinde
  // birleştirir; mobil tarayıcının aynı anda çok sayıda seek isteği almasını önler.
  const queueSeek = useCallback(
    (ratio) => {
      pendingRatio.current = ratio;
      if (seekFrame.current !== null) return;

      seekFrame.current = window.requestAnimationFrame(() => {
        seekFrame.current = null;
        seekTo(pendingRatio.current);
      });
    },
    [seekTo]
  );

  // Metadata gelince süreyi state'e al ve mevcut kaydırma konumunun karesini bas
  // (sayfa ortasında yenilenirse video doğru kareden başlar)
  const handleLoadedMetadata = useCallback(
    (event) => {
      const video = event.currentTarget;
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      durationRef.current = video.duration;
      setDuration(video.duration);
      video.pause();
      queueSeek(reduce ? 0.18 : smoothScrub.get());
    },
    [queueSeek, reduce, smoothScrub]
  );

  // Kaydırma oranı değiştikçe video karesini sür (süre bilinmeden seek anlamsız)
  useMotionValueEvent(smoothScrub, "change", (ratio) => {
    if (!reduce && (duration > 0 || durationRef.current)) queueSeek(ratio);
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS Safari `preload` özniteliğini çoğu zaman yok sayar ve kullanıcı
    // etkileşimi olmadan metadata'yı indirmez; açıkça iste.
    if (video.readyState === 0) video.load();

    // Muted + playsInline videoyu bir kez sessizce oynatıp durdurmak iOS'ta
    // decoder'ı uyandırır; aksi hâlde currentTime atamaları ekrana yansımaz.
    const unlock = video.play();
    if (unlock && typeof unlock.then === "function") {
      unlock.then(() => video.pause()).catch(() => {});
    }

    // React, sonradan eklenen onLoadedMetadata'yı kaçırmışsa telafi et
    // (ör. hızlı gelişen cache'li metadata).
    if (video.readyState >= 1 && video.duration && !durationRef.current) {
      durationRef.current = video.duration;
      setDuration(video.duration);
      video.pause();
      queueSeek(reduce ? 0.18 : smoothScrub.get());
    }

    const applyLatestAfterSeek = () => queueSeek(pendingRatio.current);
    video.addEventListener("seeked", applyLatestAfterSeek);
    return () => {
      video.removeEventListener("seeked", applyLatestAfterSeek);
      if (seekFrame.current !== null) {
        window.cancelAnimationFrame(seekFrame.current);
        seekFrame.current = null;
      }
    };
  }, [queueSeek, reduce, smoothScrub]);

  return (
    <section
      id="anasayfa"
      ref={containerRef}
      aria-label="Giriş"
      className="hero-scroll-stage relative z-0 h-[300vh] w-full touch-pan-y md:h-[400vh]"
    >
      <div className="dynamic-viewport-height pointer-events-none sticky top-0 z-0 h-screen h-[100dvh] w-full">
        {/* Tamamen dekoratif video katmanı: hit-test ve wheel zincirinin dışında. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <video
            ref={videoRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full transform-gpu bg-night object-cover will-change-transform"
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={handleLoadedMetadata}
          >
            <source src={siteData.media.heroVideo} type="video/mp4" />
          </video>

          {/* Vignette / karartma katmanı */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.68),rgba(15,23,42,0.28)_48%,rgba(15,23,42,0.5)),linear-gradient(0deg,rgba(15,23,42,0.62),transparent_42%,rgba(15,23,42,0.28))]"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={
              reduce
                ? { duration: 0.01 }
                : { delay: 0.35, duration: 0.8, ease: "easeOut" }
            }
            className="pointer-events-none flex w-full max-w-5xl flex-col items-center pb-[env(safe-area-inset-bottom)] pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] pt-[calc(4rem+env(safe-area-inset-top))] text-center will-change-transform sm:pl-[max(2rem,env(safe-area-inset-left))] sm:pr-[max(2rem,env(safe-area-inset-right))]"
          >
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-300 [text-shadow:0_1px_16px_rgba(15,23,42,0.95)] sm:mb-6 sm:text-xs sm:tracking-[0.34em]">
              <span aria-hidden="true" className="h-px w-6 bg-gold/70 sm:w-10" />
              Kuruluş {siteData.founded} — {siteData.city}
              <span aria-hidden="true" className="h-px w-6 bg-gold/70 sm:w-10" />
            </p>

            <h1 className="max-w-full break-words text-balance font-sans text-4xl font-semibold leading-[1.02] tracking-tighter text-white antialiased drop-shadow-2xl md:max-w-5xl md:text-6xl lg:text-8xl">
              {siteData.officeName}
            </h1>

            <div
              aria-hidden="true"
              className="my-5 flex items-center gap-3 text-gold sm:my-6 sm:gap-4"
            >
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/80 sm:w-20" />
              <span className="font-sans text-lg leading-none [text-shadow:0_1px_14px_rgba(15,23,42,0.9)]">
                §
              </span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/80 sm:w-20" />
            </div>

            <p className="max-w-2xl font-sans text-lg font-light leading-relaxed tracking-wide text-slate-300 drop-shadow-md md:text-2xl">
              {siteData.slogan}
            </p>

            <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
              <a
                href="#iletisim"
                className="action-primary pointer-events-auto sm:min-w-44"
              >
                İletişim Bilgileri
              </a>
              <a
                href="#faaliyet-alanlari"
                className="action-secondary pointer-events-auto sm:min-w-52"
              >
                Faaliyet Alanlarımız
              </a>
            </div>
          </motion.div>

          {/* Kaydırma işareti — başlıkla birlikte belirir */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={
              reduce ? { duration: 0.01 } : { delay: 1.1, duration: 0.6 }
            }
            className="absolute bottom-[calc(1.5rem+env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 will-change-transform sm:bottom-[calc(2rem+env(safe-area-inset-bottom))]"
          >
            <span className="block h-12 w-px animate-scroll-cue bg-gradient-to-b from-gold to-transparent motion-reduce:animate-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
