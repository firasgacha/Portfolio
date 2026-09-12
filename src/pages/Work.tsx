import { useTranslation } from "react-i18next";
import { experiences } from "../data/data";
import { ExperienceCard } from "../components/ExperienceCard";
import { Page } from "../components/Page";
import { usePageTitle } from "../hooks/usePageTitle";

function isCurrentExperience(
  experience: (typeof experiences)[number],
): experience is (typeof experiences)[number] & { current: true } {
  return "current" in experience && experience.current === true;
}

export function Work() {
  const { t } = useTranslation();
  usePageTitle("nav.work");

  const currentExperience = experiences.find(isCurrentExperience);
  const pastExperiences = experiences.filter(
    (experience) => !isCurrentExperience(experience),
  );

  return (
    <Page>
      <h1 className="mb-8 text-5xl font-bold text-primary">{t("work.title")}</h1>
      {currentExperience && (
        <ExperienceCard
          company={currentExperience.company}
          image={currentExperience.image}
          role={currentExperience.role}
          type={currentExperience.type}
          dates={currentExperience.dates}
          location={currentExperience.location}
          responsibilities={currentExperience.responsibilities}
          technologies={currentExperience.technologies}
          isEven
          isCurrent
        />
      )}
      <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact">
        {pastExperiences.map((experience, index) => (
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
