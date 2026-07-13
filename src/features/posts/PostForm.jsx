import { useState } from "react";

const PostForm = ({ onSubmit, isSubmitting }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || !body.trim()) return;

        const exito = await onSubmit(title.trim(), body.trim());
        if (exito) {
        setTitle("");
        setBody("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-gray-900 border border-gray-800 p-6 rounded-xl space-y-4 mb-8">
        <h2 className="text-xl font-bold font-mono text-green-400 tracking-wide">NUEVO EXPEDIENTE</h2>
        <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Título del post..." 
            required 
            className="w-full bg-gray-950 border border-gray-800 rounded px-3 py-2 text-white font-sans text-sm focus:outline-none focus:border-green-500" 
        />
        <textarea 
            value={body} 
            onChange={(e) => setBody(e.target.value)} 
            placeholder="Escribe la bitácora..." 
            required 
            rows="4" 
            className="w-full bg-gray-950 border border-gray-800 rounded px-3 py-2 text-white font-sans text-sm focus:outline-none focus:border-green-500 resize-none" 
        />
        <button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-green-500 hover:bg-green-400 text-black font-mono font-bold py-2 rounded transition-colors disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed"
        >
            {isSubmitting ? "TRANSMITIENDO..." : "ENVIAR AL SERVIDOR"}
        </button>
        </form>
    );
};

export default PostForm;
