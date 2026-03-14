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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-black/20">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="text-xs text-black/50 hover:text-black transition-colors uppercase tracking-widest"
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
          {/* Theme switcher */}
          <span className="mx-2 text-black/20 text-xs">|</span>
          <a
            href="https://hands-band-archive-light-thme-2zj.caffeine.xyz"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.light_theme.link"
            title="Light Theme"
            className="text-xl text-black/60 hover:text-black transition-colors px-2 py-1"
          >
            ☀
          </a>
          <a
            href="https://hands-band-archive-ra1.caffeine.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.dark_theme.link"
            title="Dark Theme"
            className="text-xl text-black/60 hover:text-black transition-colors px-2 py-1"
          >
            ☾
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-black/70 hover:text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/20 bg-white">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-ocid={ocidMap[link.path]}
              className={`block px-6 py-3 text-xs uppercase tracking-widest border-b border-black/10 ${
                currentPath === link.path
                  ? "text-black bg-black/10"
                  : "text-black/70 hover:text-black hover:bg-black/5"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* Theme switcher — mobile */}
          <div className="flex gap-6 px-6 py-3 border-b border-black/10">
            <a
              href="https://hands-band-archive-light-thme-2zj.caffeine.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-black/60 hover:text-black transition-colors flex items-center gap-1 uppercase tracking-widest"
            >
              ☀ <span className="text-xs">Light</span>
            </a>
            <a
              href="https://hands-band-archive-ra1.caffeine.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-black/60 hover:text-black transition-colors flex items-center gap-1 uppercase tracking-widest"
            >
              ☾ <span className="text-xs">Dark</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
