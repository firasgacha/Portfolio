export interface CardProps {
    name: string;
    image: string;
    description?: string;
    className?: string;
    imageClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    loading?: "eager" | "lazy";
    skeleton?: boolean;
}

export function Card(props: CardProps) {
    if (props.skeleton) {
        return (
            <div className={props.className}>
                <div className="avatar">
                    <div className={props.imageClassName}>
                        <div className="skeleton w-full h-full rounded"></div>
                    </div>
                </div>
                <h4 className={props.titleClassName}>
                    <div className="skeleton h-4 w-20"></div>
                </h4>
            </div>
        );
    }

    return (
        <div className={props.className}>
            <div className="avatar">
                <div className={props.imageClassName}>
                    <img alt="tool-image" src={props.image} loading={props.loading || "lazy"} />
                </div>
            </div>
            <h4 className={props.titleClassName}>
                {props.name}
            </h4>
            {props.description &&
                <div className={props.descriptionClassName}>
                    <p>{props.description}</p>
                </div>
            }
        </div>
    );
}
