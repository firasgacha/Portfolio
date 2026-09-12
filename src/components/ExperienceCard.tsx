import { useState } from "react";
import { useTranslation } from "react-i18next";
import { isFrench } from "../lib/locale";
import { TimelineIcon } from "./TimelineIcon";

export interface ExperienceCardProps {
  company: string;
  image?: string;
  role: string;
  type: string;
  dates: string;
  location: string;
  responsibilities: {
    fr: string[];
    en: string[];
  };
  technologies: string[];
  isEven: boolean;
}

export function ExperienceCard({
  company,
  image,
  role,
  type,
  dates,
  location,
  responsibilities,
  technologies,
  isEven,
}: ExperienceCardProps) {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const currentResponsibilities = isFrench(i18n.language)
    ? responsibilities.fr
    : responsibilities.en;
  const alignEnd = !isEven;

  return (
    <li>
      {!isEven && <hr />}
      <div className="timeline-middle">
        <TimelineIcon />
      </div>
      <div
        className={`mb-10 ${isEven ? "timeline-end md:text-start" : "timeline-start md:text-end"}`}
      >
        <time className="font-mono italic">{dates}</time>
        <div
          className={`flex items-center text-lg text-primary ${alignEnd ? "md:justify-end" : ""}`}
        >
          {image ? (
            <img
              className="mr-2 h-8 w-8"
              alt=""
              src={image}
              loading="lazy"
            />
          ) : (
            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded bg-primary/20">
              <span className="text-sm font-bold text-primary">
                {company.charAt(0)}
              </span>
            </div>
          )}
          <p>{company}</p>
        </div>
        <div>
          {t(`work.${role}`)} - {t(`work.${type}`)}
        </div>
        <div>{location}</div>

        <button
          type="button"
          onClick={() => setIsExpanded((open) => !open)}
          className="btn btn-ghost btn-sm mt-2 text-primary"
          aria-expanded={isExpanded}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isExpanded ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
            />
          </svg>
          {isExpanded ? t("work.hideDetails") : t("work.showDetails")}
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "mt-4 max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
          hidden={!isExpanded}
        >
          <div className="mb-4">
            <h4 className="mb-2 font-semibold text-primary">
              {t("work.responsibilities")}
            </h4>
            <ul className="list-inside list-disc space-y-1 text-start text-sm">
              {currentResponsibilities.map((resp) => (
                <li key={resp}>{resp}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-primary">
              {t("work.technologies")}
            </h4>
            <div
              className={`flex flex-wrap gap-2 ${alignEnd ? "md:justify-end" : ""}`}
            >
              {technologies.map((tech) => (
                <span key={tech} className="badge badge-outline badge-sm text-primary">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isEven && <hr />}
    </li>
  );
}
