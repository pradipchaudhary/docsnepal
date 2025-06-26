
export default function Home() {
  return (
    <>


      <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-gray-800">
        <div className="max-w-2xl text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-blue-600">DocsNepal</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Simplifying documentation for teams, freelancers, and startups in Nepal. Fast, reliable, and beautifully simple.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </main>
    </>
  )
}
