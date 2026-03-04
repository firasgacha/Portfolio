// Work experience images
import blocksiImg from "../assets/work/blocksi.png";
import happisoImg from "../assets/work/happiso.png";
import babackImg from "../assets/work/baback.png";
import espritImg from "../assets/work/esprit.png";
import devNullImg from "../assets/work/devNull.png";
import unfraudedImg from "../assets/work/unfrauded.png";
import coroplasteImg from "../assets/work/coroplaste.png";
import tunisairImg from "../assets/work/tunisair.png";

export function Work() {
    return (
        <>
            <h1 className="text-5xl font-bold mb-8 text-purple-600">Experiences</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end mb-10 md:text-start">
                        <time className="font-mono italic">07/2023 - Present</time>
                        <div className="flex items-center text-lg text-purple-600">
                            <img className="w-8 h-8 mr-2" alt="blocksi" src={blocksiImg}/>
                            <p>BLOCKSI</p>
                        </div>
                        <div>Full Stack Developer - CDI</div>
                        Sophia-Antipolis, France
                    </div>
                    <hr />
                </li>
                <li>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">07/2023 - 11/2024</time>
                        <div className="flex justify-end text-lg text-purple-600">
                            <img className="w-8 h-8 mr-2" alt="baback" src={happisoImg}/>
                            <p>HAPPISO</p>
                        </div>
                        <div>Full Stack Developer - CDI</div>
                        Metz, France
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end mb-10 md:text-start">
                        <time className="font-mono italic">01/2023 - 07/2023</time>
                        <div className="flex items-center text-lg text-purple-600">
                            <img className="w-8 h-8 mr-2" alt="baback" src={babackImg}/>
                            <p>BABACK</p>
                        </div>
                        <div>Full Stack Developer - Internship</div>
                        Strasbourg, France
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">07/2022 - 09/2022</time>
                        <div className="flex justify-end text-lg text-purple-600">
                            <img className="w-8 h-8 mr-2" alt="baback" src={espritImg}/>
                            <p>ESPRIT-TECH</p>
                        </div>
                        <div>Full Stack Developer - Internship</div>
                        Ariana, Tunisie
                    </div>
                    <hr/>
                </li>
                <li>
                    <hr/>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end mb-10 md:text-start">
                        <time className="font-mono italic">02/2022 - 05/2022</time>
                        <div className="flex items-center text-lg text-purple-600">
                            <p>OBY-DIGITAL</p>
                        </div>
                        <div>Web Developer - Freelance</div>
                        Paris, France (remote)
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">06/2021 - 09/2021</time>
                        <div className="flex justify-end text-lg text-purple-600">
                            <img className="w-8 h-8 mr-2" alt="baback" src={devNullImg}/>
                            <p>DEV NULL PRODUCTIONS</p>
                        </div>
                        <div>Full Stack Developer - Internship</div>
                        New York, USA (remote)
                    </div>
                    <hr/>
                </li>
                <li>
                    <hr/>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end mb-10 md:text-start">
                        <time className="font-mono italic">02/2020 - 06/2020</time>
                        <div className="flex items-center text-lg text-purple-600">
                            <img className="w-8 h-8 mr-2" alt="baback" src={unfraudedImg}/>
                            <p>UNFRAUDED</p>
                        </div>
                        <div>Full Stack Developer - Internship</div>
                        Ariana, Tunisie
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">06/2019 - 07/2019</time>
                        <div className="flex justify-end text-lg text-purple-600">
                            <img className="w-8 h-8 mr-2" alt="baback" src={coroplasteImg}/>
                            <p>Coroplast Fritz Müller GmbH & Co. KG</p>
                        </div>
                        <div>IT Technician - Internshipp</div>
                        Hammamet, Nabeul
                    </div>
                    <hr/>
                </li>
                <li>
                    <hr/>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end mb-10 md:text-start">
                        <time className="font-mono italic">06/2018 - 07/2018</time>
                        <div className="flex items-center text-lg text-purple-600">
                            <img className="w-8 h-8 mr-2" alt="baback" src={tunisairImg}/>
                            TUNISAIR
                        </div>
                        <div>IT Technician - Internship</div>
                        Ariana, Tunisie
                    </div>
                </li>

            </ul>
        </>
    );
}
