function Experience() {
    const projects = [
        {
            title: "Проєкти з програмування (Python)",
            text: "Розробка скриптів для обробки даних, створення консольних утиліт з функціями логування та базового захисту інформації.",
        },
        {
            title: "Проєктування баз даних",
            text: "Розробка структури реляційної бази даних для освітнього закладу, оптимізація структури таблиць.",
        },
        {
            title: "Комп'ютерні мережі",
            text: "Побудова та базова конфігурація мережевих топологій у віртуальному середовищі, аналіз мережевого трафіку.",
        },
    ];

    return (
        <section className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold text-slate-800 pb-2 mb-4 border-b-2 border-emerald-500">Навчальні проєкти</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((p) => (
                    <div key={p.title} className="bg-slate-50 rounded-lg p-4 border border-slate-100 hover:scale-105 transition-transform">
                        <h3 className="font-bold text-emerald-700 mb-2">{p.title}</h3>
                        <p className="text-sm text-slate-600">{p.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Experience;