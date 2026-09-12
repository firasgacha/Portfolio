import { useTranslation } from "react-i18next";
import { hireReasons } from "../data/data";

const hireMeKeys = [
  "workaholic",
  "communicative",
  "collaborative",
  "selfMotivated",
] as const;

export function HireMe() {
  const { t } = useTranslation();

  return (
    <section>
      <h2 className="mt-28 mb-8 text-2xl font-bold text-primary">
        {t("hireMe.title")}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {hireReasons.map((reason, index) => {
          const key = hireMeKeys[index];
          const name = t(`hireMe.${key}`);

          return (
            <article
              key={reason.title}
              className="card border border-base-300 bg-base-200"
            >
              <figure className="px-6 pt-6">
                <img
                  src={reason.image}
                  alt=""
                  className="h-40 w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-lg">{name}</h3>
                <p className="text-sm text-base-content/70">
                  {t(`hireMe.${key}Desc`)}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
