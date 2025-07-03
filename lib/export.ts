// src/lib/export.ts
import html2pdf from "html2pdf.js";
import { Document, Packer, Paragraph, TextRun } from "docx";

export const exportToPDF = (data: any) => {
  const element = document.createElement("div");
  element.innerHTML = `
    <h1>Document</h1>
    <p>Full Name: ${data.fullName}</p>
    <p>Address: ${data.address}</p>
  `;
  html2pdf(element);
};

export const exportToDOCX = (data: any) => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun(`Full Name: ${data.fullName}`),
              new TextRun(`Address: ${data.address}`),
            ],
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "document.docx";
    link.click();
  });
};
