import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Award } from "lucide-react";
import { certificates } from "../data/certificates.js";
import CertificateCard from "./CertificateCard.jsx";
import Reveal from "./Reveal.jsx";

export default function Certificates() {
  const [active, setActive] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="certificates" className="py-24 md:py-32 bg-bg-soft">
      <div className="section-container">
        <Reveal>
          <span className="eyebrow">Certificates</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-ink">
            Certifications from my learning journey
          </h2>
          <p className="mt-3 text-muted max-w-xl">
            I&apos;ll keep adding certificates here as I complete more courses.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <Reveal key={cert.course} delay={0.05 * i}>
              <CertificateCard certificate={cert} onView={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden border border-line"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[4/3] bg-bg-soft flex items-center justify-center">
                {active.image ? (
                  <img
                    src={active.image}
                    alt={`${active.course} certificate`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted">
                    <Award size={36} strokeWidth={1.5} className="text-accent-blue" />
                    <span className="text-sm">Certificate image coming soon</span>
                  </div>
                )}
              </div>
              <div className="p-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display font-semibold text-ink">{active.course}</h3>
                  <p className="text-sm text-muted mt-0.5">
                    {active.issuer} · {active.date}
                  </p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="shrink-0 p-2 rounded-full hover:bg-bg-soft transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
