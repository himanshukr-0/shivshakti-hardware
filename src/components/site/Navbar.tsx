import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";

const LINKS = [
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <img
            src="/favicon.ico"
            alt="Shiv Shakti Hardware logo"
            className="h-10 w-10 shrink-0 rounded-lg shadow-glow object-contain"
          />
          <span className={`truncate font-display text-lg leading-none ${scrolled ? "text-foreground" : "text-ink-foreground"}`}>
            Shiv Shakti<span className="text-primary"> Hardware</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  scrolled ? "text-foreground" : "text-ink-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="hidden items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105 sm:flex"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className={`grid h-10 w-10 place-items-center rounded-lg lg:hidden ${
              scrolled ? "text-foreground" : "text-ink-foreground"
            }`}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mt-2 rounded-xl glass p-4 shadow-card lg:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 font-semibold text-foreground hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
