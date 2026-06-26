"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { clinic } from "@/lib/clinic";

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!start) return;
    if (reduced) { setCount(target); return; }
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration, reduced]);

  return count;
}

export default function Hero() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(842, 1.5, started);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={ref} className="pt-[60px] min-h-[92vh] flex flex-col md:flex-row">
      {/* Left column — 55% */}
      <div className="flex flex-col justify-center bg-bg px-8 py-16 md:w-[55%] md:px-16 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {/* Big stat */}
          <div className="mb-2 font-display text-[84px] font-black leading-none tracking-tight text-text-dark md:text-[100px] lg:text-[120px]">
            {count}
            <span className="text-accent">★</span>
          </div>
          <p className="mb-2 font-display text-xl font-medium text-text-dark md:text-2xl">
            {count} pet families
          </p>
          <p className="mb-8 text-lg text-text-muted">
            in Velachery trust us
          </p>

          {/* CTA */}
          <a
            href={clinic.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg active:scale-[0.98]"
          >
            Book via WhatsApp →
          </a>

          {/* Pull quote */}
          <motion.blockquote
            className="mt-10 max-w-sm border-l-4 border-accent pl-4 font-display text-base italic text-text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            &ldquo;He doesn&apos;t run unnecessary tests. He just cares.&rdquo;
          </motion.blockquote>
        </motion.div>
      </div>

      {/* Right column — 45% */}
      <motion.div
        className="flex flex-col justify-center bg-primary px-8 py-16 md:w-[45%] md:px-12 lg:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Hand-drawn style paw SVG */}
        <svg
          viewBox="0 0 80 80"
          fill="none"
          className="mb-8 h-16 w-16 opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="40" cy="48" rx="18" ry="15" stroke="white" strokeWidth="2.5" />
          <ellipse cx="18" cy="34" rx="8" ry="10" stroke="white" strokeWidth="2.5" />
          <ellipse cx="62" cy="34" rx="8" ry="10" stroke="white" strokeWidth="2.5" />
          <ellipse cx="28" cy="22" rx="6" ry="8" stroke="white" strokeWidth="2.5" />
          <ellipse cx="52" cy="22" rx="6" ry="8" stroke="white" strokeWidth="2.5" />
        </svg>

        <p className="mb-1 font-util text-xs font-medium uppercase tracking-widest text-white/50">
          Velachery, Chennai
        </p>
        <h1 className="mb-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
          {clinic.tagline}
        </h1>
        <p className="mb-8 text-base leading-relaxed text-white/80">
          Since the clinic opened its doors, Dr. Thanigaivel has treated dogs,
          cats, and every creature in between — building trust one family at a
          time.
        </p>

        {/* Hours badge */}
        <div className="inline-block rounded-lg border border-white/20 bg-white/10 px-4 py-3">
          <p className="mb-1 font-util text-xs text-white/50">Clinic hours</p>
          <p className="font-util text-sm text-white">Mon – Sat &nbsp;9am – 1pm &amp; 5 – 9pm</p>
          <p className="font-util text-xs text-white/50 mt-0.5">Sunday: Closed</p>
        </div>

        {/* Rating badge */}
        <div className="mt-4 flex items-center gap-3">
          <span className="font-display text-3xl font-bold text-accent">
            {clinic.rating.score}★
          </span>
          <span className="text-sm text-white/60">
            {clinic.rating.count} Google reviews
          </span>
        </div>
      </motion.div>
    </section>
  );
}
