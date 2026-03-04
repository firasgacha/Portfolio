import { technologies } from "../data/data";
import { Card } from "./Card";

export function Tools() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-8 text-purple-600 mt-28">Tools, Languages & Frameworks / Libraries</h1>
            <div className="flex flex-wrap justify-center content-center">
                {technologies.map((tech, index) => (
                    <Card key={index}
                        name={tech.name}
                        image={tech.image}
                        className={"m-10"}
                        imageClassName={"w-24 rounded"}
                        titleClassName={"text-base"}
                    />
                ))}
            </div>
        </div>
    );
}
