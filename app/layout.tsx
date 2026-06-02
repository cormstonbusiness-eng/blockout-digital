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
  title: "Blockout Digital — A design agency that refuses to be boring",
  description:
    "Blockout Digital is a design agency doing websites, branding, digital marketing, exhibition design and 3D. Every great project starts with a Blockout.",
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
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
