import { useState } from "react";
import { Mail, Phone, Instagram, MapPin, CheckCircle } from "lucide-react";
import { CATTERY } from "../data/siteData";

// TODO: wire this form to EmailJS, Formspree, or your own backend
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "General inquiry", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Replace with real form submission
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
      <div className="mb-12 fade-up">
        <p className="section-label mb-3">Get in Touch</p>
        <h1 className="display-heading text-5xl mb-4">Contact Us</h1>
        <p className="text-dust-500 font-sans text-lg max-w-xl leading-relaxed">
          We'd love to hear from you. Whether you have questions about a kitten, want to schedule a visit, or just want to talk about ragdolls — reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-10">
        {/* Form */}
        <div className="md:col-span-3 fade-up fade-up-delay-1">
          {submitted ? (
            <div className="card p-10 text-center flex flex-col items-center gap-4">
              <CheckCircle size={48} className="text-emerald-500" />
              <h2 className="font-serif text-3xl text-dust-800">Message received!</h2>
              <p className="text-dust-500 font-sans max-w-sm leading-relaxed">
                Thank you for reaching out. We typically respond within 24 hours — usually much sooner.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-outline mt-2">Send another message</button>
            </div>
          ) : (
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-dust-500 font-sans font-medium">Your name *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="border border-dust-200 rounded-xl px-4 py-2.5 text-sm font-sans text-dust-800 placeholder-dust-300 focus:outline-none focus:border-dust-400 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-dust-500 font-sans font-medium">Email address *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="border border-dust-200 rounded-xl px-4 py-2.5 text-sm font-sans text-dust-800 placeholder-dust-300 focus:outline-none focus:border-dust-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-dust-500 font-sans font-medium">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="border border-dust-200 rounded-xl px-4 py-2.5 text-sm font-sans text-dust-800 focus:outline-none focus:border-dust-400 transition-colors bg-white"
                  >
                    <option>General inquiry</option>
                    <option>Inquire about a kitten</option>
                    <option>Join the waitlist</option>
                    <option>Schedule a visit</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-dust-500 font-sans font-medium">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about yourself and what you're looking for..."
                    className="border border-dust-200 rounded-xl px-4 py-2.5 text-sm font-sans text-dust-800 placeholder-dust-300 focus:outline-none focus:border-dust-400 transition-colors resize-none"
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-primary flex items-center justify-center gap-2">
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Sidebar info */}
        <div className="md:col-span-2 flex flex-col gap-5 fade-up fade-up-delay-2">
          <div className="card p-6">
            <h3 className="font-serif text-xl text-dust-800 mb-4">Contact info</h3>
            <div className="flex flex-col gap-4">
              <a href={`mailto:${CATTERY.email}`} className="flex items-start gap-3 text-sm font-sans text-dust-600 hover:text-dust-800 transition-colors">
                <Mail size={16} className="text-dust-400 mt-0.5 flex-shrink-0" />
                {CATTERY.email}
              </a>
              <a href={`tel:${CATTERY.phone}`} className="flex items-start gap-3 text-sm font-sans text-dust-600 hover:text-dust-800 transition-colors">
                <Phone size={16} className="text-dust-400 mt-0.5 flex-shrink-0" />
                {CATTERY.phone}
              </a>
              <a href="#" className="flex items-start gap-3 text-sm font-sans text-dust-600 hover:text-dust-800 transition-colors">
                <Instagram size={16} className="text-dust-400 mt-0.5 flex-shrink-0" />
                {CATTERY.instagram}
              </a>
              <div className="flex items-start gap-3 text-sm font-sans text-dust-600">
                <MapPin size={16} className="text-dust-400 mt-0.5 flex-shrink-0" />
                {CATTERY.location}
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-serif text-xl text-dust-800 mb-2">Response time</h3>
            <p className="text-sm text-dust-500 font-sans leading-relaxed">
              We typically respond within 24 hours. For faster replies, DM us on Instagram — we're on there daily.
            </p>
          </div>

          <div className="card p-6 bg-dust-50">
            <div className="text-2xl mb-2">🐾</div>
            <h3 className="font-serif text-xl text-dust-800 mb-2">Quick answers</h3>
            <p className="text-sm text-dust-500 font-sans leading-relaxed mb-3">
              Our AI ragdoll expert Bella can answer most questions instantly — available 24/7.
            </p>
            <p className="text-sm font-sans text-dust-500">
              Look for the 🐾 button in the bottom right corner of the page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
