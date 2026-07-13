//consume de CharacterService : getCharacters : la API
import { useEffect, useState } from "react";
import { getCharacters } from "../api/CharacterService";

const useCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const loadCharacters = async () => {
            try {
                const data = await getCharacters();
                setCharacters(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadCharacters();
    }, []);

    return {
        characters,
        loading,
        error,
    };
};

export default useCharacters;