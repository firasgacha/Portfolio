import { hireRessons } from "../data/data";
import { Card } from "./Card";

export function HireMe() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-8 text-purple-600 mt-28">Why Hire Me ?</h1>
            <div className="flex flex-nowrap">
                {hireRessons.map((res, index) => (
                    <Card key={index}
                        image={res.image}
                        name={res.title}
                        description={res.description}
                        imageClassName={"w-40 rounded"}
                        titleClassName={"font-bold"}
                        descriptionClassName={"card-body"}
                    />
                ))}
            </div>
        </div>
    );
}
