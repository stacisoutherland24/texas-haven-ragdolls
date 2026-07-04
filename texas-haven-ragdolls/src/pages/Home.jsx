import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Heart, Award, MapPin } from "lucide-react";
import { QUEENS, KITTENS, CATTERY } from "../data/siteData";
import KittenCard from "../components/KittenCard";

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "HCM & PKD Tested", desc: "Both queens tested clear for genetic disease" },
  { icon: Heart,       label: "Raised with Love",  desc: "Kittens socialized in our home from day one" },
  { icon: Award,       label: "TICA Registered",   desc: "Official cattery registration & pedigree papers" },
  { icon: MapPin,      label: "Arlington, TX",    desc: "Local visits welcome — come meet the queens" },
];

export default function Home() {
  const available = KITTENS.filter((k) => k.status === "available").slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <p className="section-label mb-4">TICA Registered Cattery · Arlington, TX</p>
            <h1 className="display-heading text-5xl md:text-6xl leading-tight mb-6">
              Gentle giants,<br />
              <em className="text-dust-500">raised with love.</em>
            </h1>
            <p className="text-dust-500 text-lg leading-relaxed font-sans mb-8 max-w-md">
              We raise a small number of health-tested, beautifully socialized ragdoll kittens each year — because quality always beats quantity.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/kittens" className="btn-primary flex items-center gap-2">
                See Available Kittens <ArrowRight size={16} />
              </Link>
              <Link to="/waitlist" className="btn-outline">
                Join the Waitlist
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="fade-up fade-up-delay-2 relative">
            <div className="w-full h-80 md:h-96 bg-gradient-to-br from-dust-100 via-dust-200 to-dust-300 rounded-3xl flex items-center justify-center text-8xl shadow-inner relative overflow-hidden">
              <span className="relative z-10">🐱</span>
              {/* decorative circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-dust-300/40 rounded-full"></div>
              <div className="absolute -bottom-10 -left-6 w-40 h-40 bg-dust-200/50 rounded-full"></div>
            </div>

            {/* floating stat card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl border border-dust-100 shadow-lg p-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-dust-100 rounded-lg flex items-center justify-center text-xl">🐾</div>
              <div>
                <p className="text-xs text-dust-400 font-sans">Currently available</p>
                <p className="font-serif text-dust-800 text-lg leading-none">{available.length} kittens</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-dust-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRUST_ITEMS.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex flex-col gap-2">
              <div className="w-10 h-10 bg-dust-50 rounded-xl flex items-center justify-center">
                <Icon size={19} className="text-dust-500" />
              </div>
              <p className="font-sans font-medium text-dust-700 text-sm">{label}</p>
              <p className="font-sans text-xs text-dust-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Queens */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="section-label mb-2">Our Breeding Program</p>
            <h2 className="display-heading text-4xl">Meet the queens</h2>
          </div>
          <Link to="/queens" className="btn-outline hidden sm:flex items-center gap-2">
            Full profiles <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {QUEENS.map((q) => (
            <div key={q.id} className="card p-6 flex gap-5 items-start hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-dust-100 to-dust-200 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                {q.emoji}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-serif text-2xl text-dust-800">{q.name}</h3>
                  <span className="text-xs bg-dust-50 border border-dust-200 text-dust-500 px-2 py-0.5 rounded-full font-sans">{q.pattern}</span>
                </div>
                <p className="text-sm text-dust-500 font-sans leading-relaxed mb-3 line-clamp-3">{q.bio}</p>
                <div className="flex gap-3 text-xs text-dust-400 font-sans">
                  {q.hcmTested && <span className="flex items-center gap-1"><ShieldCheck size={11} /> HCM clear</span>}
                  {q.pkdTested && <span className="flex items-center gap-1"><ShieldCheck size={11} /> PKD clear</span>}
                </div>
                <p className="text-xs text-dust-400 font-sans mt-2">Next litter: <span className="text-dust-600 font-medium">{q.nextLitter}</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Available kittens */}
      {available.length > 0 && (
        <section className="bg-white border-y border-dust-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="section-label mb-2">Ready to go home</p>
                <h2 className="display-heading text-4xl">Available kittens</h2>
              </div>
              <Link to="/kittens" className="btn-outline hidden sm:flex items-center gap-2">
                View all <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {available.map((k) => <KittenCard key={k.id} kitten={k} />)}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="bg-gradient-to-br from-dust-500 to-dust-700 rounded-3xl p-10 md:p-14 text-center">
          <p className="text-dust-200 text-sm font-sans mb-3 uppercase tracking-widest">Don't miss a litter</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Join the waitlist</h2>
          <p className="text-dust-200 font-sans max-w-md mx-auto mb-8 leading-relaxed">
            Our litters fill within days of announcement. A $300 deposit secures your spot and applies to your kitten's price.
          </p>
          <Link to="/waitlist" className="inline-block bg-white text-dust-700 font-sans font-medium px-8 py-3 rounded-xl hover:bg-dust-50 transition-colors">
            Reserve Your Spot
          </Link>
        </div>
      </section>
    </div>
  );
}
