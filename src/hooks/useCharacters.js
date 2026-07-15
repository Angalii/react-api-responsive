//consume de CharacterService : getCharacters : la API
import { useEffect, useState } from "react";
import { getCharacters } from "../api/CharacterService";

const useCharacters = (query = "", page = 1) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [info, setInfo] = useState(null);
    
    useEffect(() => {
        const loadCharacters = async () => {
            setLoading(true);
            setError(null);

            try {
                // Aquí se pide la página actual y también se obtiene la info de paginación.
                const data = await getCharacters(query, page);
                setCharacters(data.results || []);
                setInfo(data.info || null);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadCharacters();
    }, [query, page]);

    return {
        characters,
        loading,
        error,
        info,
    };
};

export default useCharacters;