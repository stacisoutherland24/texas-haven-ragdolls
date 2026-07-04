import { Link } from "react-router-dom";
import { Calendar, Heart } from "lucide-react";

const STATUS_STYLES = {
  available: "bg-emerald-50 text-emerald-700 border-emerald-200",
  reserved:  "bg-amber-50 text-amber-700 border-amber-200",
  sold:      "bg-dust-100 text-dust-400 border-dust-200",
};

const STATUS_LABELS = {
  available: "Available",
  reserved:  "Reserved",
  sold:      "Adopted",
};

export default function KittenCard({ kitten }) {
  return (
    <div className="card overflow-hidden group hover:shadow-md transition-shadow duration-300 fade-up">
      {/* Photo placeholder */}
      <div className={`h-48 bg-gradient-to-br from-dust-100 to-dust-200 flex items-center justify-center text-6xl relative`}>
        {kitten.emoji}
        <span
          className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full border font-sans ${STATUS_STYLES[kitten.status]}`}
        >
          {STATUS_LABELS[kitten.status]}
        </span>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-serif text-xl text-dust-800">{kitten.name}</h3>
            <p className="text-sm text-dust-500 font-sans">{kitten.gender} · {kitten.pattern}</p>
          </div>
          <p className="font-sans font-medium text-dust-600 text-sm">${kitten.price.toLocaleString()}</p>
        </div>

        <p className="text-sm text-dust-500 leading-relaxed font-sans mb-4 line-clamp-2">{kitten.description}</p>

        <div className="flex items-center gap-1.5 text-xs text-dust-400 font-sans mb-4">
          <Calendar size={13} />
          <span>Goes home {kitten.goHome}</span>
        </div>

        {/* Traits */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {kitten.traits.map((t) => (
            <span key={t} className="text-xs bg-dust-50 text-dust-500 border border-dust-200 px-2 py-0.5 rounded-full font-sans">
              {t}
            </span>
          ))}
        </div>

        {kitten.status === "available" ? (
          <Link to="/contact" className="btn-primary w-full text-center block">
            Inquire About {kitten.name}
          </Link>
        ) : (
          <button disabled className="w-full py-2.5 rounded-lg bg-dust-100 text-dust-400 text-sm font-sans cursor-not-allowed">
            {kitten.status === "reserved" ? "Reserved" : "Adopted ♥"}
          </button>
        )}
      </div>
    </div>
  );
}
