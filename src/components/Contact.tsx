import { useState } from 'react';
import { submitToFormspree } from '../lib/formspree';

const SERVICE_LABELS: Record<string, string> = {
  'web-design': 'Web Design',
  'web-development': 'Web Development',
  'ui-design': 'UI Design',
  'design-systems': 'Design Systems',
  other: 'Other',
};

const BUDGET_LABELS: Record<string, string> = {
  'under-500': 'Under $500',
  '500-1500': '$500 — $1,500',
  '1500-3000': '$1,500 — $3,000',
  '3000-plus': '$3,000+',
  tbd: 'To be discussed',
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const service = SERVICE_LABELS[form.project] ?? form.project;
    const budget = form.budget ? (BUDGET_LABELS[form.budget] ?? form.budget) : 'Not specified';
    try {
      await submitToFormspree({
        name: form.name,
        email: form.email,
        service,
        budget,
        message: form.message,
      });
      setSubmitted(true);
    } catch (err) {
      if (err instanceof Error && err.message === 'FORMSPREE_NOT_CONFIGURED') {
        setError(
          'Contact form is not configured yet. Add VITE_FORMSPREE_FORM_ID to your .env file (see .env.example).',
        );
      } else {
        setError('Could not send your message. Email us at hello@silentrose.studio instead.');
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-forest py-28 md:py-36 relative overflow-hidden">
      {/* Geometric bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full border border-cream/5 -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-cream/4 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 left-0 right-0 h-px bg-cream/8" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left */}
          <div className="lg:col-span-5">
            <span className="label text-cream/35 dot-prefix mb-6 block">Contact</span>
            <h2 className="font-unbounded font-black text-cream text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-tight mb-8">
              Let's make<br />
              <span className="text-cream/25">something.</span>
            </h2>
            <p className="font-dm text-cream/45 text-sm leading-[1.85] max-w-sm mb-12">
              Tell us about your project. We'll get back to you within two business days with honest thoughts on how to move forward.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@silentrose.studio"
                className="font-dm text-sage text-sm hover:text-cream transition-colors flex items-center gap-3"
              >
                <span className="w-4 h-px bg-sage/40" />
                hello@silentrose.studio
              </a>
              <a
                href="https://instagram.com/silentrose.studio"
                className="font-dm text-cream/30 text-sm hover:text-cream transition-colors flex items-center gap-3"
              >
                <span className="w-4 h-px bg-cream/20" />
                @SilentRose.Studio
              </a>
            </div>

            {/* Decorative element */}
            <div className="mt-16 relative w-40 h-40 hidden lg:block">
              <div className="absolute inset-0 rounded-full border border-cream/10" />
              <div className="absolute inset-4 rounded-full border border-cream/6" />
              <div className="absolute inset-8 rounded-full border border-cream/4" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-crimson" />
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-cream/15 p-12 flex flex-col items-start justify-center min-h-[400px]">
                <div className="w-3 h-3 rounded-full bg-crimson mb-8" />
                <h3 className="font-unbounded font-black text-cream text-2xl mb-4">Message received.</h3>
                <p className="font-dm text-cream/45 text-sm leading-relaxed max-w-xs">
                  We'll be in touch within two business days. In the meantime, take a look at our process.
                </p>
                <a href="#process" className="font-dm text-sage text-sm mt-8 hover:text-cream transition-colors flex items-center gap-2">
                  View our process <span className="text-crimson">→</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-0 border border-cream/10">
                {/* Name + email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                  <div className="border-b border-r-0 sm:border-r border-cream/10 p-0">
                    <label className="label text-cream/30 text-[0.6rem] px-6 pt-5 pb-1 block">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-transparent font-dm text-cream text-sm px-6 pb-5 pt-1 placeholder:text-cream/20 focus:outline-none focus:bg-cream/2 transition-colors"
                    />
                  </div>
                  <div className="border-b border-cream/10 p-0">
                    <label className="label text-cream/30 text-[0.6rem] px-6 pt-5 pb-1 block">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="w-full bg-transparent font-dm text-cream text-sm px-6 pb-5 pt-1 placeholder:text-cream/20 focus:outline-none focus:bg-cream/2 transition-colors"
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="border-b border-cream/10">
                  <label className="label text-cream/30 text-[0.6rem] px-6 pt-5 pb-1 block">Service</label>
                  <select
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent font-dm text-cream text-sm px-6 pb-5 pt-1 appearance-none focus:outline-none focus:bg-cream/2 transition-colors"
                    style={{ color: form.project ? '#E8E0D4' : 'rgba(232,224,212,0.2)' }}
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="web-design">Web Design</option>
                    <option value="web-development">Web Development</option>
                    <option value="ui-design">UI Design</option>
                    <option value="design-systems">Design Systems</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="border-b border-cream/10">
                  <label className="label text-cream/30 text-[0.6rem] px-6 pt-5 pb-1 block">Budget Range</label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full bg-transparent font-dm text-cream text-sm px-6 pb-5 pt-1 appearance-none focus:outline-none focus:bg-cream/2 transition-colors"
                    style={{ color: form.budget ? '#E8E0D4' : 'rgba(232,224,212,0.2)' }}
                  >
                    <option value="" disabled>Select a range</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1500">$500 — $1,500</option>
                    <option value="1500-3000">$1,500 — $3,000</option>
                    <option value="3000-plus">$3,000+</option>
                    <option value="tbd">To be discussed</option>
                  </select>
                </div>

                {/* Message */}
                <div className="border-b border-cream/10">
                  <label className="label text-cream/30 text-[0.6rem] px-6 pt-5 pb-1 block">Tell us about the project</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="A brief description of what you're working on..."
                    className="w-full bg-transparent font-dm text-cream text-sm px-6 pb-5 pt-1 placeholder:text-cream/20 focus:outline-none resize-none focus:bg-cream/2 transition-colors"
                  />
                </div>

                {error && (
                  <p className="font-dm text-crimson/90 text-xs px-6 py-4 border-b border-cream/10">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="font-unbounded font-bold text-[0.65rem] uppercase tracking-widest text-cream px-8 py-5 text-left hover:bg-crimson/10 transition-all duration-300 flex items-center justify-between group border-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{submitting ? 'Sending…' : 'Send message'}</span>
                  <span className="text-crimson opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
