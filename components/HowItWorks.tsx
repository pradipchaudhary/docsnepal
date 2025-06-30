const steps = [
    "Select a document type — e.g. Nibedan, Sifaris, Affidavit.",
    "Fill your personal and official info in the form.",
    "Preview & download your formatted document instantly.",
];

export default function HowItWorks() {
    return (
        <section id="how" className="bg-zinc-50 py-24 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-semibold text-zinc-900">How It Works</h2>
                <div className="mt-12 space-y-6 text-left max-w-3xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-4 items-start">
                            <div className="text-blue-600 text-xl font-bold">{index + 1}.</div>
                            <p className="text-zinc-700 text-lg">{step}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
