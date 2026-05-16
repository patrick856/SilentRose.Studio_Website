const steps = [
  {
    number: '01',
    phase: 'Discovery',
    description: 'We listen before we look. Understanding your context, your audience, and the space you\'re trying to occupy comes before any mark is made.',
    duration: '1 — 2 weeks',
  },
  {
    number: '02',
    phase: 'Strategy',
    description: 'Position and direction. We define the conceptual framework — what the brand stands for, how it speaks, and where it lives.',
    duration: '1 week',
  },
  {
    number: '03',
    phase: 'Design',
    description: 'Form follows concept. We develop the visual system — mark, type, color, texture, motion — as a coherent whole, not a collection of parts.',
    duration: '2 — 4 weeks',
  },
  {
    number: '04',
    phase: 'Delivery',
    description: 'Complete handoff. Every asset, every file, every guideline — documented and ready for use. The system works without us in the room.',
    duration: '1 week',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-forest py-28 md:py-36 relative overflow-hidden">
      {/* Background geometry */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 border-l border-cream/5 pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 w-96 h-96 -translate-y-1/2 rounded-full border border-cream/4 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <span className="label text-cream/35 dot-prefix mb-6 block">Process</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-unbounded font-black text-cream text-[clamp(2rem,5vw,4rem)] leading-none tracking-tight">
              How we work.
            </h2>
            <p className="font-dm text-cream/40 text-sm leading-relaxed max-w-xs">
              A structured process with room for intuition. Deliberate, not rigid.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[2.4rem] top-0 bottom-0 w-px bg-cream/8 hidden md:block" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="group relative flex gap-8 md:gap-16 py-10 border-b border-cream/8 last:border-b-0 hover:bg-cream/2 transition-colors duration-300"
              >
                {/* Step number / dot */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 border border-cream/15 flex items-center justify-center relative z-10 bg-forest group-hover:border-crimson transition-all duration-300">
                    <span className="font-unbounded font-black text-crimson text-[0.6rem]">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <h3 className="font-unbounded font-bold text-cream text-xl md:text-2xl tracking-tight group-hover:text-cream transition-colors">
                      {step.phase}
                    </h3>
                    <span className="label text-cream/30 text-[0.6rem] flex items-center gap-2 flex-shrink-0">
                      <span className="w-4 h-px bg-cream/20" />{step.duration}
                    </span>
                  </div>
                  <p className="font-dm text-cream/45 text-sm leading-[1.85] max-w-xl group-hover:text-cream/60 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Right accent */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-crimson scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="#contact"
            className="font-unbounded font-bold text-[0.65rem] uppercase tracking-widest text-cream border border-cream/30 px-8 py-4 hover:border-crimson hover:bg-crimson/5 transition-all duration-300"
          >
            Start a project
          </a>
          <span className="font-dm text-cream/30 text-xs">
            Currently accepting projects for Q3 2026
          </span>
        </div>
      </div>
    </section>
  );
}
