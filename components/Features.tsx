const features = [
    {
        title: "Smart Form Generator",
        desc: "Auto-generates accurate documents based on your input.",
    },
    {
        title: "Multilingual Output",
        desc: "Supports both Nepali and English formats with correct formatting.",
    },
    {
        title: "Download-Ready",
        desc: "Instantly download as PDF or Word format with proper styling.",
    },
]

export default function Features() {
    return (
        <section id="features" className="bg-white py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-semibold text-zinc-900">Why Choose DocsNepal?</h2>
                <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
                    We remove the hassle of formatting legal documents with a form-first approach.
                </p>

                <div className="mt-16 grid md:grid-cols-3 gap-12 text-left">
                    {features.map((f, i) => (
                        <div key={i} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-bold text-blue-700">{f.title}</h3>
                            <p className="mt-2 text-zinc-600">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
