"use client";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const reviews = [
  {
    quote: "He gave us hope when everyone else said our puppy wouldn't survive. He fought for her like it was his own pet.",
    name: "Priya R.",
    stars: 5,
    rotation: -1.2,
  },
  {
    quote: "Friendly staff, knowledgeable vet, clean facility, and reasonable prices. I wouldn't go anywhere else.",
    name: "Karthik M.",
    stars: 5,
    rotation: 1.5,
  },
  {
    quote: "Every doctor should be like him — not for money, he saves lives. Our cat is alive because of Dr. Thanigaivel.",
    name: "Deepa S.",
    stars: 5,
    rotation: -0.8,
  },
  {
    quote: "He doesn't make you feel rushed. He takes his time, explains everything, and charges fairly. Rare these days.",
    name: "Anand V.",
    stars: 5,
    rotation: 1.2,
  },
  {
    quote: "We drove from Adyar because a friend recommended him. Worth every kilometre. Our dog recovered in 3 days.",
    name: "Suresh L.",
    stars: 5,
    rotation: -1.5,
  },
  {
    quote: "The doctor remembered my dog's name on our second visit. That level of care is just different.",
    name: "Meena T.",
    stars: 5,
    rotation: 0.9,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-accent text-sm">★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const reduced = useReducedMotion();

  return (
    <section id="reviews" className="bg-bg py-20 px-5">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-2 font-util text-xs font-medium uppercase tracking-widest text-text-muted">
            842 Google reviews · 4.6★
          </p>
          <h2 className="mb-12 font-display text-3xl font-bold text-text-dark md:text-4xl">
            What pet parents say
          </h2>
        </Reveal>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="mb-5 break-inside-avoid rounded-sm bg-surface p-6 shadow-card"
              style={{ rotate: reduced ? 0 : r.rotation }}
              initial={reduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              <Stars count={r.stars} />
              <p className="mt-3 font-display text-base italic leading-relaxed text-text-dark">
                &ldquo;{r.quote}&rdquo;
              </p>
              <p className="mt-3 font-util text-xs text-text-muted">— {r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
