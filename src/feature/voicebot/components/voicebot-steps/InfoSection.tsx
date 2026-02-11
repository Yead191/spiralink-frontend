import BadgeHero from "@/shared/BadgeHero";
import { PiSealCheck } from "react-icons/pi";

interface InfoSectionProps {
  step?: string;
  title: string;
  description?: string;

  highlightTitle?: string;
  points?: string[];

  secondaryHighlightTitle?: string;
  secondaryPoints?: string[];

  footer?: string[];
  closing?: string;
}

export default function InfoSection({
  step,
  title,
  description,
  highlightTitle,
  points = [],
  secondaryHighlightTitle,
  secondaryPoints = [],
  footer = [],
  closing,
}: InfoSectionProps) {
  return (
    <section className="relative md:rounded-3xl text-white p-4  md:px-12 md:py-8 overflow-hidden">
      {/* Step badge */}
      {step && (
        <div className="flex items-center justify-center lg:justify-start lg:items-start gap-3">
          <BadgeHero label={step} />
          <div className="w-full h-0 border-t border-dotted border-[#C175FC] border-[1.5px] lg:hidden"></div>
        </div>
      )}

      {/* Title */}
      <h2 className="section-title mt-6">{title}</h2>

      {/* Description */}
      {description && <p className="section-subtitle my-8">{description}</p>}

      {/* Highlight list */}
      {highlightTitle && (
        <p className="text-primary text-2xl font-semibold mb-4">
          {highlightTitle}
        </p>
      )}

      {points?.length > 0 && (
        <ul className="space-y-3 mb-8">
          {points?.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <PiSealCheck className="text-primary text-2xl " />

              <span className="text-white">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Footer text */}
      {footer.length > 0 && (
        <div className="section-subtitle max-w-3xl">
          {footer.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
      )}

      {/* secondary */}
      {secondaryHighlightTitle && (
        <p className="text-primary text-2xl font-semibold mb-4 mt-8">
          {secondaryHighlightTitle}
        </p>
      )}

      {secondaryPoints?.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {secondaryPoints.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <PiSealCheck className="text-primary text-2xl " />

              <span className="text-gray-300">{item}</span>
            </li>
          ))}
          {/* Footer text */}
        </ul>
      )}
      {closing && <p className="section-subtitle max-w-3xl">{closing}</p>}
    </section>
  );
}
