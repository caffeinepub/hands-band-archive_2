export default function SiteFooter() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="border-t border-black/20 py-8 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <span className="font-bold tracking-widest uppercase">THE HAND</span>
        <span className="text-black/50 tracking-widest uppercase">
          BROOKLYN, NY
        </span>
        <span className="text-black/30">
          &copy; {year}.{" "}
          <a
            href={utmLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black/60 transition-colors"
          >
            Built with love using caffeine.ai
          </a>
        </span>
      </div>
    </footer>
  );
}
