import { useState } from "react";
import { CheckCircle, Info } from "lucide-react";
import { CATTERY } from "../data/siteData";

const HOW_IT_WORKS = [
  { step: "01", title: "Submit your application", body: "Fill out the form below. Tell us about your home, experience with cats, and what you're looking for." },
  { step: "02", title: "We review & approve", body: "We personally review every application within 48 hours. We want our kittens going to wonderful homes." },
  { step: "03", title: "Pay your deposit", body: "A $300 non-refundable deposit secures your spot on the list. This applies toward your kitten's price." },
  { step: "04", title: "Pick your kitten", body: "When a litter is born, you choose (in deposit order) from available kittens at 6–8 weeks of age." },
];

export default function Waitlist() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", city: "",
    experience: "first-time", homeType: "house",
    preferences: "", questions: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Replace with real submission
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <div className="mb-12 fade-up">
        <p className="section-label mb-3">Adoption Waitlist</p>
        <h1 className="display-heading text-5xl mb-4">Join the Waitlist</h1>
        <p className="text-dust-500 font-sans text-lg max-w-xl leading-relaxed">
          Our litters fill quickly. The waitlist is the best way to guarantee your spot for an upcoming kitten.
        </p>
      </div>

      {/* How it works */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12 fade-up fade-up-delay-1">
        {HOW_IT_WORKS.map((s) => (
          <div key={s.step} className="card p-5">
            <p className="font-serif text-3xl text-dust-300 mb-3">{s.step}</p>
            <p className="font-sans font-medium text-dust-800 text-sm mb-1">{s.title}</p>
            <p className="text-xs text-dust-500 font-sans leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      {/* Deposit notice */}
      <div className="bg-dust-50 border border-dust-200 rounded-xl p-4 mb-8 flex gap-3 fade-up fade-up-delay-2">
        <Info size={16} className="text-dust-400 mt-0.5 flex-shrink-0" />
        <p className="text-sm font-sans text-dust-600 leading-relaxed">
          <span className="font-medium text-dust-700">Deposit is $300 and non-refundable.</span> It applies toward your kitten's final price. We use it to screen for serious adopters only. Pet kittens are $1,800–$1,900.
        </p>
      </div>

      {submitted ? (
        <div className="card p-12 text-center flex flex-col items-center gap-4 fade-up">
          <CheckCircle size={56} className="text-emerald-500" />
          <h2 className="font-serif text-4xl text-dust-800">You're on the list!</h2>
          <p className="text-dust-500 font-sans max-w-sm leading-relaxed">
            We'll review your application within 48 hours and send you an email with next steps — including the deposit link.
          </p>
          <p className="text-sm text-dust-400 font-sans">
            Questions? Email us at {CATTERY.email}
          </p>
        </div>
      ) : (
        <div className="card p-8 fade-up fade-up-delay-3">
          <h2 className="font-serif text-2xl text-dust-800 mb-6">Waitlist application</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Personal info */}
            <div>
              <p className="text-xs text-dust-400 font-sans uppercase tracking-wider mb-4">Personal information</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "name",  label: "Full name *",      placeholder: "Jane Smith",         type: "text" },
                  { name: "email", label: "Email address *",  placeholder: "jane@example.com",   type: "email" },
                  { name: "phone", label: "Phone number",     placeholder: "(817) 555-0000",     type: "tel" },
                  { name: "city",  label: "City & state *",   placeholder: "Arlington, TX",     type: "text" },
                ].map((f) => (
                  <div key={f.name} className="flex flex-col gap-1.5">
                    <label className="text-xs text-dust-500 font-sans font-medium">{f.label}</label>
                    <input
                      name={f.name}
                      type={f.type}
                      required={f.label.includes("*")}
                      value={form[f.name]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      className="border border-dust-200 rounded-xl px-4 py-2.5 text-sm font-sans text-dust-800 placeholder-dust-300 focus:outline-none focus:border-dust-400 transition-colors"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Home & experience */}
            <div>
              <p className="text-xs text-dust-400 font-sans uppercase tracking-wider mb-4">Your home & experience</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-dust-500 font-sans font-medium">Cat experience</label>
                  <select
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    className="border border-dust-200 rounded-xl px-4 py-2.5 text-sm font-sans text-dust-800 focus:outline-none focus:border-dust-400 bg-white"
                  >
                    <option value="first-time">First-time cat owner</option>
                    <option value="some">Some experience</option>
                    <option value="experienced">Experienced cat owner</option>
                    <option value="breeder">Current/former breeder</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-dust-500 font-sans font-medium">Home type</label>
                  <select
                    name="homeType"
                    value={form.homeType}
                    onChange={handleChange}
                    className="border border-dust-200 rounded-xl px-4 py-2.5 text-sm font-sans text-dust-800 focus:outline-none focus:border-dust-400 bg-white"
                  >
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo / Townhouse</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-dust-500 font-sans font-medium">Kitten preferences (optional)</label>
              <input
                name="preferences"
                value={form.preferences}
                onChange={handleChange}
                placeholder="e.g. prefer a female, love blue colorpoint, flexible on pattern..."
                className="border border-dust-200 rounded-xl px-4 py-2.5 text-sm font-sans text-dust-800 placeholder-dust-300 focus:outline-none focus:border-dust-400 transition-colors"
              />
            </div>

            {/* Questions */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-dust-500 font-sans font-medium">Anything else you'd like us to know?</label>
              <textarea
                name="questions"
                rows={3}
                value={form.questions}
                onChange={handleChange}
                placeholder="Tell us about your household, other pets, why you chose a ragdoll..."
                className="border border-dust-200 rounded-xl px-4 py-2.5 text-sm font-sans text-dust-800 placeholder-dust-300 focus:outline-none focus:border-dust-400 transition-colors resize-none"
              />
            </div>

            <button type="submit" disabled={loading} className="btn-primary py-3 text-base">
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
