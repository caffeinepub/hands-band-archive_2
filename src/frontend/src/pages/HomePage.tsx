import { Link } from "@tanstack/react-router";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 px-6 py-12 max-w-4xl mx-auto w-full">
        <h1 className="glitch text-6xl font-bold mb-6" data-text="THE HAND">
          THE HAND
        </h1>
        <p className="text-black/70 text-sm leading-relaxed mb-12">
          The Hand is a personal band project that represents its members, their
          music, and their creative collaboration.
        </p>

        <div className="section-title">EXPLORE</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="archive-card">
            <div className="font-bold text-sm uppercase tracking-widest mb-2">
              MUSIC
            </div>
            <p className="text-black/60 text-xs leading-relaxed flex-1">
              Songs, albums, and demos from The Hand.
            </p>
            <Link
              to="/music"
              className="text-xs text-black/70 hover:text-black mt-4 block transition-colors"
            >
              VIEW →
            </Link>
          </div>
          <div className="archive-card">
            <div className="font-bold text-sm uppercase tracking-widest mb-2">
              MEMBERS
            </div>
            <p className="text-black/60 text-xs leading-relaxed flex-1">
              Meet the people behind The Hand.
            </p>
            <Link
              to="/members"
              className="text-xs text-black/70 hover:text-black mt-4 block transition-colors"
            >
              VIEW →
            </Link>
          </div>
          <div className="archive-card">
            <div className="font-bold text-sm uppercase tracking-widest mb-2">
              UPDATES
            </div>
            <p className="text-black/60 text-xs leading-relaxed flex-1">
              News, announcements, and new releases.
            </p>
            <Link
              to="/updates"
              className="text-xs text-black/70 hover:text-black mt-4 block transition-colors"
            >
              VIEW →
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
