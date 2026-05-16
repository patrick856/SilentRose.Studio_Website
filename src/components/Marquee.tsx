const items = [
  'Brand Identity',
  'Design Systems',
  'Digital Experience',
  'Motion Design',
  'Visual Strategy',
  'Typography',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-crimson overflow-hidden py-3 border-y border-crimson">
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{
          animation: 'marquee 22s linear infinite',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-unbounded font-bold text-cream text-[0.65rem] uppercase tracking-widest inline-flex items-center"
          >
            {item}
            <span className="inline-block w-px h-3 bg-cream/40 mx-8" />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
