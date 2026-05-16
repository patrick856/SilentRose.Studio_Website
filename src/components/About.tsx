const values = [
  {
    number: '01',
    title: 'Precision',
    body: 'Every pixel has a reason. Every choice is deliberate. We don\'t decorate — we communicate.',
  },
  {
    number: '02',
    title: 'Restraint',
    body: 'Less is not a limitation. It is the discipline that separates craft from noise.',
  },
  {
    number: '03',
    title: 'Systems',
    body: 'We build brands that scale. Not one-off executions — living systems that hold together over time.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-cream grain py-28 md:py-36">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">

          {/* Left col */}
          <div className="lg:col-span-5 lg:pr-16">
            <span className="label text-forest/40 dot-prefix mb-6 block">
              About the Studio
            </span>

            <h2 className="font-unbounded font-black text-forest text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-tight mb-8">
              Quiet work.<br />
              <span className="text-forest/25">Loud results.</span>
            </h2>

            <p className="font-dm text-forest/60 text-base leading-[1.8] mb-6">
              SilentRose.Studio is an independent creative studio working at the intersection of brand,
              typography, and digital craft. We partner with founders and teams who understand that
              the best design is the kind you feel before you see it.
            </p>
            <p className="font-dm text-forest/50 text-sm leading-[1.8]">
              Based everywhere. Available by conversation.
            </p>

            <div className="mt-12 flex items-center gap-4">
              <div className="w-16 h-px bg-crimson" />
              <span className="label text-forest/30">Est. 2026</span>
            </div>
          </div>

          {/* Right col — geometric + values */}
          <div className="lg:col-span-7">
            {/* Large geometric element */}
            <div className="relative mb-12">
              <div className="w-full aspect-[4/2] border border-forest/10 relative overflow-hidden">
                {/* Grid lines */}
                <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="border-r border-forest/6 last:border-r-0 h-full" />
                  ))}
                </div>
                <div className="absolute inset-0 grid grid-rows-2 pointer-events-none">
                  <div className="border-b border-forest/6" />
                </div>

                {/* Circle motif */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square rounded-full border border-forest/15" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] aspect-square rounded-full border border-forest/10" />

                {/* Center dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-crimson" />

                {/* Corner labels */}
                <span className="absolute top-3 left-3 label text-forest/25 text-[0.55rem]">IDENTITY</span>
                <span className="absolute top-3 right-3 label text-forest/25 text-[0.55rem]">DIGITAL</span>
                <span className="absolute bottom-3 left-3 label text-forest/25 text-[0.55rem]">MOTION</span>
                <span className="absolute bottom-3 right-3 label text-forest/25 text-[0.55rem]">SYSTEMS</span>

                {/* Cross-hair lines */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-forest/8" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-forest/8" />
              </div>
            </div>

            {/* Values list */}
            <div className="flex flex-col gap-0 border border-forest/10">
              {values.map((v, i) => (
                <div
                  key={v.number}
                  className={`group flex gap-6 p-6 border-b border-forest/10 last:border-b-0 hover:bg-forest/5 transition-colors duration-200 cursor-default`}
                >
                  <span className="font-unbounded font-black text-crimson text-xs mt-0.5 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                    {v.number}
                  </span>
                  <div>
                    <h3 className="font-unbounded font-bold text-forest text-sm mb-2 tracking-wide">
                      {v.title}
                    </h3>
                    <p className="font-dm text-forest/55 text-sm leading-relaxed">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
