import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HireMe } from "../components/HireMe";
import { Tools } from "../components/Tools";
import { jsPDF } from "jspdf";
import profileImg from "../assets/profile.png";
import { experiences, technologies, github } from "../data/data";

export function Home() {
    const { t, i18n } = useTranslation();

    const downloadCv = async () => {
        try {
            const currentLang = i18n.language === 'fr' ? 'fr' : 'en';
            const doc = new jsPDF('p', 'mm', 'a4');
            
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const margin = 15;
            const contentWidth = pageWidth - (margin * 2);
            let y = margin;
            
            // Brand Colors
            const purple: [number, number, number] = [124, 58, 237];
            const darkText: [number, number, number] = [55, 65, 81];
            const lightText: [number, number, number] = [107, 114, 128];
            
            const checkPageBreak = (needed: number) => {
                if (y + needed > pageHeight - margin) {
                    doc.addPage();
                    y = margin + 5; 
                }
            };
    
            // --- HEADER SECTION ---
            let headerTextX = margin;
            let headerHeight = 0;
            
            try {
                const imgResponse = await fetch(profileImg);
                const imgBlob = await imgResponse.blob();
                const imgBase64 = await new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result as string);
                    reader.onerror = reject;
                    reader.readAsDataURL(imgBlob);
                });
                
                const imgSize = 25;
                doc.addImage(imgBase64, 'PNG', margin, y, imgSize, 35);
                headerTextX = margin + imgSize + 8; 
                headerHeight = imgSize;
            } catch (imgError) {
                console.warn('[CV] Could not load profile image:', imgError);
                headerHeight = 20; 
            }
            
            // Name & Title (Left aligned, beside image)
            const textStartY = y + 8; 
            doc.setFontSize(22);
            doc.setTextColor(...purple);
            doc.setFont('helvetica', 'bold');
            doc.text('Firas GACHA', headerTextX, textStartY);
            
            doc.setFontSize(12);
            doc.setTextColor(...darkText);
            doc.setFont('helvetica', 'normal');
            doc.text('Full Stack Developer', headerTextX, textStartY + 7);
            
            // Contact (Right aligned in the header)
            doc.setFontSize(9);
            doc.setTextColor(...lightText);
            doc.text('firasgacha.inbox@gmail.com', pageWidth - margin, textStartY, { align: 'right' });
            doc.text(`GitHub: ${github}`, pageWidth - margin, textStartY + 5, { align: 'right' });
            
            // ADDED MORE SPACE HERE: Increased padding from 12 to 25
            y += Math.max(headerHeight, 20) + 25; 
            
            // --- WORK EXPERIENCE SECTION ---
            checkPageBreak(15);
            doc.setFontSize(14);
            doc.setTextColor(...purple);
            doc.setFont('helvetica', 'bold');
            const experienceTitle = t('work.title'); 
            doc.text(experienceTitle.toUpperCase(), margin, y);
            
            // Separator Line
            doc.setDrawColor(...purple);
            doc.setLineWidth(0.5);
            doc.line(margin, y + 2, pageWidth - margin, y + 2);
            y += 10;
            
            experiences.forEach((exp) => {
                checkPageBreak(35);
                const responsibilities = currentLang === 'fr' ? exp.responsibilities.fr : exp.responsibilities.en;
                
                // Company & Dates (Same line)
                doc.setFontSize(12);
                doc.setTextColor(...purple);
                doc.setFont('helvetica', 'bold');
                doc.text(exp.company, margin, y);
                
                doc.setFontSize(10);
                doc.setTextColor(...lightText);
                doc.setFont('helvetica', 'normal');
                doc.text(exp.dates, pageWidth - margin, y, { align: 'right' });
                y += 5;
                
                // Role & Location (Same line)
                doc.setFontSize(10.5);
                doc.setTextColor(...darkText);
                doc.setFont('helvetica', 'bold');
                doc.text(`${t(`work.${exp.role}`)} - ${t(`work.${exp.type}`)}`, margin, y);
                
                doc.setFontSize(9);
                doc.setTextColor(...lightText);
                doc.setFont('helvetica', 'normal');
                doc.text(exp.location, pageWidth - margin, y, { align: 'right' });
                y += 7;
                
                // Responsibilities (Bullet points)
                doc.setFontSize(10);
                doc.setTextColor(...darkText);
                responsibilities.forEach((resp) => {
                    checkPageBreak(8);
                    const lines = doc.splitTextToSize(`•  ${resp}`, contentWidth - 4);
                    doc.text(lines, margin + 2, y);
                    y += lines.length * 5;
                });
                
                // Technologies Used
                doc.setFontSize(9);
                doc.setTextColor(...purple);
                doc.setFont('helvetica', 'italic');
                const techPrefix = currentLang === 'fr' ? 'Technologies : ' : 'Tech Stack: ';
                const techLines = doc.splitTextToSize(`${techPrefix}${exp.technologies.join(', ')}`, contentWidth);
                doc.text(techLines, margin, y + 2);
                y += techLines.length * 5 + 6; 
            });
            
            // --- TOOLS & TECHNOLOGIES SECTION ---
            checkPageBreak(25);
            doc.setFontSize(14);
            doc.setTextColor(...purple);
            doc.setFont('helvetica', 'bold');
            const toolsTitle = t('cv.tools') || 'Tools & Technologies';
            doc.text(toolsTitle.toUpperCase(), margin, y);
            
            doc.setDrawColor(...purple);
            doc.setLineWidth(0.5);
            doc.line(margin, y + 2, pageWidth - margin, y + 2);
            y += 8;
            
            doc.setFontSize(10);
            doc.setTextColor(...darkText);
            doc.setFont('helvetica', 'normal');
            const toolsLines = doc.splitTextToSize(technologies.map(t => t.name).join(' • '), contentWidth);
            doc.text(toolsLines, margin, y + 2);
            
            // --- SAVE ---
            doc.save('GACHA_CV.pdf');
            console.log('[CV] PDF generated successfully');
            
        } catch (error) {
            console.error('[CV] Error generating PDF:', error);
            alert(t('cv.error') || 'Unable to generate PDF. Please check your connection and try again.');
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
