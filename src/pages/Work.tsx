// Work experience images
import blocksiImg from "../assets/work/blocksi.png";
import happisoImg from "../assets/work/happiso.png";
import babackImg from "../assets/work/baback.png";
import espritImg from "../assets/work/esprit.png";
import devNullImg from "../assets/work/devNull.png";
import unfraundedImg from "../assets/work/unfrauded.png";
import coroplasteImg from "../assets/work/coroplaste.png";
import tunisairImg from "../assets/work/tunisair.png";
import { TimelineIcon } from "../components/TimelineIcon";
import { useTranslation } from "react-i18next";

export function Work() {
    const { t } = useTranslation();

    return (
        <>
            <h1 className="text-5xl font-bold mb-8 text-purple-600">{t('work.title')}</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <TimelineIcon />
                    </div>
                    <div className="timeline-end mb-10 md:text-start">
                        <time className="font-mono italic">07/2023 - Present</time>
                        <div className="flex items-center text-lg text-purple-600">
                            <img className="w-8 h-8 mr-2" alt="blocksi" src={blocksiImg}/>
                            <p>BLOCKSI</p>
                        </div>
                        <div>{t('work.fullStackDeveloper')} - {t('work.cdi')}</div>
                        Sophia-Antipolis, France
                    </div>
                    <hr />
                </li>
                <li>
                    <div className="timeline-middle">
                        <TimelineIcon />
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">07/2023 - 11/2024</time>
                        <div className="flex justify-end text-lg text-purple-600">
                            <img className="w-8 h-8 mr-2" alt="happiso" src={happisoImg}/>
                            <p>HAPPISO</p>
                        </div>
                        <div>{t('work.fullStackDeveloper')} - {t('work.cdi')}</div>
                        Metz, France
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <TimelineIcon />
                    </div>
                    <div className="timeline-end mb-10 md:text-start">
                        <time className="font-mono italic">01/2023 - 07/2023</time>
                        <div className="flex items-center text-lg text-purple-600">
                            <img className="w-8 h-8 mr-2" alt="baback" src={babackImg}/>
                            <p>BABACK</p>
                        </div>
                        <div>{t('work.fullStackDeveloper')} - {t('work.internship')}</div>
                        Strasbourg, France
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <TimelineIcon />
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">07/2022 - 09/2022</time>
                        <div className="flex justify-end text-lg text-purple-600">
                            <img className="w-8 h-8 mr-2" alt="esprit" src={espritImg}/>
                            <p>ESPRIT-TECH</p>
                        </div>
                        <div>{t('work.fullStackDeveloper')} - {t('work.internship')}</div>
                        Ariana, Tunisie
                    </div>
                    <hr/>
                </li>
                <li>
                    <hr/>
                    <div className="timeline-middle">
                        <TimelineIcon />
                    </div>
                    <div className="timeline-end mb-10 md:text-start">
                        <time className="font-mono italic">02/2022 - 05/2022</time>
                        <div className="flex items-center text-lg text-purple-600">
                            <p>OBY-DIGITAL</p>
                        </div>
                        <div>{t('work.webDeveloper')} - {t('work.freelance')}</div>
                        Paris, France {t('work.remote')}
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <TimelineIcon />
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">06/2021 - 09/2021</time>
                        <div className="flex justify-end text-lg text-purple-600">
                            <img className="w-8 h-8 mr-2" alt="devnull" src={devNullImg}/>
                            <p>DEV NULL PRODUCTIONS</p>
                        </div>
                        <div>{t('work.fullStackDeveloper')} - {t('work.internship')}</div>
                        New York, USA {t('work.remote')}
                    </div>
                    <hr/>
                </li>
                <li>
                    <hr/>
                    <div className="timeline-middle">
                        <TimelineIcon />
                    </div>
                    <div className="timeline-end mb-10 md:text-start">
                        <time className="font-mono italic">02/2020 - 06/2020</time>
                        <div className="flex items-center text-lg text-purple-600">
                            <img className="w-8 h-8 mr-2" alt="unfrauded" src={unfraundedImg}/>
                            <p>UNFRAUDED</p>
                        </div>
                        <div>{t('work.fullStackDeveloper')} - {t('work.internship')}</div>
                        Ariana, Tunisie
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <TimelineIcon />
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">06/2019 - 07/2019</time>
                        <div className="flex justify-end text-lg text-purple-600">
                            <img className="w-8 h-8 mr-2" alt="coroplaste" src={coroplasteImg}/>
                            <p>Coroplast Fritz Müller GmbH & Co. KG</p>
                        </div>
                        <div>{t('work.itTechnician')} - {t('work.internship')}</div>
                        Hammamet, Nabeul
                    </div>
                    <hr/>
                </li>
                <li>
                    <hr/>
                    <div className="timeline-middle">
                        <TimelineIcon />
                    </div>
                    <div className="timeline-end mb-10 md:text-start">
                        <time className="font-mono italic">06/2018 - 07/2018</time>
                        <div className="flex items-center text-lg text-purple-600">
                            <img className="w-8 h-8 mr-2" alt="tunisair" src={tunisairImg}/>
                            <p>TUNISAIR</p>
                        </div>
                        <div>{t('work.itTechnician')} - {t('work.internship')}</div>
                        Ariana, Tunisie
                    </div>
                </li>

            </ul>
        </>
    );
}
