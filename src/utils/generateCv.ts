import type { TFunction } from "i18next";
import { experiences, github, technologies, linkedin } from "../data/data";
import { isFrench, pickLocale } from "../lib/locale";

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

  const headerTextX = margin;
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
  doc.text(`Linkedin: ${linkedin}`, pageWidth - margin, textStartY + 5, {
    align: "right",
  });

  y += 45;

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
    const responsibilities = pickLocale(language, exp.responsibilities);

    doc.setFontSize(12);
    doc.setTextColor(...purple);
    doc.setFont("helvetica", "bold");
    doc.text(exp.company, margin, y);

    doc.setFontSize(10);
    doc.setTextColor(...lightText);
    doc.setFont("helvetica", "normal");
    doc.text(pickLocale(language, exp.dates), pageWidth - margin, y, {
      align: "right",
    });
    y += 5;

    doc.setFontSize(10.5);
    doc.setTextColor(...darkText);
    doc.setFont("helvetica", "bold");
    doc.text(`${t(`work.${exp.role}`)} - ${t(`work.${exp.type}`)}`, margin, y);

    doc.setFontSize(9);
    doc.setTextColor(...lightText);
    doc.setFont("helvetica", "normal");
    doc.text(pickLocale(language, exp.location), pageWidth - margin, y, {
      align: "right",
    });
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
    const techPrefix = french
      ? `${t("work.technologies")} : `
      : `${t("work.technologies")}: `;
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
