import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 px-6 py-12 max-w-4xl mx-auto w-full">
        <div className="section-title">ABOUT THE BAND</div>
        <h1 className="glitch text-5xl font-bold mb-10" data-text="THE HAND">
          THE HAND
        </h1>

        <div className="mb-8">
          <div className="section-title">WHO WE ARE</div>
          <p className="text-sm text-black/70 leading-relaxed">
            The Hand is a personal band project representing its members, their
            music, and their creative collaboration. Formed in Brooklyn in 2018.
          </p>
        </div>

        <div className="mb-8">
          <div className="section-title">THE SOUND</div>
          <p className="text-sm text-black/70 leading-relaxed">
            Dissonant guitar work layered over motorik rhythms. Post-punk
            structures pulled apart and reassembled. The Hand carve out a
            singular sound that resists easy categorization.
          </p>
        </div>

        <div className="mb-8">
          <div className="section-title">THE VISION</div>
          <p className="text-sm text-black/70 leading-relaxed">
            This site is the official record of The Hand — a living document of
            members, music, shows, and creative work. It grows as the band
            grows.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {["post-punk", "no-wave", "experimental"].map((tag) => (
            <span
              key={tag}
              className="border border-black/30 px-3 py-1 text-xs uppercase tracking-widest text-black/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
