export interface CardProjectPropos {
    title: string;
    image: string;
    description: string;
    link: string;
}

export function CardProject(props: CardProjectPropos) {
    return (
        <div className="card card-side bg-base-100">
            <figure className="w- h-44">
                <img
                    src={props.image}
                    alt="project"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p className="text-pretty">{props.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View</button>
                </div>
            </div>
        </div>
    );
}
