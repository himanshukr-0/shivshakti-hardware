import { motion } from "framer-motion";
import { Package } from "lucide-react";
import { FEATURED } from "@/lib/site";

export default function Featured() {
  return (
    <section id="featured" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Best Sellers</p>
        <h2 className="mt-2 text-4xl sm:text-5xl">Featured Products</h2>
        <p className="mt-4 text-muted-foreground">
          Genuine, high-quality products — from TMT iron rods to mixer taps. Enquire now for the
          latest prices.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="flex flex-col rounded-2xl border bg-card p-6 shadow-card transition-transform hover:-translate-y-1"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
              <Package className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-xl">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
