export interface CardProps {
    name: string;
    image: string;
    description?: string;
    className?: string;
    imageClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

export function Card(props: CardProps) {
    return (
        <div className={props.className}>
            <div className="avatar">
                <div className={props.imageClassName}>
                    <img alt="tool-image" src={props.image} />
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
