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
    span: "col-span-1 row-span-2",
  },
  {
    src: galleryCement,
    alt: "Cement stock — stacked bags of Karmach cement",
    label: "Cement Stock",
    span: "col-span-1 row-span-1",
  },
  {
    src: galleryPipes,
    alt: "PVC pipes and fittings warehouse",
    label: "PVC Pipes & Fittings",
    span: "col-span-1 row-span-1",
  },
  {
    src: galleryStore1,
    alt: "Store shelves stocked with hardware and plumbing parts",
    label: "Store Shelves",
    span: "col-span-1 row-span-2",
  },
  {
    src: galleryStore2,
    alt: "Full shelving unit packed with hardware items",
    label: "Hardware Inventory",
    span: "col-span-1 row-span-2",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<null | (typeof IMAGES)[0]>(null);

  return (
    <>
      <section id="gallery" className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Gallery</p>
            <h2 className="mt-2 text-4xl sm:text-5xl">A Look Inside Our Store</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Real photos from our warehouse and shop floor — cement, pipes, sand, and more.
            </p>
          </div>

          {/* Bento grid */}
          <div
            className="mt-12 grid grid-cols-3 grid-rows-4 gap-4"
            style={{ gridTemplateRows: "repeat(4, 180px)" }}
          >
            {/* River Sand — tall left column */}
            <GalleryCard img={IMAGES[0]} className="col-span-1 row-span-2" onClick={() => setLightbox(IMAGES[0])} delay={0} />
            {/* Cement Stock — top middle */}
            <GalleryCard img={IMAGES[1]} className="col-span-1 row-span-2" onClick={() => setLightbox(IMAGES[1])} delay={0.08} />
            {/* PVC Pipes — top right */}
            <GalleryCard img={IMAGES[2]} className="col-span-1 row-span-2" onClick={() => setLightbox(IMAGES[2])} delay={0.16} />
            {/* Store Shelves — bottom left */}
            <GalleryCard img={IMAGES[3]} className="col-span-1 row-span-2" onClick={() => setLightbox(IMAGES[3])} delay={0.24} />
            {/* Hardware Inventory — bottom spans 2 cols */}
            <GalleryCard img={IMAGES[4]} className="col-span-2 row-span-2" onClick={() => setLightbox(IMAGES[4])} delay={0.32} />
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4">
                <p className="text-white font-semibold text-lg">{lightbox.label}</p>
                <p className="text-white/70 text-sm">{lightbox.alt}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close lightbox"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors text-xl font-bold"
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

interface GalleryCardProps {
  img: (typeof IMAGES)[0];
  className?: string;
  onClick: () => void;
  delay: number;
}

function GalleryCard({ img, className = "", onClick, delay }: GalleryCardProps) {
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
      {/* Overlay on hover */}
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
