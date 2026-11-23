import { useState, useEffect } from 'react';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('formClosed')) return;
        const timer = setTimeout(() => setIsOpen(true), 60000);
        return () => clearTimeout(timer);
    }, []);

    const close = () => {
        sessionStorage.setItem('formClosed', 'true');
        setIsOpen(false);
    };

    const inputClass = "w-full p-2 border border-slate-300 rounded bg-white text-slate-800";

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                    <div className="w-full max-w-md bg-white text-slate-800 rounded-xl shadow-2xl p-6 space-y-3">
                        <h2 className="text-xl font-bold border-b-2 border-emerald-500 pb-2">Зворотний зв'язок</h2>
                        <form
                            action="https://formspree.io/f/xwllrjlr"
                            method="POST"
                            className="space-y-3"
                        >
                            <input name="name" placeholder="Ім'я" required className={inputClass} />
                            <input name="email" type="email" placeholder="Email" required className={inputClass} />
                            <input name="phone" type="tel" placeholder="Номер телефону" className={inputClass} />
                            <textarea name="message" placeholder="Ваше повідомлення" rows="4" className={inputClass} />
                            <button type="submit" className="px-4 py-2 text-white bg-emerald-600 hover:bg-emerald-700 rounded">
                                Надіслати
                            </button>
                        </form>
                        <button onClick={close} className="px-4 py-2 border border-slate-300 rounded hover:bg-slate-100">
                            Закрити
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
export default ContactForm;