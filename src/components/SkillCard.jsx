import { useState } from "react";
import * as LucideIcons from "lucide-react";

export default function SkillCard({ skill }) {
  const { name, description, logo, icon } = skill;
  const [logoFailed, setLogoFailed] = useState(false);
  const FallbackIcon = LucideIcons[icon] || LucideIcons.Sparkles;
  const showLogo = logo && !logoFailed;

  return (
    <div className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:bg-bg-soft hover:border-accent-blue/40 hover:-translate-y-0.5">
      <div className="w-11 h-11 rounded-xl bg-bg-soft border border-line flex items-center justify-center group-hover:bg-white group-hover:border-accent-blue/40 transition-colors duration-300">
        {showLogo ? (
          <img
            src={`https://cdn.simpleicons.org/${logo}/171717`}
            alt={`${name} logo`}
            className="w-5 h-5"
            loading="lazy"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <FallbackIcon size={20} className="text-ink" strokeWidth={1.75} />
        )}
      </div>

      <h3 className="mt-4 font-display font-semibold text-ink text-base">{name}</h3>
      <p className="mt-1.5 text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}
