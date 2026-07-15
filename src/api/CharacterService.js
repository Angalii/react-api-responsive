//logica para consumir la api de rick and morty
import api from "./axios";

// api : nombre del endpoint de axios.js / service instancia de api
// obtener todos los personajes : results trae todo
export const getCharacters = async (name = "", page = 1) => {
    // Separamos el texto de búsqueda del número de página porque la API de Rick and Morty
    // devuelve tanto los resultados como la información de paginación en un mismo objeto.
    const trimmedName = name?.trim();
    const params = { page };

    if (trimmedName) {
        const normalizedQuery = trimmedName
            .replace(/^\/character\/?/, "")
            .replace(/^\?/, "")
            .trim();

        if (normalizedQuery.includes("=")) {
            const queryParams = new URLSearchParams(normalizedQuery);
            queryParams.forEach((value, key) => {
                params[key] = value;
            });
        } else {
            params.name = normalizedQuery;
        }
    }

    const response = await api.get("/character", { params });
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Se devuelve el objeto completo para poder usar response.data.results y response.data.info.pages.
    return response.data;
};

//obtener personaje por id
export const getCharactersById = async (id) => {
    const response = await api.get(`/character/${id}`);
    return response.data;
}

//funcion para filtrado de muestra
export const getCharactersByQuery = async (queryString = "", page = 1) => {
    // queryString recibirá algo como: "status=Alive" o "gender=female"
    const params = { page };
    const trimmedQuery = queryString?.trim();

    if (trimmedQuery) {
        const queryParams = new URLSearchParams(trimmedQuery.replace(/^\?/, ""));
        queryParams.forEach((value, key) => {
            params[key] = value;
        });
    }

    const response = await api.get("/character", { params });
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return response.data;
};
