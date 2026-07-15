import { usePost } from "../hooks/usePost";
import PostForm from "../features/posts/PostForm";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";

const Posts = () => {
    const { posts, loading, enviando, agregarPost, mensaje, ultimoPostCreado } = usePost();

    return (
        <>
        <div className="pt-28 max-w-7xl mx-auto">
            <div className="pb-12 px-4 flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-6">
                <div className="relative select-none">
                    {/* Resplandor verde de fondo*/}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-16 bg-lime-500/10 blur-[30px] rounded-full pointer-events-none" />
                    <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 uppercase tracking-wider relative z-10">
                    Posts
                    </h1>
                </div>
            </div>
            <PostForm onSubmit={agregarPost} isSubmitting={enviando} />
            <div className="px-4 pb-12">
                {loading ? (
                <p>Cargando...</p>
                ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                    <PostCard key={post.id} post={post} /> 
                    ))}
                </div>
                )}
            </div>
            
        </div>
        <Footer />
        </>
    );
};

export default Posts