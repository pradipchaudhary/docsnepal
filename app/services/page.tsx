import Link from "next/link";

const services = [
  {
    title: "Technical Documentation",
    desc: "Clean, structured, and developer-friendly documentation for products, APIs, and internal systems.",
    points: ["API Docs", "Developer Guides", "README & Wiki", "System Architecture Docs"],
  },
  {
    title: "Study Notes & Learning Content",
    desc: "High-quality notes designed for Nepali students and self-learners.",
    points: ["PDF Notes", "Beginner to Advanced Guides", "Exam-Oriented Content", "Revision Sheets"],
  },
  {
    title: "Web Development Support",
    desc: "Modern frontend and full-stack development assistance.",
    points: ["React & Next.js", "Tailwind UI", "SEO-friendly Pages", "Performance Optimization"],
  },
  {
    title: "Automation & Tools",
    desc: "Productivity tools and automation to save time and reduce manual work.",
    points: ["Custom Web Tools", "Data Converters", "Scrapers & Utilities", "Internal Dashboards"],
  },
  {
    title: "Consultation & Mentorship",
    desc: "Guidance for students, developers, and startups.",
    points: ["Career Guidance", "Code Review", "Project Planning", "Best Practices"],
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-20">
      {/* Header */}
      <header className="mb-20">
        <h1 className="text-3xl font-semibold text-gray-900">Services</h1>
        <p className="mt-2 max-w-xl text-sm text-gray-600">
          Simple, focused services to help you learn, build, and document better.
        </p>
      </header>

      {/* Services */}
      <section className="space-y-12">
        {services.map((service) => (
          <div
            key={service.title}
            className="border-b border-gray-200 pb-10"
          >
            <h2 className="text-xl font-medium text-gray-900">
              {service.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">
              {service.desc}
            </p>

            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-gray-700">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gray-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-24">
        <h2 className="text-xl font-medium text-gray-900">
          Want to work together?
        </h2>
        <p className="mt-2 max-w-xl text-sm text-gray-600">
          Reach out if you need documentation, tools, or development support.
        </p>

        <Link
          href="/contact"
          className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          Contact DocsNepal →
        </Link>
      </section>
    </main>
  );
}
