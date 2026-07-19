"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll ile görünüme girince yumuşakça beliren sarmalayıcı.
 * prefers-reduced-motion açıksa animasyonu atlar.
 */
export default function FadeIn({
  children,
  delay = 0,
  y = 28,
  className = "",
  as = "div",
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={`${className} will-change-transform`}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </Tag>
  );
}
