import { useRef, useState } from "react";
import { Star, Play, Pause } from "lucide-react";

const VIDEO_REVIEWS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Home Builder",
    rating: 5,
    // Replace src with your actual video file path, e.g. "/videos/review1.mp4"
    src: "",
    poster: "",
    quote: "Best hardware shop in the area!",
  },
  {
    id: 2,
    name: "Sunita Sharma",
    role: "Homeowner",
    rating: 5,
    src: "",
    poster: "",
    quote: "Excellent quality sanitary ware.",
  },
  {
    id: 3,
    name: "Imran Sheikh",
    role: "Plumbing Contractor",
    rating: 5,
    src: "",
    poster: "",
    quote: "My go-to plumbing supplier!",
  },
  {
    id: 4,
    name: "Anil Patel",
    role: "Farmer",
    rating: 5,
    src: "",
    poster: "",
    quote: "Great submersible pump dealer.",
  },
  {
    id: 5,
    name: "Priya Singh",
    role: "Interior Designer",
    rating: 5,
    src: "",
    poster: "",
    quote: "Beautiful bathroom fittings!",
  },
  {
    id: 6,
    name: "Deepak Verma",
    role: "Civil Engineer",
    rating: 5,
    src: "",
    poster: "",
    quote: "Top quality TMT rods and cement.",
  },
];

// Duplicate list for seamless infinite loop
const DOUBLED = [...VIDEO_REVIEWS, ...VIDEO_REVIEWS];

function VideoCard({ review }: { review: (typeof VIDEO_REVIEWS)[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="video-review-card group relative flex-shrink-0 w-56 rounded-2xl overflow-hidden border bg-card shadow-card cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)]">
      {/* Video / Placeholder */}
      <div className="relative aspect-[9/16] bg-gradient-to-br from-[oklch(0.22_0.012_60)] to-[oklch(0.13_0.01_60)] w-full">
        {review.src ? (
          <video
            ref={videoRef}
            src={review.src}
            poster={review.poster}
            loop
            playsInline
            muted={false}
            className="absolute inset-0 h-full w-full object-cover"
            onEnded={() => setPlaying(false)}
          />
        ) : (
          /* Placeholder shown when no video src is provided */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center text-ink-foreground/80">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-[image:var(--gradient-primary)] font-display text-2xl text-white shadow-[var(--shadow-glow)]">
              {review.name.charAt(0)}
            </span>
            <p className="text-xs font-semibold leading-snug text-ink-foreground/70 px-2">
              "{review.quote}"
            </p>
          </div>
        )}

        {/* Play / Pause button overlay */}
        <button
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-black/50 backdrop-blur-sm text-white">
            {playing ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 translate-x-0.5" />
            )}
          </span>
        </button>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

        {/* Stars */}
        <div className="absolute bottom-14 left-3 flex gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
          ))}
        </div>

        {/* Reviewer info */}
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-sm font-bold text-white leading-tight truncate">
            {review.name}
          </p>
          <p className="text-xs text-white/70 truncate">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function VideoReviews() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-20 overflow-hidden bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-10 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          Video Reviews
        </p>
        <h2 className="mt-2 text-4xl sm:text-5xl">Hear From Our Customers</h2>
        <p className="mt-4 text-muted-foreground">
          Real people, real experiences — watch what they say about us.
        </p>
      </div>

      {/* Marquee track */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-secondary/40 to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-secondary/40 to-transparent" />

        <div
          className="flex gap-5 px-5"
          style={{
            animation: `video-marquee 30s linear infinite`,
            animationPlayState: paused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {DOUBLED.map((r, i) => (
            <VideoCard key={`${r.id}-${i}`} review={r} />
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        Hover to pause · Click to play
      </p>
    </section>
  );
}
