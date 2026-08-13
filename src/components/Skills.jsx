import { creativeSkills, technicalSkills } from "../data/skills.js";
import SkillCard from "./SkillCard.jsx";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-bg-soft">
      <div className="section-container">
        <Reveal>
          <span className="eyebrow">Skills</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-ink">
            Tools I use to design, build and create
          </h2>
          <p className="mt-3 text-muted max-w-xl">
            A mix of creative tools and programming fundamentals I&apos;ve been learning and
            practicing.
          </p>
        </Reveal>

        <div className="mt-12">
          <Reveal delay={0.05}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-5">
              Creative &amp; Design
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {creativeSkills.map((skill, i) => (
              <Reveal key={skill.name} delay={0.03 * i}>
                <SkillCard skill={skill} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Reveal delay={0.05}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-5">
              Programming &amp; Development
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {technicalSkills.map((skill, i) => (
              <Reveal key={skill.name} delay={0.03 * i}>
                <SkillCard skill={skill} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
