import { usePost } from "../hooks/usePost";
import PostForm from "../features/posts/PostForm";

const Posts = () => {
    const { posts, loading, enviando, agregarPost, mensaje, ultimoPostCreado } = usePost();

    return (
        <div className="p-8 bg-gray-950 text-white min-h-screen">
            {/* El formulario recibe las acciones */}
            <PostForm onSubmit={agregarPost} isSubmitting={enviando} />

            {mensaje.text && (
                <div className={`max-w-2xl mx-auto mb-6 rounded-lg border px-4 py-3 text-sm ${mensaje.type === "success"
                    ? "border-green-500/40 bg-green-500/10 text-green-300"
                    : "border-red-500/40 bg-red-500/10 text-red-300"
                }`}>
                    {mensaje.text}
                </div>
            )}

            {ultimoPostCreado && (
                <div className="max-w-2xl mx-auto mb-8 rounded-xl border border-green-500/30 bg-gray-900 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-green-400">Post creado</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{ultimoPostCreado.title}</h3>
                    <p className="mt-2 text-sm text-gray-400">{ultimoPostCreado.body}</p>
                </div>
            )}

            <h2 className="text-xl font-bold font-mono text-green-400 mb-6">POSTS RECIENTES</h2>

            {loading ? (
                <p className="text-center font-mono text-gray-500">Cargando posts...</p>
            ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <div key={post.id} className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
                            <h3 className="text-green-400 font-bold font-sans line-clamp-1">{post.title}</h3>
                            <p className="text-gray-400 text-sm mt-2 line-clamp-3">{post.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Posts;
