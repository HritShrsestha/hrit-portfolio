import { Award, Eye } from "lucide-react";

export default function CertificateCard({ certificate, onView }) {
  const { course, issuer, date, image } = certificate;

  return (
    <div className="group rounded-2xl border border-line bg-white overflow-hidden transition-all duration-300 hover:border-accent-blue/40 hover:-translate-y-0.5">
      <div className="aspect-[4/3] bg-bg-soft border-b border-line flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={`${course} certificate`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted">
            <Award size={30} strokeWidth={1.5} className="text-accent-blue" />
            <span className="text-xs">Certificate image coming soon</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-display font-semibold text-ink text-base">{course}</h3>
        <p className="mt-1 text-sm text-muted">{issuer}</p>
        <p className="mt-0.5 text-xs text-muted/80">{date}</p>

        <button
          onClick={() => onView(certificate)}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink border border-line rounded-full px-4 py-2 hover:bg-bg-soft hover:border-accent-blue/40 transition-colors duration-200"
        >
          <Eye size={15} />
          View Certificate
        </button>
      </div>
    </div>
  );
}
