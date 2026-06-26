import type { Metadata } from "next";
import { Fraunces, DM_Sans, DM_Mono } from "next/font/google";
import { clinic } from "@/lib/clinic";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const util = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-util",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(clinic.url),
  title: "Thanigai Pet Care Clinic — Velachery's Trusted Vet | Chennai",
  description:
    "Dr. Thanigaivel's pet clinic in Velachery, Chennai. Affordable, honest care for dogs, cats and all pets. 4.6★ · 842 reviews. WhatsApp to book.",
  keywords: [
    "Thanigai Pet Care Clinic",
    "vet Velachery Chennai",
    "Dr Thanigaivel vet",
    "pet clinic Velachery",
    "dog vet Chennai",
    "cat vet Chennai",
    "veterinary clinic Ram Nagar Chennai",
    "parvo treatment Chennai",
    "affordable vet Chennai",
  ],
  openGraph: {
    title: "Thanigai Pet Care Clinic — Velachery's Trusted Vet",
    description:
      "Affordable, honest care for dogs, cats and all pets. 4.6★ · 842 reviews. WhatsApp to book.",
    url: clinic.url,
    siteName: clinic.name,
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: clinic.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: clinic.name,
  telephone: clinic.phone,
  url: clinic.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: "13, 7th Main Rd, Ram Nagar, Velachery",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600042",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: clinic.geo.lat,
    longitude: clinic.geo.lng,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: clinic.rating.score,
    reviewCount: clinic.rating.count,
    bestRating: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body
        className={`${display.variable} ${body.variable} ${util.variable} font-body antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
