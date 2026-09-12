import { useTranslation } from "react-i18next";
import { hireReasons } from "../data/data";
import { Card } from "./Card";

export function HireMe() {
  const { t } = useTranslation();
  const keys = ["workaholic", "communicative", "collaborative", "selfMotivated"] as const;

  return (
    <div>
      <h2 className="mt-28 mb-8 text-2xl font-bold text-primary">
        {t("hireMe.title")}
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {hireReasons.map((reason, index) => (
          <Card
            key={reason.title}
            image={reason.image}
            name={t(`hireMe.${keys[index]}`)}
            description={t(`hireMe.${keys[index]}Desc`)}
            imageClassName="w-40 rounded"
            titleClassName="font-bold"
            descriptionClassName="card-body"
          />
        ))}
      </div>
    </div>
  );
}
