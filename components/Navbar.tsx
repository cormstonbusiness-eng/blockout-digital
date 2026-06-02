"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "My Story" },
    { href: "/how-we-work", label: "How We Work" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav className="nav">
        <div className="nav__inner">
          <Link href="/" className="nav__logo" aria-label="Blockout Digital home">
            <img src="/logo.webp" alt="Blockout Digital" />
          </Link>
          <div className="nav__links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav__link ${isActive(link.href) ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn nav__cta" data-magnetic>
              Start a Blockout <span className="arr">→</span>
            </Link>
          </div>
          <button
            className={`nav__burger ${mobileOpen ? "open" : ""}`}
            aria-label="Open menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`nav__mobile ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="nav-spacer"></div>
    </>
  );
}
