import { useEffect, useState } from "react";
import { getPosts, createPost } from "../api/PostService";

// Gestión de estados y comunicación con el servicio de posts.
export const usePost = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [enviando, setEnviando] = useState(false);
    const [mensaje, setMensaje] = useState({ type: "", text: "" });
    const [ultimoPostCreado, setUltimoPostCreado] = useState(null);

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

    return {
        posts,
        loading,
        enviando,
        agregarPost,
        mensaje,
        ultimoPostCreado,
    };
};

export const usePosts = usePost;