import { motion } from "framer-motion";
import { Award, Eye, Phone } from "lucide-react";
import shop from "@/assets/shop-interior.jpg";
import founder from "@/assets/founder.jpg";
import { BUSINESS } from "@/lib/site";

const FOUNDERS = [
  {
    name: "Mr. Govind Prasad",
    img: founder,
    alt: "Mr. Govind Prasad, Founder of Shiv Shakti Hardware",
    phone: "+919430083013",
    phoneDisplay: "+91 94300 83013",
  },
  {
    name: "Mr. Gautam Prasad",
    // Drop "gautam.jpg" in src/assets/ and update this import path
    img: null as string | null,
    alt: "Mr. Gautam Prasad, Founder of Shiv Shakti Hardware",
    phone: "+917870015153",
    phoneDisplay: "+91 78700 15153",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-secondary/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ── Store overview ── */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold uppercase tracking-widest text-primary">About Us</p>
            <h2 className="mt-2 text-4xl sm:text-5xl">A Trusted Local Supplier</h2>
            <p className="mt-5 text-muted-foreground">
              Shiv Shakti Hardware is a trusted hardware store and construction material supplier
              serving homeowners, builders and contractors. As a leading plumbing materials supplier
              and sanitary ware shop, we stock everything from cement, sand and TMT iron rods to PVC
              pipes, valves, pumps, water tanks and complete bathroom fittings.
            </p>
            <p className="mt-4 text-muted-foreground">
              Whether you are searching for the best hardware shop near you, a reliable PVC pipe
              dealer, a water tank supplier or a submersible pump dealer — we deliver genuine
              products at competitive prices, backed by honest advice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-card"
          >
            <img
              src={shop}
              alt="Inside Shiv Shakti Hardware store with plumbing and sanitary products"
              loading="lazy"
              width={1280}
              height={768}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        {/* ── Founders ── */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Meet Our Founders</p>
            <h3 className="mt-2 text-3xl sm:text-4xl">The People Behind the Store</h3>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left — two founder photos side by side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 sm:flex-row sm:gap-6 justify-center"
            >
              {FOUNDERS.map((f, i) => (
                <div key={f.name} className="flex flex-col items-center gap-3 flex-1">
                  <div className="relative w-full max-w-[200px]">
                    <div className="absolute -inset-2 -z-10 rounded-2xl bg-[image:var(--gradient-primary)] opacity-25 blur-xl" />
                    {f.img ? (
                      <img
                        src={f.img}
                        alt={f.alt}
                        loading="lazy"
                        className="w-full aspect-square rounded-2xl border-4 border-card object-cover shadow-glow"
                      />
                    ) : (
                      /* Placeholder until real photo is added */
                      <div className="w-full aspect-square rounded-2xl border-4 border-card bg-gradient-to-br from-[oklch(0.22_0.012_60)] to-[oklch(0.13_0.01_60)] flex items-center justify-center shadow-glow">
                        <span className="font-display text-4xl text-primary">
                          {f.name.split(" ").slice(-1)[0].charAt(0)}
                          {f.name.split(" ").slice(-2, -1)[0].charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Name & phone below image */}
                  <div className="text-center">
                    <p className="font-display text-lg leading-tight">{f.name}</p>
                    <a
                      href={`tel:${f.phone}`}
                      className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {f.phoneDisplay}
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right — text content */}
            <div>
              <p className="mt-5 text-muted-foreground">
                "At Shiv Shakti Hardware, our mission is to provide high-quality construction, plumbing
                and sanitary solutions to homeowners, builders and contractors. Customer satisfaction
                and product quality are our top priorities."
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border bg-card p-5 shadow-card">
                  <Award className="h-7 w-7 text-primary" />
                  <h4 className="mt-3 text-lg">Experience</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    15+ years serving the community as a reliable hardware and sanitary supplier.
                  </p>
                </div>
                <div className="rounded-2xl border bg-card p-5 shadow-card">
                  <Eye className="h-7 w-7 text-primary" />
                  <h4 className="mt-3 text-lg">Vision</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    To be the most trusted one-stop shop for every construction and plumbing need.
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
