import { ArrowUpRight, LayoutTemplate } from "lucide-react";

export default function ProjectCard({ project }) {
  const { title, description, tools, image, link } = project;

  return (
    <div className="group rounded-2xl border border-line bg-white overflow-hidden transition-all duration-300 hover:border-accent-blue/40 hover:-translate-y-0.5">
      <div className="aspect-video bg-bg-soft border-b border-line flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <LayoutTemplate size={30} strokeWidth={1.5} className="text-accent-blue" />
        )}
      </div>

      <div className="p-6">
        <h3 className="font-display font-semibold text-ink text-lg">{title}</h3>
        <p className="mt-1.5 text-sm text-muted leading-relaxed">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-xs font-medium text-ink/80 bg-bg-soft border border-line rounded-full px-3 py-1"
            >
              {tool}
            </span>
          ))}
        </div>

        <a
          href={link}
          target={link && link !== "#" ? "_blank" : undefined}
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent-blue transition-colors duration-200"
        >
          View Project
          <ArrowUpRight size={15} />
        </a>
      </div>
    </div>
  );
}
