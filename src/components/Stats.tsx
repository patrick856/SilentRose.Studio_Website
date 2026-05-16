const stats = [
  { value: '7+', label: 'Projects Delivered' },
  { value: '12+', label: 'Months of Practice' },
  { value: '5', label: 'Clients Worked With' },
  { value: '100%', label: 'Designs Approved' },
];

export default function Stats() {
  return (
    <section className="bg-cream grain py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-forest/10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-8 py-10 border-r border-forest/10 last:border-r-0 ${
                i >= 2 ? 'border-t md:border-t-0' : ''
              } ${i === 1 ? 'md:border-r border-forest/10' : ''}`}
            >
              <div className="font-unbounded font-black text-forest text-4xl md:text-5xl leading-none mb-3">
                {s.value}
              </div>
              <div className="label text-forest/40 dot-prefix">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
