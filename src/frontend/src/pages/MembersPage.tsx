import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function MembersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 px-6 py-12 max-w-4xl mx-auto w-full">
        <div className="section-title">MEMBERS</div>

        <div
          className="archive-card flex-row gap-6 flex"
          style={{ minHeight: 200 }}
        >
          {/* Photo placeholder */}
          <div
            style={{ width: 120, height: 150, flexShrink: 0 }}
            className="border border-white/20 bg-white/5 flex items-center justify-center text-white/20 text-xs uppercase tracking-widest"
          >
            PHOTO
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between flex-1">
            <div>
              <div className="font-bold text-xl uppercase tracking-wider mb-1">
                JOE SINGER
              </div>
              <div className="text-white/70 text-sm mb-2">Vocals / Guitar</div>
              <p className="text-white/60 text-sm leading-relaxed">
                Joe Singer is the founding voice and creative force of The Hand.
                Known for long silences held with confidence and movements that
                suggest the room owes him something. His guitar work is
                dissonant, deliberate, and hard to shake.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <span className="border border-white/30 text-xs px-2 py-0.5 uppercase tracking-widest">
                ACTIVE
              </span>
              <span className="text-xs text-white/30 font-mono">
                JOE-SINGER-001 / VOCALS-GUITAR
              </span>
            </div>
          </div>
        </div>

        <p className="text-white/30 text-xs mt-8">More members to be added.</p>
      </main>
      <SiteFooter />
    </div>
  );
}
