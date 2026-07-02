import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../data/siteData";
import { Link } from "react-router-dom";

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`card overflow-hidden fade-up fade-up-delay-${(index % 4) + 1}`}
    >
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-dust-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-sans font-medium text-dust-800 text-sm leading-relaxed">{faq.q}</span>
        <ChevronDown
          size={18}
          className={`text-dust-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 border-t border-dust-50">
          <p className="text-dust-500 font-sans text-sm leading-relaxed pt-4">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <div className="mb-12 fade-up">
        <p className="section-label mb-3">Common Questions</p>
        <h1 className="display-heading text-5xl mb-4">FAQ</h1>
        <p className="text-dust-500 font-sans text-lg leading-relaxed">
          Everything you want to know about ragdolls and our adoption process. Can't find your answer? Ask our chatbot or reach out directly.
        </p>
      </div>

      {/* Chatbot CTA */}
      <div className="bg-dust-50 border border-dust-200 rounded-2xl p-6 mb-10 flex items-center gap-5 fade-up fade-up-delay-1">
        <div className="w-12 h-12 bg-dust-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🐱</div>
        <div className="flex-1">
          <p className="font-sans font-medium text-dust-700 mb-0.5">Still have questions?</p>
          <p className="text-sm text-dust-500 font-sans">Ask Bella, our AI ragdoll expert — trained on everything about ragdolls and our cattery.</p>
        </div>
        <button
          onClick={() => {/* chat opens via FAB */}}
          className="btn-primary flex-shrink-0 text-sm"
        >
          Ask Bella 🐾
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {FAQS.map((faq, i) => (
          <FAQItem key={i} faq={faq} index={i} />
        ))}
      </div>

      {/* Still need help */}
      <div className="mt-16 text-center">
        <p className="font-serif text-3xl text-dust-800 mb-3">Still have questions?</p>
        <p className="text-dust-500 font-sans mb-6">We're real people who love talking about our cats. Reach out anytime.</p>
        <Link to="/contact" className="btn-primary">Get in Touch</Link>
      </div>
    </div>
  );
}
