import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CATEGORIES } from "@/lib/site";

export default function Categories() {
  return (
    <section id="products" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Our Products</p>
        <h2 className="mt-2 text-4xl sm:text-5xl">Product Categories</h2>
        <p className="mt-4 text-muted-foreground">
          From cement and TMT iron rods to PVC pipes, pumps and bathroom fittings — a complete
          construction material supplier under one roof.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((cat, i) => (
          <motion.article
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group overflow-hidden rounded-2xl border bg-card shadow-card transition-all hover:-translate-y-1.5 hover:shadow-glow"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={cat.image}
                alt={`${cat.title} at Shiv Shakti Hardware`}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <h3 className="absolute bottom-3 left-4 right-4 text-xl text-ink-foreground">
                {cat.title}
              </h3>
            </div>
            <div className="p-5">
              <p className="text-sm text-muted-foreground">{cat.desc}</p>
              <ul className="mt-4 space-y-2">
                {cat.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm font-medium">
                    <Check className="h-4 w-4 shrink-0 text-primary" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
