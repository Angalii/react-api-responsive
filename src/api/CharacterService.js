//logica para consumir la api de rick and morty
import api from "./axios";

// api : nombre del endpoint de axios.js / service instancia de api
// obtener todos los personajes : results trae todo
export const getCharacters = async (name = "") => {
    const trimmedName = name?.trim();
    const config = trimmedName ? { params: { name: trimmedName } } : {};
    const response = await api.get("/character", config);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return response.data.results;
};

//obtener personaje por id
export const getCharactersById = async (id) => {
    const response = await api.get(`/character/${id}`);
    return response.data;
}