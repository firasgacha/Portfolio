import type { TFunction } from "i18next";
import profileImg from "../assets/profile.png";
import { experiences, github, technologies } from "../data/data";
import { isFrench } from "../lib/locale";

export async function generateCv(t: TFunction, language: string) {
  const { jsPDF } = await import("jspdf");
  const french = isFrench(language);
  const doc = new jsPDF("p", "mm", "a4");

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const purple: [number, number, number] = [124, 58, 237];
  const darkText: [number, number, number] = [55, 65, 81];
  const lightText: [number, number, number] = [107, 114, 128];

  const checkPageBreak = (needed: number) => {
    if (y + needed > pageHeight - margin) {
      doc.addPage();
      y = margin + 5;
    }
  };

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
    doc.addImage(imgBase64, "PNG", margin, y, imgSize, 35);
    headerTextX = margin + imgSize + 8;
    headerHeight = imgSize;
  } catch (imgError) {
    console.warn("[CV] Could not load profile image:", imgError);
    headerHeight = 20;
  }

  const textStartY = y + 8;
  doc.setFontSize(22);
  doc.setTextColor(...purple);
  doc.setFont("helvetica", "bold");
  doc.text("Firas GACHA", headerTextX, textStartY);

  doc.setFontSize(12);
  doc.setTextColor(...darkText);
  doc.setFont("helvetica", "normal");
  doc.text(t("home.title"), headerTextX, textStartY + 7);

  doc.setFontSize(9);
  doc.setTextColor(...lightText);
  doc.text("firasgacha.inbox@gmail.com", pageWidth - margin, textStartY, {
    align: "right",
  });
  doc.text(`GitHub: ${github}`, pageWidth - margin, textStartY + 5, {
    align: "right",
  });

  y += Math.max(headerHeight, 20) + 25;

  checkPageBreak(15);
  doc.setFontSize(14);
  doc.setTextColor(...purple);
  doc.setFont("helvetica", "bold");
  doc.text(t("work.title").toUpperCase(), margin, y);

  doc.setDrawColor(...purple);
  doc.setLineWidth(0.5);
  doc.line(margin, y + 2, pageWidth - margin, y + 2);
  y += 10;

  experiences.forEach((exp) => {
    checkPageBreak(35);
    const responsibilities = french
      ? exp.responsibilities.fr
      : exp.responsibilities.en;

    doc.setFontSize(12);
    doc.setTextColor(...purple);
    doc.setFont("helvetica", "bold");
    doc.text(exp.company, margin, y);

    doc.setFontSize(10);
    doc.setTextColor(...lightText);
    doc.setFont("helvetica", "normal");
    doc.text(exp.dates, pageWidth - margin, y, { align: "right" });
    y += 5;

    doc.setFontSize(10.5);
    doc.setTextColor(...darkText);
    doc.setFont("helvetica", "bold");
    doc.text(`${t(`work.${exp.role}`)} - ${t(`work.${exp.type}`)}`, margin, y);

    doc.setFontSize(9);
    doc.setTextColor(...lightText);
    doc.setFont("helvetica", "normal");
    doc.text(exp.location, pageWidth - margin, y, { align: "right" });
    y += 7;

    doc.setFontSize(10);
    doc.setTextColor(...darkText);
    responsibilities.forEach((resp) => {
      checkPageBreak(8);
      const lines = doc.splitTextToSize(`•  ${resp}`, contentWidth - 4);
      doc.text(lines, margin + 2, y);
      y += lines.length * 5;
    });

    doc.setFontSize(9);
    doc.setTextColor(...purple);
    doc.setFont("helvetica", "italic");
    const techPrefix = french ? "Technologies : " : "Tech Stack: ";
    const techLines = doc.splitTextToSize(
      `${techPrefix}${exp.technologies.join(", ")}`,
      contentWidth,
    );
    doc.text(techLines, margin, y + 2);
    y += techLines.length * 5 + 6;
  });

  checkPageBreak(25);
  doc.setFontSize(14);
  doc.setTextColor(...purple);
  doc.setFont("helvetica", "bold");
  doc.text(t("cv.tools").toUpperCase(), margin, y);

  doc.setDrawColor(...purple);
  doc.setLineWidth(0.5);
  doc.line(margin, y + 2, pageWidth - margin, y + 2);
  y += 8;

  doc.setFontSize(10);
  doc.setTextColor(...darkText);
  doc.setFont("helvetica", "normal");
  const toolsLines = doc.splitTextToSize(
    technologies.map((tech) => tech.name).join(" • "),
    contentWidth,
  );
  doc.text(toolsLines, margin, y + 2);

  doc.save("GACHA_CV.pdf");
}
