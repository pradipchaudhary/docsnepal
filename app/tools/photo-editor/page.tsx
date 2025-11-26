"use client";

import { useState } from "react";

export default function PhotoEditor() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const convert = async () => {
    if (!file) return alert("Upload a file first");

    setLoading(true);

    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch("/api/photo-edit", {
      method: "POST",
      body: fd,
    });

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    setResult(url);
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Photo Editor (3.5 × 4.5 inch – 300 DPI)</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button
        onClick={convert}
        className="px-4 py-2 bg-blue-600 text-white rounded"
        disabled={loading}
      >
        {loading ? "Converting..." : "Convert Now"}
      </button>

      {result && (
        <div>
          <h3 className="font-medium mb-2">Converted Image:</h3>
          <img src={result} className="border w-64" />
          <a
            href={result}
            download="photo_3.5x4.5_300dpi.jpg"
            className="mt-3 inline-block text-blue-600"
          >
            Download Image
          </a>
        </div>
      )}
    </div>
  );
}
