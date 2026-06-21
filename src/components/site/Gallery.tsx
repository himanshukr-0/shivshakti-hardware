import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import galleryCement from "@/assets/gallery-cement.jpg";
import galleryPipes from "@/assets/gallery-pipes.jpg";
import gallerySand from "@/assets/gallery-sand.jpg";
import galleryStore1 from "@/assets/gallery-store1.jpg";
import galleryStore2 from "@/assets/gallery-store2.jpg";

const IMAGES = [
  {
    src: gallerySand,
    alt: "River sand stockpile for construction",
    label: "River Sand",
  },
  {
    src: galleryCement,
    alt: "Cement stock — stacked bags of Karmach cement",
    label: "Cement Stock",
  },
  {
    src: galleryPipes,
    alt: "PVC pipes and fittings warehouse",
    label: "PVC Pipes & Fittings",
  },
  {
    src: galleryStore1,
    alt: "Store shelves stocked with hardware and plumbing parts",
    label: "Store Shelves",
  },
  {
    src: galleryStore2,
    alt: "Full shelving unit packed with hardware items",
    label: "Hardware Inventory",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<null | (typeof IMAGES)[0]>(null);

  return (
    <>
      <section id="gallery" className="bg-secondary/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Gallery</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl">A Look Inside Our Store</h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">
              Real photos from our warehouse and shop floor — cement, pipes, sand, and more.
            </p>
          </div>

          {/* ── MOBILE grid (visible below md) ── */}
          <div className="mt-10 grid grid-cols-2 gap-3 md:hidden">
            {/* First image — full width */}
            <MobileCard img={IMAGES[0]} onClick={() => setLightbox(IMAGES[0])} delay={0} fullWidth />
            {/* Remaining 4 — 2 columns */}
            {IMAGES.slice(1).map((img, i) => (
              <MobileCard key={img.label} img={img} onClick={() => setLightbox(img)} delay={(i + 1) * 0.07} />
            ))}
          </div>

          {/* ── DESKTOP bento grid (visible md+) ── */}
          <div
            className="mt-12 hidden md:grid grid-cols-3 gap-4"
            style={{ gridTemplateRows: "repeat(4, 180px)" }}
          >
            {/* River Sand — tall left */}
            <DesktopCard img={IMAGES[0]} className="col-span-1 row-span-2" onClick={() => setLightbox(IMAGES[0])} delay={0} />
            {/* Cement — top middle */}
            <DesktopCard img={IMAGES[1]} className="col-span-1 row-span-2" onClick={() => setLightbox(IMAGES[1])} delay={0.08} />
            {/* PVC Pipes — top right */}
            <DesktopCard img={IMAGES[2]} className="col-span-1 row-span-2" onClick={() => setLightbox(IMAGES[2])} delay={0.16} />
            {/* Store Shelves — bottom left */}
            <DesktopCard img={IMAGES[3]} className="col-span-1 row-span-2" onClick={() => setLightbox(IMAGES[3])} delay={0.24} />
            {/* Hardware Inventory — bottom spans 2 */}
            <DesktopCard img={IMAGES[4]} className="col-span-2 row-span-2" onClick={() => setLightbox(IMAGES[4])} delay={0.32} />
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-3 sm:p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain bg-black"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-4 sm:px-6">
                <p className="text-white font-semibold text-base sm:text-lg">{lightbox.label}</p>
                <p className="text-white/70 text-xs sm:text-sm mt-0.5">{lightbox.alt}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close lightbox"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors text-xl font-bold"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Mobile card ── */
interface MobileCardProps {
  img: (typeof IMAGES)[0];
  onClick: () => void;
  delay: number;
  fullWidth?: boolean;
}

function MobileCard({ img, onClick, delay, fullWidth }: MobileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl shadow-md cursor-pointer active:scale-95 transition-transform ${
        fullWidth ? "col-span-2 h-52" : "h-40"
      }`}
    >
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-active:scale-105"
      />
      {/* Always-visible label on mobile */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
        <p className="text-white font-semibold text-xs leading-tight">{img.label}</p>
      </div>
      {/* Tap indicator */}
      <div className="absolute top-2 right-2 bg-black/40 rounded-full px-2 py-0.5">
        <span className="text-white/80 text-[10px]">View</span>
      </div>
    </motion.div>
  );
}

/* ── Desktop card ── */
interface DesktopCardProps {
  img: (typeof IMAGES)[0];
  className?: string;
  onClick: () => void;
  delay: number;
}

function DesktopCard({ img, className = "", onClick, delay }: DesktopCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ${className}`}
    >
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div>
          <p className="text-white font-semibold text-sm">{img.label}</p>
          <p className="text-white/70 text-xs mt-0.5 line-clamp-1">{img.alt}</p>
        </div>
        <span className="ml-auto text-white/80 text-xs border border-white/40 rounded-full px-2 py-0.5">View</span>
      </div>
    </motion.div>
  );
}
