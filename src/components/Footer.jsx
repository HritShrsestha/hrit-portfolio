import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const SOCIALS = [
  { label: "Email", href: "mailto:hrit.shrestha72@gmail.com", icon: Mail },
  { label: "LinkedIn", href: "https://linkedin.com/in/hrit-shrestha-4544913b7/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/HritShrsestha", icon: Github },
  { label: "Instagram", href: "https://instagram.com/hrit.shrestha", icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-ink">Hrit Shrestha</p>
          <p className="text-sm text-muted mt-0.5">BCA Undergraduate · Designer · Developer</p>
        </div>

        <div className="flex items-center gap-3">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink hover:border-accent-blue/40 hover:bg-bg-soft transition-colors duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-muted/80 mt-8">
        © 2026 Hrit Shrestha. All rights reserved.
      </p>
      id="footer"
    </footer>
  );
}
