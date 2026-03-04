import { useTranslation } from "react-i18next";
import { experiences } from "../data/data";
import { ExperienceCard } from "../components/ExperienceCard";

export function Work() {
    const { t } = useTranslation();

    return (
        <>
            <h1 className="text-5xl font-bold mb-8 text-purple-600">{t('work.title')}</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
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
        </>
    );
}
