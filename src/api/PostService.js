import apiPlaceholder from "./placeholder";

// GET: obtener los post
export const getPosts = async () => {
    try {
        const response = await apiPlaceholder.get("/posts");
        return response.data;
    } catch (error) {
        console.error("Error al obtener posts: ", error);
        throw error;
    }
}

// POST: crear un nuevo post
export const createPost = async (nuevoPost) => {
    try {
        const response = await apiPlaceholder.post("/posts", nuevoPost);
        return response.data;
    } catch(error) {
        console.error("Error al crear post: ", error);
        throw error;
    }
}

// PUT: editar un post
export const updatePost = async (id, data) => {
    try {
        const response = await apiPlaceholder.put(`/posts/${id}`, data);
        return response.data;
    } catch(error) {
        console.error("Error al actualizar cambio: ", error);
        throw error;
    }
}

// DELETE: eliminar un post
export const deletePost = async (id) => {
    try {
        const response = await apiPlaceholder.delete(`/posts/${id}`)
        return response.data;
    } catch(error) {
        console.error("Error al eliminar post: ", error);
        throw error;
    }
}