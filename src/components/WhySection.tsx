import Reveal from "./Reveal";

const pillars = [
  {
    lead: "No unnecessary tests.",
    body: "Dr. Thanigaivel diagnoses from experience, not a checklist. He reads the animal, asks the right questions, and trusts what he sees.",
  },
  {
    lead: "Reasonable fees, always.",
    body: "Clear pricing, no surprise invoices. Families in Velachery know they'll never walk out wondering if they were overcharged.",
  },
  {
    lead: "842 five-star reviews.",
    body: "Real families, real outcomes. The kind of reputation you can't buy — only earn, one patient at a time, over many years.",
  },
];

export default function WhySection() {
  return (
    <section className="bg-bg py-20 px-5">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-12 font-display text-3xl font-bold leading-snug text-text-dark md:text-4xl max-w-xl">
            The vet who shows up for the animal, not the bill.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="border-l-4 border-accent bg-surface px-6 py-7">
                <p className="mb-3 font-display text-lg font-bold text-text-dark">
                  {p.lead}
                </p>
                <p className="text-sm leading-relaxed text-text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
