export default function Hero() {
  return (
    <section className="relative min-h-screen bg-forest flex flex-col justify-center overflow-hidden">
      {/* Large background circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[min(90vw,900px)] h-[min(90vw,900px)] rounded-full border border-cream/8"
          style={{ transform: 'translate(15%, 10%)' }}
        />
        <div
          className="absolute w-[min(60vw,620px)] h-[min(60vw,620px)] rounded-full border border-cream/5"
          style={{ transform: 'translate(-12%, -8%)' }}
        />
      </div>

      {/* Geometric accent — top right */}
      <div className="absolute top-0 right-0 w-48 h-48 border-l border-b border-cream/10" />
      <div className="absolute top-0 right-12 w-px h-32 bg-crimson/40" />

      {/* Geometric accent — bottom left */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-r border-t border-cream/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-px bg-crimson" />
          <span className="label text-cream/50">Creative Design Studio</span>
        </div>

        {/* Headline */}
        <h1 className="font-unbounded font-black text-cream leading-none mb-8">
          <span className="block text-[clamp(3rem,8vw,7.5rem)] tracking-tight">
            We design
          </span>
          <span className="block text-[clamp(3rem,8vw,7.5rem)] tracking-tight text-cream/20">
            what silence
          </span>
          <span className="block text-[clamp(3rem,8vw,7.5rem)] tracking-tight">
            sounds like.
          </span>
        </h1>

        {/* Sub */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-0 justify-between mt-16">
          <p className="font-dm text-cream/50 text-base md:text-lg leading-relaxed max-w-md">
            Brand identities, digital experiences, and design systems
            built with precision — and a quiet confidence.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#work"
              className="font-unbounded font-bold text-cream text-xs uppercase tracking-widest border border-cream/30 px-8 py-4 hover:border-crimson hover:text-cream transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10">View Work</span>
              <span className="absolute inset-0 bg-crimson scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 opacity-10" />
            </a>
            <div className="hidden md:block w-px h-12 bg-cream/20" />
            <a href="#contact" className="font-dm text-cream/50 text-sm hover:text-sage transition-colors">
              Let's talk <span className="text-crimson ml-1">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="label text-cream text-[0.55rem] tracking-[0.25em]">scroll</span>
        <div className="w-px h-10 bg-cream animate-pulse" />
      </div>
    </section>
  );
}
