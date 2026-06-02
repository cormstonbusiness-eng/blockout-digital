import type { Metadata } from "next";
import { Baloo_2, Hanken_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blockoutdigital.com"),
  title: "Blockout Digital — Bold Design Studio",
  description:
    "One-man design studio specializing in custom websites, brand identity, social media marketing, exhibition design, and 3D visualization.",
  keywords: ["web design", "branding", "3D design", "digital marketing", "design studio", "Nuneaton"],
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  openGraph: {
    type: "website",
    url: "https://blockoutdigital.com",
    title: "Blockout Digital — Bold Design Studio",
    description: "Bold design without the agency nonsense. Custom websites, branding, 3D, exhibitions, and social media.",
    images: [{
      url: "https://blockoutdigital.com/opengraph-image.jpg",
      width: 1200,
      height: 630,
      alt: "Blockout Digital",
    }],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blockout Digital",
    description: "Bold design without the agency nonsense",
    images: ["https://blockoutdigital.com/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baloo.variable} ${hanken.variable}`} suppressHydrationWarning>
      <head>
        <Script strategy="beforeInteractive">
          {`if(!matchMedia('(prefers-reduced-motion:reduce)').matches && !document.hidden){document.documentElement.classList.add('anim');}`}
        </Script>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              "@id": "https://blockoutdigital.com",
              name: "Blockout Digital",
              url: "https://blockoutdigital.com",
              logo: "https://blockoutdigital.com/logo.webp",
              description: "Bold design studio specializing in web development, branding, social media, exhibitions, and 3D visualization.",
              foundingDate: "2026",
              founder: {
                "@type": "Person",
                name: "Craig Ormston",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nuneaton",
                addressRegion: "Warwickshire",
                addressCountry: "GB",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+44-7931-876340",
                email: "hello@blockoutdigital.com",
                areaServed: "GB",
              },
              sameAs: [
                "https://linkedin.com/company/blockout-digital",
                "https://instagram.com/blockout.digital",
              ],
              priceRange: "£££",
            }),
          }}
        />
      </head>
      <body>
        <RevealInit />
        <Navbar />
        {children}
        <Footer />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
