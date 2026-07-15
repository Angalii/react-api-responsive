import { useEffect, useState } from "react";
import { usePost } from "../hooks/usePost";
import PostForm from "../features/posts/PostForm";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";
import Modal from "../components/Moda";

const Posts = () => {
    const {
        posts,
        loading,
        enviando,
        agregarPost,
        mensaje,
        postSeleccionado,
        modalEditar,
        modalBorrar,
        abrirEditar,
        abrirBorrar,
        ejecutarEdicion,
        ejecutarEliminacion,
        setModalEditar,
        setModalBorrar,
    } = usePost();

    const [formData, setFormData] = useState({ title: "", body: "" });

    useEffect(() => {
        if (modalEditar && postSeleccionado) {
            setFormData({
                title: postSeleccionado.title || "",
                body: postSeleccionado.body || "",
            });
        }
    }, [modalEditar, postSeleccionado]);

    const handleCloseEdit = () => {
        setModalEditar(false);
        setFormData({ title: "", body: "" });
    };

    const handleCloseDelete = () => {
        setModalBorrar(false);
    };

    const handleSubmitEdit = async (e) => {
        e.preventDefault();
        const actualizado = await ejecutarEdicion(formData.title, formData.body);
        if (actualizado) {
            setFormData({ title: "", body: "" });
        }
    };

    const handleDelete = async () => {
        await ejecutarEliminacion();
    };

    return (
        <>
            <div className="pt-28 max-w-7xl mx-auto">
                <div className="pb-12 px-4 flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-6">
                    <div className="relative select-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-16 bg-lime-500/10 blur-[30px] rounded-full pointer-events-none" />
                        <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 uppercase tracking-wider relative z-10">
                            Posts
                        </h1>
                    </div>
                </div>

                {mensaje.text && (
                    <div className={`mx-4 mb-6 rounded-xl border px-4 py-3 text-sm ${mensaje.type === "success" ? "border-lime-500/30 bg-lime-500/10 text-lime-300" : "border-red-500/30 bg-red-500/10 text-red-300"}`}>
                        {mensaje.text}
                    </div>
                )}

                <PostForm onSubmit={agregarPost} isSubmitting={enviando} />

                <div className="px-4 pb-12">
                    {loading ? (
                        <p className="text-zinc-400">Cargando...</p>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <PostCard
                                    key={post.id}
                                    post={post}
                                    onEdit={() => abrirEditar(post)}
                                    onDelete={() => abrirBorrar(post.id)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <Modal isOpen={modalEditar} onClose={handleCloseEdit} title="Editar post">
                <form onSubmit={handleSubmitEdit} className="space-y-4">
                    <div>
                        <label className="mb-2 block text-sm text-zinc-400">Título</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-lime-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-zinc-400">Contenido</label>
                        <textarea
                            value={formData.body}
                            onChange={(e) => setFormData((prev) => ({ ...prev, body: e.target.value }))}
                            className="min-h-28 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-lime-500"
                            required
                        />
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                        <button type="button" onClick={handleCloseEdit} className="rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
                            Cancelar
                        </button>
                        <button type="submit" disabled={enviando} className="rounded-xl bg-lime-500 px-4 py-2 text-sm font-semibold text-zinc-950 disabled:opacity-60">
                            {enviando ? "Guardando..." : "Guardar cambios"}
                        </button>
                    </div>
                </form>
            </Modal>

            <Modal isOpen={modalBorrar} onClose={handleCloseDelete} title="Eliminar post">
                <div className="space-y-4">
                    <p className="text-sm text-zinc-400">
                        ¿Seguro que deseas eliminar este post? Esta acción no se puede deshacer.
                    </p>
                    <div className="flex justify-end gap-3">
                        <button type="button" onClick={handleCloseDelete} className="rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
                            Cancelar
                        </button>
                        <button type="button" onClick={handleDelete} disabled={enviando} className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60">
                            {enviando ? "Eliminando..." : "Eliminar"}
                        </button>
                    </div>
                </div>
            </Modal>

            <Footer />
        </>
    );
};

export default Posts