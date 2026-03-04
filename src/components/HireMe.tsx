import { useTranslation } from "react-i18next";
import { hireRessons } from "../data/data";
import { Card } from "./Card";

export function HireMe() {
    const { t } = useTranslation();

    const getHireMeContent = (index: number) => {
        const keys = ['workaholic', 'communicative', 'collaborative', 'selfMotivated'];
        return {
            title: t(`hireMe.${keys[index]}`),
            description: t(`hireMe.${keys[index]}Desc`)
        };
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-8 text-purple-600 mt-28">{t('hireMe.title')}</h1>
            <div className="flex flex-nowrap">
                {hireRessons.map((res, index) => {
                    const content = getHireMeContent(index);
                    return (
                        <Card key={index}
                            image={res.image}
                            name={content.title}
                            description={content.description}
                            imageClassName={"w-40 rounded"}
                            titleClassName={"font-bold"}
                            descriptionClassName={"card-body"}
                        />
                    );
                })}
            </div>
        </div>
    );
}
