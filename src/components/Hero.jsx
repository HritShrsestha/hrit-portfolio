import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Abstract background visual */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(#EAEAEA 1px, transparent 1px), linear-gradient(90deg, #EAEAEA 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 20%, black 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 20%, black 20%, transparent 75%)",
          }}
        />
        {/* blurred soft shapes */}
        <div className="absolute -top-24 right-[8%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent blur-3xl opacity-70" />
        <div className="absolute top-32 left-[4%] w-56 h-56 md:w-72 md:h-72 rounded-full bg-lavender blur-3xl opacity-60" />
        <div className="absolute top-10 right-[28%] w-40 h-40 rounded-full bg-accent-blue/20 blur-2xl" />

        {/* minimal geometric accents */}
        <svg
          className="absolute top-24 right-[14%] hidden md:block opacity-70"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
        >
          <circle cx="60" cy="60" r="46" stroke="#8FADEB" strokeWidth="1" />
          <circle cx="60" cy="60" r="2" fill="#8FADEB" />
        </svg>
        <svg
          className="absolute bottom-6 left-[10%] hidden md:block opacity-60"
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
        >
          <rect x="10" y="10" width="70" height="70" rx="18" stroke="#E8E0FF" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="eyebrow inline-flex items-center gap-1.5 mb-5">
            <Sparkles size={13} />
            BCA Undergraduate · Nepal
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-ink leading-[1.1] tracking-tight">
            Hi, I&apos;m Hrit Shrestha.
          </h1>
          <p className="mt-3 text-xl sm:text-2xl md:text-3xl font-display font-medium text-ink/80 leading-snug">
            An undergraduate BCA student exploring design, technology &amp; creativity.
          </p>

          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
            I enjoy creating visual experiences, learning new technologies, and exploring the
            intersection between design and development.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3 text-sm font-medium hover:bg-black transition-colors duration-200"
            >
              View My Skills
              <ArrowRight size={16} />
            </a>
            <a
              href="#footer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink hover:border-accent-blue hover:bg-bg-soft transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
