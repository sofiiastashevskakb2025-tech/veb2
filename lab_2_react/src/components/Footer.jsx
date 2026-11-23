import { useState, useEffect } from 'react';

function Footer() {
    const [info, setInfo] = useState({});

    useEffect(() => {
        localStorage.setItem('userAgent', navigator.userAgent);
        localStorage.setItem('platform', navigator.platform);
        localStorage.setItem('language', navigator.language);
        localStorage.setItem('vendor', navigator.vendor);

        setInfo({
            userAgent: localStorage.getItem('userAgent'),
            platform: localStorage.getItem('platform'),
            language: localStorage.getItem('language'),
            vendor: localStorage.getItem('vendor'),
        });
    }, []);

    return (
        <footer className="bg-slate-800 text-slate-300 text-center text-sm p-4 space-y-1">
            <p>© 2026 Сташевська Софія Богданівна. Всі права захищено.</p>
            {Object.entries(info).map(([key, value]) => (
                <p key={key} className="text-xs text-slate-400 break-words">
                    {key}: {value}
                </p>
            ))}
        </footer>
    );
}
export default Footer;