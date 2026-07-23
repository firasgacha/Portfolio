import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HireMe } from "../components/HireMe";
import { Tools } from "../components/Tools";
import profileImg from "../assets/profile.png";
import { experiences, technologies, github } from "../data/data";

declare global {
    interface Window {
        html2pdf: any;
    }
}

export function Home() {
    const { t, i18n } = useTranslation();

    const downloadCv = async () => {
        try {
            const currentLang = i18n.language === 'fr' ? 'fr' : 'en';
            console.log('[CV] Starting PDF generation, language:', currentLang);

            const profileSection = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="${profileImg}" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin-bottom: 10px;" />
                    <h1 style="margin: 0; color: #7c3aed;">Firas GACHA</h1>
                    <p style="margin: 5px 0; color: #374151;">Full Stack Developer</p>
                    <p style="margin: 5px 0; font-size: 14px; color: #6b7280;">firasgacha.inbox@gmail.com | ${github}</p>
                </div>
            `;

            const experienceSection = experiences.map((exp, index) => {
                const responsibilities = currentLang === 'fr' ? exp.responsibilities.fr : exp.responsibilities.en;

                return `
                    <div style="margin-bottom: 20px; padding-bottom: 15px; ${index < experiences.length - 1 ? 'border-bottom: 1px solid #e5e7eb;' : ''}">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                            <div>
                                <h3 style="margin: 0; color: #7c3aed; font-size: 18px;">${exp.company}</h3>
                                <p style="margin: 4px 0; color: #374151; font-size: 14px;">${t(`work.${exp.role}`)} - ${t(`work.${exp.type}`)}</p>
                            </div>
                            <div style="text-align: right; font-size: 12px; color: #6b7280;">
                                <p style="margin: 0;">${exp.dates}</p>
                                <p style="margin: 4px 0 0 0;">${exp.location}</p>
                            </div>
                        </div>
                        <ul style="margin: 8px 0; padding-left: 20px; color: #4b5563; font-size: 13px; line-height: 1.6;">
                            ${responsibilities.map(resp => `<li style="margin-bottom: 4px;">${resp}</li>`).join('')}
                        </ul>
                        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px;">
                            ${exp.technologies.map(tech => `<span style="background: #f3e8ff; color: #7c3aed; padding: 2px 8px; border-radius: 12px; font-size: 11px;">${tech}</span>`).join('')}
                        </div>
                    </div>
                `;
            }).join('');

            const toolsSection = technologies.map(tech => `<span style="background: #f3e8ff; color: #7c3aed; padding: 4px 10px; border-radius: 12px; font-size: 12px; margin: 4px; display: inline-block;">${tech.name}</span>`).join('');

            const cvHtml = `
                <div style="max-width: 800px; margin: 0 auto; padding: 30px; font-family: Arial, sans-serif;">
                    ${profileSection}
                    <div style="margin-bottom: 25px;">
                        <h2 style="color: #7c3aed; font-size: 20px; margin-bottom: 12px; border-bottom: 2px solid #7c3aed; padding-bottom: 5px;">${t('work.title') || 'Work Experience'}</h2>
                        ${experienceSection}
                    </div>
                    <div style="margin-bottom: 25px;">
                        <h2 style="color: #7c3aed; font-size: 20px; margin-bottom: 12px; border-bottom: 2px solid #7c3aed; padding-bottom: 5px;">${t('tools.title') || 'Tools & Technologies'}</h2>
                        <div style="margin-top: 10px;">${toolsSection}</div>
                    </div>
                </div>
            `;

            const element = document.createElement('div');
            element.innerHTML = cvHtml;
            element.style.position = 'fixed';
            element.style.left = '-9999px';
            element.style.top = '0';
            document.body.appendChild(element);

            const opt = {
                margin: 10,
                filename: 'Firas_GACHA_CV.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            const generatePdf = () => {
                console.log('[CV] html2pdf is available, generating...');
                return window.html2pdf().set(opt).from(element).save();
            };

            if (window.html2pdf) {
                await generatePdf();
            } else {
                console.log('[CV] html2pdf not loaded, injecting script...');
                await new Promise<void>((resolve, reject) => {
                    const script = document.createElement('script');
                    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
                    script.onload = () => {
                        console.log('[CV] html2pdf script loaded');
                        resolve();
                    };
                    script.onerror = () => {
                        console.error('[CV] Failed to load html2pdf script');
                        reject(new Error('Failed to load PDF library'));
                    };
                    document.head.appendChild(script);
                });
                await generatePdf();
            }

            console.log('[CV] PDF generated successfully');
        } catch (error) {
            console.error('[CV] Error generating PDF:', error);
            alert('Unable to generate PDF. Please check your internet connection and try again.');
        } finally {
            const element = document.querySelector('div[style*="position: fixed"]');
            if (element && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }
    };

    return (
        <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col overflow-hidden">
            <section className="flex flex-col md:flex-row nav-padding w-full items-center justify-center">
                <div className="flex flex-col justify-center w-full p-4 md:w-1/2">
                    <div className="text-start">
                        <h3 className="text-5xl font-bold mb-6">{t('home.hey')}</h3>
                        <h1 className="text-5xl font-bold">{t('home.name')}</h1>
                        <h1 className="text-5xl font-bold text-purple-600">{t('home.title')}</h1>
                        <p className="py-6">
                            {t('home.description')}
                        </p>
                    </div>

                    <h6 className="paragraph-regular pt-6 text-white-600 max-w-lg flex items-center">
                        {t('home.findMe')}
                        <span className="inline-flex space-x-4 ml-2">
                            <a href={"https://www.linkedin.com/in/firasgacha/"} target="_blank" rel="noopener noreferrer">
                                <span className="text-twitter hover:text-[#0072b1] text-2xl">
                                    <i className="ri-linkedin-box-fill"></i>
                                </span>
                            </a>
                            <a href={"https://github.com/firasgacha"} target="_blank" rel="noopener noreferrer">
                                <span className="text-github hover:text-gray-400 text-2xl">
                                    <i className="ri-github-fill"></i>
                                </span>
                            </a>
                        </span>
                    </h6>

                    <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 pt-7">
                        <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                            <a href={`mailto:firasgacha.inbox@gmail.com`}>
                                <span className="flex items-center space-x-2">
                                    <i className="ri-mail-line"></i>
                                    <span>{t('home.emailMe')}</span>
                                </span>
                            </a>
                        </button>

                        <button
                            onClick={downloadCv}
                            className="btn btn-neutral btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                        >
                            <span className="flex items-center space-x-2">
                                <i className="ri-download-cloud-line"></i>
                                <span>{t('home.resume')}</span>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-full md:w-1/2 p-4">
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="w-72 rounded-full object-cover"
                        loading="eager"
                    />
                </div>
            </section>

            <Tools />

            <HireMe />

            <div className="alert flex justify-between p-5 mt-10">
                <h1 className="text-3xl font-bold">{t('home.interestedTitle')}</h1>
                <div>
                    <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg mr-5">
                        <NavLink to={"/contact"}>
                            <span className="flex items-center space-x-2">
                                <i className="ri-mail-line"></i>
                                <span>{t('home.contactMe')}</span>
                            </span>
                        </NavLink>
                    </button>
                </div>
            </div>
        </main>
    );
}
