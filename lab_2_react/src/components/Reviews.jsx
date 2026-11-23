import { useState, useEffect } from 'react';

function Reviews() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/20/comments')
            .then((res) => res.json())
            .then((data) => setComments(data))
            .catch((err) => console.error('Error:', err));
    }, []);

    return (
        <section className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold text-slate-800 pb-2 mb-4 border-b-2 border-emerald-500">Відгуки роботодавців</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {comments.map((c) => (
                    <div key={c.id} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                        <h3 className="font-bold text-emerald-700 mb-1 capitalize">{c.name}</h3>
                        <p className="text-xs text-slate-500 mb-2">{c.email}</p>
                        <p className="text-sm text-slate-600">{c.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Reviews;