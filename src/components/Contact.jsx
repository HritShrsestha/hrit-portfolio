import { useState } from "react";
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal.jsx";

// Replace these with your real links.
const SOCIALS = [
  { label: "Email", href: "mailto:youremail@example.com", icon: Mail },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/your-username", icon: Github },
  { label: "Instagram", href: "https://instagram.com/your-username", icon: Instagram },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Please write a short message.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // No backend is connected yet — this just simulates a successful send.
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-soft">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-14">
          <Reveal>
            <span className="eyebrow">Let&apos;s Connect</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-ink">
              Let&apos;s Connect
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-md">
              I&apos;m always open to learning, collaborating, and connecting with people working
              on interesting ideas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink hover:border-accent-blue/40 hover:bg-accent/40 transition-colors duration-200"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {submitted ? (
              <div className="rounded-2xl border border-line bg-white p-8 h-full flex flex-col items-center justify-center text-center">
                <CheckCircle2 size={32} className="text-accent-blue" />
                <h3 className="mt-4 font-display font-semibold text-lg text-ink">
                  Message sent!
                </h3>
                <p className="mt-1.5 text-sm text-muted max-w-xs">
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-ink border border-line rounded-full px-5 py-2 hover:bg-bg-soft transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-line bg-white p-7 space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full rounded-xl border bg-bg-soft px-4 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent-blue/40 transition ${
                      errors.name ? "border-red-300" : "border-line"
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full rounded-xl border bg-bg-soft px-4 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent-blue/40 transition ${
                      errors.email ? "border-red-300" : "border-line"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What would you like to say?"
                    className={`w-full rounded-xl border bg-bg-soft px-4 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent-blue/40 transition resize-none ${
                      errors.message ? "border-red-300" : "border-line"
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-ink text-white text-sm font-medium px-6 py-3 hover:bg-black transition-colors duration-200"
                >
                  Send Message
                  <Send size={15} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
