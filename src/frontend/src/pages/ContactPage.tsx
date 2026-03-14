import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 px-6 py-12 max-w-4xl mx-auto w-full">
        <div className="section-title">CONTACT & SOCIALS</div>

        <div className="mb-8">
          <div className="section-title">EMAIL</div>
          <a
            href="mailto:thehand.band@gmail.com"
            className="text-sm text-black/70 hover:text-black underline-offset-4 hover:underline transition-colors"
          >
            thehand.band@gmail.com
          </a>
        </div>

        <div className="mb-8">
          <div className="section-title">LOCATION</div>
          <p className="text-sm text-black/60">
            123 Kent Ave, Brooklyn, NY 11249
          </p>
        </div>

        <div className="mb-8">
          <div className="section-title">SOCIALS</div>
          <div className="flex flex-col gap-2">
            <a
              href="https://youtu.be/YE6fTTwyDTc?si=AAhPR_nsovovDHUP"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.youtube.link"
              className="text-sm text-black/80 hover:text-black transition-colors"
            >
              YOUTUBE →
            </a>
            <span className="text-sm text-black/40 opacity-40 cursor-default">
              INSTAGRAM (coming soon)
            </span>
            <span className="text-sm text-black/40 opacity-40 cursor-default">
              BANDCAMP (coming soon)
            </span>
          </div>
        </div>

        <div className="mb-8">
          <div className="section-title">WATCH OUR VIDEO</div>
          <a
            href="https://youtu.be/YE6fTTwyDTc?si=AAhPR_nsovovDHUP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-black/80 hover:text-black underline-offset-4 hover:underline transition-colors break-all"
          >
            https://youtu.be/YE6fTTwyDTc?si=AAhPR_nsovovDHUP
          </a>
        </div>

        <p className="text-black/30 text-xs mt-8">
          Booking and press inquiries via email.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
