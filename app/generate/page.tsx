// src/app/generate/page.tsx
"use client";
import { useForm } from "react-hook-form";
import { exportToPDF, exportToDOCX } from "@/lib/export"; // Assume logic is defined

export default function GeneratorPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    exportToPDF(data);  // Or exportToDOCX(data);
  };

  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-2xl font-bold mb-4">Generate Document</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("fullName")}
          placeholder="Full Name"
          className="w-full p-2 border rounded"
        />
        <input
          {...register("address")}
          placeholder="Address"
          className="w-full p-2 border rounded"
        />
        {/* Add more fields based on document type */}
        <div className="flex gap-2">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Export as PDF
          </button>
          <button
            type="button"
            onClick={handleSubmit((data) => exportToDOCX(data))}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Export as DOCX
          </button>
        </div>
      </form>
    </div>
  );
}
