import { useState } from "react";
import { Link } from "react-router-dom";
import { KITTENS } from "../data/siteData";
import KittenCard from "../components/KittenCard";

const FILTERS = ["All", "Available", "Reserved", "Adopted"];

export default function Kittens() {
  const [filter, setFilter] = useState("All");

  const filtered = KITTENS.filter((k) => {
    if (filter === "All") return true;
    if (filter === "Available") return k.status === "available";
    if (filter === "Reserved") return k.status === "reserved";
    if (filter === "Adopted") return k.status === "sold";
    return true;
  });

  const availableCount = KITTENS.filter((k) => k.status === "available").length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      {/* Header */}
      <div className="mb-10 fade-up">
        <p className="section-label mb-3">Current Litter · Spring 2025</p>
        <div className="flex items-end justify-between">
          <div>
            <h1 className="display-heading text-5xl mb-3">Available Kittens</h1>
            <p className="text-dust-500 font-sans text-lg">
              {availableCount > 0
                ? `${availableCount} kitten${availableCount !== 1 ? "s" : ""} currently available for adoption.`
                : "No kittens available right now — join the waitlist for the next litter."}
            </p>
          </div>
        </div>
      </div>

      {/* Litter info card */}
      <div className="card p-6 mb-8 flex flex-wrap gap-6 fade-up fade-up-delay-1">
        <div>
          <p className="text-xs text-dust-400 font-sans uppercase tracking-wider mb-1">Mother</p>
          <p className="font-sans font-medium text-dust-700">Luna 🐈</p>
        </div>
        <div className="border-l border-dust-100 pl-6">
          <p className="text-xs text-dust-400 font-sans uppercase tracking-wider mb-1">Date of birth</p>
          <p className="font-sans font-medium text-dust-700">March 12, 2025</p>
        </div>
        <div className="border-l border-dust-100 pl-6">
          <p className="text-xs text-dust-400 font-sans uppercase tracking-wider mb-1">Go home date</p>
          <p className="font-sans font-medium text-dust-700">June 7, 2025</p>
        </div>
        <div className="border-l border-dust-100 pl-6">
          <p className="text-xs text-dust-400 font-sans uppercase tracking-wider mb-1">Litter size</p>
          <p className="font-sans font-medium text-dust-700">{KITTENS.length} kittens</p>
        </div>
        <div className="ml-auto self-center">
          <Link to="/waitlist" className="btn-outline text-sm">
            Join waitlist for next litter →
          </Link>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-8 fade-up fade-up-delay-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-sans border transition-colors ${
              filter === f
                ? "bg-dust-500 text-white border-dust-500"
                : "border-dust-200 text-dust-500 hover:border-dust-400 hover:bg-dust-50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((k, i) => (
            <div key={k.id} className={`fade-up-delay-${(i % 3) + 1}`}>
              <KittenCard kitten={k} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-4xl mb-4">🐾</p>
          <p className="font-serif text-2xl text-dust-600 mb-2">No kittens in this category</p>
          <p className="text-dust-400 font-sans text-sm">Try a different filter or join the waitlist.</p>
        </div>
      )}

      {/* Adoption info */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {[
          { emoji: "💰", title: "Pricing", body: "Pet kittens are $1,800–$1,900 and include TICA papers, vaccinations, deworming, microchip, and health certificate." },
          { emoji: "📋", title: "The process", body: "Submit an inquiry, complete our adoption application, and pay a $300 deposit to hold your kitten pending approval." },
          { emoji: "🏠", title: "Going home", body: "Kittens go home at 12 weeks minimum with a take-home kit: food, litter, a scent blanket, and a care guide." },
        ].map((item) => (
          <div key={item.title} className="card p-6 text-center">
            <div className="text-4xl mb-3">{item.emoji}</div>
            <h3 className="font-serif text-xl text-dust-800 mb-2">{item.title}</h3>
            <p className="text-sm text-dust-500 font-sans leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
