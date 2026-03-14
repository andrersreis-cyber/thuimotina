import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Historia", href: "#historia" },
  { label: "Produtos", href: "#produtos" },
  { label: "Processo", href: "#processo" },
  { label: "Memorial", href: "#memorial" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--color-bg)]/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <a href="#inicio" className="flex flex-col items-start leading-none">
            <span
              className="font-serif text-2xl font-bold tracking-[0.15em] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary)] bg-clip-text text-transparent"
            >
              THIMOTINA
            </span>
            <span className="text-[var(--color-text-muted)] text-[10px] tracking-[0.25em] uppercase mt-0.5">
              desde 1915
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => handleLinkClick(href)}
                  className={`relative font-sans text-sm font-normal uppercase tracking-wider transition-colors duration-300 hover:text-[var(--color-primary-light)] ${
                    activeLink === href
                      ? "text-[var(--color-primary-light)]"
                      : "text-[var(--color-text)]"
                  }`}
                >
                  {label}
                  {activeLink === href && (
                    <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[var(--color-primary-light)] rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="/loja"
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-light)] px-6 py-2 text-sm font-sans font-semibold uppercase tracking-wider text-[var(--color-bg)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:shadow-lg hover:shadow-[var(--color-primary-light)]/20"
            >
              Loja Online
            </a>

            {/* Hamburger */}
            <button
              aria-label="Abrir menu"
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 group"
              onClick={() => setMobileOpen(true)}
            >
              <svg
                className="w-6 h-6 text-[var(--color-text)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[var(--color-bg)]/98 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />

        {/* Close button */}
        <button
          aria-label="Fechar menu"
          className="absolute top-5 right-6 z-10 w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileOpen(false)}
        >
          <svg
            className="w-7 h-7 text-[var(--color-text)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>

        {/* Menu content */}
        <div
          className={`relative flex flex-col items-center justify-center h-full gap-8 transition-transform duration-500 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Logo in mobile menu */}
          <div className="flex flex-col items-center mb-4">
            <span className="font-serif text-3xl font-bold tracking-[0.15em] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary)] bg-clip-text text-transparent">
              THIMOTINA
            </span>
            <span className="text-[var(--color-text-muted)] text-xs tracking-[0.25em] uppercase mt-1">
              desde 1915
            </span>
          </div>

          {navLinks.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => handleLinkClick(href)}
              className={`font-sans text-lg font-normal uppercase tracking-[0.2em] transition-colors duration-300 hover:text-[var(--color-primary-light)] ${
                activeLink === href
                  ? "text-[var(--color-primary-light)]"
                  : "text-[var(--color-text)]"
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
            >
              {label}
            </a>
          ))}

          <a
            href="/loja"
            className="mt-4 rounded-full bg-[var(--color-primary-light)] px-8 py-3 text-sm font-sans font-semibold uppercase tracking-wider text-[var(--color-bg)] transition-all duration-300 hover:bg-[var(--color-primary)]"
          >
            Loja Online
          </a>
        </div>
      </div>
    </>
  );
}
