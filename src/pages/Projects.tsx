import { useTranslation } from "react-i18next";
import { projectsList } from "../data/data";
import { Page } from "../components/Page";
import { usePageTitle } from "../hooks/usePageTitle";

export function Projects() {
  const { t } = useTranslation();
  usePageTitle("nav.projects");

  return (
    <Page>
      <h1 className="mb-8 text-5xl font-bold text-primary">
        {t("projects.title")}
      </h1>
      <p className="mx-auto mb-12 max-w-3xl text-base-content/70">
        {t("projects.intro")}
      </p>
      <div className="grid gap-8 text-start xl:grid-cols-2">
        {projectsList.map((project) => {
          const features = t(`projects.${project.id}.features`, {
            returnObjects: true,
          }) as string[];

          return (
            <article
              key={project.id}
              className="card border border-base-300 bg-base-200"
            >
              <div className="card-body gap-4">
                <div>
                  <h2 className="card-title text-2xl text-primary">
                    {t(`projects.${project.id}.name`)}
                  </h2>
                  <p className="mt-1 font-semibold">
                    {t(`projects.${project.id}.subtitle`)}
                  </p>
                </div>
                <p>{t(`projects.${project.id}.description`)}</p>
                <div>
                  <h3 className="mb-2 font-semibold text-primary">
                    {t("projects.features")}
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm">
                    {features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-primary">
                    {t("projects.stack")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="badge badge-outline badge-sm text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Page>
  );
}
