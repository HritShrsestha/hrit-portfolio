import * as LucideIcons from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { courses } from "../data/courses.js";
import Reveal from "./Reveal.jsx";

export default function Courses() {
  return (
    <section id="courses" className="py-24 md:py-32">
      <div className="section-container">
        <Reveal>
          <span className="eyebrow">Courses &amp; Learning</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-ink">
            Things I&apos;ve studied along the way
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {courses.map((course, i) => {
            const Icon = LucideIcons[course.icon] || LucideIcons.BookOpen;
            return (
              <Reveal key={course.title} delay={0.05 * i}>
                <div className="rounded-2xl border border-line bg-bg-soft p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white border border-line flex items-center justify-center">
                      <Icon size={22} className="text-accent-blue" strokeWidth={1.75} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-blue bg-accent px-2.5 py-1 rounded-full">
                      <CheckCircle2 size={13} />
                      {course.status}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-lg text-ink">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{course.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
