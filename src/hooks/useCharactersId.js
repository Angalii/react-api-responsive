//consume de CharacterService : getCharactersById : la API
import { useEffect, useState } from "react";
import { getCharactersById } from "../api/CharacterService";

const useCharactersId = (id) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const loadCharacter = async () => {
            try {
                const response = await getCharactersById(id);
                setData(response);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (id) loadCharacter();
    }, [id]);

    return {
        data,
        loading,
        error,
    };
};

export default useCharactersId