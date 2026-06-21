import { MapPin, Phone, Youtube } from "lucide-react";
import { BUSINESS } from "@/lib/site";

const QUICK = [
  { href: "#products", label: "Products" },
  { href: "#about", label: "About Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const CATS = [
  "Construction Materials",
  "Plumbing Solutions",
  "Water Supply",
  "Bathroom & Sanitary",
];

export default function Footer() {
  return (
    <footer className="bg-[image:var(--gradient-dark)] text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/favicon.ico"
              alt="Shiv Shakti Hardware logo"
              className="h-10 w-10 rounded-lg object-contain"
            />
            <span className="font-display text-lg">Shiv Shakti <span className="text-primary">Hardware</span></span>
          </div>
          <p className="mt-4 text-sm text-ink-foreground/70">
            Your trusted hardware store, plumbing materials supplier, sanitary ware shop and
            construction material supplier — everything needed to build your dream home.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://youtu.be/HuTXmpT_hlQ?si=Mk_DT5S5uxtZX6Zg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="grid h-9 w-9 place-items-center rounded-full glass-dark transition-transform hover:scale-110 hover:text-primary"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
            {QUICK.map((q) => (
              <li key={q.href}><a href={q.href} className="transition hover:text-primary">{q.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg">Product Categories</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
            {CATS.map((c) => (
              <li key={c}><a href="#products" className="transition hover:text-primary">{c}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg">Get In Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/70">
            <li className="flex items-start gap-2"><MapPin className="h-5 w-5 shrink-0 text-primary" /> {BUSINESS.address}</li>
            <li className="flex items-center gap-2"><Phone className="h-5 w-5 shrink-0 text-primary" /> <a href={`tel:${BUSINESS.phone}`} className="hover:text-primary">{BUSINESS.phoneDisplay}</a></li>
            <li className="flex items-center gap-2"><Phone className="h-5 w-5 shrink-0 text-primary" /> <a href={`tel:+917870015153`} className="hover:text-primary">+91 78700 15153</a></li>
            <li><a href="https://maps.app.goo.gl/TThSHDgBerRQ2zM16" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">View on Google Maps →</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-ink-foreground/60">
        © {new Date().getFullYear()} Shiv Shakti Hardware. All rights reserved.
      </div>
    </footer>
  );
}
