import { useRef, useState } from "react";
import { Star, Play, Pause } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────────────── */
const VIDEO_REVIEWS = [
  { id: 1, name: "Rajesh Kumar",  role: "Home Builder",        rating: 5, src: "", poster: "", quote: "Best hardware shop in the area!" },
  { id: 2, name: "Sunita Sharma", role: "Homeowner",           rating: 5, src: "", poster: "", quote: "Excellent quality sanitary ware." },
  { id: 3, name: "Imran Sheikh",  role: "Plumbing Contractor", rating: 5, src: "", poster: "", quote: "My go-to plumbing supplier!" },
  { id: 4, name: "Anil Patel",    role: "Farmer",              rating: 5, src: "", poster: "", quote: "Great submersible pump dealer." },
  { id: 5, name: "Priya Singh",   role: "Interior Designer",   rating: 5, src: "", poster: "", quote: "Beautiful bathroom fittings!" },
  { id: 6, name: "Deepak Verma",  role: "Civil Engineer",      rating: 5, src: "", poster: "", quote: "Top quality TMT rods and cement." },
  { id: 7, name: "Meena Gupta",   role: "House Owner",         rating: 5, src: "", poster: "", quote: "Got everything for my new home here." },
  { id: 8, name: "Suresh Yadav",  role: "Contractor",          rating: 5, src: "", poster: "", quote: "Reliable and affordable. Highly recommend!" },
];

// Doubled so translateX(-50%) = exactly one full set → seamless loop
const LOOPED = [...VIDEO_REVIEWS, ...VIDEO_REVIEWS];

// Card dimensions
const CARD_W = 260;  // px
const CARD_GAP = 16; // px

/* ─── Single video card ─────────────────────────────────────────────── */
function VideoCard({ review }: { review: (typeof VIDEO_REVIEWS)[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else          { v.pause(); setPlaying(false); }
  };

  return (
    <div
      className="relative flex-shrink-0 rounded-2xl overflow-hidden border bg-card shadow-card transition-transform duration-300 hover:scale-[1.04] hover:shadow-[var(--shadow-glow)] group"
      style={{ width: CARD_W, height: CARD_W * (16 / 9) }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.22_0.012_60)] to-[oklch(0.13_0.01_60)]" />

      {/* Video or placeholder */}
      {review.src ? (
        <video
          ref={videoRef}
          src={review.src}
          poster={review.poster}
          loop playsInline
          className="absolute inset-0 h-full w-full object-cover"
          onEnded={() => setPlaying(false)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-[image:var(--gradient-primary)] font-display text-3xl text-white shadow-[var(--shadow-glow)]">
            {review.name.charAt(0)}
          </span>
          <p className="text-sm font-semibold leading-snug text-ink-foreground/60 px-2">
            "{review.quote}"
          </p>
        </div>
      )}

      {/* Play / Pause overlay */}
      <button
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-black/50 backdrop-blur-sm text-white shadow-lg">
          {playing
            ? <Pause className="h-6 w-6" />
            : <Play  className="h-6 w-6 translate-x-0.5" />}
        </span>
      </button>

      {/* Bottom gradient overlay */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black/85 to-transparent" />

      {/* Stars */}
      <div className="absolute bottom-16 left-4 flex gap-0.5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>

      {/* Name & role */}
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-sm font-bold text-white truncate">{review.name}</p>
        <p className="text-xs text-white/70 truncate">{review.role}</p>
      </div>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────── */
export default function Reviews() {
  const [paused, setPaused] = useState(false);

  // Visible window = exactly 3 cards + 2 gaps
  const visibleW = CARD_W * 3 + CARD_GAP * 2;
  // Full track width (both sets)
  const trackW   = LOOPED.length * (CARD_W + CARD_GAP);
  // Speed: ~60px/s feels comfortable
  const duration = trackW / 2 / 60; // divide by 2 because translateX(-50%)

  return (
    <section id="reviews" className="scroll-mt-24 py-20">

      {/* ── Heading ── */}
      <div className="mx-auto max-w-2xl px-4 text-center mb-12">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          Testimonials
        </p>
        <h2 className="mt-2 text-4xl sm:text-5xl">What Customers Say</h2>
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="font-semibold">4.8 / 5 from 320+ reviews</span>
        </div>
      </div>

      {/* ── 3-visible marquee ── */}
      <div
        className="relative mx-auto"
        style={{ maxWidth: visibleW }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Clip window */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex"
            style={{
              gap: CARD_GAP,
              width: trackW,
              animation: `reviews-scroll ${duration}s linear infinite`,
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {LOOPED.map((r, i) => (
              <VideoCard key={`${r.id}-${i}`} review={r} />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Hover to pause · Click to play video
      </p>
    </section>
  );
}
