import { useState } from "react";
import { useTranslation } from "react-i18next";
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

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Get responsibilities based on current language
  const currentResponsibilities = i18n.language === 'fr' 
    ? responsibilities.fr 
    : responsibilities.en;

  return (
    <li>
      {isEven ? (
        <>
          <div className="timeline-middle">
            <TimelineIcon />
          </div>
          <div className="timeline-end mb-10 md:text-start">
            <time className="font-mono italic">{dates}</time>
            <div className="flex items-center text-lg text-purple-600">
              {image ? (
                <img
                  className="w-8 h-8 mr-2"
                  alt={company.toLowerCase()}
                  src={image}
                  loading="lazy"
                />
              ) : (
                <div className="w-8 h-8 mr-2 flex items-center justify-center bg-purple-100 rounded">
                  <span className="text-purple-600 font-bold text-sm">
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

            {/* Expand/Collapse Button */}
            <button
              onClick={toggleExpand}
              className="btn btn-ghost btn-sm mt-2 text-purple-600 hover:text-purple-800"
              aria-expanded={isExpanded}
            >
              {isExpanded ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  {t("work.hideDetails")}
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  {t("work.showDetails")}
                </>
              )}
            </button>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              {/* Responsibilities */}
              <div className="mb-4">
                <h4 className="font-semibold text-purple-600 mb-2">
                  {t("work.responsibilities")}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {currentResponsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-purple-600 mb-2">
                  {t("work.technologies")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="badge badge-outline badge-sm text-purple-600 border-purple-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <hr />
        </>
      ) : (
        <>
          <hr />
          <div className="timeline-middle">
            <TimelineIcon />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">{dates}</time>
            <div className="flex justify-end text-lg text-purple-600">
              {image ? (
                <img
                  className="w-8 h-8 mr-2"
                  alt={company.toLowerCase()}
                  src={image}
                  loading="lazy"
                />
              ) : (
                <div className="w-8 h-8 mr-2 flex items-center justify-center bg-purple-100 rounded">
                  <span className="text-purple-600 font-bold text-sm">
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

            {/* Expand/Collapse Button */}
            <button
              onClick={toggleExpand}
              className="btn btn-ghost btn-sm mt-2 text-purple-600 hover:text-purple-800"
              aria-expanded={isExpanded}
            >
              {isExpanded ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  {t("work.hideDetails")}
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  {t("work.showDetails")}
                </>
              )}
            </button>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              {/* Responsibilities */}
              <div className="mb-4">
                <h4 className="font-semibold text-purple-600 mb-2">
                  {t("work.responsibilities")}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-start">
                  {currentResponsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-purple-600 mb-2">
                  {t("work.technologies")}
                </h4>
                <div className="flex flex-wrap justify-end gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="badge badge-outline badge-sm text-purple-600 border-purple-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </li>
  );
}
