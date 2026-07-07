import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/lib/site";
import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/nav/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Munnar Hillside Homestay`,
    template: `%s — ${site.shortName}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_IN",
    siteName: site.shortName,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: site.name,
              description: site.description,
              telephone: site.phoneDisplay,
              email: site.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: site.address.line,
                addressLocality: site.address.area,
                addressRegion: site.address.region,
                postalCode: site.address.postal,
                addressCountry: site.address.country,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: site.location.lat,
                longitude: site.location.lng,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: site.rating,
                bestRating: 5,
                ratingCount: 120,
              },
              priceRange: "₹₹",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-cream-paper font-sans text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
