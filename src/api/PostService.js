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