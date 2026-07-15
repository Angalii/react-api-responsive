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
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-gray-900 border border-gray-800 p-6 rounded-xl space-y-4 mb-8">
            <h2 className="text-xl font-bold font-mono text-green-400 tracking-wide">NUEVO EXPEDIENTE</h2>

            <div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Título del post..."
                    className={`w-full bg-gray-950 rounded px-3 py-2 text-white font-sans text-sm focus:outline-none focus:border-green-500 ${errors.title ? "border border-red-500" : "border border-gray-800"}`}
                />
                {errors.title && (
                    <p className="mt-2 text-sm text-red-400">{errors.title}</p>
                )}
            </div>

            <div>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Escribe la bitácora..."
                    rows="4"
                    className={`w-full bg-gray-950 rounded px-3 py-2 text-white font-sans text-sm focus:outline-none focus:border-green-500 resize-none ${errors.body ? "border border-red-500" : "border border-gray-800"}`}
                />
                {errors.body && (
                    <p className="mt-2 text-sm text-red-400">{errors.body}</p>
                )}
            </div>

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
