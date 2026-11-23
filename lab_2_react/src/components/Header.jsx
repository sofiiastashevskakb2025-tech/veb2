function Header() {
    return (
        <header className="bg-slate-900 text-white px-8 py-10 border-b-4 border-emerald-500">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-emerald-400">
                Сташевська Софія Богданівна
            </h1>
            <p className="text-lg italic text-slate-300 mt-1 mb-4">
                Студентка / Фахівець з кібербезпеки
            </p>
            <p className="text-sm text-slate-400 flex flex-wrap gap-x-3 gap-y-1">
                <span>
                    Email:{" "}
                    <a href="mailto:sofiia.stashevska.kb.2025@lpnu.ua" className="text-emerald-300 hover:underline">
                        sofiia.stashevska.kb.2025@lpnu.ua
                    </a>
                </span>
                <span className="hidden sm:inline">|</span>
                <span>
                    GitHub:{" "}
                    <a href="https://github.com/sofiiastashevskakb2025-tech" target="_blank" rel="noreferrer" className="text-emerald-300 hover:underline">
                        github.com/sofiiastashevskakb2025-tech
                    </a>
                </span>
            </p>
        </header>
    );
}
export default Header;