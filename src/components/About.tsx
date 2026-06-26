import Image from "next/image";
import Reveal from "./Reveal";
import { clinic } from "@/lib/clinic";

export default function About() {
  return (
    <section className="bg-surface py-20 px-5">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-2 font-util text-xs font-medium uppercase tracking-widest text-text-muted">
            Meet the doctor
          </p>
          <h2 className="mb-10 font-display text-3xl font-bold text-text-dark md:text-4xl">
            Dr. Thanigaivel
          </h2>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Photo — clinic exterior */}
          <Reveal x={-20} y={0}>
            <div className="overflow-hidden rounded-sm shadow-card">
              <Image
                src="/images/photo-2.jpg"
                alt="Thanigai Pet Care Clinic exterior, Velachery"
                width={640}
                height={480}
                className="h-72 w-full object-cover md:h-80"
                priority={false}
              />
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={0.1}>
            <blockquote className="mb-6 font-display text-lg italic leading-relaxed text-text-dark md:text-xl">
              Dr. Thanigaivel has been treating pets in Velachery for years —
              building a reputation not through advertising, but through results.
              His patients&apos; owners come back not because they have to, but
              because they want to.
            </blockquote>

            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <div>
                <p className="font-util text-2xl font-medium text-primary">
                  {clinic.rating.count}
                </p>
                <p className="text-sm text-text-muted">Google reviews</p>
              </div>
              <div>
                <p className="font-util text-2xl font-medium text-primary">
                  {clinic.rating.score}★
                </p>
                <p className="text-sm text-text-muted">Average rating</p>
              </div>
              <div>
                <p className="font-util text-sm font-medium text-text-muted">
                  Velachery, Chennai
                </p>
                <p className="text-sm text-text-muted">Tamil Nadu</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Puppy photo — patient vibe */}
        <Reveal delay={0.2} className="mt-10">
          <div className="overflow-hidden rounded-sm shadow-card md:hidden">
            <Image
              src="/images/photo-1.jpg"
              alt="A patient at Thanigai Pet Care Clinic"
              width={640}
              height={640}
              className="h-64 w-full object-cover"
            />
          </div>
          <div className="hidden md:block mt-10">
            <div className="flex gap-5 items-end">
              <div className="overflow-hidden rounded-sm shadow-card w-56 flex-shrink-0">
                <Image
                  src="/images/photo-1.jpg"
                  alt="A patient at Thanigai Pet Care Clinic"
                  width={400}
                  height={400}
                  className="h-56 w-full object-cover"
                />
              </div>
              <p className="font-display text-sm italic text-text-muted leading-relaxed max-w-sm">
                Every animal that walks through these doors is treated with the
                same care Dr. Thanigaivel would give his own. That&apos;s not a
                tagline — it&apos;s just how he works.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
