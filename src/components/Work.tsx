const projects = [
  {
    number: '.01',
    name: 'PLENI',
    tag: 'Brand Identity',
    description: 'A luxury fragrance brand system built around abundance — bold geometry meets warm palette.',
    accent: '#b85c4a',
    year: '2026',
    url: 'https://pleni-perfume.vercel.app/',
  },
  {
    number: '.02',
    name: 'CLOUD',
    tag: 'Digital Experience',
    description: 'A mobile-first digital platform with a playful visual language — light, airy, expressive.',
    accent: '#8AAB96',
    year: '2026',
    url: 'https://cloud-psi-three.vercel.app/',
  },
  {
    number: '.03',
    name: 'TRAVELANZA',
    tag: 'Design System',
    description: 'A comprehensive design system for a travel agency — scalable, precise, and deeply considered.',
    accent: '#E8E0D4',
    year: '2026',
    url: 'https://travelanza-website.vercel.app/',
  },
  {
    number: '.04',
    name: 'PORTFOLIO',
    tag: 'Visual Strategy',
    description: 'A portfolio website for a designer and developer. Every detail intentional.',
    accent: '#93032E',
    year: '2026',
    url: 'https://patrickmarcus.vercel.app/',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isEven = index % 2 === 0;

  const cardClassName =
    'group relative block bg-forest border border-cream/10 overflow-hidden transition-all duration-500 hover:border-cream/25';

  const cardContent = (
    <>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-0 h-px bg-crimson transition-all duration-500 group-hover:w-full" />

      {/* Background circle motif */}
      <div
        className={`absolute rounded-full border transition-all duration-700 group-hover:scale-110 ${
          isEven
            ? '-bottom-24 -right-24 w-64 h-64 border-cream/5 group-hover:border-cream/10'
            : '-top-24 -left-24 w-64 h-64 border-cream/5 group-hover:border-cream/10'
        }`}
      />
      <div
        className={`absolute rounded-full border ${
          isEven
            ? '-bottom-16 -right-16 w-44 h-44 border-cream/4'
            : '-top-16 -left-16 w-44 h-44 border-cream/4'
        }`}
      />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-10 flex flex-col h-full min-h-[320px]">
        <div className="flex items-start justify-between mb-auto">
          <div>
            <span className="label text-cream/35 dot-prefix">{project.tag}</span>
          </div>
          <span className="font-dm text-cream/20 text-xs">{project.year}</span>
        </div>

        <div className="mt-12">
          <h3 className="font-unbounded font-black text-cream text-4xl md:text-5xl leading-none tracking-tight mb-4 group-hover:text-cream transition-colors">
            {project.name}
          </h3>
          <p className="font-dm text-cream/45 text-sm leading-relaxed max-w-xs mb-8 group-hover:text-cream/60 transition-colors duration-300">
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span
            className="font-unbounded font-bold text-[0.6rem] tracking-widest"
            style={{ color: project.accent }}
          >
            {project.number} {project.name}
          </span>
          <span className="font-dm text-cream/25 text-xs group-hover:text-cream/60 transition-colors duration-300 flex items-center gap-2">
            Visit site
            <span className="text-crimson opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
          </span>
        </div>
      </div>
    </>
  );

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.name} project site`}
        className={`${cardClassName} cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson`}
      >
        {cardContent}
      </a>
    );
  }

  return <article className={cardClassName}>{cardContent}</article>;
}

export default function Work() {
  return (
    <section id="work" className="bg-forest py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="label text-cream/40 dot-prefix mb-4 block">Selected Work</span>
            <h2 className="font-unbounded font-black text-cream text-[clamp(2rem,5vw,4rem)] leading-none tracking-tight">
              Projects that<br />
              <span className="text-cream/25">define the work.</span>
            </h2>
          </div>
          <p className="font-dm text-cream/40 text-sm leading-relaxed max-w-xs">
            Each project is a system. Every detail serves a purpose. Nothing is decorative.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/10">
          {projects.map((p, i) => (
            <ProjectCard key={p.number} project={p} index={i} />
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-12 flex justify-end">
          <a href="#contact" className="font-dm text-cream/35 text-sm hover:text-sage transition-colors flex items-center gap-3">
            <span className="w-8 h-px bg-cream/30" />
            All projects on request
          </a>
        </div>
      </div>
    </section>
  );
}
