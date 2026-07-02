import { ShieldCheck, Award, Scale, Calendar } from "lucide-react";
import { QUEENS } from "../data/siteData";
import { Link } from "react-router-dom";

export default function Queens() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      <div className="mb-12 fade-up">
        <p className="section-label mb-3">Our Breeding Program</p>
        <h1 className="display-heading text-5xl mb-4">Our Queens</h1>
        <p className="text-dust-500 font-sans text-lg max-w-xl leading-relaxed">
          We breed only two queens — intentionally. Small-scale means every kitten gets maximum attention, socialization, and love from day one.
        </p>
      </div>

      <div className="flex flex-col gap-14">
        {QUEENS.map((q, i) => (
          <div
            key={q.id}
            className={`card overflow-hidden fade-up fade-up-delay-${i + 1}`}
          >
            <div className={`grid md:grid-cols-2 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              {/* Photo */}
              <div className="h-72 md:h-auto bg-gradient-to-br from-dust-100 via-dust-200 to-dust-300 flex items-center justify-center text-8xl relative">
                {q.emoji}
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                  <span className="text-xs font-sans text-dust-600 font-medium">Active queen</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="font-serif text-4xl text-dust-800">{q.name}</h2>
                  <span className="bg-dust-100 text-dust-600 text-xs font-sans font-medium px-3 py-1 rounded-full border border-dust-200">{q.pattern}</span>
                </div>

                <p className="text-sm text-dust-400 font-sans mb-1">{q.titles}</p>

                <p className="text-dust-500 font-sans leading-relaxed my-5">{q.bio}</p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-dust-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={14} className="text-dust-400" />
                      <span className="text-xs text-dust-400 font-sans uppercase tracking-wider">Born</span>
                    </div>
                    <p className="font-sans font-medium text-dust-700 text-sm">{q.dob}</p>
                  </div>
                  <div className="bg-dust-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Scale size={14} className="text-dust-400" />
                      <span className="text-xs text-dust-400 font-sans uppercase tracking-wider">Weight</span>
                    </div>
                    <p className="font-sans font-medium text-dust-700 text-sm">{q.weight}</p>
                  </div>
                </div>

                {/* Health badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {q.hcmTested && (
                    <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-sans font-medium px-3 py-1.5 rounded-full">
                      <ShieldCheck size={13} /> HCM Tested Clear
                    </div>
                  )}
                  {q.pkdTested && (
                    <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-sans font-medium px-3 py-1.5 rounded-full">
                      <ShieldCheck size={13} /> PKD Tested Clear
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 bg-dust-50 border border-dust-200 text-dust-600 text-xs font-sans font-medium px-3 py-1.5 rounded-full">
                    <Award size={13} /> {q.titles}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs text-dust-400 font-sans">Next planned litter</p>
                    <p className="font-sans font-medium text-dust-700">{q.nextLitter}</p>
                  </div>
                  <Link to="/waitlist" className="btn-primary ml-auto">
                    Join Waitlist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Breeding philosophy */}
      <div className="mt-16 bg-white border border-dust-100 rounded-2xl p-10 text-center fade-up">
        <p className="section-label mb-3">Our Philosophy</p>
        <h2 className="display-heading text-3xl mb-4">Quality over quantity, always.</h2>
        <p className="text-dust-500 font-sans max-w-2xl mx-auto leading-relaxed">
          We will never have more litters than we can give full attention to. Our queens are family members first, breeding cats second. They live in our home, sleep in our beds, and are treated with the respect they deserve. This is reflected in every kitten we raise.
        </p>
      </div>
    </div>
  );
}
