import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const updates = [
  {
    date: "2024-03-20",
    title: "NEW MATERIAL DEBUTED AT BABY'S ALL RIGHT",
    body: "Full set at Baby's All Right. New material from the upcoming LP played live for the first time. Brooklyn showed up.",
  },
  {
    date: "2024-01-20",
    title: "SHOW AT MARKET HOTEL",
    body: "Early show. Sparse crowd but intense. The set felt different — tighter. Something is changing.",
  },
  {
    date: "2023-11-01",
    title: "MOTORIK STUDY DEMO RELEASED",
    body: "Three new demos available now. Recorded live to tape. No overdubs.",
  },
];

export default function UpdatesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 px-6 py-12 max-w-4xl mx-auto w-full">
        <div className="section-title">UPDATES</div>

        <div className="flex flex-col gap-6">
          {updates.map((u) => (
            <div key={u.date} className="border-b border-white/10 pb-6">
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">
                {u.date}
              </div>
              <div className="font-bold text-sm uppercase tracking-wide mb-1">
                {u.title}
              </div>
              <p className="text-sm text-white/70 leading-relaxed">{u.body}</p>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
