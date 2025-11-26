import { NextResponse } from "next/server";
import sharp from "sharp";

// Target size (3.5 × 4.5 inch @ 300 DPI)
const width = 1050;  // 3.5in × 300dpi
const height = 1350; // 4.5in × 300dpi

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Convert using Sharp
    const output = await sharp(buffer)
      .resize(width, height, { fit: "cover" })
      .jpeg({ quality: 92 })
      .toBuffer();

    return new NextResponse(output, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Disposition": `attachment; filename="photo_3.5x4.5.jpg"`,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to process image" },
      { status: 500 }
    );
  }
}
