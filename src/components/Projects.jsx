import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container">
        <Reveal>
          <span className="eyebrow">Projects</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-ink">
            Things I&apos;m building
          </h2>
          <p className="mt-3 text-muted max-w-xl">
            A growing collection of projects as I practice design and development.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={0.05 * i}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
