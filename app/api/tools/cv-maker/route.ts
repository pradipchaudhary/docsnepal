import { NextRequest, NextResponse } from "next/server";
import Tesseract from "tesseract.js";
import PDFDocument from "pdfkit";
import fs from "fs";
import os from "os";
import path from "path";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("passport");

  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "Passport image required" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const imagePath = path.join(os.tmpdir(), `passport-${Date.now()}.png`);
  fs.writeFileSync(imagePath, buffer);

  const ocr = await Tesseract.recognize(imagePath, "eng");
  const passportData = extractPassportData(ocr.data.text);

  const pdfPath = path.join(os.tmpdir(), `Passport-CV-${Date.now()}.pdf`);
  await generateCV(pdfPath, passportData, imagePath);

  const pdf = fs.readFileSync(pdfPath);

  fs.unlinkSync(imagePath);
  fs.unlinkSync(pdfPath);

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=Passport-CV.pdf",
    },
  });
}
