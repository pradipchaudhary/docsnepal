"use client";

import { useState } from "react";

export default function PassportCV() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: any) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    const fd = new FormData();
    fd.append("passport", file);

    const res = await fetch("/api/tools/passport-cv", { method: "POST", body: fd });
    const blob = await res.blob();

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "Passport-CV.pdf";
    a.click();
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={submit} className="bg-white p-8 rounded-xl shadow-xl space-y-4">
        <h1 className="text-2xl font-semibold">Nepali Passport CV Generator</h1>

        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />

        <button className="bg-black text-white px-6 py-2 rounded">
          {loading ? "Processing..." : "Generate CV"}
        </button>
      </form>
    </div>
  );
}
