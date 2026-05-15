import { Link } from "react-router-dom";
import { PawPrint, Mail, Phone, Instagram } from "lucide-react";
import { CATTERY } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-dust-900 text-dust-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 bg-dust-500 rounded-lg flex items-center justify-center">
              <PawPrint size={15} className="text-white" />
            </div>
            <span className="font-serif text-base text-white">{CATTERY.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-dust-400">{CATTERY.tagline}</p>
          <p className="text-xs text-dust-500 mt-3">{CATTERY.tica}</p>
        </div>

        {/* Links */}
        <div>
          <p className="section-label text-dust-500 mb-4">Explore</p>
          <div className="flex flex-col gap-2">
            {[
              ["Home", "/"],
              ["Our Queens", "/queens"],
              ["Available Kittens", "/kittens"],
              ["Gallery", "/gallery"],
              ["FAQ", "/faq"],
              ["Contact", "/contact"],
              ["Join Waitlist", "/waitlist"],
            ].map(([label, path]) => (
              <Link key={path} to={path} className="text-sm text-dust-400 hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="section-label text-dust-500 mb-4">Get in touch</p>
          <div className="flex flex-col gap-3">
            <a href={`mailto:${CATTERY.email}`} className="flex items-center gap-2 text-sm text-dust-400 hover:text-white transition-colors">
              <Mail size={15} /> {CATTERY.email}
            </a>
            <a href={`tel:${CATTERY.phone}`} className="flex items-center gap-2 text-sm text-dust-400 hover:text-white transition-colors">
              <Phone size={15} /> {CATTERY.phone}
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-dust-400 hover:text-white transition-colors">
              <Instagram size={15} /> {CATTERY.instagram}
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-dust-700">
            <p className="text-xs text-dust-500">
              {CATTERY.location} · Est. {CATTERY.established}
            </p>
            <p className="text-xs text-dust-600 mt-1">
              © {new Date().getFullYear()} {CATTERY.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
