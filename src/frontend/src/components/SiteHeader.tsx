import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
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

const ocidMap: Record<string, string> = {
  "/home": "nav.home.link",
  "/about": "nav.about.link",
  "/members": "nav.members.link",
  "/music": "nav.music.link",
  "/updates": "nav.updates.link",
  "/contact": "nav.contact.link",
  "/video": "nav.video.link",
};

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/20">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest"
          >
            ← BACK
          </button>
          <Link
            to="/"
            className="text-sm font-bold tracking-[0.3em] uppercase glitch"
            data-text="THE HAND"
          >
            THE HAND
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-ocid={ocidMap[link.path]}
              className={`nav-link${currentPath === link.path ? " active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/20 bg-black">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-ocid={ocidMap[link.path]}
              className={`block px-6 py-3 text-xs uppercase tracking-widest border-b border-white/10 ${
                currentPath === link.path
                  ? "text-white bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
