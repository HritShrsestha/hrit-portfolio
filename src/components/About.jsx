import { GraduationCap, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal.jsx";

const education = [
  {
    title: "BCA — Undergraduate",
    status: "Currently pursuing BCA in Nepal",
    current: true,
  },
  {
    title: "+2",
    status: "Completed",
    current: false,
  },
  {
    title: "SEE",
    status: "Completed",
    current: false,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <Reveal>
          <span className="eyebrow">About Me</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-ink">
            A student exploring the space between design and code
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-5 gap-12 md:gap-8">
          <Reveal delay={0.05} className="md:col-span-3">
            <p className="text-base md:text-lg text-muted leading-relaxed">
              I&apos;m an undergraduate BCA student based in Nepal, currently exploring the space
              where creativity meets technology. I enjoy learning design, technology,
              programming, motion graphics, digital marketing and data science — and I&apos;m
              always looking for new things to pick up along the way. I&apos;m still early in my
              journey, but I care deeply about building things thoughtfully and learning by doing.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-ink">
              <GraduationCap size={18} className="text-accent-blue" />
              <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-muted">
                Education
              </h3>
            </div>

            <div className="space-y-3">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-line bg-bg-soft px-5 py-4 flex items-start justify-between gap-3"
                >
                  <div>
                    <p className="text-sm font-medium text-ink">{item.title}</p>
                    <p className="text-xs text-muted mt-0.5">{item.status}</p>
                  </div>
                  {item.current ? (
                    <span className="shrink-0 text-[11px] font-medium text-accent-blue bg-accent px-2.5 py-1 rounded-full">
                      In progress
                    </span>
                  ) : (
                    <CheckCircle2 size={18} className="shrink-0 text-accent-blue mt-0.5" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
