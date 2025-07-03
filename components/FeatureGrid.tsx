// src/components/FeatureGrid.tsx
const features = [
  "📝 Nepali & English Document Support",
  "⚙️ Smart Form-Based Document Generation",
  "📄 Export as PDF or Word (.docx)",
  "🧾 Legally Accurate & Predefined Templates",
  "🔐 Privacy-First (No Login, No Data Stored)",
  "📱 Fully Responsive & Mobile-Friendly UI",
  "💡 Simple Instructions with Clean UX",
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
      {features.map((feature) => (
        <div
          key={feature}
          className="p-4 border rounded shadow hover:shadow-md bg-white"
        >
          {feature}
        </div>
      ))}
    </div>
  );
}
