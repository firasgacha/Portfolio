import { useTranslation } from "react-i18next";
import { technologies } from "../data/data";
import { Card } from "./Card";

export function Tools() {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="mt-28 mb-8 text-2xl font-bold text-primary">
        {t("tools.title")}
      </h2>
      <div className="flex flex-wrap content-center justify-center gap-8">
        {technologies.map((tech) => (
          <Card
            key={tech.name}
            name={tech.name}
            image={tech.image}
            imageClassName="w-24 rounded"
            titleClassName="text-base"
          />
        ))}
      </div>
    </div>
  );
}
