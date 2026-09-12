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
  isCurrent?: boolean;
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
  isCurrent = false,
}: ExperienceCardProps) {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(isCurrent);
  const currentResponsibilities = isFrench(i18n.language)
    ? responsibilities.fr
    : responsibilities.en;
  const alignEnd = !isEven;

  const details = (
    <>
      <div>
        <h4 className={`mb-2 font-semibold text-primary ${isCurrent ? "text-lg" : ""}`}>
          {t("work.responsibilities")}
        </h4>
        <ul
          className={`list-inside list-disc text-start ${
            isCurrent ? "space-y-2 text-base" : "space-y-1 text-sm"
          }`}
        >
          {currentResponsibilities.map((resp) => (
            <li key={resp}>{resp}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className={`mb-2 font-semibold text-primary ${isCurrent ? "text-lg" : ""}`}>
          {t("work.technologies")}
        </h4>
        <div
          className={`flex flex-wrap gap-2 ${!isCurrent && alignEnd ? "md:justify-end" : ""}`}
        >
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`badge badge-outline text-primary ${isCurrent ? "badge-md" : "badge-sm"}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const toggleButton = (
    <button
      type="button"
      onClick={() => setIsExpanded((open) => !open)}
      className={`btn btn-ghost mt-2 text-primary ${isCurrent ? "btn-md" : "btn-sm"}`}
      aria-expanded={isExpanded}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={isCurrent ? "mr-1 h-5 w-5" : "mr-1 h-4 w-4"}
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
  );

  if (isCurrent) {
    return (
      <article className="mb-12 w-full rounded-2xl border-2 border-primary/50 bg-base-200 p-6 text-start md:p-10">
        <div className="mb-3">
          <span className="badge badge-primary">{t("work.current")}</span>
        </div>
        <time className="block font-mono text-base italic md:text-lg">{dates}</time>
        <div className="mt-3 flex items-center text-2xl font-bold text-primary md:text-4xl">
          {image ? (
            <img
              className="mr-4 h-16 w-16 md:h-20 md:w-20"
              alt=""
              src={image}
              loading="eager"
            />
          ) : (
            <div className="mr-4 flex h-16 w-16 items-center justify-center rounded bg-primary/20 md:h-20 md:w-20">
              <span className="text-2xl font-bold text-primary">{company.charAt(0)}</span>
            </div>
          )}
          <p>{company}</p>
        </div>
        <div className="mt-2 text-lg font-semibold md:text-2xl">
          {t(`work.${role}`)} - {t(`work.${type}`)}
        </div>
        <div className="text-base md:text-lg">{location}</div>
        {toggleButton}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "mt-6 max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
          hidden={!isExpanded}
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            {details}
          </div>
        </div>
      </article>
    );
  }

  return (
    <li>
      {!isEven && <hr />}
      <div className="timeline-middle">
        <TimelineIcon />
      </div>
      <div
        className={`mb-10 ${isEven ? "timeline-end md:text-start" : "timeline-start md:text-end"}`}
      >
        <time className="block font-mono italic">{dates}</time>
        <div
          className={`flex items-center text-lg text-primary ${alignEnd ? "md:justify-end" : ""}`}
        >
          {image ? (
            <img className="mr-2 h-8 w-8" alt="" src={image} loading="lazy" />
          ) : (
            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded bg-primary/20">
              <span className="text-sm font-bold text-primary">{company.charAt(0)}</span>
            </div>
          )}
          <p>{company}</p>
        </div>
        <div>
          {t(`work.${role}`)} - {t(`work.${type}`)}
        </div>
        <div>{location}</div>
        {toggleButton}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "mt-4 max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
          hidden={!isExpanded}
        >
          <div className="space-y-4">{details}</div>
        </div>
      </div>
      {isEven && <hr />}
    </li>
  );
}
