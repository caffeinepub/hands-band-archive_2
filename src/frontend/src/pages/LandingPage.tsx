import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "HOME", path: "/home" },
  { label: "ABOUT", path: "/about" },
  { label: "MEMBERS", path: "/members" },
  { label: "MUSIC", path: "/music" },
  { label: "UPDATES", path: "/updates" },
  { label: "CONTACT", path: "/contact" },
  { label: "VIDEO", path: "/video" },
];

const QR_ART =
  "\u2588\u2580\u2580\u2580\u2580\u2580\u2588  \u2588\u2580\u2588  \u2588\u2580\u2580\u2580\u2580\u2580\u2588\n" +
  "\u2588 \u2588\u2588\u2588 \u2588 \u2584\u2580\u2580\u2584\u2580 \u2588 \u2588\u2588\u2588 \u2588\n" +
  "\u2588 \u2580\u2580\u2580 \u2588 \u2588\u2584 \u2588\u2584 \u2588 \u2580\u2580\u2580 \u2588\n" +
  "\u2580\u2580\u2580\u2580\u2580\u2580\u2580 \u2580 \u2580 \u2580 \u2580\u2580\u2580\u2580\u2580\u2580\u2580\n" +
  "\u2588 \u2580\u2584 \u2580\u2580 \u2588 \u2580\u2588\u2588\u2584\u2584 \u2580\u2584 \u2580\u2588\n" +
  "\u2580 \u2588  \u2580\u2584 \u2588\u2588\u2580\u2584\u2588 \u2580 \u2588  \u2580\u2584\n" +
  "\u2580\u2580\u2580\u2580\u2580\u2580\u2580 \u2580\u2584 \u2588\u2584\u2584\u2580\u2580\u2580\u2580\u2580\u2580\u2580\n" +
  "\u2588\u2580\u2580\u2580\u2580\u2580\u2588 \u2584\u2584\u2580\u2580 \u2584\u2588\u2580\u2580\u2580\u2580\u2580\u2588\n" +
  "\u2588 \u2588\u2588\u2588 \u2588 \u2584\u2580  \u2588 \u2588 \u2588\u2588\u2588 \u2588\n" +
  "\u2588 \u2580\u2580\u2580 \u2588 \u2588\u2584\u2584\u2580  \u2588 \u2580\u2580\u2580 \u2588\n" +
  "\u2580\u2580\u2580\u2580\u2580\u2580\u2580 \u2580  \u2580  \u2580\u2580\u2580\u2580\u2580\u2580\u2580";

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="scan-lines" />

      <div className="flex flex-col items-center gap-6">
        {/* QR Code - clickable, links to /home */}
        <Link
          to="/home"
          data-ocid="landing.qr.link"
          style={{ width: 220, height: 220 }}
          className="border border-white/30 flex items-center justify-center hover:border-white/60 transition-colors cursor-pointer"
          aria-label="Go to home"
        >
          <div className="text-center">
            <pre className="text-white/40 text-xs leading-tight select-none">
              {QR_ART}
            </pre>
          </div>
        </Link>

        <button
          type="button"
          data-ocid="landing.open_modal_button"
          onClick={() => setModalOpen(true)}
          className="border border-white/30 px-6 py-3 text-xs uppercase tracking-widest hover:bg-white/5 transition-colors"
        >
          THE HAND / SCAN OR CLICK
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          data-ocid="landing.modal"
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
        >
          <div className="w-full max-w-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="section-title mb-0">NAVIGATE</div>
              <button
                type="button"
                data-ocid="landing.modal.close_button"
                onClick={() => setModalOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="nav-link block py-2"
                  onClick={() => setModalOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
