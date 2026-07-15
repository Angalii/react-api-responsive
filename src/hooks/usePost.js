import { useEffect, useState } from "react";
import { getPosts, createPost, updatePost, deletePost } from "../api/PostService";

// Gestión de estados y comunicación con el servicio de posts.
export const usePost = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [enviando, setEnviando] = useState(false);
    const [mensaje, setMensaje] = useState({ type: "", text: "" });
    const [ultimoPostCreado, setUltimoPostCreado] = useState(null);
    //para modales
    const [postSeleccionado, setPostSeleccionado] = useState(null);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalBorrar, setModalBorrar] = useState(false);

    // Obtener los posts automáticamente al cargar el hook.
    useEffect(() => {
        const cargarPosts = async () => {
            try {
                setLoading(true);
                const data = await getPosts();
                setPosts(data.slice(0, 6)); // para probar con 6
            } catch (error) {
                console.error("Error al cargar posts: ", error);
                setMensaje({ type: "error", text: "No se pudieron cargar los posts." });
            } finally {
                setLoading(false);
            }
        };

        cargarPosts();
    }, []);

    // Función para agregar un nuevo post.
    const agregarPost = async (title, body) => {
        if (!title.trim() || !body.trim()) {
            setMensaje({ type: "error", text: "Completa título y contenido antes de enviar." });
            return false;
        }

        try {
            setEnviando(true);
            setMensaje({ type: "", text: "" });

            const nuevoPost = { title, body, userId: 1 };
            const data = await createPost(nuevoPost);

            // Actualizamos la lista local agregando el nuevo post arriba.
            setPosts((prevPosts) => [data, ...prevPosts]);
            setUltimoPostCreado(data);
            setMensaje({ type: "success", text: "¡Post creado correctamente! Se muestra abajo." });
            return true;
        } catch (error) {
            console.error("Error al crear post: ", error);
            setMensaje({ type: "error", text: "No se pudo crear el post. Intenta nuevamente." });
            return false;
        } finally {
            setEnviando(false);
        }
    };

    const abrirEditar = (post) => {
        setPostSeleccionado(post);
        setModalEditar(true);
    };

    const abrirBorrar = (id) => {
        const post = posts.find((p) => p.id === id);
        setPostSeleccionado(post);
        setModalBorrar(true);
    }

    const ejecutarEdicion = async (title, body) => {
        if (!title.trim() || !body.trim()) {
            setMensaje({ type: "error", text: "El título y contenido no pueden estar vacíos." });
            return false;
        }

        try {
            setEnviando(true);
            const nuevosDatos = { title, body };
            
            // Consumimos tu service updatePost(id, data)
            const dataModificada = await updatePost(postSeleccionado.id, nuevosDatos);

            // Sincronizamos el estado local de React con la respuesta de JSONPlaceholder
            setPosts((prevPosts) =>
                prevPosts.map((p) => (p.id === postSeleccionado.id ? { ...p, ...dataModificada } : p))
            );
            
            setModalEditar(false);
            setMensaje({ type: "success", text: "Post actualizado correctamente." });
            return true;
        } catch (error) {
            console.error("Error al editar post en el hook: ", error);
            setMensaje({ type: "error", text: "No se pudo actualizar el post." });
            return false;
        } finally {
            setEnviando(false);
        }
    };

    const ejecutarEliminacion = async () => {
        try {
            setEnviando(true);
            
            // Consumimos tu service deletePost(id)
            await deletePost(postSeleccionado.id);

            // Removemos el elemento del estado local para que desaparezca de la vista
            setPosts((prevPosts) => prevPosts.filter((p) => p.id !== postSeleccionado.id));
            
            setModalBorrar(false);
            setMensaje({ type: "success", text: "Post eliminado correctamente." });
            return true;
        } catch (error) {
            console.error("Error al eliminar post en el hook: ", error);
            setMensaje({ type: "error", text: "No se pudo eliminar el post." });
            return false;
        } finally {
            setEnviando(false);
        }
    };

    return {
        posts,
        loading,
        enviando,
        agregarPost,
        mensaje,
        ultimoPostCreado,
        postSeleccionado,
        modalEditar,
        modalBorrar,
        setModalEditar,
        setModalBorrar,
        abrirEditar,
        abrirBorrar,
        ejecutarEdicion,
        ejecutarEliminacion
    };
};

export const usePosts = usePost;