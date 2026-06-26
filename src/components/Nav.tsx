"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { clinic } from "@/lib/clinic";

const links = [
  { label: "Hours", href: "#hours" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-bg transition-shadow duration-300 ${
        scrolled ? "shadow-nav" : "border-b border-border"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a
          href="#"
          className="font-display text-[18px] font-semibold tracking-tight text-text-dark"
        >
          Thanigai Pet Care
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-text-dark"
            >
              {l.label}
            </a>
          ))}
          <a
            href={clinic.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="rounded-md p-1.5 text-text-dark md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile slide-down */}
      {open && (
        <div className="border-t border-border bg-bg px-5 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-text-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href={clinic.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
