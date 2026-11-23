import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
    const [theme, setTheme] = useState('light');

    // Автоматично за часом доби: 07:00–21:00 день, інакше ніч
    useEffect(() => {
        const hour = new Date().getHours();
        setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark');
    }, []);

    // Застосовуємо клас до body
    useEffect(() => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
    }, [theme]);

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <div className="min-h-screen bg-slate-200 py-6 px-4 text-slate-800">
            <button
                onClick={toggleTheme}
                className="fixed top-4 right-4 z-40 px-3 py-1 text-sm bg-white text-slate-800 border border-slate-300 rounded-full shadow"
            >
                {theme === 'light' ? '🌙 Нічна' : '☀️ Денна'}
            </button>

            <div className="max-w-5xl mx-auto bg-slate-50 rounded-2xl shadow-2xl overflow-hidden">
                <Header />
                <main className="p-6 space-y-6">
                    <About />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Education />
                        <Skills />
                    </div>
                    <Experience />
                    <Reviews />
                </main>
                <Footer />
            </div>

            <ContactForm />
        </div>
    );
}
export default App;