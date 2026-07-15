import { useState } from "react";
import { postSchema } from "../../validators/postValidator";

const PostForm = ({ onSubmit, isSubmitting }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [errors, setErrors] = useState({ title: "", body: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();

        //se toma el objeto con los estados del form
        const parsed = postSchema.safeParse({ title, body });
        //si es false significa que no se cumplió la condición de longitud
        if (!parsed.success) {
            const fieldErrors = parsed.error.format();
            setErrors({
                title: fieldErrors.title?._errors.join(" ") || "",
                body: fieldErrors.body?._errors.join(" ") || ""
            });
            return;
        }

        setErrors({ title: "", body: "" });
        const exito = await onSubmit(title.trim(), body.trim());
        if (exito) {
            setTitle("");
            setBody("");
        }
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="w-full max-w-xl mx-auto space-y-6 mb-16 relative"
        >
            <div className="flex items-end justify-between border-b border-zinc-800/80 pb-2 mb-2">
                <h2 className="text-xs font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse" />
                    Nuevo Expediente
                </h2>
                <span className="text-[10px] font-mono text-zinc-600 tracking-wider">SECURE_CHANNEL // C-137</span>
            </div>

            <div className="space-y-1.5">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Título del post..."
                    className={`w-full px-0 py-2.5 bg-transparent text-zinc-100 text-base border-b focus:outline-none focus:ring-0 transition-all placeholder:text-zinc-600 ${
                        errors.title 
                            ? "border-red-500/50 focus:border-red-500" 
                            : "border-zinc-800 focus:border-lime-400 shadow-[inset_0_-1px_0_transparent] focus:shadow-[inset_0_-1px_0_#a3e635]"
                    }`}
                />
                {errors.title && (
                    <p className="mt-1 text-xs text-red-400 font-medium animate-pulse">⚠️ {errors.title}</p>
                )}
            </div>
            
            <div className="space-y-1.5">
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Escribe la bitácora interdimensional..."
                    rows="3"
                    className={`w-full px-4 py-3 bg-zinc-900/30 text-zinc-200 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all resize-none placeholder:text-zinc-600 ${
                        errors.body 
                            ? "border-red-500/40 focus:ring-red-500/20 focus:border-red-500" 
                            : "border-zinc-800/80 focus:ring-lime-500/20 focus:border-lime-500"
                    }`}
                />
                {errors.body && (
                    <p className="mt-1 text-xs text-red-400 font-medium animate-pulse">⚠️ {errors.body}</p>
                )}
            </div>
                
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center text-zinc-950 bg-lime-400 hover:bg-lime-300 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed active:scale-[0.98] font-black rounded-xl text-xs py-3.5 transition-all shadow-[0_4px_20px_rgba(163,230,53,0.15)] uppercase tracking-widest"
            >
                {isSubmitting ? "TRANSMITIENDO..." : "ENVIAR AL SERVIDOR"}
            </button>
        </form>
    );
};

export default PostForm;