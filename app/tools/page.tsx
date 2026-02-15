import Link from "next/link";

const tools = [
  {
    category: "Documentation & Writing",
    items: [
      { title: "Markdown Editor", desc: "Live markdown editor with PDF/HTML export" },
      { title: "PDF Notes Generator", desc: "Generate clean, printable study notes" },
      { title: "AI Study Notes", desc: "Instant revision notes for students" },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { title: "JSON Formatter", desc: "Beautify and validate JSON data" },
      { title: "JWT Decoder", desc: "Decode JWT tokens securely" },
      { title: "Base64 Encoder/Decoder", desc: "Encode and decode Base64 strings" },
      { title: "Regex Tester", desc: "Test and debug regular expressions" },
    ],
  },
  {
    category: "UI & Frontend",
    items: [
      { title: "Color Picker", desc: "Generate HEX, RGB, HSL palettes" },
      { title: "Responsive Preview", desc: "Preview UI across devices" },
      { title: "CSS Generator", desc: "Flexbox and Grid utilities" },
    ],
  },
  {
    category: "Nepal Tools",
    items: [
      { title: "Nepali Date Converter", desc: "Convert BS ↔ AD dates" },
      { title: "Notice & Exam Alerts", desc: "Latest government updates (coming soon)" },
    ],
  },
];

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <header className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900">Tools</h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          A curated collection of free, fast, and practical tools for developers, students, and professionals in Nepal.
        </p>
      </header>

      <div className="space-y-14">
        {tools.map((section) => (
          <section key={section.category} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
              {section.category}
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((tool) => (
                <div
                  key={tool.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{tool.desc}</p>

                  <Link
                    href="#"
                    className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
                  >
                    Use Tool →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
