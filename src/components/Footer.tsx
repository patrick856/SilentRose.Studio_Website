export default function Footer() {
  return (
    <footer className="bg-cream grain py-10">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-dm text-forest/40 text-xs">
            <span className="text-crimson">•</span> SilentRose.Studio
          </span>
        </div>

        <div className="flex items-center gap-8">
          <span className="font-dm text-forest/30 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </span>
          <a
            href="https://instagram.com/silentrose.studio"
            className="font-dm text-forest/30 text-xs hover:text-forest/60 transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
