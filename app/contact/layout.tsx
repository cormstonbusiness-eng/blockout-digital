import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Let's Build Something Bold",
  description: "Get in touch with Craig Ormston to discuss your web design, branding, or project needs. Based in Nuneaton, Warwickshire.",
  keywords: ["contact", "get in touch", "inquiry"],
  openGraph: {
    title: "Contact Blockout Digital",
    description: "Ready to build something bold? Let's talk about your project.",
    url: "https://blockoutdigital.com/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
