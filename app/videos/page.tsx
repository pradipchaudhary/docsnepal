import Link from "next/link";

const videos = [
  {
    title: "JavaScript Fundamentals",
    desc: "Core JavaScript concepts explained clearly for beginners.",
    tag: "Beginner",
    href: "#",
  },
  {
    title: "React Behind the Scenes",
    desc: "How React works internally: Fiber, reconciliation, rendering.",
    tag: "Intermediate",
    href: "#",
  },
  {
    title: "Next.js App Router",
    desc: "Modern routing, layouts, and server components.",
    tag: "Intermediate",
    href: "#",
  },
  {
    title: "Tailwind CSS Best Practices",
    desc: "Write clean, scalable utility-first CSS.",
    tag: "Frontend",
    href: "#",
  },
  {
    title: "Node.js & Express Basics",
    desc: "Building APIs with Node.js and Express.",
    tag: "Backend",
    href: "#",
  },
];

export default function VideosPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-20">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-3xl font-semibold text-gray-900">Videos</h1>
        <p className="mt-2 max-w-xl text-sm text-gray-600">
          Short, focused video tutorials for developers and students.
        </p>
      </header>

      {/* Video List */}
      <section className="space-y-8">
        {videos.map((video) => (
          <div
            key={video.title}
            className="border-b border-gray-200 pb-6"
          >
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-medium text-gray-900">
                {video.title}
              </h2>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                {video.tag}
              </span>
            </div>

            <p className="mt-2 max-w-2xl text-sm text-gray-600">
              {video.desc}
            </p>

            <Link
              href={video.href}
              className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
            >
              Watch video →
            </Link>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-24">
        <h2 className="text-xl font-medium text-gray-900">
          Want more tutorials?
        </h2>
        <p className="mt-2 max-w-xl text-sm text-gray-600">
          Subscribe and suggest topics you want to learn next.
        </p>

        <Link
          href="/contact"
          className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          Suggest a topic →
        </Link>
      </section>
    </main>
  );
}
