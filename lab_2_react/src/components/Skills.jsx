function Skills() {
    const skills = [
        { title: "Мови програмування", text: "Python, базові знання SQL та HTML/CSS" },
        { title: "Інструменти розробки", text: "Git, Visual Studio Code" },
        { title: "Бази даних", text: "Проєктування реляційних баз даних, нормалізація, написання запитів" },
        { title: "Мережі та безпека", text: "Основи криптографії, моделювання локальних мереж, аналіз вебзапитів" },
        { title: "Мови", text: "Англійська" },
    ];

    return (
        <section className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold text-slate-800 pb-2 mb-4 border-b-2 border-emerald-500">Технічні навички</h2>
            <ul className="list-disc list-outside pl-5 space-y-2 marker:text-emerald-500 text-sm">
                {skills.map((s) => (
                    <li key={s.title} className="text-slate-600">
                        {s.title}: <strong className="text-slate-900">{s.text}</strong>
                    </li>
                ))}
            </ul>
        </section>
    );
}
export default Skills;