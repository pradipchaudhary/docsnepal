import Link from "next/link";

const toolsData = [
  {
    category: "Photos",
    tools: [
      { name: "Photo Size Converter", href: "/tools/photo-editor" },
      { name: "Background Remover", href: "/tools/background-remove" },
    ],
  },
  {
    category: "Government",
    tools: [
      { name: "Police Report", href: "/tools/police-report" },
      { name: "Date Converter", href: "/tools/date-converter" },
    ],
  },
  {
    category: "Others",
    tools: [
      { name: "PDF Tools", href: "/tools/pdf-tools" },
      { name: "Calculators", href: "/tools/calculators" },
    ],
  },
];

const ToolsPage = () => {
  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Heading */}
        <h1 className="text-4xl sm:text-4xl font-bold text-black tracking-tight mb-4">
          Tools
        </h1>
        <p className="text-gray-600 mb-12 text-lg sm:text-xl">
          Simplify government documents and online processes with our easy-to-use tools.
        </p>

        {/* Tools Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {toolsData.map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            >
              {/* Category Header */}
              <h2 className="text-lg font-semibold text-black mb-4 pb-2 border-b border-gray-200">
                {category.category}
              </h2>

              {/* Tools List */}
              <div className="flex flex-col space-y-3">
                {category.tools.map((tool) => (
                  <Link
                    key={tool.name}
                    href={tool.href}
                    className="block text-gray-800 bg-gray-50 hover:bg-blue-50 hover:text-blue-600 rounded-lg px-4 py-2 font-medium transition-all"
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ToolsPage;
