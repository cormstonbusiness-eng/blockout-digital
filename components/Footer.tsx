import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__cta reveal">
          <div>
            <div className="eyebrow">Got something to build?</div>
            <h3 className="h-lg text-paper" style={{ marginTop: "8px" }}>
              Let's make something <span className="text-orange">unmissable.</span>
            </h3>
          </div>
          <Link href="/contact" className="btn btn--lg" data-magnetic>
            Start a Blockout <span className="arr">→</span>
          </Link>
        </div>
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/logo-white.png" alt="Blockout Digital" />
            <p>Every great project starts with a Blockout.</p>
          </div>
          <div className="footer__col">
            <h4>Studio</h4>
            <Link href="/about">About us</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Work</Link>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <Link href="/services">Websites</Link>
            <Link href="/services">Branding</Link>
            <Link href="/services">Marketing</Link>
            <Link href="/services">3D Design</Link>
          </div>
          <div className="footer__col">
            <h4>Say hello</h4>
            <a href="mailto:hello@blockoutdigital.com">hello@blockoutdigital.com</a>
            <a href="tel:+447931876340">+44 (0)7931 876340</a>
            <Link href="/contact">Start a project →</Link>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © <span>{new Date().getFullYear()}</span> Blockout Digital. Built block by block.
          </span>
          <div className="row" style={{ gap: "18px" }}>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
