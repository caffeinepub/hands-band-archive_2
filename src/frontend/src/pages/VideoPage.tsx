import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function VideoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 px-6 py-12 max-w-4xl mx-auto w-full">
        <section data-ocid="video.section">
          <div className="section-title">WATCH</div>
          <h1 className="glitch text-3xl font-bold mb-4" data-text="THE HAND">
            THE HAND
          </h1>
          <p className="text-black/60 text-sm mb-8">
            Watch The Hand live and in the studio.
          </p>

          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.youtube.com/embed/YE6fTTwyDTc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
