import { motion } from "framer-motion";
import catConstruction from "@/assets/cat-construction.jpg";
import catPlumbing from "@/assets/cat-plumbing.jpg";
import catWater from "@/assets/cat-water.jpg";
import catBathroom from "@/assets/cat-bathroom.jpg";
import shop from "@/assets/shop-interior.jpg";

const IMAGES = [
  { src: shop, alt: "Shop interior of Shiv Shakti Hardware", span: "sm:col-span-2 sm:row-span-2" },
  { src: catConstruction, alt: "Construction materials — cement, sand and iron rods" },
  { src: catPlumbing, alt: "Plumbing materials — PVC pipes and fittings" },
  { src: catBathroom, alt: "Sanitary products and bathroom fittings" },
  { src: catWater, alt: "Water pumps and water tanks" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-secondary/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Gallery</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">A Look Inside Our Store</h2>
        </div>
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-4">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group overflow-hidden rounded-2xl shadow-card ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
