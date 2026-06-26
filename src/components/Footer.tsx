import { clinic } from "@/lib/clinic";

export default function Footer() {
  return (
    <footer className="bg-primary-dark bg-[#1A3D2B] px-5 py-12 text-white/70">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          {/* Left */}
          <div>
            <p className="mb-1 font-display text-lg font-semibold text-white">
              Thanigai Pet Care Clinic
            </p>
            <p className="text-sm leading-relaxed">{clinic.address}</p>
          </div>

          {/* Right */}
          <div className="md:text-right">
            <a
              href={`tel:${clinic.phone}`}
              className="block text-sm text-white hover:text-white/90"
            >
              {clinic.phone.replace("+91", "+91 ")}
            </a>
            <a
              href={clinic.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm text-accent hover:underline"
            >
              WhatsApp us →
            </a>
            <p className="mt-3 font-util text-xs">
              Mon – Sat · 9am – 1pm &amp; 5 – 9pm
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          Built with care · © 2025 Thanigai Pet Care Clinic
        </div>
      </div>
    </footer>
  );
}
