import { useState } from "react";
import { GALLERY_IMAGES } from "../data/siteData";

const CATS = ["All", "Queens", "Kittens", "Adopted"];

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = GALLERY_IMAGES.filter((img) => {
    if (cat === "All") return true;
    return img.category === cat.toLowerCase();
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      <div className="mb-10 fade-up">
        <p className="section-label mb-3">Photo Gallery</p>
        <h1 className="display-heading text-5xl mb-4">Gallery</h1>
        <p className="text-dust-500 font-sans text-lg max-w-xl">
          Snapshots from our home — our queens, our kittens growing up, and their happily-ever-afters.
        </p>
      </div>

      {/* Replace notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-start gap-3 fade-up fade-up-delay-1">
        <span className="text-2xl">📸</span>
        <div>
          <p className="font-sans font-medium text-amber-800 text-sm">Photos coming soon</p>
          <p className="font-sans text-amber-700 text-xs mt-0.5 leading-relaxed">
            Replace the placeholder cards below with your real kitten photos. In each gallery item in <code className="bg-amber-100 px-1 rounded">src/data/siteData.js</code>, add an <code className="bg-amber-100 px-1 rounded">image</code> field with your image path.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-8 fade-up fade-up-delay-2">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-4 py-1.5 rounded-full text-sm font-sans border transition-colors ${
              cat === c
                ? "bg-dust-500 text-white border-dust-500"
                : "border-dust-200 text-dust-500 hover:border-dust-400 hover:bg-dust-50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry-ish grid */}
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {filtered.map((img, i) => (
          <div
            key={img.id}
            onClick={() => setSelected(img)}
            className={`card overflow-hidden cursor-pointer group break-inside-avoid fade-up fade-up-delay-${(i % 4) + 1}`}
          >
            <div
              className={`bg-gradient-to-br ${img.bg} flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500 ${
                i % 3 === 0 ? "h-56" : i % 3 === 1 ? "h-44" : "h-64"
              }`}
            >
              {img.emoji}
            </div>
            <div className="px-4 py-3">
              <p className="text-sm font-sans text-dust-600">{img.caption}</p>
              <p className="text-xs text-dust-400 font-sans capitalize mt-0.5">{img.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-dust-900/80 z-50 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-br ${selected.bg} h-72 flex items-center justify-center text-8xl`}>
              {selected.emoji}
            </div>
            <div className="p-6">
              <p className="font-serif text-2xl text-dust-800 mb-1">{selected.caption}</p>
              <p className="text-sm text-dust-400 font-sans capitalize">{selected.category}</p>
            </div>
            <div className="px-6 pb-6">
              <button
                onClick={() => setSelected(null)}
                className="btn-outline w-full text-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
