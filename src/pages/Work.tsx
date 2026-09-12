import { useTranslation } from "react-i18next";
import { experiences } from "../data/data";
import { ExperienceCard } from "../components/ExperienceCard";
import { Page } from "../components/Page";
import { usePageTitle } from "../hooks/usePageTitle";

export function Work() {
  const { t } = useTranslation();
  usePageTitle("nav.work");

  return (
    <Page>
      <h1 className="mb-8 text-5xl font-bold text-primary">{t("work.title")}</h1>
      <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            company={experience.company}
            image={experience.image}
            role={experience.role}
            type={experience.type}
            dates={experience.dates}
            location={experience.location}
            responsibilities={experience.responsibilities}
            technologies={experience.technologies}
            isEven={index % 2 === 0}
          />
        ))}
      </ul>
    </Page>
  );
}
