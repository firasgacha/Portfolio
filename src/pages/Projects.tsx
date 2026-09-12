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
      <p className="mx-auto mb-12 max-w-2xl text-base-content/70">
        {t("projects.intro")}
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsList.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card bg-base-200 text-start transition hover:-translate-y-1"
          >
            <figure className="aspect-video overflow-hidden bg-base-300">
              <img
                src={project.image}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">
                {t(project.titleKey)}
              </h2>
              <p>{t(project.descriptionKey)}</p>
              <div className="card-actions justify-end">
                <span className="btn btn-primary btn-sm">
                  {t("projects.viewRepo")}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Page>
  );
}
