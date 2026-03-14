import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const releases = [
  {
    title: "No Signal",
    type: "EP",
    year: "2022",
    tracks: "4 tracks",
    status: "RELEASED",
    amber: false,
  },
  {
    title: "Motorik Study",
    type: "Demo",
    year: "2023",
    tracks: "3 tracks",
    status: "RELEASED",
    amber: false,
  },
  {
    title: "Untitled LP",
    type: "Album",
    year: "2025",
    tracks: "tracks TBD",
    status: "UPCOMING",
    amber: true,
  },
];

export default function MusicPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 px-6 py-12 max-w-4xl mx-auto w-full">
        <div className="section-title">MUSIC</div>
        <p className="text-black/60 text-sm mb-8">
          Songs, albums, and demos from The Hand. More to come.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {releases.map((r) => (
            <div key={r.title} className="archive-card">
              <div className="flex items-start justify-between mb-2">
                <div className="font-bold text-sm uppercase tracking-wider">
                  {r.title}
                </div>
                <span
                  className={`text-xs px-2 py-0.5 border uppercase tracking-widest ${
                    r.amber
                      ? "border-amber-500/50 text-amber-500"
                      : "border-black/30 text-black/70"
                  }`}
                >
                  {r.status}
                </span>
              </div>
              <div className="text-black/40 text-xs mt-1">
                {r.type} / {r.year} / {r.tracks}
              </div>
            </div>
          ))}

          {/* Placeholder card */}
          <div
            className="archive-card border-dashed"
            style={{ borderColor: "rgba(0,0,0,0.1)" }}
          >
            <div className="text-black/20 text-sm flex-1 flex items-center justify-center">
              More coming soon
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
