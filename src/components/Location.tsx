import Reveal from "./Reveal";
import { clinic } from "@/lib/clinic";

export default function Location() {
  return (
    <section id="hours" className="bg-bg py-20 px-5">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-10 font-display text-3xl font-bold text-text-dark md:text-4xl">
            Hours &amp; Location
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Hours card */}
          <Reveal>
            <div className="rounded-sm bg-surface p-7 shadow-card h-full">
              <p className="mb-5 font-display text-lg font-bold text-text-dark">
                Opening hours
              </p>
              <table className="w-full">
                <tbody>
                  {clinic.hours.map((row, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="py-3 font-display text-sm font-medium text-text-dark w-36">
                        {row.day}
                      </td>
                      <td className="py-3 text-right">
                        {row.slots.map((s, j) => (
                          <p key={j} className="font-util text-sm text-text-muted">
                            {s}
                          </p>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-6 border-t border-border pt-5">
                <p className="mb-1 font-display text-sm font-semibold text-text-dark">
                  Address
                </p>
                <p className="text-sm leading-relaxed text-text-muted">
                  {clinic.address}
                </p>
                <a
                  href={`https://maps.google.com/?q=Thanigai+Pet+Care+Clinic+Velachery+Chennai`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
                >
                  Get directions →
                </a>
              </div>
            </div>
          </Reveal>

          {/* Google Maps */}
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-sm shadow-card h-full min-h-[320px]">
              <iframe
                src={clinic.mapsEmbed}
                width="100%"
                height="100%"
                className="min-h-[320px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thanigai Pet Care Clinic on Google Maps"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
