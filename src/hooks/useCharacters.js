//consume de CharacterService : getCharacters : la API
import { useEffect, useState } from "react";
import { getCharacters } from "../api/CharacterService";

const useCharacters = (query = "") => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const loadCharacters = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await getCharacters(query);
                setCharacters(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadCharacters();
    }, [query]);

    return {
        characters,
        loading,
        error,
    };
};

export default useCharacters;