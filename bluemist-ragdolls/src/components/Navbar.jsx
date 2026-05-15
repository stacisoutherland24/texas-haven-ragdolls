import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PawPrint } from "lucide-react";
import { CATTERY } from "../data/siteData";

const NAV_LINKS = [
  { label: "Home",      path: "/" },
  { label: "Our Queens", path: "/queens" },
  { label: "Kittens",   path: "/kittens" },
  { label: "Gallery",   path: "/gallery" },
  { label: "FAQ",       path: "/faq" },
  { label: "Contact",   path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-dust-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-dust-500 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-dust-600 transition-colors">
            <PawPrint size={18} className="text-white" />
          </div>
          <span className="font-serif text-lg text-dust-800 tracking-tight">{CATTERY.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`px-3 py-1.5 rounded-lg text-sm font-sans transition-colors ${
                pathname === l.path
                  ? "bg-dust-100 text-dust-700 font-medium"
                  : "text-dust-500 hover:text-dust-700 hover:bg-dust-50"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/waitlist" className="ml-3 btn-primary">
            Join Waitlist
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-dust-500 hover:bg-dust-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-dust-100 px-4 pb-4 pt-2 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`px-3 py-2.5 rounded-lg text-sm font-sans ${
                pathname === l.path
                  ? "bg-dust-100 text-dust-700 font-medium"
                  : "text-dust-500"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/waitlist" onClick={() => setOpen(false)} className="btn-primary text-center mt-2">
            Join Waitlist
          </Link>
        </div>
      )}
    </header>
  );
}
