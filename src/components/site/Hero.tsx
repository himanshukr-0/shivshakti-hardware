export default function Hero() {
  return (
    <section id="top" className="relative flex items-center overflow-hidden lg:min-h-[100svh]">
      <video
        className="h-auto w-full lg:absolute lg:inset-0 lg:h-full lg:object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/og-image.jpg"
        aria-hidden="true"
      >
        <source src="/shiv-shakti-hardware.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
