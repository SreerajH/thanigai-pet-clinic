import Reveal from "./Reveal";
import { clinic } from "@/lib/clinic";

export default function WhatsAppBanner() {
  return (
    <section className="bg-accent px-5 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="mb-3 font-display text-3xl font-bold text-white md:text-4xl">
            Need to see the doctor? Just send us a message.
          </h2>
          <p className="mb-8 text-base text-white/80">
            No complicated forms. WhatsApp us and we&apos;ll confirm your slot.
          </p>
          <a
            href={clinic.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-accent shadow-md transition-all duration-200 hover:scale-[1.04] hover:shadow-lg active:scale-[0.98]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.851L.057 23.5l5.797-1.451A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.001-1.371l-.358-.213-3.716.929.999-3.605-.234-.371A9.755 9.755 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            Book on WhatsApp →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
